FROM node:14.17.1 as base
ARG ENVIRONMENT=prod
ADD . /app
WORKDIR /app
RUN npm i && \
    npm run build
