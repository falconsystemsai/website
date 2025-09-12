import { Hono } from "hono";
import React from "react";
import { renderToReadableStream } from "react-dom/server";
import { Html } from "../src/shell";
import { App } from "../src/App";

const app = new Hono();

// Health check
app.get("/_health", (c) => c.text("ok"));

// SSR route (catch-all for app pages)
app.get("*", async (c) => {
  try {
    const stream: any = await renderToReadableStream(<Html><App /></Html>, {
      onError(err) {
        console.error("SSR error:", err);
      },
    });
    // Avoid returning before content is ready
    if ((stream as any).allReady) await (stream as any).allReady;
    return new Response(stream, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (err) {
    console.error("Render failure:", err);
    return c.text("Server error rendering page", 500);
  }
});

export const onRequest: PagesFunction = async (ctx) => {
  const url = new URL(ctx.request.url);
  // Let Pages serve built static assets directly
  if (url.pathname.startsWith("/assets/")) {
    return ctx.next();
  }
  return app.fetch(ctx.request, ctx.env, ctx);
};
