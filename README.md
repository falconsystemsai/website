# Falcon Systems site

Server-rendered React site for Cloudflare Pages using Pages Functions and Hono.

## Development

```bash
npm install
npm run build
npm run dev:pages
```

Visit the URL shown by Wrangler. `/_health` should return `ok`.

## Deploy

```bash
npm run deploy:pages
```

## Structure
```
functions/
  [[path]].ts
src/
  App.tsx
  shell.tsx
  client.tsx
  index.css
```
