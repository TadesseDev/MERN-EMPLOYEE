FROM node:16.13.0-alpine

WORKDIR /backend

RUN npm install -g nodemon

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm","run","devStart"]
