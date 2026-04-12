import React from "react";
import tempovoreLogo from "./assets/tempovore-logo.svg";

export function TempovorePage() {
  return (
    <main className="min-h-screen bg-[#120f0f] text-[#f2d28d] flex items-center justify-center px-6 py-12">
      <section className="w-full max-w-5xl text-center">
        <p className="uppercase tracking-[0.4em] text-sm md:text-base mb-5 opacity-80">
          Falcon Systems Presents
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold mb-6">TempΘvore</h1>

        <img
          src={tempovoreLogo}
          alt="Tempovore band logo"
          className="w-full max-w-4xl mx-auto rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.55)] border border-[#c79f5d]/30"
        />

        <p className="mt-8 text-lg md:text-2xl text-[#f5dfad]">
          Progressive metal. Cinematic depth. Unrelenting pulse.
        </p>
      </section>
    </main>
  );
}
