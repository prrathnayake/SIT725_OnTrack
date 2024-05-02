FROM node:latest

WORKDIR /usr/src/projects/OnTrack

RUN apt-get update
COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]