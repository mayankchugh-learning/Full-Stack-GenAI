# Positional Encoding — In-Depth Intuition

> Interactive explainer · Transformer Series · Sinusoidal PE

---

## Option A — GitHub Pages (Recommended)

Upload both files (`positional_encoding.html` + this `.md`) to your GitHub repo.
Then embed the HTML as an iframe in any Markdown file:

```markdown
<iframe
  src="./positional_encoding.html"
  width="100%"
  height="720"
  style="border:none;border-radius:10px"
  title="Positional Encoding Interactive Explainer">
</iframe>
```

> **Works in:** GitHub Pages, Jekyll sites, Hugo, any static site generator that renders Markdown to HTML.
> **Does NOT work in:** Raw GitHub `.md` preview (GitHub strips iframes for security).

---

## Option B — Obsidian

1. Drop `positional_encoding.html` into your Obsidian vault folder.
2. Install the **"HTML Embed"** or **"Webpage HTML Export"** plugin from Community Plugins.
3. In any `.md` note, use:

```html
<iframe src="positional_encoding.html" width="100%" height="720" style="border:none"></iframe>
```

Or if you use the **Dataview** / **CustomJS** plugin approach, drop the file in your vault and reference it as a local path.

> **Alternative:** Obsidian Canvas supports embedding local HTML files as cards directly — drag the `.html` file into a Canvas view.

---

## Option C — Notion

1. Host `positional_encoding.html` on any free static host:
   - [GitHub Pages](https://pages.github.com) (free)
   - [Netlify Drop](https://app.netlify.com/drop) (drag and drop, free)
   - [Vercel](https://vercel.com) (free tier)

2. Copy the public URL (e.g. `https://yourname.github.io/positional_encoding.html`)

3. In Notion, type `/embed` → paste the URL → press Enter.

> Notion's embed block renders external URLs inside the page.

---

## Option D — Jupyter Notebook

Run this in a notebook cell:

```python
from IPython.display import HTML, display

with open("positional_encoding.html", "r", encoding="utf-8") as f:
    html_content = f.read()

display(HTML(html_content))
```

Or inline with an iframe pointing to a local server:

```python
import subprocess, threading, http.server, os

PORT = 8765
os.chdir("/path/to/folder/containing/html")

def serve():
    handler = http.server.SimpleHTTPRequestHandler
    with http.server.HTTPServer(("", PORT), handler) as httpd:
        httpd.serve_forever()

t = threading.Thread(target=serve, daemon=True)
t.start()

from IPython.display import IFrame
IFrame(f"http://localhost:{PORT}/positional_encoding.html", width="100%", height=720)
```

---

## Option E — VS Code (Preview in Browser)

VS Code's built-in Markdown preview **does not** run JavaScript.
But you can:

1. Open `positional_encoding.html` directly in VS Code.
2. Right-click → **"Open with Live Server"** (requires Live Server extension).
3. This opens it in your browser at `http://localhost:5500/positional_encoding.html`.

For the `.md` file, use the **Markdown Preview Enhanced** extension — it allows `<iframe>` and script tags inside Markdown previews.

---

## Option F — Medium / LinkedIn / Substack

These platforms **do not support custom HTML/JS embeds** in published posts.

Best workaround:
1. Host the HTML on GitHub Pages or Netlify.
2. Take a **screenshot or screen recording** (GIF) of the interactive explainer.
3. Embed the image/GIF in your post, with a link to the live hosted version.

---

## Quick Reference Table

| Platform | Method | Interactive? | Effort |
|---|---|---|---|
| GitHub Pages | `<iframe src="...html">` | ✅ Yes | Low |
| Obsidian | iframe via HTML Embed plugin | ✅ Yes | Low |
| Notion | `/embed` block (hosted URL) | ✅ Yes | Medium |
| Jupyter Notebook | `IPython.display.HTML()` | ✅ Yes | Low |
| VS Code | Open `.html` directly | ✅ Yes | None |
| Medium / LinkedIn | Screenshot + link | ❌ Static only | Low |

---

## Files Needed

```
your-project/
├── positional_encoding.html   ← the interactive widget (standalone)
└── positional_encoding_embed.md  ← this file
```

The HTML file is **fully self-contained** — it loads Chart.js from a CDN.
For offline use, download Chart.js and change the script src to a local path:

```html
<!-- Replace this line in the HTML -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>

<!-- With this (after downloading chart.umd.js locally) -->
<script src="./chart.umd.js"></script>
```

---

*Mayank Chugh · Transformer Series · Positional Encoding*
