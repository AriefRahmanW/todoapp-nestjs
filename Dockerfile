FROM node:19-alpine as builder

RUN npm i -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY .env.example .env
COPY prisma ./prisma
RUN pnpm prisma generate

COPY . ./

RUN pnpm build

RUN chmod +x run.sh


CMD [ "/app/run.sh" ]