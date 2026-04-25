import React from "react";
import { logo } from "./logo";

const dealSignals = [
  "County foreclosure auction calendars",
  "Bank REO feeds and distressed listing tags",
  "Lis pendens and notice-of-default filings",
  "Rent rolls, cap rate comps, and neighborhood trend deltas",
];

const userOutputs = [
  "Deal score (0-100) based on margin, risk, and velocity",
  "12-month upside/downside cash-flow scenarios",
  "Neighborhood and asset-level risk flags",
  "Action checklist for underwriting, outreach, and due diligence",
];

export function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/90">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
          <img src={logo} alt="Falcon logo" className="h-12 w-auto" />
          <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
            AI Deal Intelligence
          </span>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-16 sm:px-10 sm:pt-24">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Falcon Systems
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-6xl">
          Real estate deals surfaced by autonomous AI agents.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-300 sm:text-xl">
          We rebuilt Falcon around one mission: continuously scan foreclosure and
          pre-foreclosure multifamily opportunities, then publish clear,
          investor-ready analysis to this platform.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-8 sm:grid-cols-2 sm:px-10">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">What our agents monitor</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {dealSignals.map((signal) => (
              <li key={signal} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-white">What users receive</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            {userOutputs.map((output) => (
              <li key={output} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                <span>{output}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 pt-4 sm:px-10">
        <article className="rounded-2xl border border-cyan-300/30 bg-slate-900 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.12)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold text-white">Live analysis format</h2>
            <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-200">
              Sample Signal
            </span>
          </div>
          <div className="mt-5 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
            <p>
              <strong className="text-white">Asset:</strong> 42-unit multifamily,
              Sun Belt secondary market.
            </p>
            <p>
              <strong className="text-white">Status:</strong> Pre-foreclosure,
              notice filed within the last 14 days.
            </p>
            <p>
              <strong className="text-white">Projected entry discount:</strong> 18%
              below trailing market comps.
            </p>
            <p>
              <strong className="text-white">AI conviction:</strong> 87/100 with
              moderate renovation risk.
            </p>
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-6 sm:px-10">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-7 sm:p-10">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Built for investors who move fast.
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Falcon agents collect, rank, and explain multifamily distress
            opportunities so your team can spend time making offers—not hunting
            fragmented data.
          </p>
          <a
            href="mailto:info@falconsystems.ai?subject=Falcon%20Deal%20Intelligence"
            className="mt-7 inline-flex rounded-lg bg-cyan-300 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-200"
          >
            Request Early Access
          </a>
        </div>
      </section>
    </main>
  );
}
