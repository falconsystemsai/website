import { Hono } from "hono";
import React from "react";
import { renderToReadableStream } from "react-dom/server";
import { Html } from "./shell";
import { App } from "./App";
import { LeapsPicker } from "./LeapsPicker";
import { normalizePath } from "./utils";

type Env = { ASSETS: Fetcher };

const app = new Hono<{ Bindings: Env }>();

// Health check
app.get("/_health", (c) => c.text("ok"));

// Serve built static assets (Vite output under dist/assets)
app.get("/assets/*", (c) => c.env.ASSETS.fetch(c.req.raw));

// SSR catch-all
app.get("*", async (c) => {
  try {
    const url = new URL(c.req.url);
    const path = normalizePath(url.pathname);
    const page = path === "/leapspicker" ? <LeapsPicker /> : <App />;
    const stream: any = await renderToReadableStream(<Html>{page}</Html>, {
      onError(err) {
        console.error("SSR error:", err);
      },
    });
    if (stream.allReady) await stream.allReady; // ensure content before responding
    return new Response(stream, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (err) {
    console.error("Render failure:", err);
    return c.text("Server error rendering page", 500);
  }
});

export default app;
