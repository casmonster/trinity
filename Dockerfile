# ===============================
# Stage 1: Build frontend
# ===============================
FROM node:18-alpine AS build-frontend
WORKDIR /app

# Install dependencies (client + shared only)
COPY package*.json ./
COPY client/package*.json ./client/
COPY shared ./shared
RUN npm install --workspace client

# Copy source code
COPY client ./client
COPY vite.config.ts tsconfig.json ./
COPY shared ./shared

# Build frontend (output goes to /app/dist/public because of vite.config.ts)
RUN npm run build --workspace client

# ===============================
# Stage 2: Build backend
# ===============================
FROM node:18-alpine AS build-backend
WORKDIR /app

# Copy full monorepo
COPY . .

# Copy built frontend into server's public folder
COPY --from=build-frontend /app/dist/public ./server/public

# Install all dependencies
RUN npm install

# Build backend
RUN npm run build-backend

# ===============================
# Stage 3: Production image
# ===============================
FROM node:18-alpine
WORKDIR /app

# Copy production files
COPY --from=build-backend /app/dist ./dist
COPY --from=build-backend /app/package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

EXPOSE 5000

# Run backend (will also serve frontend from ./dist/public)
CMD ["npm", "start"]
