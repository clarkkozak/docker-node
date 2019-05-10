# Docker Node

Docker compose file for node projects.

# How to run

Get the repo
```
git clone git@gitlab.com:jasonribble/docker-node.git
``` 

Install the node_modules
```
cd docker-node/src && npm i
```

Run docker 
```
docker-compose -p node_project -f docker-compose.yml up
```

Now in the /src the index.js will run and update on changes thanks to nodemon.

Additionaly, it also runs a MongoDB instance. 
