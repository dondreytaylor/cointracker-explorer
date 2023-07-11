##############
### build  ###
##############

# base image
FROM node:16-alpine as build

# set working directory
WORKDIR /application

# add `/application/node_modules/.bin` to $PATH
ENV PATH /application/node_modules/.bin:$PATH

# add app
COPY . /application

# install and cache app dependencies
COPY .npmrc /application/.npmrc
COPY package.json /application/package.json
# RUN npm install --no-package-lock
RUN npm install -g @angular/cli@~12.2.5 --no-package-lock

# generate build
# RUN npm run build:ssr

############
### prod ###
############

#FROM node:16-alpine

# Install CURL 
RUN apk --no-cache add curl

#WORKDIR /application

#COPY --from=build /application/package.json /application

# copy artifact build from the 'build environment'
#COPY --from=build /application/dist /application/dist
#COPY --from=build /application/dist_compressed /application/dist_compressed

# expose port 80
EXPOSE 80

ENV NODE_ENV production
CMD ["npm", "run", "serve:ssr"]