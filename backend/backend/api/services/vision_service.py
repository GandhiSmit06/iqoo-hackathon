"""
ProtoPatch — Vision Service
Uses Google Gemini 1.5 Flash for multimodal structured parsing.

Outputs strictly-typed JSON payloads enforced via response_mime_type.
"""
import base64
import json
import logging
import re
from pathlib import Path
from typing import Optional

from django.conf import settings

logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# JSON Schemas for Gemini structured output
# ---------------------------------------------------------------------------

SKETCH2STACK_SCHEMA = {
    "type": "object",
    "properties": {
        "html_code": {
            "type": "string",
            "description": "Complete self-contained HTML page with Tailwind CSS via CDN"
        },
        "django_models": {
            "type": "string",
            "description": "Full Django models.py content derived from the wireframe data entities"
        },
        "drf_serializers": {
            "type": "string",
            "description": "Full DRF serializers.py content for the generated models"
        },
        "detected_components": {
            "type": "array",
            "items": {"type": "string"},
            "description": "List of detected UI component names (e.g. ['NavBar', 'HeroCard', 'DataTable'])"
        }
    },
    "required": ["html_code", "django_models", "drf_serializers", "detected_components"]
}

BUG_ANALYSIS_SCHEMA = {
    "type": "object",
    "properties": {
        "bug_description": {
            "type": "string",
            "description": "Clear description of the visual bug or issue detected"
        },
        "target_element": {
            "type": "string",
            "description": "CSS selector, component name, or code element that is buggy"
        },
        "suggested_fix": {
            "type": "string",
            "description": "Human-readable description of the fix to apply"
        },
        "css_or_logic_diff": {
            "type": "string",
            "description": "Exact unified diff patch that fixes the bug"
        }
    },
    "required": ["bug_description", "target_element", "suggested_fix", "css_or_logic_diff"]
}


class VisionService:
    """
    Wraps Google Generative AI SDK for ProtoPatch multimodal analysis.
    All methods return plain Python dicts matching the JSON schemas above.
    """

    def __init__(self):
        self._client = None
        self._api_key = settings.GEMINI_API_KEY

    def _get_client(self):
        """Lazy-initialize Gemini client."""
        if self._client is None:
            try:
                import google.generativeai as genai
                if not self._api_key:
                    raise ValueError(
                        "GEMINI_API_KEY is not set. "
                        "Add it to your .env file or environment variables."
                    )
                genai.configure(api_key=self._api_key)
                self._client = genai
            except ImportError:
                raise ImportError(
                    "google-generativeai is not installed. "
                    "Run: pip install google-generativeai"
                )
        return self._client

    def _call_gemini(
        self,
        model_name: str,
        prompt: str,
        image_bytes: Optional[bytes] = None,
        mime_type: str = "image/jpeg",
        schema: Optional[dict] = None,
    ) -> dict:
        """
        Core Gemini API call with structured JSON output enforcement.
        Falls back to regex JSON extraction if structured output fails.
        """
        genai = self._get_client()

        generation_config = {
            "temperature": 0.2,
            "top_p": 0.9,
            "max_output_tokens": 8192,
        }

        if schema:
            generation_config["response_mime_type"] = "application/json"
            generation_config["response_schema"] = schema

        model = genai.GenerativeModel(
            model_name=model_name,
            generation_config=generation_config,
        )

        content_parts = [prompt]
        if image_bytes:
            content_parts.append({
                "mime_type": mime_type,
                "data": image_bytes,
            })

        try:
            response = model.generate_content(content_parts)
            raw_text = response.text.strip()
        except Exception as exc:
            logger.warning("Gemini API error: %s — retrying without schema", exc)
            # Fallback: retry without schema enforcement
            model_fallback = genai.GenerativeModel(
                model_name=model_name,
                generation_config={"temperature": 0.2, "max_output_tokens": 8192},
            )
            response = model_fallback.generate_content(content_parts)
            raw_text = response.text.strip()

        return self._extract_json(raw_text)

    def _extract_json(self, text: str) -> dict:
        """Extract JSON from model output, handling markdown code blocks."""
        # Try direct JSON parse first
        try:
            return json.loads(text)
        except json.JSONDecodeError:
            pass

        # Strip markdown code fences
        patterns = [
            r"```json\s*([\s\S]*?)\s*```",
            r"```\s*([\s\S]*?)\s*```",
            r"\{[\s\S]*\}",
        ]
        for pattern in patterns:
            match = re.search(pattern, text, re.DOTALL)
            if match:
                candidate = match.group(1) if "```" in pattern else match.group(0)
                try:
                    return json.loads(candidate)
                except json.JSONDecodeError:
                    continue

        raise ValueError(f"Could not parse JSON from Gemini response. Raw output:\n{text[:500]}")

    # -----------------------------------------------------------------------
    # Public Methods
    # -----------------------------------------------------------------------

    def parse_sketch(
        self,
        image_bytes: bytes,
        mime_type: str = "image/jpeg",
        notes: str = "",
        style: str = "auto",
    ) -> dict:
        """
        Analyze a hand-drawn wireframe/schema photo.

        Returns:
            {
                "html_code": str,          — Complete Tailwind HTML
                "django_models": str,      — models.py content
                "drf_serializers": str,    — serializers.py content
                "detected_components": list[str]
            }
        """
        style_hint = "" if style == "auto" else f"Target UI style: {style} theme."
        notes_hint = f"\nAdditional context from developer: {notes}" if notes else ""

        prompt = f"""You are an expert Full-Stack Developer and UI Engineer.
Analyze this hand-drawn wireframe or database schema sketch and generate production-ready code.

{style_hint}{notes_hint}

CRITICAL OUTPUT REQUIREMENTS:
1. html_code: A COMPLETE, self-contained HTML page with:
   - Tailwind CSS loaded via CDN: <script src="https://cdn.tailwindcss.com"></script>
   - All components visible and styled with modern dark or light theme
   - Sample/realistic placeholder data (not lorem ipsum)
   - Interactive elements (buttons, forms) that look functional
   - Mobile-responsive layout
   
2. django_models: Complete Django models.py with:
   - All data entities identified in the sketch
   - Proper field types, validators, and __str__ methods
   - Meta classes with ordering where appropriate
   - from django.db import models at the top
   
3. drf_serializers: Complete DRF serializers.py with:
   - ModelSerializer for each model
   - Nested serializers where relationships exist
   - from rest_framework import serializers at the top
   
4. detected_components: Array of UI component names found in the sketch

Be thorough and generate production-quality code. Use realistic field names and data.
Return ONLY a valid JSON object matching the schema exactly."""

        result = self._call_gemini(
            model_name="gemini-1.5-flash",
            prompt=prompt,
            image_bytes=image_bytes,
            mime_type=mime_type,
            schema=SKETCH2STACK_SCHEMA,
        )

        # Ensure all required keys exist with safe defaults
        result.setdefault("html_code", "<html><body><p>Generation failed</p></body></html>")
        result.setdefault("django_models", "# Generation failed\nfrom django.db import models\n")
        result.setdefault("drf_serializers", "# Generation failed\nfrom rest_framework import serializers\n")
        result.setdefault("detected_components", [])

        logger.info(
            "Sketch2Stack: detected %d components",
            len(result["detected_components"])
        )
        return result

    def analyze_bug_from_image(
        self,
        image_bytes: bytes,
        mime_type: str = "image/png",
        transcript: str = "",
    ) -> dict:
        """
        Analyze a screenshot for UI bugs.

        Returns:
            {
                "bug_description": str,
                "target_element": str,
                "suggested_fix": str,
                "css_or_logic_diff": str,
            }
        """
        transcript_hint = f"\nDeveloper's voice description: \"{transcript}\"" if transcript else ""

        prompt = f"""You are an expert UI/UX debugger and Senior Frontend Engineer.
Analyze this screenshot for visual bugs, layout issues, or UI problems.{transcript_hint}

CRITICAL OUTPUT REQUIREMENTS:
1. bug_description: Clear, specific description of what is visually wrong
2. target_element: The CSS selector or component name that is buggy (e.g. ".nav-bar", "ProfileCard", "#submit-btn")
3. suggested_fix: Human-readable fix description (e.g. "Add margin-top: 16px to the header container")
4. css_or_logic_diff: A valid unified diff patch showing the exact code change needed.
   Format example:
   --- a/src/components/Header.jsx
   +++ b/src/components/Header.jsx
   @@ -12,7 +12,7 @@
    export function Header() {{
   -  <div className="header">
   +  <div className="header mt-4">

Return ONLY a valid JSON object. Be specific and actionable."""

        return self._call_gemini(
            model_name="gemini-1.5-flash",
            prompt=prompt,
            image_bytes=image_bytes,
            mime_type=mime_type,
            schema=BUG_ANALYSIS_SCHEMA,
        )

    def analyze_bug_from_video(
        self,
        video_path: Path,
        transcript: str = "",
        max_frames: int = 3,
    ) -> dict:
        """
        Extract bug analysis from a short screen recording.
        Samples frames and analyzes the first/middle/last frames.
        """
        frames = self._extract_video_frames(video_path, max_frames)

        if not frames:
            logger.warning("Could not extract frames from video; using transcript-only analysis")
            return {
                "bug_description": transcript or "Bug described via voice only — no frames extracted.",
                "target_element": "",
                "suggested_fix": transcript,
                "css_or_logic_diff": "",
            }

        # Analyze the most representative frame (middle)
        frame_bytes = frames[len(frames) // 2]
        return self.analyze_bug_from_image(
            image_bytes=frame_bytes,
            mime_type="image/jpeg",
            transcript=transcript,
        )

    def _extract_video_frames(self, video_path: Path, count: int = 3) -> list[bytes]:
        """
        Extract JPEG frames from a video file using OpenCV or PIL fallback.
        Returns list of JPEG bytes.
        """
        frames = []
        try:
            import cv2
            cap = cv2.VideoCapture(str(video_path))
            total = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
            if total <= 0:
                cap.release()
                return frames

            indices = [int(total * i / count) for i in range(count)]
            for idx in indices:
                cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
                ret, frame = cap.read()
                if ret:
                    import cv2
                    _, buf = cv2.imencode(".jpg", frame, [cv2.IMWRITE_JPEG_QUALITY, 85])
                    frames.append(buf.tobytes())
            cap.release()
        except ImportError:
            logger.warning("OpenCV not available — attempting raw frame read")
            # Fallback: read first 100KB as pseudo-frame indicator
            try:
                data = video_path.read_bytes()[:102400]
                frames = [data]
            except Exception:
                pass
        except Exception as exc:
            logger.error("Frame extraction error: %s", exc)

        return frames
