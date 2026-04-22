# Axil OS — Operations Discovery

Internal department survey application for Axil Scientific.

Built with **Next.js 14**, **TypeScript**, **Chakra UI**, **Prisma**, and **PostgreSQL** (Docker).

---

## Project Structure

```
axil-os-survey/
├── docker-compose.yml     # PostgreSQL service — run this first
├── frontend/              # Next.js application
│   ├── prisma/
│   │   └── schema.prisma  # Database schema (single source of truth)
│   └── src/
│       ├── app/           # Pages + API routes
│       ├── components/    # UI components
│       ├── hooks/         # useSurveyState
│       ├── lib/           # prisma.ts, questions/, adminAuth.ts
│       ├── types/         # Shared TypeScript types
│       └── utils/         # csvExport, formatDate
└── backend/
    └── README.md          # Database setup guide
```

---

## Quick Start

### 1. Start the database

Requires [Docker](https://www.docker.com/products/docker-desktop/) installed.

```bash
# From the project root
docker compose up -d
```

### 2. Configure environment

```bash
cd frontend
cp .env.local.example .env.local
# Edit .env.local — set ADMIN_PASSWORD to whatever you want
```

The `DATABASE_URL` is pre-filled with the Docker defaults. No changes needed unless you customised `docker-compose.yml`.

### 3. Install and migrate

```bash
npm install
npx prisma migrate dev --name init
```

### 4. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Admin Panel

Visit `/admin` and enter your `ADMIN_PASSWORD` to:
- View all submissions grouped by department
- Read any individual response in full
- Export all data as a CSV

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 14 App Router |
| UI | Chakra UI v2 + Framer Motion |
| ORM | Prisma |
| Database | PostgreSQL 16 (Docker) |
| Auth (admin) | HTTP-only cookie session |

---

## Adding or editing questions

Each department's questions live in a single file:

```
frontend/src/lib/questions/
├── production.ts    (28 questions)
├── warehouse.ts     (25 questions)
├── qc.ts            (28 questions)
├── finance.ts       (26 questions)
├── customerCare.ts  (31 questions)
└── preSales.ts      (23 questions)
```

No database changes needed when editing questions — answers are stored as JSON keyed by question ID.

---

## Deployment

See [`backend/README.md`](./backend/README.md) for server deployment instructions.
