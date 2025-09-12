import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

function boot() {
  try {
    const el = document.getElementById("root");
    if (!el) throw new Error("#root not found");
    hydrateRoot(el, <App />);
  } catch (e) {
    console.error("Hydration failed:", e);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
