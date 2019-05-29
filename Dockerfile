FROM mhart/alpine-node:8.16.0

RUN mkdir -p /usr/src/app/server

WORKDIR /usr/src/app
#ADD ./web ./web
ADD ./server ./server

#RUN cd web && \
#    yarn install && \
#    npm run build && \
#    cd .. &&\
#    \
RUN    cd server && \
    npm install
#    \
#    rm -rf ../web

WORKDIR /usr/src/app/server

CMD [ "npm", "start" ]

EXPOSE 3000