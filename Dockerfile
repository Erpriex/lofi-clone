FROM node:18-alpine

# Installation des dépendances
RUN npm install

# Build de l'application
RUN npm run build

# Spécifier le répertoire de sortie du build
CMD ["echo", "Build terminé avec succès"]