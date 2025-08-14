FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build-backend

FROM node:20
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm install --omit=dev

CMD ["node", "dist/server/index.js"]
