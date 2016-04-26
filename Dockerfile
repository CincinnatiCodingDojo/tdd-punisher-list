FROM node:latest

EXPOSE 3000

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . /app

CMD [ "npm", "start" ]
