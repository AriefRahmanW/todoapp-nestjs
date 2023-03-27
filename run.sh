#!/bin/bash

pnpm prisma migrate deploy
node dist/main