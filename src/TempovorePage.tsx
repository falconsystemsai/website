import React from "react";

const imageUrl =
  "https://pub-d19e7dbfe91f43cf8b5602b495c5de08.r2.dev/tempovore.png";

export function TempovorePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030303] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-[-15%] h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-[-10%] h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_45%)]" />
      </div>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-8">
        <figure className="relative w-full max-w-6xl rounded-2xl border border-white/10 bg-black/35 p-2 shadow-[0_0_90px_rgba(236,72,153,0.14)] backdrop-blur-sm sm:p-4">
          <img
            src={imageUrl}
            alt="Tempovore"
            className="mx-auto max-h-[85vh] w-full rounded-xl object-contain"
          />
        </figure>
      </section>
    </main>
  );
}
