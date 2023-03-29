FROM node:16-alpine
RUN npm install -g @angular/cli@14.2.11
USER node
WORKDIR /app
EXPOSE 4200
CMD ["ng","serve","--host","0.0.0.0", "--poll", "100"]
