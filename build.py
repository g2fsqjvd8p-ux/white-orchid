from pathlib import Path
import re

root = Path(__file__).parent
dist = root / "dist"
dist.mkdir(exist_ok=True)

html = (root / "index.html").read_text(encoding="utf-8")
html_out = html.replace("styles.css", "styles.min.css").replace("script.js", "script.min.js")
(dist / "index.html").write_text(html_out, encoding="utf-8")

css = (root / "styles.css").read_text(encoding="utf-8")
css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
css = re.sub(r"\s+", " ", css)
css = re.sub(r"\s*([{}:;,])\s*", r"\1", css)
css = css.strip()
(dist / "styles.min.css").write_text(css, encoding="utf-8")

js = (root / "script.js").read_text(encoding="utf-8")
(dist / "script.min.js").write_text(js, encoding="utf-8")
print("Built to", dist)

# Copy admin page with minified CSS reference
admin_html_path = root / "admin.html"
if admin_html_path.exists():
    admin_html = admin_html_path.read_text(encoding="utf-8")
    admin_out = admin_html.replace("styles.css", "styles.min.css")
    (dist / "admin.html").write_text(admin_out, encoding="utf-8")

# Copy admin.js as-is
admin_js_path = root / "admin.js"
if admin_js_path.exists():
    (dist / "admin.js").write_text(admin_js_path.read_text(encoding="utf-8"), encoding="utf-8")

# Copy data folder if exists
data_dir = root / "data"
if data_dir.exists():
    (dist / "data").mkdir(exist_ok=True)
    for p in data_dir.glob("*"):
        if p.is_file():
            (dist / "data" / p.name).write_text(p.read_text(encoding="utf-8"), encoding="utf-8")
