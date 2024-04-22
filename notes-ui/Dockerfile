FROM node:14-alpine

WORKDIR /app

RUN npm install react react-dom react-router-dom react-scripts web-vitals

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

