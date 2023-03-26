FROM node:19-alpine as base

RUN npm i -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

ENV DATABASE_URL mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DBNAME}

COPY prisma ./prisma
RUN pnpm prisma generate

COPY . ./

RUN pnpm build

# RUN pnpm prune --prod

# FROM base AS dependencies

# WORKDIR /app
# COPY package.json pnpm-lock.yaml ./
# RUN pnpm install

# FROM base AS build

# WORKDIR /app
# COPY . .
# COPY --from=dependencies /app/node_modules ./node_modules
# COPY --from=dependencies /app/prisma ./prisma
# RUN pnpm build
# RUN pnpm prune --prod

# FROM base AS deploy

# WORKDIR /app
# COPY --from=build /app/dist/ ./dist/
# # COPY --from=build /app/node_modules ./node_modules

CMD [  "pnpm" ,"prisma", "migrate", "deploy", "&&", "node", "./dist/main" ]