FROM node:latest

#Create App Directory
WORKDIR /usr/src/app

#Copy Package JSON  and Install Dependencies
COPY package.json /usr/src/app
RUN npm install

#Copy APp Source
COPY . /usr/src/app

#Compile App Sources
RUN npm run build

#Expose Port and CMD
EXPOSE 3000
CMD ["npm", "start"]