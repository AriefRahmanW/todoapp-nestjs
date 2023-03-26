FROM node:19-alpine as base

RUN npm i -g pnpm

ENV DATABASE_URL mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DBNAME}

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
# COPY prisma ./prisma
RUN pnpm install

FROM base AS build

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

RUN pnpm prisma generate
RUN pnpm build

FROM base as deploy

WORKDIR /app
COPY --from=build /app/dist/ ./dist/
COPY --from=build /app/node_modules ./node_modules

EXPOSE $PORT

CMD [  "pnpm" ,"prisma", "migrate", "deploy", "&&", "node", "dist/main" ]