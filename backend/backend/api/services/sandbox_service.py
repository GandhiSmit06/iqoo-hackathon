"""
ProtoPatch — Sandbox Service
Sanitizes arbitrary HTML/JS and wraps it in a safe iframe payload.
"""
import html
import logging
import re

logger = logging.getLogger(__name__)

TAILWIND_CDN = '<script src="https://cdn.tailwindcss.com"></script>'
LUCIDE_CDN = '<script src="https://unpkg.com/lucide@latest"></script>'

POSTMESSAGE_LISTENER = """
<script>
  // ProtoPatch Sandbox Protection & Interactive Navigation Guard
  (function() {
    function setupSandboxGuard() {
      if (window.lucide) {
        try { window.lucide.createIcons(); } catch (err) {}
      }

      // 1. Intercept all link clicks so they never navigate away from the sandbox preview
      document.addEventListener("click", function(e) {
        const link = e.target.closest("a");
        if (link) {
          e.preventDefault();
          e.stopPropagation();
          const href = link.getAttribute("href") || "";
          console.log("[ProtoPatch Sandbox] Link click intercepted:", href);
          // If it is an anchor hash on the same page, scroll to it smoothly
          if (href.startsWith("#") && href.length > 1) {
            try {
              const target = document.querySelector(href);
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            } catch (err) {}
          }
        }
      }, true);

      // 2. Intercept all form submissions so they don't reload or navigate away
      document.addEventListener("submit", function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("[ProtoPatch Sandbox] Form submission intercepted and handled locally");
      }, true);

      // 3. Block window.open and top-level navigation
      try {
        window.open = function(url) {
          console.warn("[ProtoPatch Sandbox] Blocked external window.open to:", url);
          return null;
        };
      } catch (err) {}
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", setupSandboxGuard);
    } else {
      setupSandboxGuard();
    }

    window.addEventListener("message", function(event) {
      if (event.data && event.data.type === "PP_RELOAD") {
        document.open();
        document.write(event.data.html);
        document.close();
        setupSandboxGuard();
      }
    });
  })();
</script>
"""

SANDBOX_WRAPPER = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ProtoPatch Preview</title>
  {tailwind_cdn}
  {lucide_cdn}
  {postmessage_listener}
</head>
<body class="bg-slate-50 min-h-screen text-slate-900 font-sans antialiased">
  {body_content}
  <script>
    if (window.lucide) {{ window.lucide.createIcons(); }}
  </script>
</body>
</html>"""


class SandboxService:
    """
    Builds safe, self-contained HTML payloads for sandboxed iframe rendering.
    """

    def build_sandbox_payload(self, html_code: str) -> str:
        """
        Process raw HTML and return a safe iframe srcdoc string.
        """
        if not html_code or not html_code.strip():
            return self._empty_payload()

        cleaned = html_code.strip()

        # Strip markdown fences if present (e.g. ```html ... ```)
        cleaned = re.sub(r"^```(?:html)?\s*", "", cleaned, flags=re.IGNORECASE)
        cleaned = re.sub(r"\s*```$", "", cleaned)

        # Unescape escaped characters if needed
        if '\\"' in cleaned or '\\n' in cleaned:
            cleaned = cleaned.replace('\\"', '"').replace('\\n', '\n').replace('\\t', '\t').replace('\\/', '/')

        # Determine if we have a full page or a fragment
        is_full_page = bool(re.search(r"<html|<head|<body", cleaned, re.IGNORECASE))

        if is_full_page:
            result = self._inject_into_full_page(cleaned)
        else:
            result = self._wrap_fragment(cleaned)

        logger.info("Sandbox payload built: %d bytes", len(result))
        return result

    def _inject_into_full_page(self, full_html: str) -> str:
        """Inject Tailwind CDN, Lucide, and postMessage listener into an existing full page."""
        # Ensure Tailwind CDN
        if "cdn.tailwindcss.com" not in full_html:
            if "<head>" in full_html:
                full_html = full_html.replace("<head>", f"<head>\n  {TAILWIND_CDN}\n  {LUCIDE_CDN}", 1)
            elif "</head>" in full_html:
                full_html = full_html.replace("</head>", f"  {TAILWIND_CDN}\n  {LUCIDE_CDN}\n</head>", 1)
            else:
                full_html = f"{TAILWIND_CDN}\n{LUCIDE_CDN}\n" + full_html

        # Ensure Lucide CDN
        if "unpkg.com/lucide" not in full_html:
            if "</head>" in full_html:
                full_html = full_html.replace("</head>", f"  {LUCIDE_CDN}\n</head>", 1)

        # Add postMessage listener and lucide trigger before </body>
        if "PP_RELOAD" not in full_html:
            if "</body>" in full_html:
                full_html = full_html.replace(
                    "</body>",
                    f"{POSTMESSAGE_LISTENER}\n<script>if (window.lucide) {{ window.lucide.createIcons(); }}</script>\n</body>",
                    1
                )
            else:
                full_html += f"\n{POSTMESSAGE_LISTENER}\n<script>if (window.lucide) {{ window.lucide.createIcons(); }}</script>"

        return full_html

    def _wrap_fragment(self, fragment: str) -> str:
        """Wrap an HTML fragment in a full page template."""
        return SANDBOX_WRAPPER.format(
            tailwind_cdn=TAILWIND_CDN,
            lucide_cdn=LUCIDE_CDN,
            postmessage_listener=POSTMESSAGE_LISTENER,
            body_content=fragment,
        )

    def _empty_payload(self) -> str:
        """Return a placeholder payload when no HTML was generated."""
        return SANDBOX_WRAPPER.format(
            tailwind_cdn=TAILWIND_CDN,
            lucide_cdn=LUCIDE_CDN,
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
