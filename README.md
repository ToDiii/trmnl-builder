# trmnl-builder

Dieses Repository enthält eine Express.js-Anwendung zum Exportieren von TRMNL Templates.

📘 Siehe [TRMNL_GUIDELINE.md](TRMNL_GUIDELINE.md) für alle Design- und Hardwareregeln.

## Backend starten

```bash
cd backend
npm install
npm start
```

## Hinweis zu Vite und esbuild in Docker

Beim Einsatz von Vite innerhalb eines Containers muss `esbuild` explizit als Abhängigkeit installiert werden.
Nur so wird der native Build unabhängig von der Host-Plattform korrekt ausgeführt.
Optional kann `esbuild-wasm` verwendet werden, um maximale Kompatibilität zu erreichen.
