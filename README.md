# trmnl-builder

Dieses Repository enthält eine Express.js-Anwendung zum Exportieren von TRMNL Templates.

📘 Siehe [TRMNL_GUIDELINE.md](TRMNL_GUIDELINE.md) für alle Design- und Hardwareregeln.

## Backend starten

```bash# trmnl-builder

Dieses Repository enthält eine Express.js-Anwendung und ein React/Vite-Frontend zur Erstellung und zum Exportieren von TRMNL Templates.

📘 Siehe [TRMNL_GUIDELINE.md](TRMNL_GUIDELINE.md) für alle Design- und Hardwareregeln.

## Backend starten (lokal, ohne Docker)

```bash
cd backend
npm install
npm start
Frontend starten (lokal, ohne Docker)

cd frontend
npm install
npm run dev
Docker Dev Setup

Das Projekt ist für die Nutzung mit docker-compose vorbereitet.

Build & Start
docker-compose down --volumes --remove-orphans
docker-compose build --no-cache
docker-compose up
Hinweise:
Backend läuft auf Port 3000 → http://localhost:3000
Frontend (Vite Dev-Server) läuft auf Port 5173 → http://localhost:5173
Hinweis zu Vite und esbuild in Docker

Beim Einsatz von Vite innerhalb eines Containers muss esbuild explizit als Abhängigkeit in frontend/package.json installiert werden.
Nur so wird der native Build unabhängig von der Host-Plattform korrekt ausgeführt.

Alternativ kann esbuild-wasm verwendet werden, um maximale Kompatibilität zu erreichen (z.B. in CI/CD Pipelines), allerdings mit reduziertem Build-Speed.

Installationsbeispiel
# Variante 1 (empfohlen für lokale Dev-Nutzung im Docker)
npm install esbuild --save-exact

# Variante 2 (für maximale Cross-Plattform-Kompatibilität)
npm uninstall esbuild
npm install esbuild-wasm --save-exact
Compose Best Practices

NODE_ENV=development standardmäßig gesetzt in Compose.
Logging begrenzt (json-file, max-size 10m, max-file 3).
Container werden automatisch neu gestartet (restart: unless-stopped).
Cross-Plattform Hinweise

Niemals node_modules zwischen Mac, Windows, Linux, Docker Container kopieren.
Container Build immer via npm ci im Container → garantiert sauberen Plattformbuild.
.dockerignore enthält node_modules → so bleibt der Build stabil.
cd backend
npm install
npm start
```

## Hinweis zu Vite und esbuild in Docker

Beim Einsatz von Vite innerhalb eines Containers muss `esbuild` explizit als Abhängigkeit installiert werden.
Nur so wird der native Build unabhängig von der Host-Plattform korrekt ausgeführt.
Optional kann `esbuild-wasm` verwendet werden, um maximale Kompatibilität zu erreichen.
