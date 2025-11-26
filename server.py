import os
import json
from urllib.parse import urlparse, parse_qs
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
from pathlib import Path

ROOT = Path(__file__).parent
DATA_DIR = ROOT / "data"
DATA_DIR.mkdir(exist_ok=True)
BOOKINGS_FILE = DATA_DIR / "bookings.json"
if not BOOKINGS_FILE.exists():
    BOOKINGS_FILE.write_text("[]", encoding="utf-8")

ADMIN_USER = os.environ.get("ADMIN_USER", "admin")
ADMIN_PASS = os.environ.get("ADMIN_PASS", "changeme")

def read_bookings():
    try:
        return json.loads(BOOKINGS_FILE.read_text(encoding="utf-8"))
    except Exception:
        return []

def write_bookings(items):
    BOOKINGS_FILE.write_text(json.dumps(items), encoding="utf-8")

class Handler(SimpleHTTPRequestHandler):
    def _send_json(self, obj, code=200):
        b = json.dumps(obj).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(b)))
        self.end_headers()
        self.wfile.write(b)

    def _require_auth(self):
        auth = self.headers.get("Authorization")
        if not auth or not auth.startswith("Basic "):
            self._unauthorized()
            return False
        import base64
        try:
            decoded = base64.b64decode(auth.split(" ",1)[1]).decode("utf-8")
        except Exception:
            self._unauthorized()
            return False
        user, _, pw = decoded.partition(":")
        if user != ADMIN_USER or pw != ADMIN_PASS:
            self._unauthorized()
            return False
        return True

    def _unauthorized(self):
        self.send_response(401)
        self.send_header("WWW-Authenticate", "Basic realm=admin")
        self.end_headers()

    def do_GET(self):
        if self.path.startswith("/api/bookings"):
            if not self._require_auth():
                return
            qs = parse_qs(urlparse(self.path).query)
            date = (qs.get("date") or [None])[0]
            items = read_bookings()
            if date:
                items = [b for b in items if b.get("date") == date]
            self._send_json(items)
            return
        return super().do_GET()

    def do_POST(self):
        if self.path == "/api/bookings":
            length = int(self.headers.get("Content-Length", "0"))
            body = self.rfile.read(length) if length else b"{}"
            try:
                data = json.loads(body.decode("utf-8"))
            except Exception:
                self._send_json({"error":"invalid json"}, 400)
                return
            items = read_bookings()
            def calc_end(start, minutes):
                hh, mm = map(int, start.split(":"))
                total = hh*60 + mm + int(minutes)
                eh, em = divmod(total, 60)
                return f"{eh:02d}:{em:02d}"
            minutes = data.get("minutes", 60)
            end = calc_end(data["start"], minutes)
            item = {
                "id": str(int(__import__("time").time()*1000)),
                "date": data["date"],
                "start": data["start"],
                "end": end,
                "minutes": minutes,
                "name": data.get("name"),
                "phone": data.get("phone"),
                "serviceId": data.get("serviceId"),
                "notes": data.get("notes"),
                "status": data.get("status") or "pending",
            }
            items.append(item)
            write_bookings(items)
            self._send_json(item, 201)
            return
        return super().do_POST()

    def do_PUT(self):
        if self.path.startswith("/api/bookings/"):
            if not self._require_auth():
                return
            bid = self.path.split("/api/bookings/")[-1]
            length = int(self.headers.get("Content-Length", "0"))
            body = self.rfile.read(length) if length else b"{}"
            try:
                data = json.loads(body.decode("utf-8"))
            except Exception:
                data = {}
            items = read_bookings()
            for i, b in enumerate(items):
                if b.get("id") == bid:
                    if "status" in data:
                        b["status"] = data["status"]
                    items[i] = b
                    write_bookings(items)
                    self._send_json(b)
                    return
            self._send_json({"error":"not found"}, 404)
            return
        return super().do_PUT()

    def do_DELETE(self):
        if self.path.startswith("/api/bookings/"):
            if not self._require_auth():
                return
            bid = self.path.split("/api/bookings/")[-1]
            items = read_bookings()
            n = len(items)
            items = [b for b in items if b.get("id") != bid]
            if len(items) == n:
                self._send_json({"error":"not found"}, 404)
                return
            write_bookings(items)
            self._send_json({"ok": True})
            return
        return super().do_DELETE()

if __name__ == "__main__":
    with TCPServer(("", 8000), Handler) as httpd:
        print("Serving on http://localhost:8000")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass
