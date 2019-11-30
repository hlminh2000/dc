FROM node:latest

WORKDIR ./app

COPY ./app1.js ./index.js
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm ci

ENV PORT=3001
ENV APP2_URL=http://127.0.0.1:81
EXPOSE 3001

CMD ["node", "index.js"]
