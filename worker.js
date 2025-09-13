// Falcon Systems — Single-file Cloudflare Worker that serves a flashy landing page
// Save this as worker.js and deploy with wrangler (see steps below).

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Simple router: all paths serve the landing page (handy for anchors like /#features)
    if (request.method === 'GET') {
      return new Response(indexHTML, { headers: htmlHeaders });
    }

    return new Response('Method Not Allowed', { status: 405 });
  }
};

const htmlHeaders = {
  'content-type': 'text/html; charset=UTF-8',
  // Conservative CSP that allows inline CSS/JS used below and Google Fonts
  'Content-Security-Policy': [
    "default-src 'self'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data:",
    "script-src 'self' 'unsafe-inline'",
    "connect-src 'self'",
    "frame-ancestors 'none'"
  ].join('; '),
  'Cache-Control': 'public, max-age=300',
};

const indexHTML = /* html */ `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Falcon Systems — Practical AI for Business</title>
  <meta name="description" content="Falcon Systems builds a practical framework for interacting with AI—curriculum, teachings, and a sandboxed managed environment so teams can learn, experiment, and ship safely." />
  <meta property="og:title" content="Falcon Systems — Practical AI for Business" />
  <meta property="og:description" content="Curriculum, teachings, and a managed sandbox to help teams leverage AI safely and effectively." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="data:image/svg+xml,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAwJyBoZWlnaHQ9JzYzMCc+PHJlY3Qgd2lkdGg9JzEyMDAnIGhlaWdodD0nNjMwJyBmaWxsPSIjMDBhNWZkIi8+PC9zdmc+" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #06070a;
      --card: rgba(255,255,255,0.06);
      --card-2: rgba(255,255,255,0.08);
      --text: #ecf0ff;
      --muted: #a9b0c6;
      --brand: #5de3ff; /* electric cyan */
      --brand-2: #9f7bff; /* violet */
      --accent: #00ffa3; /* mint */
      --warn: #ffb057;
      --shadow: 0 10px 30px rgba(0,0,0,.45);
      --radius: 18px;
    }

    * { box-sizing: border-box; }
    html, body { height: 100%; }
    body {
      margin: 0; font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
      color: var(--text); background: var(--bg); overflow-x: hidden;
    }

    /* === Animated background layers === */
    .bg-wrap { position: fixed; inset: 0; z-index: -1; overflow: hidden; }
    .gradient {
      position: absolute; inset: -20%;
      background: conic-gradient(from 180deg at 50% 50%, #0b1220, #0a1333, #0b1e44, #0b1220);
      filter: blur(80px) saturate(1.3); animation: spin 30s linear infinite;
      opacity: .75;
    }
    @keyframes spin { to { transform: rotate(1turn); } }

    .grid {
      position: absolute; inset: 0; pointer-events: none; opacity: .25;
      background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
      background-size: 48px 48px, 48px 48px;
      mask-image: radial-gradient(ellipse at center, black 40%, transparent 75%);
    }

    canvas#stars { position: absolute; inset: 0; opacity: .6; }

    /* === Layout === */
    .container { max-width: 1200px; margin: 0 auto; padding: 24px; }
    header.nav { position: sticky; top: 0; z-index: 50; backdrop-filter: blur(10px) saturate(1.2);
      background: linear-gradient(to bottom, rgba(6,7,10,.75), rgba(6,7,10,.3)); border-bottom: 1px solid rgba(255,255,255,.06);
    }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 24px; }
    .brand { display: flex; align-items: center; gap: 12px; text-decoration: none; color: var(--text); }
    .brand svg { width: 28px; height: 28px; filter: drop-shadow(0 4px 12px rgba(93,227,255,.45)); }
    .brand span { font-weight: 700; letter-spacing: .5px; }
    .nav-links a { color: var(--muted); text-decoration: none; margin: 0 12px; font-weight: 500; }
    .nav-links a:hover { color: var(--text); }

    .cta-btn { padding: 10px 16px; border-radius: 999px; border: 1px solid rgba(255,255,255,.14);
      background: linear-gradient(135deg, rgba(93,227,255,.18), rgba(159,123,255,.18));
      box-shadow: inset 0 1px 0 rgba(255,255,255,.15), 0 6px 20px rgba(95,155,255,.12);
      color: var(--text); font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
    }
    .cta-btn:hover { transform: translateY(-1px); box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 10px 28px rgba(95,155,255,.18); }

    /* === Hero === */
    .hero { padding: 72px 24px 36px; text-align: center; position: relative; }
    .eyebrow { display: inline-flex; gap: 8px; align-items: center; padding: 8px 12px; border-radius: 999px; background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.12); color: var(--muted); font-weight: 600; }
    .eyebrow .dot { width: 8px; height: 8px; border-radius: 100%; background: radial-gradient(circle at 30% 30%, var(--brand), transparent 70%); }

    h1.display { font-size: clamp(40px, 8vw, 84px); line-height: 1.03; margin: 18px 0; letter-spacing: -1px; font-weight: 900; }
    .gradient-text { background: linear-gradient(92deg, var(--brand), var(--brand-2) 40%, var(--accent) 80%);
      -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(0 6px 24px rgba(93,227,255,.25)); }
    .subhead { color: var(--muted); font-size: clamp(16px, 2.4vw, 20px); max-width: 900px; margin: 0 auto 24px; }

    .hero-ctas { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 14px; }
    .btn-primary { background: linear-gradient(135deg, var(--brand), var(--brand-2)); border: none; }

    /* Floating orbs */
    .orbs { position: absolute; inset: 0; pointer-events: none; }
    .orb { position: absolute; width: 200px; height: 200px; border-radius: 50%; filter: blur(30px); opacity: .35; }
    .orb.cyan { background: radial-gradient(circle, rgba(93,227,255,.9), rgba(93,227,255,0) 60%); top: -20px; left: -20px; animation: float 28s ease-in-out infinite; }
    .orb.violet { background: radial-gradient(circle, rgba(159,123,255,.85), rgba(159,123,255,0) 60%); bottom: -40px; right: 0; animation: float 26s ease-in-out infinite reverse; }
    .orb.mint { background: radial-gradient(circle, rgba(0,255,163,.85), rgba(0,255,163,0) 60%); top: 30%; left: 70%; animation: float 32s ease-in-out infinite; }
    @keyframes float { 0%,100%{ transform: translate3d(0,0,0); } 50%{ transform: translate3d(0,-30px,0); } }

    /* === Feature cards === */
    section { padding: 64px 0; }
    .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 24px; }
    @media (max-width: 980px) { .cards { grid-template-columns: 1fr; } }

    .card { background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
      border: 1px solid rgba(255,255,255,.14); border-radius: var(--radius); padding: 22px; box-shadow: var(--shadow);
      position: relative; overflow: hidden; transform-style: preserve-3d; transition: transform .25s ease, box-shadow .25s ease; }
    .card:hover { transform: translateY(-2px); box-shadow: 0 20px 50px rgba(0,0,0,.55); }
    .card:before { content: ""; position: absolute; inset: -1px; border-radius: inherit; padding: 1px;
      background: linear-gradient(135deg, rgba(93,227,255,.6), rgba(159,123,255,.6)); mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); mask-composite: exclude; opacity: .6; }
    .icon { width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center; margin-bottom: 10px;
      background: linear-gradient(135deg, rgba(93,227,255,.2), rgba(159,123,255,.2)); border: 1px solid rgba(255,255,255,.16); }
    .card h3 { margin: 6px 0 6px; }
    .card p { color: var(--muted); }

    /* === Marquee === */
    .marquee { margin-top: 36px; overflow: hidden; border: 1px solid rgba(255,255,255,.12); border-radius: var(--radius); background: rgba(255,255,255,.04); }
    .marquee-track { display: flex; gap: 48px; padding: 16px 24px; animation: scroll 28s linear infinite; will-change: transform; }
    @keyframes scroll { to { transform: translateX(-50%); } }
    .pill { padding: 8px 14px; border-radius: 999px; border: 1px dashed rgba(255,255,255,.25); color: var(--muted); white-space: nowrap; }

    /* === Steps === */
    .steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-top: 18px; }
    @media (max-width: 980px) { .steps { grid-template-columns: 1fr; } }
    .step { background: var(--card); border: 1px solid rgba(255,255,255,.12); border-radius: var(--radius); padding: 22px; }
    .step b { color: var(--text); }

    /* === CTA band === */
    .cta-band { background: linear-gradient(135deg, rgba(93,227,255,.18), rgba(159,123,255,.18)); border: 1px solid rgba(255,255,255,.18);
      border-radius: var(--radius); padding: 24px; display: grid; grid-template-columns: 2fr 1fr; align-items: center; gap: 12px; box-shadow: var(--shadow); }
    @media (max-width: 980px) { .cta-band { grid-template-columns: 1fr; text-align: center; } }
    .cta-band input[type=email] {
      width: 100%; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,.18); background: rgba(6,7,10,.6);
      color: var(--text); outline: none; box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
    }
    .cta-band button { padding: 12px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,.18);
      background: linear-gradient(135deg, var(--brand), var(--brand-2)); color: var(--text); font-weight: 700; cursor: pointer; }

    /* === Footer === */
    footer { padding: 48px 24px; color: var(--muted); border-top: 1px solid rgba(255,255,255,.08); }
    .foot { display: flex; gap: 16px; align-items: center; justify-content: space-between; flex-wrap: wrap; }
    .small { font-size: 12px; opacity: .8; }
  </style>
</head>
<body>
  <div class="bg-wrap">
    <div class="gradient"></div>
    <canvas id="stars"></canvas>
    <div class="grid"></div>
  </div>

  <header class="nav">
    <div class="nav-inner container">
      <a class="brand" href="#top" aria-label="Falcon Systems home">
        ${logoSVG()}
        <span>Falcon Systems</span>
      </a>
      <nav class="nav-links">
        <a href="#features">Framework</a>
        <a href="#how">How it works</a>
        <a href="#contact">Get in touch</a>
      </nav>
      <a class="cta-btn" href="#contact">Book a demo →</a>
    </div>
  </header>

  <main id="top" class="container">
    <section class="hero" aria-labelledby="hero-title">
      <span class="eyebrow"><span class="dot"></span> Practical AI, safely deployed</span>
      <h1 id="hero-title" class="display">Your <span class="gradient-text">operating layer</span> for AI‑driven work</h1>
      <p class="subhead">We help organizations adopt AI the right way: a rigorous framework, hands‑on curriculum, and a managed sandboxed environment where teams can learn, experiment, and ship—safely.</p>
      <div class="hero-ctas">
        <a class="cta-btn btn-primary" href="#contact">Start a pilot</a>
        <a class="cta-btn" href="#features">Explore the Framework</a>
        <a class="cta-btn" href="#how">See how it works</a>
      </div>
      <div class="orbs" aria-hidden="true">
        <div class="orb cyan"></div>
        <div class="orb violet"></div>
        <div class="orb mint"></div>
      </div>
    </section>

    <section id="features">
      <h2 class="display" style="font-size: clamp(28px,4.5vw,44px); margin: 0 0 6px;">The Falcon Framework</h2>
      <p class="subhead" style="margin-bottom: 8px;">Battle‑tested principles, patterns, and safeguards to make AI productive inside your business.</p>
      <div class="cards">
        <article class="card tilt">
          <div class="icon">${chipIcon()}</div>
          <h3>Curriculum & Teachings</h3>
          <p>Role‑based learning paths for leaders, builders, and operators. Real scenarios, templates, and guided exercises.</p>
        </article>
        <article class="card tilt">
          <div class="icon">${shieldIcon()}</div>
          <h3>Managed Sandbox</h3>
          <p>A safe environment to evaluate models, prompts, and workflows—complete with guardrails, logging, and reviews.</p>
        </article>
        <article class="card tilt">
          <div class="icon">${rocketIcon()}</div>
          <h3>From Experiments → Systems</h3>
          <p>Turn prototypes into maintainable processes: evaluation harnesses, governance, and deployment paths that scale.</p>
        </article>
      </div>

      <div class="marquee" aria-label="Capabilities">
        <div class="marquee-track">
          <span class="pill">Prompt engineering</span>
          <span class="pill">Retrieval & RAG</span>
          <span class="pill">Tool use & agents</span>
          <span class="pill">Evaluation</span>
          <span class="pill">Latency & cost control</span>
          <span class="pill">Security & compliance</span>
          <span class="pill">Change management</span>
          <span class="pill">Prompt engineering</span>
          <span class="pill">Retrieval & RAG</span>
          <span class="pill">Tool use & agents</span>
          <span class="pill">Evaluation</span>
          <span class="pill">Latency & cost control</span>
          <span class="pill">Security & compliance</span>
          <span class="pill">Change management</span>
        </div>
      </div>
    </section>

    <section id="how">
      <h2 class="display" style="font-size: clamp(28px,4.5vw,44px); margin: 0 0 6px;">How we work</h2>
      <p class="subhead" style="margin-bottom: 8px;">Clear milestones. Fast wins. Measurable outcomes.</p>
      <div class="steps">
        <div class="step tilt"><b>1) Discovery</b><br/>Identify high‑leverage use cases, guardrails, and success criteria.</div>
        <div class="step tilt"><b>2) Pilot</b><br/>Hands‑on cohort training in our sandbox. Instrumentation from day one.</div>
        <div class="step tilt"><b>3) Rollout</b><br/>Codify patterns into repeatable workflows with governance built‑in.</div>
      </div>
    </section>

    <section id="contact">
      <div class="cta-band">
        <div>
          <h3 style="margin: 0 0 6px;">Ready to see it in action?</h3>
          <p class="subhead" style="margin: 0;">Book a demo or join our update list—no spam, just practical insights.</p>
        </div>
        <form id="lead" onsubmit="submitLead(event)">
          <div style="display: grid; grid-template-columns: 1fr auto; gap: 10px;">
            <input aria-label="Email" type="email" name="email" placeholder="you@company.com" required />
            <button type="submit">Notify me</button>
          </div>
          <small id="lead-msg" class="small" style="display:block; margin-top:6px; opacity:.85;"></small>
        </form>
      </div>
    </section>
  </main>

  <footer>
    <div class="container foot">
      <div style="display:flex; align-items:center; gap:10px;">
        ${logoSVG()}
        <span class="small">© <span id="year"></span> Falcon Systems. All rights reserved.</span>
      </div>
      <div class="small">Built for speed on Cloudflare.</div>
    </div>
  </footer>

  <script>
    // Tilt effect for interactive cards
    const tiltEls = () => document.querySelectorAll('.tilt');
    const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
    function handleTilt(e){
      const rect = this.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1
      const rx = clamp((.5 - py) * 10, -10, 10);
      const ry = clamp((px - .5) * 10, -10, 10);
      this.style.transform =
        \`perspective(800px) rotateX(\${rx}deg) rotateY(\${ry}deg) translateY(-2px)\`;
    }
    function resetTilt(){ this.style.transform = ''; }
    function bindTilt(){ tiltEls().forEach(el=>{ el.addEventListener('mousemove', handleTilt); el.addEventListener('mouseleave', resetTilt); }); }
    bindTilt();

    // Simple stars canvas parallax
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');
    let w, h, stars;
    function resize(){ w = canvas.width = innerWidth; h = canvas.height = innerHeight; makeStars(); }
    function makeStars(){
      const count = Math.min(180, Math.floor((w*h)/20000));
      stars = Array.from({length: count}, ()=>({
        x: Math.random()*w, y: Math.random()*h,
        z: Math.random()*0.8 + 0.2, // depth
        r: Math.random()*1.1 + 0.2
      }));
    }
    function draw(){
      ctx.clearRect(0,0,w,h);
      for (const s of stars){
        ctx.globalAlpha = s.z;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fillStyle = '#cfeaff'; ctx.fill();
        // drift
        s.x -= 0.06 * s.z; if (s.x < -2) s.x = w+2;
      }
      requestAnimationFrame(draw);
    }
    addEventListener('resize', resize); resize(); draw();

    // Email capture placeholder — replace with your backend/Forms later
    async function submitLead(e){
      e.preventDefault();
      const msg = document.getElementById('lead-msg');
      const email = new FormData(e.target).get('email');
      // No backend wired yet, so we just fake success and provide a handoff instruction.
      await new Promise(r=>setTimeout(r, 500));
        msg.textContent = \`Thanks! We'll reach out at \${email}. (Hook this form to your CRM or a Worker KV/D1 endpoint.)\`;
    }

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>`;

// === Inline SVGs ===
function logoSVG(){
  return `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#5de3ff"/>
        <stop offset="60%" stop-color="#9f7bff"/>
        <stop offset="100%" stop-color="#00ffa3"/>
      </linearGradient>
    </defs>
    <path d="M8 36c10-2 18-8 24-18 2 7 7 12 14 14-7 2-12 7-14 14-6-10-14-14-24-10Z" fill="url(#g)"/>
    <path d="M40 20c3 8 2 14-2 20 6-4 10-9 12-16-4 1-7-1-10-4Z" fill="url(#g)" opacity=".8"/>
    <circle cx="28" cy="16" r="3" fill="#bff6ff"/>
  </svg>`;
}
function chipIcon(){
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="12" height="12" rx="2" stroke="#7ed8ff" stroke-width="1.5"/>
    <path d="M9 9h6v6H9z" fill="#7ed8ff" opacity=".25"/>
    <path d="M3 9h3M3 15h3M18 3v3M12 3v3M6 21v-3M12 21v-3M21 9h-3M21 15h-3" stroke="#7ed8ff" stroke-width="1.2" stroke-linecap="round"/>
  </svg>`;
}
function shieldIcon(){
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" stroke="#c5b4ff" stroke-width="1.5"/>
    <path d="M9 12l2 2 4-4" stroke="#c5b4ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}
function rocketIcon(){
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14c-1 3-3 4-4 4 0-1 1-3 4-4zm10-10c-4 0-8 3-9 7l5 5c4-1 7-5 7-9 0-1-1-3-3-3z" stroke="#9fffdc" stroke-width="1.5"/>
    <circle cx="16" cy="8" r="2" fill="#9fffdc" opacity=".4"/>
  </svg>`;
}
