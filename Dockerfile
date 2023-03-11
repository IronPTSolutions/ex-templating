FROM node:18.14.2-alpine3.17

COPY . /opt/ex-templating
WORKDIR /opt/ex-templating
RUN npm ci --only=production

EXPOSE 3000

CMD ["npm", "start"]