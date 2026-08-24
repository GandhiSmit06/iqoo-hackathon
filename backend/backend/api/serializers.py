"""
ProtoPatch API Serializers

Input validation for both pipeline modes.
"""
from rest_framework import serializers


class Sketch2StackInputSerializer(serializers.Serializer):
    """
    Input for the Sketch2Stack pipeline.

    Fields:
        image     — Hand-drawn wireframe photo (JPEG/PNG/WEBP)
        notes     — Optional text annotations or voice-to-text notes
        style     — Optional UI style hint (e.g. "dark", "material", "ios")
    """
    image = serializers.ImageField(
        required=True,
        help_text="Photo of hand-drawn wireframe or database schema.",
    )
    notes = serializers.CharField(
        required=False,
        allow_blank=True,
        default="",
        max_length=2000,
        help_text="Additional context or annotations to guide generation.",
    )
    style = serializers.ChoiceField(
        choices=["dark", "light", "material", "ios", "minimal", "auto"],
        required=False,
        default="auto",
        help_text="Target UI style theme.",
    )


class ScreenToPatchInputSerializer(serializers.Serializer):
    """
    Input for the ScreenToPatch pipeline.

    Fields:
        video      — Screen recording (WebM/MP4, ≤5 seconds ideally)
        audio      — Voice memo describing the bug (WebM/WAV/MP3, optional)
        repo_url   — Full GitHub HTTPS URL of the target repository
        branch     — Target branch name (default: main)
        notes      — Optional additional bug description text
    """
    video = serializers.FileField(
        required=False,
        allow_empty_file=False,
        help_text="Screen recording of the bug (WebM/MP4).",
    )
    audio = serializers.FileField(
        required=False,
        allow_empty_file=False,
        help_text="Voice memo describing the bug (WebM/WAV/MP3).",
    )
    screenshot = serializers.ImageField(
        required=False,
        help_text="Single screenshot of the bug (alternative to video).",
    )
    repo_url = serializers.URLField(
        required=True,
        help_text="GitHub repository URL (e.g. https://github.com/org/repo).",
    )
    branch = serializers.CharField(
        required=False,
        default="main",
        max_length=100,
        help_text="Target branch to branch off from.",
    )
    notes = serializers.CharField(
        required=False,
        allow_blank=True,
        default="",
        max_length=2000,
        help_text="Additional description of the bug.",
    )

    def validate(self, attrs):
        """At least one visual input (video or screenshot) is required."""
        if not attrs.get("video") and not attrs.get("screenshot"):
            raise serializers.ValidationError(
                "Either 'video' or 'screenshot' must be provided."
            )
        return attrs


# -----------------------------------------------------------------------
# Output Serializers (for API response documentation)
# -----------------------------------------------------------------------

class Sketch2StackOutputSerializer(serializers.Serializer):
    html_code = serializers.CharField()
    django_models = serializers.CharField()
    drf_serializers = serializers.CharField()
    detected_components = serializers.ListField(child=serializers.CharField())
    sandbox_html = serializers.CharField(help_text="Sanitized self-contained iframe srcdoc HTML.")


class ScreenToPatchOutputSerializer(serializers.Serializer):
    bug_description = serializers.CharField()
    target_element = serializers.CharField()
    suggested_fix = serializers.CharField()
    css_or_logic_diff = serializers.CharField()
    transcript = serializers.CharField(help_text="Whisper transcription of voice memo.")
    pr_url = serializers.URLField(allow_blank=True)
    pr_number = serializers.IntegerField(allow_null=True)
    branch_name = serializers.CharField()
    file_matches = serializers.ListField(child=serializers.DictField())
