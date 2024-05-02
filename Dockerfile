FROM node:20-alpine3.18 as build

ARG AUTH0_DOMAIN
ARG AUTH0_CLIENT_ID
ARG G_MAPS_API_KEY

RUN apk update && apk upgrade --no-cache
RUN apk add postgresql-client

COPY client /app/client
WORKDIR /app/client

ENV REACT_APP_API_KEY=${G_MAPS_API_KEY}
ENV REACT_APP_AUTH0_DOMAIN=${AUTH0_DOMAIN}
ENV REACT_APP_AUTH0_CLIENT_ID=${AUTH0_CLIENT_ID}

RUN npm install --legacy-peer-deps
RUN npm run build

COPY server /app/server
WORKDIR /app/server
RUN npm install

RUN adduser -S webserver
USER webserver

WORKDIR /app/server
ENTRYPOINT ["npm", "start"]
