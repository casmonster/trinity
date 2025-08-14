# ----------------------
# 1. Build stage
# ----------------------
FROM node:20 AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build frontend
RUN npm run build-frontend   # output -> dist/public

# Build backend
RUN npm run build-backend    # output -> dist/server

# ----------------------
# 2. Production stage
# ----------------------
FROM node:20-slim AS production
WORKDIR /app

# Copy backend + frontend build artifacts
COPY --from=build /app/dist/server ./dist/server
COPY --from=build /app/dist/public ./dist/public

# Copy package files for prod dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Expose API port
EXPOSE 5000

# Start backend
CMD ["node", "dist/server/server/index.js"]
