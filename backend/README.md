# Backend — PostgreSQL + Docker Setup Guide

The database runs as a Docker container. No cloud account needed — everything runs on your own machine or server.

---

## Requirements

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (or Docker Engine on Linux)
- Node.js 18+

---

## Step 1 — Start PostgreSQL with Docker

From the **project root** (`axil-os-survey/`):

```bash
docker compose up -d
```

This starts a PostgreSQL 16 container named `axil-survey-db` with:

| Setting | Value |
|---|---|
| Host | `localhost` |
| Port | `5432` |
| Database | `axil_survey` |
| User | `axil` |
| Password | `axilpassword` |

Your `DATABASE_URL` is therefore:
```
postgresql://axil:axilpassword@localhost:5432/axil_survey
```

> To change the credentials, edit `docker-compose.yml` and update `DATABASE_URL` in `frontend/.env.local` to match.

---

## Step 2 — Configure the frontend

```bash
cd frontend
cp .env.local.example .env.local
```

`.env.local` should look like this:

```env
DATABASE_URL=postgresql://axil:axilpassword@localhost:5432/axil_survey
ADMIN_PASSWORD=choose-a-strong-password
```

---

## Step 3 — Run database migrations

```bash
cd frontend
npx prisma migrate dev --name init
```

This creates the `survey_responses` table and all indexes automatically. Prisma reads `prisma/schema.prisma` and handles everything.

---

## Step 4 — Start the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Useful commands

| Command | What it does |
|---|---|
| `docker compose up -d` | Start the database |
| `docker compose down` | Stop the database (data is preserved) |
| `docker compose down -v` | Stop and **delete all data** (dev reset) |
| `npx prisma studio` | Open a visual database browser at localhost:5555 |
| `npx prisma migrate dev` | Apply new migrations after schema changes |
| `npx prisma db push` | Sync schema without creating a migration (prototyping) |

---

## Data persistence

PostgreSQL data is stored in a Docker volume (`postgres_data`). It persists across container restarts. To fully reset the database:

```bash
docker compose down -v        # remove the volume
docker compose up -d          # start fresh
cd frontend && npx prisma migrate dev --name init
```

---

## Deploying to a server

On any Linux server with Docker:

1. Copy the project files.
2. Run `docker compose up -d` to start Postgres.
3. Set `DATABASE_URL` in your environment pointing to the container.
4. Run `npx prisma migrate deploy` (production-safe, no prompts).
5. Start the Next.js app with `npm run build && npm start`.
