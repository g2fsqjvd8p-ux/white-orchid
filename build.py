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
