# ---- FRONTEND BUILD ----
FROM node:20 AS build-frontend
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client ./
# Build Vite output directly into server/public
RUN npm run build -- --outDir ../server/public

# ---- BACKEND BUILD ----
FROM node:20 AS build-backend
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server ./
# frontend build already in server/public
RUN npm run build

# ---- PRODUCTION ----
FROM node:20-slim AS production
WORKDIR /app
COPY --from=build-backend /app/server/dist ./dist
COPY --from=build-backend /app/server/node_modules ./node_modules
COPY --from=build-backend /app/server/package*.json ./
EXPOSE 5000
CMD ["node", "dist/index.js"]
