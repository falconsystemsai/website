import React from "react";
// If using Tailwind/shadcn, ensure your build pipeline (Vite + PostCSS) is configured accordingly.
export function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Falcon Systems – Teaming with AI</title>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
        <header className="py-6 px-4 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Falcon Systems</h1>
        </header>
        <main className="px-4 max-w-6xl mx-auto space-y-16">
          <section id="home">
            <h2 className="text-4xl font-semibold">A practical framework for teaming with AI</h2>
            <p className="text-slate-600 mt-3">
              Falcon Systems helps organizations adopt AI safely and effectively—through an
              opinionated framework, hands‑on curriculum, and a managed, sandboxed
              environment to learn by doing.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#framework" className="px-4 py-2 rounded-full bg-slate-900 text-white">Explore the framework</a>
              <a href="#contact" className="px-4 py-2 rounded-full border border-slate-900 text-slate-900">Get in touch</a>
            </div>
          </section>
          <section id="framework">
            <h2 className="text-3xl font-semibold">The Falcon Framework</h2>
            <div className="grid md:grid-cols-4 gap-4 mt-4">
              <div className="p-4 border rounded-2xl"><strong>Roles</strong><p className="text-slate-600 text-sm">Define responsibilities across people & AI.</p></div>
              <div className="p-4 border rounded-2xl"><strong>Interfaces</strong><p className="text-slate-600 text-sm">Design stable, testable interactions.</p></div>
              <div className="p-4 border rounded-2xl"><strong>Guardrails</strong><p className="text-slate-600 text-sm">Mitigate leakage and risk.</p></div>
              <div className="p-4 border rounded-2xl"><strong>Evaluation</strong><p className="text-slate-600 text-sm">Measure quality, risk, and ROI.</p></div>
            </div>
          </section>
          <section id="offerings">
            <h2 className="text-3xl font-semibold">Service offerings</h2>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 border rounded-2xl"><strong>Foundations</strong><p className="text-slate-600 text-sm">Core principles, prompt patterns, live labs.</p></div>
              <div className="p-4 border rounded-2xl"><strong>Enablement</strong><p className="text-slate-600 text-sm">From pilots to practice; rollout playbooks.</p></div>
              <div className="p-4 border rounded-2xl"><strong>Managed Sandbox</strong><p className="text-slate-600 text-sm">Isolated experimentation with guardrails.</p></div>
            </div>
          </section>
          <section id="contact">
            <h2 className="text-3xl font-semibold">Let’s talk</h2>
            <form method="post" action="/api/contact" className="grid gap-3 max-w-lg mt-4">
              <input required name="name" placeholder="Name" className="border rounded-xl p-3" />
              <input required type="email" name="email" placeholder="Email" className="border rounded-xl p-3" />
              <input name="company" placeholder="Company" className="border rounded-xl p-3" />
              <textarea required name="message" placeholder="How can we help?" rows={4} className="border rounded-xl p-3" />
              <button className="px-4 py-2 rounded-full bg-slate-900 text-white" type="submit">Submit</button>
            </form>
            <p className="text-slate-600 mt-2">Or email: hello@falconsystems.ai</p>
          </section>
        </main>
        <footer className="py-10 border-t mt-16 px-4 max-w-6xl mx-auto">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Falcon Systems. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
