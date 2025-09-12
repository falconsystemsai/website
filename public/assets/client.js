import { jsx as _jsx } from "https://esm.sh/react@18.3.1/jsx-runtime";
import { hydrateRoot } from "https://esm.sh/react-dom@18.3.1/client";
import React from "https://esm.sh/react@18.3.1";
import { App } from "./App.js";
hydrateRoot(document, _jsx(App, {}));
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
    document.documentElement.classList.toggle("dark");
});
