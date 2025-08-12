# ---------- 1. Build stage ----------
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build frontend + backend
RUN npm run build

# ---------- 2. Production stage ----------
FROM node:18-alpine AS production
WORKDIR /app

# Copy only package files first and install prod dependencies
COPY package*.json ./
RUN npm install --production

# Copy build output and any other necessary files
COPY --from=build /app/dist ./dist
COPY --from=build /app/server ./server
COPY --from=build /app/client/dist ./server/public

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000
CMD ["node", "dist/index.js"]
