import { hydrateRoot } from "react-dom/client";
import React from "react";
import { App } from "./App";

hydrateRoot(document, <App />);

const phrases = ["teaming with AI", "embracing the future", "unlocking potential"];
const el = document.getElementById("rotating-tagline");
let idx = 0;
setInterval(() => {
  idx = (idx + 1) % phrases.length;
  el?.classList.add("opacity-0");
  setTimeout(() => {
    if (el) {
      el.textContent = phrases[idx];
      el.classList.remove("opacity-0");
    }
  }, 500);
}, 3000);

document.getElementById("theme-toggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
