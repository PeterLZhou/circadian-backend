FROM node:8-slim
RUN npm install -g typescript
RUN yarn
RUN tsc
ADD . /server
WORKDIR /server
EXPOSE 4000
CMD [ "node", "dist/index.ts"]