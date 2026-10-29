FROM node:25-alpine AS dependencies
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

FROM dependencies AS build
COPY . .
RUN npm run build

FROM nginx:1.29-alpine AS release
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
RUN sed -i 's/listen       80;/listen       3000;/' /etc/nginx/conf.d/default.conf

EXPOSE 3000
