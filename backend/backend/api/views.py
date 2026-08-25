"""
ProtoPatch API Views

Two primary pipeline views:
  - Sketch2StackView   : POST /api/sketch2stack/
  - ScreenToPatchView  : POST /api/screentopatch/
  - HealthCheckView    : GET  /api/health/
"""
import gc
import logging
import tempfile
import time
from pathlib import Path

from django.conf import settings
from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView, exception_handler

from .serializers import Sketch2StackInputSerializer, ScreenToPatchInputSerializer
from .services.vision_service import VisionService
from .services.audio_service import AudioService
from .services.ast_engine import ASTEngine
from .services.git_service import GitService
from .services.sandbox_service import SandboxService

logger = logging.getLogger(__name__)


def custom_exception_handler(exc, context):
    """Enrich DRF error responses with consistent structure."""
    response = exception_handler(exc, context)
    if response is not None:
        response.data = {
            "success": False,
            "error": response.data,
        }
    else:
        logger.exception("Unhandled exception in view: %s", context.get("view"))
        response = Response(
            {"success": False, "error": "An internal server error occurred."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )
    return response


class HealthCheckView(APIView):
    """Simple liveness probe for the backend."""

    def get(self, request):
        return Response({
            "success": True,
            "status": "ok",
            "version": "1.0.0",
            "modes": ["sketch2stack", "screentopatch"],
            "gemini_configured": bool(settings.GEMINI_API_KEY),
            "github_configured": bool(settings.GITHUB_TOKEN),
        })


class Sketch2StackView(APIView):
    """
    POST /api/sketch2stack/

    Pipeline:
        1. Validate multipart input (image + optional notes)
        2. Send image to Gemini 1.5 Flash for structured VLM analysis
        3. Sanitize and wrap HTML output in safe iframe payload
        4. Return: html_code, django_models, drf_serializers, detected_components, sandbox_html
    """
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        serializer = Sketch2StackInputSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"success": False, "error": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        validated = serializer.validated_data
        image_file = validated["image"]
        notes = validated.get("notes", "")
        style = validated.get("style", "auto")

        try:
            image_bytes = image_file.read()

            # --- Step 1: VLM Analysis ---
            vision = VisionService()
            sketch_result = vision.parse_sketch(
                image_bytes=image_bytes,
                mime_type=image_file.content_type or "image/jpeg",
                notes=notes,
                style=style,
            )

            # --- Step 2: Sandbox HTML Payload ---
            sandbox = SandboxService()
            sandbox_html = sandbox.build_sandbox_payload(sketch_result["html_code"])

            return Response({
                "success": True,
                "html_code": sketch_result["html_code"],
                "django_models": sketch_result["django_models"],
                "drf_serializers": sketch_result["drf_serializers"],
                "detected_components": sketch_result["detected_components"],
                "sandbox_html": sandbox_html,
            })

        except Exception as exc:
            logger.exception("Sketch2Stack pipeline error")
            return Response(
                {"success": False, "error": str(exc)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )


class ScreenToPatchView(APIView):
    """
    POST /api/screentopatch/

    Pipeline:
        1. Validate multipart input (video/screenshot + optional audio + repo_url)
        2. Transcribe audio via Whisper (if provided)
        3. Extract bug intent from video frames or screenshot via Gemini
        4. Search target GitHub repo AST for offending component/file
        5. Synthesize unified diff, create branch, open PR via PyGithub
        6. Return: bug_description, diff, transcript, pr_url, pr_number
    """
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        serializer = ScreenToPatchInputSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"success": False, "error": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        validated = serializer.validated_data
        video_file = validated.get("video")
        audio_file = validated.get("audio")
        screenshot_file = validated.get("screenshot")
        repo_url = validated["repo_url"]
        branch = validated.get("branch", "main")
        notes = validated.get("notes", "")

        try:
            transcript = ""
            audio_path = None

            with tempfile.TemporaryDirectory(ignore_cleanup_errors=True) as tmp_dir:
                tmp_path = Path(tmp_dir)

                # --- Step 1: Save uploaded files ---
                video_path = None
                screenshot_bytes = None

                if video_file:
                    video_path = tmp_path / "recording.webm"
                    video_path.write_bytes(video_file.read())

                if screenshot_file:
                    screenshot_bytes = screenshot_file.read()

                if audio_file:
                    ext = Path(audio_file.name).suffix or ".webm"
                    audio_path = tmp_path / f"audio{ext}"
                    audio_path.write_bytes(audio_file.read())

                # --- Step 2: Transcribe audio ---
                if audio_path:
                    audio_svc = AudioService()
                    transcript = audio_svc.transcribe(audio_path)
                    logger.info("Whisper transcript: %s", transcript[:200])

                # Combine voice transcript with optional text notes
                full_description = "\n".join(filter(None, [transcript, notes]))

                # --- Step 3: VLM Bug Analysis ---
                vision = VisionService()
                if screenshot_bytes:
                    visual_input = screenshot_bytes
                    mime_type = screenshot_file.content_type or "image/png"
                    bug_result = vision.analyze_bug_from_image(
                        image_bytes=visual_input,
                        mime_type=mime_type,
                        transcript=full_description,
                    )
                elif video_path:
                    bug_result = vision.analyze_bug_from_video(
                        video_path=video_path,
                        transcript=full_description,
                    )
                else:
                    bug_result = {
                        "bug_description": full_description or "Bug detected via description only.",
                        "target_element": "",
                        "suggested_fix": "",
                        "css_or_logic_diff": "",
                    }

                # --- Step 4: AST Code Search ---
                ast_engine = ASTEngine()
                file_matches = ast_engine.search_repo(
                    repo_url=repo_url,
                    bug_analysis=bug_result,
                    tmp_dir=tmp_path,
                )

                # --- Step 5: Create PR ---
                pr_url = ""
                pr_number = None
                branch_name = ""

                if settings.GITHUB_TOKEN and file_matches:
                    try:
                        git_svc = GitService(github_token=settings.GITHUB_TOKEN)
                        pr_result = git_svc.create_fix_pr(
                            repo_url=repo_url,
                            base_branch=branch,
                            bug_analysis=bug_result,
                            file_matches=file_matches,
                            transcript=transcript,
                            tmp_dir=tmp_path,
                        )
                        pr_url = pr_result.get("pr_url", "")
                        pr_number = pr_result.get("pr_number")
                        branch_name = pr_result.get("branch_name", "")
                    except Exception as exc:
                        logger.warning("Could not auto-create GitHub PR: %s", exc)
                        branch_name = f"fix/protopatch-{int(time.time())}"
                else:
                    branch_name = f"fix/protopatch-{int(time.time())}"

                gc.collect()

            return Response({
                "success": True,
                "bug_description": bug_result.get("bug_description", ""),
                "target_element": bug_result.get("target_element", ""),
                "suggested_fix": bug_result.get("suggested_fix", ""),
                "css_or_logic_diff": bug_result.get("css_or_logic_diff", ""),
                "transcript": transcript,
                "pr_url": pr_url,
                "pr_number": pr_number,
                "branch_name": branch_name,
                "file_matches": file_matches,
            })

        except Exception as exc:
            logger.exception("ScreenToPatch pipeline error")
            return Response(
                {"success": False, "error": str(exc)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
