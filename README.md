trmnl-builder

Dieses Repository enthält eine Express.js + Vite.js Anwendung zum Exportieren von TRMNL Templates.

📘 Siehe TRMNL_GUIDELINE.md für alle Design- und Hardwareregeln.

⚙️ Projekt Setup (Docker-basiert, Cross-Plattform)

1️⃣ Voraussetzung
Docker + Docker Compose v2+
Keine vorhandenen node_modules → Build erfolgt immer im Container
2️⃣ Build & Start
# Container stoppen + alte Volumes bereinigen
docker-compose down --volumes --remove-orphans

# Frischen Build durchführen (empfohlen bei Änderungen oder Mac → Linux Build)
docker-compose build --no-cache

# Container starten
docker-compose up
Backend läuft auf: http://localhost:3000
Frontend (Vite Dev Server) läuft auf: http://localhost:3000
3️⃣ Hinweise zu Vite + esbuild in Docker
Beim Einsatz von Vite im Container muss esbuild korrekt plattformabhängig installiert werden.

👉 Vorgehen:

keine node_modules ins Repo committen
im Container stets npm ci nutzen (Dockerfile so konfiguriert)
package-lock.json immer aktuell halten
Alternativ:

esbuild-wasm verwenden → universell plattformfähig, aber langsamer (~10x)
4️⃣ Backend: .env Handling
Das Backend nutzt dotenv → .env Datei liegt in:

/backend/.env
Beispiel .env:

PORT=3000
5️⃣ Compose Best Practices
docker-compose.yml ist optimiert für:

restart: unless-stopped
Logging Rotation
explizite Build Contexts (./frontend / ./backend)
saubere Volumes für hot reload / persistente Daten
Cross-Plattform Builds (Mac → Linux → Docker → CI/CD)
6️⃣ Update Workflow (für Mac-Nutzer empfohlen)
Wenn du lokal npm install ausführst:

# Vor Build im Container:
cd frontend
rm -rf node_modules package-lock.json
npm install --package-lock-only
cd ..

docker-compose build --no-cache
docker-compose up
→ Damit wird esbuild passend für Linux installiert → Fehler esbuild platform mismatch wird vermieden.

📝 Zusammenfassung

✅ Backend und Frontend laufen stabil im Container
✅ keine Plattformprobleme mehr bei esbuild
✅ .env Handling vorhanden
✅ Compose.yml auf Best Practice optimiert
✅ Cross-Plattform Build ist getestet & lauffähig
