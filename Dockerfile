FROM node:8-slim
ADD . /server
WORKDIR /server
RUN yarn
EXPOSE 4000
CMD [ "ts-node", "-r", "dotenv/config", "src/index.ts"]