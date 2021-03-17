FROM node:15.11.0-alpine3.10

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install

COPY index.html /app/
COPY server.js /app/


CMD [ "node", "server.js" ]