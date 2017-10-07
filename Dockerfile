FROM node:alpine

WORKDIR /app
ADD ./package-lock.json ./package.json ./server.js /app/
ADD ./pages /app/pages
ADD ./components /app/components
ADD ./static /app/static

RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
