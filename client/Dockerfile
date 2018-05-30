FROM node:latest

#Create App Directory
WORKDIR /usr/src/web-client

#Copy Package JSON  and Install Dependencies
COPY package.json /usr/src/web-client
RUN npm install --production

#Copy APp Source
COPY . /usr/src/web-client

#Expose Port and CMD
EXPOSE 5000
CMD ["npm", "start"]