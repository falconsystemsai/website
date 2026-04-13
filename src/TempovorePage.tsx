import React from "react";

const imageUrl =
  "https://pub-d19e7dbfe91f43cf8b5602b495c5de08.r2.dev/tempovore.png";

export function TempovorePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-900 px-6 py-10 sm:px-10 sm:py-14">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center rounded-3xl border border-white/20 bg-white/5 p-4 shadow-2xl ring-1 ring-cyan-300/30 backdrop-blur md:p-8">
        <div className="w-full rounded-2xl border border-fuchsia-300/30 bg-black/50 p-3 shadow-[0_0_60px_rgba(34,211,238,0.25)] md:p-5">
          <img
            src={imageUrl}
            alt="Tempovore"
            className="mx-auto w-full max-w-5xl rounded-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}
