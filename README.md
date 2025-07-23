# Next.js - Shadcn
- Next.js

## Development
``` bash
# installation
git clone git@github.com:mortogo321/next-shandcn.git web
cd web/app
yarn
yarn auth secret
```

## Shadcn UI component
``` bash
# button
yarn shadcn add button

# input
yarn shadcn add input
```

## Dockerize
``` bash
cd web

# up
docker compose -f "docker/compose.development.yml" up -d --build

# down
docker compose -f "docker/compose.development.yml" down --rmi all --remove-orphans
```

## Services
APP: http://localhost:3000
