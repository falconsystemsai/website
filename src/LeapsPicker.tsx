import React from "react";

export function LeapsPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <header className="p-4">
        <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">&larr; Back to Home</a>
      </header>
      <main className="flex flex-col items-center p-4">
        <h1 className="text-4xl font-bold mb-4">LEAPS Picker</h1>
        <p className="mb-6 max-w-2xl text-center">
          A custom fintech webapp showcasing backend AI integration to streamline long-term equity options strategies.
        </p>
        <img
          src="https://pub-d19e7dbfe91f43cf8b5602b495c5de08.r2.dev/leapspicker.png"
          alt="LEAPS Picker screenshot"
          className="max-w-full rounded shadow-lg"
        />
      </main>
      <footer className="p-4 text-center mt-auto">
        <a
          href="mailto:info@falconsystems.ai"
          className="text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:text-blue-800 dark:hover:text-blue-200"
        >
          info@falconsystems.ai
        </a>
      </footer>
    </div>
  );
}

