# ------------------------------------------------------
# 1. Frontend build stage
# ------------------------------------------------------
FROM node:20-alpine AS build-frontend
WORKDIR /app

# Copy and install frontend dependencies
COPY client/package*.json ./client/
WORKDIR /app/client
RUN npm ci

# Copy frontend source and build
COPY client/ .
RUN npm run build

# ------------------------------------------------------
# 2. Backend build stage
# ------------------------------------------------------
FROM node:20-alpine AS build-backend
WORKDIR /app

# Copy and install backend dependencies
COPY server/package*.json ./server/
WORKDIR /app/server
RUN npm ci

# Copy backend source
COPY server/ .

# Copy built frontend into backend's public folder
# so Express can serve it
COPY --from=build-frontend /app/client/dist ./public

# Build backend (e.g., with esbuild, tsc, or vite)
RUN npm run build

# ------------------------------------------------------
# 3. Final runtime stage
# ------------------------------------------------------
FROM node:20-alpine AS production
WORKDIR /app

# Copy production backend build
COPY --from=build-backend /app/server/dist ./dist
# Copy node_modules for backend runtime
COPY --from=build-backend /app/server/node_modules ./node_modules
# Copy package.json for reference (optional)
COPY server/package.json .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080

# Expose the port Railway will use
EXPOSE 8080

# Start the backend
CMD ["node", "dist/index.js"]
