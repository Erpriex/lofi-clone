# Étape 1 : Build de l'application React
FROM node:18-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de l'application
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install --frozen-lockfile

# Copier le reste du code source
COPY . .

# Construire l'application
RUN npm run build

# Étape 2 : Utilisation de Nginx pour servir l'application
FROM nginx:alpine

# Supprimer les fichiers par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copier les fichiers build de l'application
COPY --from=builder /app/build /usr/share/nginx/html

# Copier le fichier de configuration Nginx (optionnel)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 4002

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
