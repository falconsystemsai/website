const phrases = ["teaming with AI", "embracing the future", "unlocking potential"];
const tagline = document.getElementById("rotating-tagline");
let idx = 0;
setInterval(() => {
  idx = (idx + 1) % phrases.length;
  tagline.classList.add("opacity-0");
  setTimeout(() => {
    tagline.textContent = phrases[idx];
    tagline.classList.remove("opacity-0");
  }, 500);
}, 3000);

document.getElementById("theme-toggle")?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

document.getElementById("year").textContent = new Date().getFullYear();
