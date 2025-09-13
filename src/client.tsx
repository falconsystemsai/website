import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App";
import { LeapsPicker } from "./LeapsPicker";
import "./index.css";

function boot() {
  try {
    const el = document.getElementById("root");
    if (!el) throw new Error("#root not found");
    const pathname = window.location.pathname;
    const Page = pathname === "/leapspicker" ? LeapsPicker : App;
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
