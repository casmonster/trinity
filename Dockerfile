# ---- FRONTEND BUILD ----
FROM node:20 AS build-frontend
WORKDIR /app/client
COPY package*.json ./
RUN npm install
WORKDIR /app/client
COPY client/ ./
# Build Vite output directly into server/public
RUN npm run build -- --outDir ../server/public

# ---- BACKEND BUILD ----
FROM node:20 AS build-backend
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY server/ ./server
COPY --from=build-frontend /app/server/public ./server/public
WORKDIR /app/server
RUN npm run build

# ---- PRODUCTION ----
FROM node:20-slim AS production
WORKDIR /app
COPY --from=build-backend /app/server/dist ./dist
COPY --from=build-backend /app/node_modules ./node_modules
COPY --from=build-backend /app/package*.json ./
EXPOSE 5000
CMD ["node", "dist/index.js"]
