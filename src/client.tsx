import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App";
import { LeapsPicker } from "./LeapsPicker";
import { normalizePath } from "./utils";
import "./index.css";

function boot() {
  try {
    const el = document.getElementById("root");
    if (!el) throw new Error("#root not found");
    const path = normalizePath(window.location.pathname);
    const Page = path === "/leapspicker" ? LeapsPicker : App;
    hydrateRoot(el, <Page />);
  } catch (e) {
    console.error("Hydration failed:", e);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
