# Étape 1: Builder l’application React
FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2: Servir avec Nginx sur le port 4002
FROM nginx:alpine

# Supprimer la configuration par défaut de Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

# Générer dynamiquement la configuration Nginx
RUN echo 'server { \
    listen 4002; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri /index.html; \
    } \
    error_page 404 /index.html; \
}' > /etc/nginx/conf.d/default.conf

# Copier les fichiers React construits
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 4002
EXPOSE 4002

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
