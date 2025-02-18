# Étape 1: Builder l’application React
FROM node:18 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2: Servir avec Nginx sur le port 4002
FROM nginx:alpine

# Supprimer la configuration par défaut de Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copier le fichier de configuration personnalisé
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers React
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 4002
EXPOSE 4002
CMD ["nginx", "-g", "daemon off;"]
