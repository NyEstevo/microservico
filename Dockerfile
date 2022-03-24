FROM node:14-alpine

WORKDIR /app/

ADD ./package*.json ./
RUN npm i

ADD . /app/

CMD ["npm", "start"]