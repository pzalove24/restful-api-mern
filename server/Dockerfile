FROM node:18-alpine as base

FROM base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 6001
CMD ["index.js"]