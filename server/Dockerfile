FROM node:8.9.1-alpine

RUN mkdir -p /usr/src/app/server

WORKDIR /usr/src/app
ADD ./web ./web
ADD ./server ./server

RUN cd web && \
    yarn install && \
    npm run build && \
    cd .. &&\
    \
    cd server && \
    npm install && \
    npm run build && \
    npm prune --production && \
    \
    rm -rf ../web

WORKDIR /usr/src/app/server

CMD [ "npm", "start" ]

EXPOSE 3000