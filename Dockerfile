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

FROM node:19-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist


CMD [  "pnpm" ,"prisma", "migrate", "deploy", "&&", "node", "dist/main" ]