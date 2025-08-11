FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies first (cache optimization)
COPY package*.json ./
RUN npm install

# Copy everything else, including .env at root level
COPY . .

# Build backend only
RUN npm run build-backend

EXPOSE 5000

# Start the app with NODE_ENV=production
CMD ["npm", "start"]

