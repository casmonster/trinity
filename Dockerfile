# ---------------------
# 1. Build frontend + backend together
# ---------------------
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy all source code
COPY . .

# Build frontend first, then backend
RUN npm run build-frontend
RUN npm run build-backend

# ---------------------
# 2. Production image
# ---------------------
FROM node:18-alpine AS prod
WORKDIR /app

# Copy only necessary files for production
COPY package*.json ./
RUN npm install --production --frozen-lockfile

COPY --from=build /app/dist ./dist
COPY --from=build /app/client/dist ./server/public

EXPOSE 5000
ENV NODE_ENV=production

CMD ["npm", "start"]
