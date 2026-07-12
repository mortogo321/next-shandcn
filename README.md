# Next.js Admin Dashboard Starter (shadcn/ui)

A Next.js admin dashboard boilerplate built on shadcn/ui and Radix primitives, with authentication and role-based dashboard layouts, deployed via a self-hosted GitHub Actions runner.

## What's inside

- Next.js application (`app/`) with a public welcome/onboarding screen, an email/password login flow (NextAuth), and an authenticated dashboard
- Role-based dashboard shells using Next.js parallel routes (`dashboard/@admin`, `@tenant`, `@user`, `@default`)
- shadcn/ui component library on Radix primitives: sidebar, command menu, forms (react-hook-form + zod), tables, dialogs, tooltips, and theme switching (light/dark)
- Dockerfile and per-environment Docker Compose configs (development/uat/production)
- A containerized, self-hosted GitHub Actions runner (`github-runner/`) with a deploy workflow that builds and restarts the app on push to `dev`/`main`

## Tech stack

- Next.js (App Router), React, TypeScript
- NextAuth for authentication
- shadcn/ui, Radix UI, Tailwind CSS
- react-hook-form + zod for form validation
- Docker / Docker Compose
- GitHub Actions self-hosted runner

## Quickstart

Local development:

```bash
git clone git@github.com:mortogo321/next-shandcn.git web
cd web/app
yarn
yarn auth secret
yarn dev
```

Containerized development:

```bash
cd web
docker compose -f docker/compose.development.yml up -d --build
```

App: http://localhost:8000

## Adding shadcn/ui components

```bash
yarn shadcn add button
yarn shadcn add input
```

## Self-hosted runner

```bash
cd web/github-runner
chmod +x *.sh
./start.sh
```

## Structure

```
app/                    # Next.js application
├── src/app/(public)    # Public welcome page
├── src/app/(auth)      # Login flow
├── src/app/dashboard   # Role-based dashboard (parallel routes)
└── src/components/ui   # shadcn/ui components
docker/                 # Per-environment Docker Compose files
github-runner/          # Self-hosted runner image and start script
```
