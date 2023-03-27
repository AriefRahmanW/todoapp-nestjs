#!/usr/bin/env bash

pnpm prisma migrate deploy
node dist/main
