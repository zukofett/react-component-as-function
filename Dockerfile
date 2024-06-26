FROM node:20.11.0-alpine

WORKDIR /usr/app

COPY ./ ./

RUN npm i

CMD npm run start
