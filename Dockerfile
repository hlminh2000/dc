FROM node:latest

COPY . .

RUN npm ci

EXPOSE 8080:8080

CMD ["node", "index.js"]
