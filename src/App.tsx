import React, { useEffect, useState } from "react";
import { logo } from "./logo";
import { LeapsPicker } from "./LeapsPicker";

export function App() {
  const [dark, setDark] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    if (typeof email === "string") {
      const subject = encodeURIComponent("Falcon Systems Contact");
      const body = encodeURIComponent(`Please follow up with ${email}.`);
      window.location.href = `mailto:info@falconsystems.ai?subject=${subject}&body=${body}`;
    }
  };

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
          className="h-12 w-auto transition-transform duration-300 hover:scale-110"
        />
        <nav className="flex items-center space-x-4">
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </header>

      <section
        className="flex flex-col items-center text-center py-20 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-gray-800 dark:to-gray-900"
      >
        <h1 className="text-4xl font-bold mb-4 stroke-fill-animation">Welcome to Falcon Systems</h1>
        <p className="mb-8 text-lg">Innovative solutions for a digital world.</p>
        <a
          href="#get-started"
          className="px-6 py-3 bg-white text-purple-600 rounded-md font-semibold shadow transition-transform duration-300 hover:scale-105"
        >
          Get Started
        </a>
      </section>

      <section
        id="how"
        className="py-20 bg-gray-100 dark:bg-gray-800 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">How it Works</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-2">1) Discovery</h3>
            <p>
              Identify high-leverage use cases, guardrails, and success
              criteria.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">2) Pilot</h3>
            <p>
              Hands-on cohort training in our sandbox. Instrumentation from day
              one.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">3) Rollout</h3>
            <p>
              Codify patterns into repeatable workflows with governance
              built-in.
            </p>
          </div>
        </div>
      </section>

      <LeapsPicker />

      <section
        id="contact"
        className="py-20 bg-white dark:bg-gray-900 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to see it in action?</h2>
        <p className="mb-6">
          Book a demo or join our update list—no spam, just practical insights.
        </p>
        <form
          onSubmit={handleLeadSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="flex-1 p-3 border rounded"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded"
          >
            Notify me
          </button>
        </form>
      </section>

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

