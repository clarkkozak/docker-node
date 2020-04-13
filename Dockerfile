FROM mhart/alpine-node:12.2.0

WORKDIR /src

RUN npm i

RUN npm install -g nodemon

# CMD ["nodemon", "index.js"]
