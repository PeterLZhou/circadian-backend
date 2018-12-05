FROM node:8-slim
WORKDIR /server
ADD . /server
ADD ./.profile.d /app/.profile.d
RUN npm install -g typescript
RUN npm install -g prisma
RUN yarn
RUN prisma deploy && prisma generate
RUN tsc
# Add bash so we can ps:exec
RUN rm /bin/sh && ln -s /bin/bash /bin/sh