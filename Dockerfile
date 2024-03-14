# specify the node base image with your desired version node:<version>
FROM node:16

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le fichier package.json pour installer les dépendances
COPY src/api/package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY src/api .

# replace this with your application's default port
EXPOSE 8888

# Commande pour démarrer l'application Node.js
CMD ["node", "app.js"]