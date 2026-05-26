FROM node:20-alpine AS builder

WORKDIR /app

COPY frontend/package*.json ./
RUN npm ci

COPY frontend/ ./

RUN npx prisma generate && npx next build

# ── Production image ──────────────────────────────────────────────
FROM node:20-alpine AS runner

RUN apk add --no-cache openssl

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/scripts ./scripts

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node scripts/create-admin.mjs --email=${ADMIN_EMAIL} --password=${ADMIN_PASSWORD} --name='Axil Admin' || true && npx next start -p ${PORT:-3000}"]
