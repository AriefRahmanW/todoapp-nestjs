FROM node:19-alpine

RUN npm i -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY .env.example .env
COPY prisma ./prisma
RUN pnpm prisma generate

COPY . ./

RUN pnpm build

COPY dist ./dist
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

CMD [  "pnpm" ,"prisma", "migrate", "deploy", "&&", "node", "dist/main" ]