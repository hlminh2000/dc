FROM node:latest

WORKDIR ./app

COPY ./app1.js ./index.js
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm ci

ENV PORT=3002
EXPOSE 3002

CMD ["node", "index.js"]
