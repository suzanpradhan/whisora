# Use an official Node.js runtime as a base image
FROM node:iron-trixie-slim AS development

# set working directory
WORKDIR /usr/src/app

# copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json yarn.lock ./

# install dependencies
# --frozen-lockfile ensures that the exact versions in yarn.lock are installed
RUN yarn install --frozen-lockfile

# copy the rest of the application code to the working directory
COPY . .

# build the application
RUN yarn build

# expose the port the app runs on
EXPOSE 3000

# start the application
CMD ["yarn", "run", "start:dev"]