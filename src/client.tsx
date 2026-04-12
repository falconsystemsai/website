import React from "react";
import { hydrateRoot } from "react-dom/client";
import { resolvePage } from "./routes";
import "./index.css";

function boot() {
  try {
    const el = document.getElementById("root");
    if (!el) throw new Error("#root not found");
    const page = resolvePage(window.location.pathname);
    hydrateRoot(el, page);
  } catch (e) {
    console.error("Hydration failed:", e);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
