# ---- BUILD STAGE ----
FROM node:20 AS build
WORKDIR /app

# Copy package files from root
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the whole monorepo
COPY . .

# Build frontend (Vite) → outputs into server/public
RUN npm run build-frontend

# Build backend (TypeScript → dist)
RUN npm run build-backend

# ---- PRODUCTION STAGE ----
FROM node:20-slim AS production
WORKDIR /app

# Copy only necessary files for runtime
COPY --from=build /app/server/dist ./server/dist
COPY --from=build /app/server/public ./server/public
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/shared ./shared

EXPOSE 5000
CMD ["node", "server/dist/index.js"]
