FROM node:20 AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build backend (output goes to dist/server)
RUN npm run build-backend

# Production image
FROM node:20
WORKDIR /app

# Copy only the backend dist folder (nested)
COPY --from=build /app/dist/server ./dist/server

# Copy package files for prod dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Run the compiled backend
CMD ["node", "dist/server/server/index.js"]
