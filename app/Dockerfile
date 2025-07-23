ARG IMAGE=node:alpine
ARG PORT=3000

# base
FROM ${IMAGE} AS base

WORKDIR /app

RUN apk update && apk add --no-cache curl libc6-compat openssl

COPY ../app/package.json ../app/yarn.lock ./

RUN yarn install --frozen-lockfile

# builder
FROM base AS builder

WORKDIR /app

COPY ../app .

RUN echo "AUTH_SECRET=\"$(openssl rand -base64 32)\"" > .env.local

RUN yarn build

# runtime
FROM ${IMAGE} AS runtime

WORKDIR /app

ARG PORT
ENV PORT=${PORT}

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json package.json

EXPOSE ${PORT}

# uat
FROM runtime AS uat

COPY --from=builder /app/.env.uat .env
COPY --from=builder /app/.env.local .

CMD ["yarn", "start"]

# production
FROM runtime AS production

COPY --from=builder /app/.env.production .env
COPY --from=builder /app/.env.local .

CMD ["yarn", "start"]
