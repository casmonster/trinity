# ---- FRONTEND BUILD ----
FROM node:20 AS build-frontend
WORKDIR /app
COPY client/package*.json ./client/
RUN cd client && npm install
COPY client ./client
# Build Vite output directly into server/public
RUN cd client && npm run build -- --outDir ../server/public

# ---- BACKEND BUILD ----
FROM node:20 AS build-backend
WORKDIR /app
COPY server/package*.json ./server/
RUN cd server && npm install
COPY server ./server
# Copy already-built frontend from build-frontend stage
# (No need to copy public folder, it's already there from frontend build)
COPY --from=build-frontend /app/server/public ./server/public
RUN cd server && npm run build

# ---- PRODUCTION ----
FROM node:20-slim AS production
WORKDIR /app
COPY --from=build-backend /app/server/dist ./dist
COPY --from=build-backend /app/server/node_modules ./node_modules
COPY --from=build-backend /app/server/package*.json ./
EXPOSE 5000
CMD ["node", "dist/index.js"]
