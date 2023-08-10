
FROM node:16.20.1-alpine3.18 As build-stage
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps && npm run build 
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /app/build/ .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]