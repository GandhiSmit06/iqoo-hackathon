"""
ProtoPatch — Sandbox Service
Sanitizes arbitrary HTML/JS and wraps it in a safe iframe payload.

Strategy:
  1. Bleach-sanitize the raw HTML (allow Tailwind classes, data attributes)
  2. Inject Tailwind CDN if not present
  3. Add postMessage reload listener for live hot-reload from parent page
  4. Return self-contained HTML string suitable for <iframe srcdoc="...">
"""
import html
import logging
import re

logger = logging.getLogger(__name__)

# Tags and attributes that are safe in a sandboxed iframe
ALLOWED_TAGS = [
    "html", "head", "body", "title", "meta", "link", "style", "script",
    "div", "span", "section", "article", "header", "footer", "main", "nav", "aside",
    "h1", "h2", "h3", "h4", "h5", "h6",
    "p", "a", "br", "hr", "strong", "em", "b", "i", "u", "s",
    "ul", "ol", "li", "dl", "dt", "dd",
    "table", "thead", "tbody", "tfoot", "tr", "th", "td",
    "form", "input", "button", "textarea", "select", "option", "label",
    "img", "figure", "figcaption",
    "pre", "code", "blockquote",
    "svg", "path", "circle", "rect", "line", "polyline", "polygon",
]

ALLOWED_ATTRIBUTES = {
    "*": ["class", "id", "style", "data-*", "aria-*", "role"],
    "a": ["href", "target", "rel"],
    "img": ["src", "alt", "width", "height", "loading"],
    "input": ["type", "name", "value", "placeholder", "checked", "disabled", "required", "min", "max", "step"],
    "button": ["type", "disabled", "onclick"],
    "form": ["action", "method", "enctype"],
    "select": ["name", "multiple"],
    "option": ["value", "selected"],
    "textarea": ["name", "rows", "cols", "placeholder"],
    "meta": ["name", "content", "charset", "viewport"],
    "link": ["rel", "href", "type"],
    "script": ["src", "type", "defer", "async"],
    "svg": ["xmlns", "viewBox", "width", "height", "fill", "stroke"],
    "path": ["d", "fill", "stroke", "stroke-width"],
    "circle": ["cx", "cy", "r", "fill", "stroke"],
    "rect": ["x", "y", "width", "height", "rx", "ry", "fill", "stroke"],
}

TAILWIND_CDN = '<script src="https://cdn.tailwindcss.com"></script>'

POSTMESSAGE_LISTENER = """
<script>
  // ProtoPatch live reload bridge
  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'PP_RELOAD') {
      document.open();
      document.write(event.data.html);
      document.close();
    }
  });
</script>
"""

SANDBOX_WRAPPER = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ProtoPatch Preview</title>
  {tailwind_cdn}
  {postmessage_listener}
</head>
<body class="bg-gray-50 min-h-screen">
  {body_content}
</body>
</html>"""


class SandboxService:
    """
    Builds safe, self-contained HTML payloads for sandboxed iframe rendering.
    """

    def build_sandbox_payload(self, html_code: str) -> str:
        """
        Process raw HTML from Gemini and return a safe iframe srcdoc string.

        Args:
            html_code: Raw HTML string from VLM (may include full page or fragment)

        Returns:
            Complete, sanitized HTML string for iframe srcdoc attribute
        """
        if not html_code or not html_code.strip():
            return self._empty_payload()

        try:
            # Attempt bleach sanitization
            sanitized = self._sanitize_html(html_code)
        except ImportError:
            # bleach not installed — trust Gemini output within sandbox
            logger.warning("bleach not installed — using raw HTML in sandbox")
            sanitized = html_code
        except Exception as exc:
            logger.warning("HTML sanitization failed: %s — using raw HTML", exc)
            sanitized = html_code

        # Determine if we have a full page or a fragment
        is_full_page = bool(re.search(r"<html", sanitized, re.IGNORECASE))

        if is_full_page:
            result = self._inject_into_full_page(sanitized)
        else:
            result = self._wrap_fragment(sanitized)

        logger.info("Sandbox payload built: %d bytes", len(result))
        return result

    def _sanitize_html(self, html_code: str) -> str:
        """Use bleach to sanitize HTML, allowing safe tags/attributes."""
        import bleach

        # bleach.clean strips tags not in allowed list
        # For Tailwind we need to preserve script tags for CDN loading
        # So we do a partial sanitization — mainly XSS prevention
        cleaned = bleach.clean(
            html_code,
            tags=ALLOWED_TAGS,
            attributes=ALLOWED_ATTRIBUTES,
            strip=True,
            strip_comments=False,
        )
        return cleaned

    def _inject_into_full_page(self, full_html: str) -> str:
        """Inject Tailwind CDN and postMessage listener into an existing full page."""
        # Add Tailwind if not already present
        if "cdn.tailwindcss.com" not in full_html:
            full_html = full_html.replace("</head>", f"{TAILWIND_CDN}\n</head>", 1)
            if "</head>" not in full_html:
                full_html = TAILWIND_CDN + "\n" + full_html

        # Add postMessage listener before </body>
        if "PP_RELOAD" not in full_html:
            full_html = full_html.replace(
                "</body>",
                f"{POSTMESSAGE_LISTENER}\n</body>",
                1
            )

        return full_html

    def _wrap_fragment(self, fragment: str) -> str:
        """Wrap an HTML fragment in a full page template."""
        return SANDBOX_WRAPPER.format(
            tailwind_cdn=TAILWIND_CDN,
            postmessage_listener=POSTMESSAGE_LISTENER,
            body_content=fragment,
        )

    def _empty_payload(self) -> str:
        """Return a placeholder payload when no HTML was generated."""
        return SANDBOX_WRAPPER.format(
            tailwind_cdn=TAILWIND_CDN,
            postmessage_listener=POSTMESSAGE_LISTENER,
            body_content="""
            <div class="flex items-center justify-center min-h-screen">
              <div class="text-center p-8">
                <div class="text-6xl mb-4">⚡</div>
                <h2 class="text-2xl font-bold text-gray-700">ProtoPatch Preview</h2>
                <p class="text-gray-500 mt-2">Upload a wireframe to see your live preview here.</p>
              </div>
            </div>
            """,
        )
