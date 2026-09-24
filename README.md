# Next.js Admin Dashboard Starter (shadcn/ui)

![CI](https://github.com/mortogo321/next-shandcn/actions/workflows/ci.yml/badge.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.3.6-black)
![React](https://img.shields.io/badge/React-19.3.0-61dafb)
![Bun](https://img.shields.io/badge/Bun-1.4.2-f9f1e1)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6)
![License](https://img.shields.io/badge/license-MIT-green)

Next.js admin dashboard boilerplate on shadcn/ui + Radix primitives, with NextAuth email/password login and role-based dashboard layouts (parallel routes). Bun-first toolchain, strict TypeScript, standalone Docker builds, and CI (lint + typecheck + test + build + docker).

## What's inside

- Next.js App Router (`app/`) — public landing, email/password login (NextAuth), authenticated dashboard
- Role-based dashboard shells via parallel routes (`dashboard/@admin`, `@tenant`, `@user`, `@default`)
- shadcn/ui on Radix: sidebar, command menu, forms (react-hook-form + zod), tables, dialogs, tooltips, light/dark theming
- Middleware auth guard with `NEXT_PUBLIC_WHITELIST_PATHS` + `session` cookie role redirect
- `GET /api/health` for Docker / load-balancer checks
- Vitest unit tests (`auth`, `utils`); strict TS (`noUncheckedIndexedAccess`)
- Standalone Docker builds (Bun build → Node 26 non-root runtime) + per-env Compose files
- GitHub Actions CI + Dependabot; self-hosted runner image retained in `github-runner/`

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.3.6 (App Router, standalone output) |
| UI | React 19.3.0, shadcn/ui (new-york), Radix, Tailwind CSS 4.3 |
| Auth | NextAuth 4.24, middleware cookie guard |
| Forms | react-hook-form 7.88 + zod 4.6 + @hookform/resolvers |
| Toolchain | Bun 1.4.2, TypeScript 5.9, ESLint 9 (flat, `eslint-config-next`) |
| Tests | Vitest 4 |
| Infra | Docker multi-stage, Compose (dev/uat/prod), GitHub Actions |

> Notes: ESLint is pinned to v9 because `eslint-config-next`'s React plugin chain is not yet compatible with ESLint 10; TypeScript is pinned to 5.9 because `typescript-estree` does not yet support the TS 7 native port. Both pins are revisited via Dependabot.

## Quickstart

Prerequisites: Bun 1.4.2+, Node 26+ (`.nvmrc`), Docker (for containers).

```bash
git clone https://github.com/mortogo321/next-shandcn.git web
cd web/app
cp .env.example .env.local   # set AUTH_SECRET (openssl rand -base64 32)
bun install
bun run dev
```

App: http://localhost:3000 — health: http://localhost:3000/api/health

Useful scripts (`app/`):

```bash
bun run lint        # eslint .
bun run typecheck   # tsc --noEmit
bun run test        # vitest run
bun run quality     # lint + typecheck + test
bun run build       # next build (standalone)
```

Env vars:

| Var | Purpose |
|---|---|
| `AUTH_SECRET` | NextAuth secret — **required at runtime** (never commit) |
| `NEXTAUTH_URL` | Public app URL |
| `NEXT_PUBLIC_WHITELIST_PATHS` | Comma-separated public paths (default `/,/login,/register,/forgot-password,/terms,/about`) |
| `NODE_ENV` | `development` / `production` (via `.env.*` files) |

## Docker

Images are built from `app/` (standalone output, non-root `appuser`, `/api/health` checks):

```bash
# dev (hot reload, bind mount)
docker compose -f docker/compose.development.yml up --build

# uat / prod (require AUTH_SECRET in environment)
AUTH_SECRET=$(openssl rand -base64 32) docker compose -f docker/compose.uat.yml up --build -d
AUTH_SECRET=$(openssl rand -base64 32) docker compose -f docker/compose.production.yml up --build -d
```

Direct builds:

```bash
docker build --target development -t next-shandcn:dev ./app
docker build --target uat -t next-shandcn:uat ./app
docker build --target production -t next-shandcn:prod ./app
```

## Adding shadcn/ui components

```bash
cd app
bunx shadcn@latest add button
bunx shadcn@latest add input
```

## Self-hosted runner (optional)

The `github-runner/` image is retained for repos that deploy from a self-hosted host. The default deploy workflow is disabled; CI (`ci.yml`) is the source of truth.

```bash
cd github-runner
# set GH_RUNNER_URL / GH_RUNNER_TOKEN / GH_RUNNER_NAME, then:
chmod +x *.sh
./github-runner.sh
```

## Structure

```
app/                      # Next.js application (Bun workspace)
├── src/app/(public)      # Public landing + terms
├── src/app/(auth)        # Login flow
├── src/app/dashboard    # Role-based dashboard (parallel routes)
├── src/app/api/health   # Container health endpoint
├── src/components/ui    # shadcn/ui primitives
├── src/lib/auth.ts      # Cookie session helpers (+ tests)
├── Dockerfile           # Bun build → Node 26 runtime (dev/uat/production)
├── vitest.config.ts
└── .env.example
docker/                   # Compose per env (development/uat/production)
github-runner/            # Self-hosted runner image + scripts
.github/workflows/ci.yml  # lint + typecheck + test + build + docker
```

## License

MIT — see [LICENSE](LICENSE).
