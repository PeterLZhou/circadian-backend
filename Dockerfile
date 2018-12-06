FROM node:8-slim
WORKDIR /app
ADD . /app
RUN npm install -g typescript
RUN npm install -g prisma@1.19.3
RUN npm install -g graphqlgen
RUN yarn
ENV PRISMA_ENDPOINT https://circadian-backend-301139419b.herokuapp.com/
ENV PRISMA_MANAGEMENT_API_SECRET ee1ef00cac86fbe6071172af3175f799cefac376
RUN prisma generate && prisma deploy && graphqlgen && tsc