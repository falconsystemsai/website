import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const logo =
  "https://pub-d19e7dbfe91f43cf8b5602b495c5de08.r2.dev/Falcon-Logo.png";

export function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <header className="p-4 flex justify-between items-center">
        <img
          src={logo}
          alt="Falcon Systems logo"
          className="h-12 w-auto transition-transform duration-250 hover:scale-110"
        />
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 transition-colors duration-250 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center py-20 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-gray-800 dark:to-gray-900"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Falcon Systems</h1>
        <p className="mb-8 text-lg">Innovative solutions for a digital world.</p>
        <a
          href="#get-started"
          className="px-6 py-3 bg-white text-purple-600 rounded-md font-semibold shadow transition-transform duration-250 hover:scale-105"
        >
          Get Started
        </a>
      </motion.section>

      <footer className="p-4 text-center mt-auto">
        <a
          href="mailto:info@falconsystems.ai"
          className="text-blue-600 dark:text-blue-400 transition-colors duration-250 hover:text-blue-800 dark:hover:text-blue-200"
        >
          info@falconsystems.ai
        </a>
      </footer>
    </div>
  );
}

