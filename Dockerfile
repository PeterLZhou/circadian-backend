FROM node:8-slim
WORKDIR /server
ADD . /server
ADD ./.profile.d /app/.profile.d
RUN npm install -g typescript
RUN npm install -g prisma
RUN yarn
ENV PRISMA_ENDPOINT https://circadian-backend-301139419b.herokuapp.com/
ENV PRISMA_MANAGEMENT_API_SECRET ee1ef00cac86fbe6071172af3175f799cefac376
RUN prisma deploy && prisma generate
RUN tsc
# Add bash so we can ps:exec
RUN rm /bin/sh && ln -s /bin/bash /bin/sh