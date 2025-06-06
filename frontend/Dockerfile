FROM node:18
WORKDIR /app

# Nur package.json und lockfile kopieren und installieren
COPY package*.json ./
RUN npm install

# Restliche Dateien kopieren, node_modules dabei ignorieren (siehe .dockerignore)
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host"]
