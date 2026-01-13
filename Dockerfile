# Utiliser Node.js 18
FROM node:18

# Dossier de travail
WORKDIR /app

# Copier les fichiers
COPY package*.json ./
RUN npm install
COPY . .

# Exposer le port
EXPOSE 8080

# Commande de démarrage
CMD ["npm", "start"]
