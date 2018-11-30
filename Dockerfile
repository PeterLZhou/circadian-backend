FROM node:8-slim
WORKDIR /server
ADD . /server
RUN npm install -g typescript
RUN npm install -g prisma
RUN npm install -g graphqlgen
RUN yarn
RUN prisma deploy
RUN prisma generate
RUN grapqlgen
RUN tsc
EXPOSE 4000
CMD [ "node", "dist/index.js"]