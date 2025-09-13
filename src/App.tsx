import React from "react";

export function App() {
  return (
    <>
      <header className="p-4">
        <img
          src="/assets/falcon-logo.png"
          alt="Falcon Systems logo"
          className="h-12 w-auto"
        />
      </header>
      {/* Main content */}
      {/* Footer */}
      <footer className="p-4 text-center">
        <a
          href="mailto:info@falconsystems.ai"
          className="text-blue-600 hover:underline"
        >
          info@falconsystems.ai
        </a>
      </footer>
    </>
  );
}
