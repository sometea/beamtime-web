FROM node:24-alpine as builder
WORKDIR /code/
ADD package-lock.json .
ADD package.json .
RUN npm ci
ADD . .
RUN npm run build

FROM docker.io/lipanski/docker-static-website:latest
COPY --from=builder /code/_site/ .