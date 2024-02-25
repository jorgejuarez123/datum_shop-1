FROM node:18 AS build

USER root

RUN mkdir -p /app

# Set the working directory
WORKDIR /app

COPY . /app

# Install all Angular dependacies
RUN npm ci

WORKDIR /app/dist

# Stage 2: Serve app with nginx server
FROM ubi8/nginx-122

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/angulardummy /usr/share/nginx/html

CMD nginx -g "daemon off;"