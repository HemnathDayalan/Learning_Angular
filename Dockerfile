# #Download Node Alpine image
# FROM node:alpine As build
 
# #Setup the working directory
# WORKDIR D:/skills/Angular/Angular17/src/app
 
# #Copy package.json
# COPY package.json package-lock.json ./
 
# #Install dependencies
# RUN npm install
 
# #Copy other files and folder to working directory
# COPY . .
 
# #Build Angular application in PROD mode
# RUN npm run build --prod
 
# #Download NGINX Image
# FROM nginx:alpine
 
# #Copy built angular app files to NGINX HTML folder
# COPY --from=build D:/skills/Angular/Angular17/src/app /usr/share/nginx/html

FROM node:18-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080 

CMD ["npm", "start"] 