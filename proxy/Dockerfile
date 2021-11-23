FROM node:alpine

# create the directory inside the container
WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
COPY . .

RUN apk add --no-cache python3 py3-pip
RUN apk add --no-cache make
RUN apk add --no-cache g++

# run npm install in our local machine
RUN npm install -g npm@latest
RUN npm install -g
RUN npm install --save


#COPY --chown=node:node . .
RUN chown -R 1000:1000 "/root/.npm"
COPY . /usr/src/app

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 80

# the command that starts our app
CMD ["node", "index"]


























































































