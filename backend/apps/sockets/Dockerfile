FROM node:18.16.0 As development

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18.16.0 As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /src/app/dist ./dist

CMD ["node", "dist/apps/sockets/main"]