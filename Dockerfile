FROM mhart/alpine-node:latest

WORKDIR /src

RUN npm i

RUN npm install -g nodemon

# CMD ["nodemon", "index.js"]
