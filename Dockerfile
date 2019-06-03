# 1. build the front-end
FROM mhart/alpine-node:8 AS build-fe
RUN mkdir /tmp-build
WORKDIR /tmp-build
COPY web/package*.json ./
RUN yarn install --silent
COPY web/. ./
RUN npm run build

# 2. prepare the back-end
FROM mhart/alpine-node:8
RUN mkdir /bk-sharnam-app
WORKDIR /bk-sharnam-app
COPY server/package*.json ./
RUN npm install --silent
COPY server/. ./
COPY --from=build-fe /tmp-build/build/ /bk-sharnam-app/public/

# 3. run this web-application
EXPOSE 4000
ENV NODE_ENV production
CMD [ "npm", "run", "start" ]