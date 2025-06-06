FROM node:18

WORKDIR /app

# Copy package.json und package-lock.json für stabilen Build
COPY package.json package-lock.json ./

# Installiere exakt definierte Abhängigkeiten
RUN npm ci

# Restlichen Code kopieren
COPY . .

# Exponiere Vite Dev Server Port (Standard 5173, anpassbar falls gewünscht)
EXPOSE 5173

# Starte den Dev Server
CMD ["npm", "run", "dev", "--", "--host"]
