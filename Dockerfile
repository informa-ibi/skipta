FROM node:14.17.1 as base
ARG ENVIRONMENT=stg
RUN pwd
WORKDIR /skipta-landing
RUN npm i && \
    npm run build
