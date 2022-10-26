FROM node:14-alpine3.12

COPY src/ /app/
WORKDIR /app

RUN npm install

CMD [ "npm", "run", "start:prod" ]