FROM mhart/alpine-node:latest
WORKDIR /app
RUN ls -la
COPY . .
RUN ls -la __tests__/lib
RUN npm run unit
