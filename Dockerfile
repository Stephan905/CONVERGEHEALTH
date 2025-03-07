FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# If using npm comment out above and use below instead
RUN npm run build

# Production image, copy all the files and run next
FROM nginx:latest AS runner
WORKDIR /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/dist .
COPY ./Prototype1_v1_2025-Mar-01_07-14-48PM_CustomizedView6773083208_strip.html index.html
