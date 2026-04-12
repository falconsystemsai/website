import React from "react";

const TEMPOVORE_IMAGE_URL = "https://falconsystems.ai/tempovore.png";

export function TempovorePage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6">
      <img
        src={TEMPOVORE_IMAGE_URL}
        alt="Tempovore band artwork"
        className="max-w-full max-h-[90vh] object-contain"
      />
    </main>
  );
}
