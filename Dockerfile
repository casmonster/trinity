# ---------------------
# 1. Build frontend
# ---------------------
FROM node:18-alpine AS frontend
WORKDIR /client
COPY client/package*.json ./
RUN npm install --frozen-lockfile
COPY client/ ./
RUN npm run build

# ---------------------
# 2. Build backend
# ---------------------
FROM node:18-alpine AS backend
WORKDIR /app
COPY package*.json ./
RUN npm install --production --frozen-lockfile
COPY . .

# Copy built frontend into backend's public directory
COPY --from=frontend /client/dist ./server/public

# Build backend TypeScript
RUN npm run build-backend

EXPOSE 5000

# Set production environment
ENV NODE_ENV=production

# Start backend (serves frontend too)
CMD ["npm", "start"]
