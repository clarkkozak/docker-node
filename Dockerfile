FROM mhart/alpine-node:latest

WORKDIR /src

RUN npm install -g nodemon

RUN npm i

# CMD ["nodemon", "index.js"]
