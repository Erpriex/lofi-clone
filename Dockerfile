# Étape 1: Builder l’application
FROM node:18 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2: Servir avec Nginx sur le port 4002
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Modifier la configuration de Nginx pour écouter sur le port 4002
RUN sed -i 's/listen 80;/listen 4002;/g' /etc/nginx/conf.d/default.conf

# Exposer le port 4002
EXPOSE 4002
CMD ["nginx", "-g", "daemon off;"]
