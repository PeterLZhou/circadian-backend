FROM node:8-slim
ADD . /server
WORKDIR /server
RUN npm install -g typescript
RUN tsc
RUN yarn
EXPOSE 4000
CMD [ "node", "-r", "dotenv/config", "dist/index.ts"]