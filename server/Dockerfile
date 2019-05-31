FROM mhart/alpine-node:8 as build
ADD . /app
WORKDIR /app
COPY package*.json ./
RUN npm install --production

ADD . /app

EXPOSE 4000

CMD ["npm", "start"]


