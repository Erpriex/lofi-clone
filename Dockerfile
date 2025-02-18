# Étape 1: Utiliser une image de base pour builder l'app
FROM node:18 as build

# Définir le dossier de travail
WORKDIR /app

# Copier les fichiers et installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier tout le projet et builder l'application
COPY . .
RUN npm run build

# Étape 2: Servir l'application avec Nginx
FROM nginx:alpine

# Copier les fichiers build dans Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
