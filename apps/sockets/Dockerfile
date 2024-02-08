FROM node:18.16.0

WORKDIR /app/sockets

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start"]