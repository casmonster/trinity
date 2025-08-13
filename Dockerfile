# ---- BUILD STAGE ----
FROM node:20 AS build
WORKDIR /app

# Install root dependencies
COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/
RUN npm install --workspaces

# Copy source
COPY client ./client
COPY server ./server
COPY shared ./shared

# Build frontend into server/public
RUN npm run build-frontend

# Build backend into dist
RUN npm run build-backend

# ---- PRODUCTION STAGE ----
FROM node:20 AS prod
WORKDIR /app

# Install only prod dependencies
COPY package*.json ./
COPY server/package*.json ./server/
RUN npm install --omit=dev --workspaces

# Copy backend dist and frontend public
COPY --from=build /app/server/dist ./server/dist
COPY --from=build /app/server/public ./server/public
COPY shared ./shared

# Expose and start
EXPOSE 5000
CMD ["node", "server/dist/index.js"]
