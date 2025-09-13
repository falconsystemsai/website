import React from "react";

const logo =
  "https://pub-d19e7dbfe91f43cf8b5602b495c5de08.r2.dev/Falcon-Logo.png";

export function App() {
  return (
    <>
      <header className="p-4">
        <img src={logo} alt="Falcon Systems logo" className="h-12 w-auto" />
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
