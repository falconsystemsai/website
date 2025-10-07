import React from "react";

export function LeapsPicker() {
  return (
    <>
      <section id="leapspicker" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">LEAPS Picker</h2>
          <p className="mb-6">
            A custom fintech webapp showcasing backend AI integration to streamline long-term equity options strategies.
          </p>
          <img
            src="https://pub-d19e7dbfe91f43cf8b5602b495c5de08.r2.dev/leapspicker.png"
            alt="LEAPS Picker screenshot"
            className="max-w-full rounded shadow-lg mx-auto"
          />
        </div>
      </section>

      <section id="uoa" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Unusual Options Activity Radar</h2>
          <p className="mb-6">
            A live market surveillance dashboard that surfaces outlier flow with streaming data, smart filters, and instant drilldowns for active traders.
          </p>
          <img
            src="https://falconsystems.ai/uoa.png"
            alt="Unusual Options Activity Radar screenshot"
            className="max-w-full rounded shadow-lg mx-auto"
          />
        </div>
      </section>
    </>
  );
}
