FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build backend only
RUN npm run build-backend

EXPOSE 5000

CMD ["npm", "start"]
