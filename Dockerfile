# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
# COPY package.json ./
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build
# CMD ["npm", "run", "start"]

# production stage
FROM nginx:stable-alpine as production-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY ./docker/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]