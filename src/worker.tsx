import { Hono } from "hono";
import React from "react";
import { App } from "./App";
import { renderToReadableStream } from "react-dom/server";
const app = new Hono();
app.get("*", async (c) => {
  const stream = await renderToReadableStream(<App />);
  return new Response(stream, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
});
export default app;
