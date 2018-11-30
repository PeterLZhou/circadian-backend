FROM node:8-slim
ADD . /server
WORKDIR /server
RUN npm install -g typescript
RUN yarn
RUN tsc
EXPOSE 4000
CMD [ "node", "-r", "dotenv/config", "dist/index.ts"]