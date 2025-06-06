FROM node:18

WORKDIR /app

# Copy package.json und package-lock.json für stabilen Build
COPY package.json package-lock.json ./

# Installiere exakt definierte Abhängigkeiten
RUN npm ci

# Restlichen Code kopieren
COPY . .

# Exponiere API Port
EXPOSE 5001

# Starte die Anwendung
CMD ["npm", "start"]
