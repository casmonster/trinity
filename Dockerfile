FROM node:20 AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy everything and build
COPY . .
RUN npm run build-frontend
RUN npm run build-backend

FROM node:20-slim AS production
WORKDIR /app

# Copy backend & frontend outputs
COPY --from=build /app/dist/server ./server/dist
COPY --from=build /app/dist/public ./server/public
COPY package*.json ./
RUN npm install --omit=dev

EXPOSE 5000
CMD ["node", "dist/server/index.js"]
