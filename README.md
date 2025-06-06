# trmnl-builder

## 1️⃣ Projektbeschreibung

Express.js-Backend und Vite.js-Frontend zum Export von TRMNL Templates. Die Anwendung läuft komplett in Docker-Containern und kann plattformübergreifend (Mac → Linux → Docker → CI/CD) eingesetzt werden.

## 2️⃣ Verweis auf TRMNL_GUIDELINE.md

Alle Design- und Hardwareregeln stehen im [TRMNL_GUIDELINE.md](./TRMNL_GUIDELINE.md).

## 3️⃣ Setup Docker-basiert

* Docker und Docker Compose v2+ erforderlich
* **Keine** lokalen *node_modules* im Repository – der Build erfolgt im Container

## 4️⃣ Build & Start

```bash
# Container stoppen und alte Volumes bereinigen
docker-compose down --volumes --remove-orphans

# Frischen Build erstellen (empfohlen bei Änderungen oder Mac → Linux Build)
docker-compose build --no-cache

# Container starten
docker-compose up
```

Backend erreichbar unter http://localhost:5001, Frontend unter http://localhost:3000.

### Beispiele

**Entwicklung**

```bash
docker-compose up frontend backend
```

**Produktion**

```bash
docker-compose up frontend-prod backend-prod
```

## Lokale Ports

- Frontend: http://localhost:3000
- Backend API: http://localhost:5001

## 5️⃣ Hinweise zu Vite + esbuild im Container

* `esbuild` wird explizit installiert, damit Vite auch im Container korrekt funktioniert
* `esbuild-wasm` ist optional sinnvoll, wenn native Build-Probleme auftreten (plattformunabhängig, aber langsamer)
* Im Container wird `npm ci` genutzt, um immer exakt die im `package-lock.json` definierten Versionen zu installieren
* **Keine** *node_modules* ins Repository committen

## Environment Variables

Das Projekt erwartet eine `.env` Datei in Backend und Frontend sowie eine `.env` im Projektroot für Compose:

- `/backend/.env` – Konfiguration für das Express.js Backend
- `/frontend/.env` – Konfiguration für das Vite Frontend
- `/.env` – Ports für Docker Compose (siehe `.env.example`)

Beispiel für `backend/.env` und `/.env`:

```
PORT=5000
# Beispiel für /.env
FRONTEND_DEV_PORT=3000
FRONTEND_PROD_PORT=8080
BACKEND_DEV_PORT=5001
BACKEND_PROD_PORT=5000
```

## 7️⃣ Docker Compose Best Practices

* `restart: unless-stopped`
* Logging-Rotation per `json-file` Treiber
* Build-Context explizit gesetzt (`./frontend` bzw. `./backend`)
* Volumes nur dort mounten, wo es für Hot Reload benötigt wird
* Hinweis auf Cross-Plattform Builds (Mac → Linux → Docker → CI/CD)

## 8️⃣ Update Workflow für Mac-Nutzer

Um einen *esbuild* "platform mismatch" zu vermeiden, sollten lokale Abhängigkeiten vor dem Container-Build entfernt und neu generiert werden:

```bash
cd frontend
rm -rf node_modules package-lock.json
npm install --package-lock-only
cd ..

docker-compose build --no-cache
docker-compose up
```

## 9️⃣ Zusammenfassung

✅ Cross-Plattform getestet und lauffähig

✅ .env Handling aktiv

✅ Compose optimiert nach Best Practices


## Docker Compose: Dev vs. Prod

### Entwicklung

```bash
docker-compose -f docker-compose.dev.yml up --build
```

### Produktion

```bash
# Production Build starten
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up
```
