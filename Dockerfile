FROM node:8-slim
WORKDIR /server
ADD . /server
RUN npm install -g typescript
RUN yarn
RUN tsc
EXPOSE 4000 4466
CMD [ "node", "dist/index.js"]