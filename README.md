# Falcon Systems – Cloudflare Workers SSR (React + Hono)

This repository contains a minimal example of **server‑side rendering (SSR) with React 18 on Cloudflare Workers** using the [Hono](https://hono.dev) framework.

## Features
- Cloudflare Workers native SSR (no Node APIs)
- React 18 streaming rendering via `renderToReadableStream`
- Simple `/api/contact` POST endpoint (logs submissions; replace with email/CRM)
- Minimal HTML/CSS scaffold – drop your own components into `App.tsx`
- Optional client‑side hydration with Vite (instructions in comments)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Local development
```bash
npm run dev
```
This starts a local Cloudflare Workers dev server.

### 3. Deploy to Cloudflare
```bash
npm run deploy
```

### 4. Customize the app
Edit `src/App.tsx` to include your full landing page content (Tailwind/shadcn UI, etc.).  
If you want to add hydration (client‑side React), follow the commented steps in `src/worker.tsx`.

## Project Structure
```
falconsystems-workers-ssr/
├── package.json
├── wrangler.toml
├── tsconfig.json
└── src/
    ├── App.tsx
    └── worker.tsx
```

## Optional Hydration with Vite
- Install Vite and `@vitejs/plugin-react`
- Add `vite.config.ts`
- Build your client bundle with `npx vite build`
- Enable `[assets]` in `wrangler.toml` to serve static files

## License
MIT
