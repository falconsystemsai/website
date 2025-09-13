import React from "react";
import logo from "./assets/Falcon-Logo.png";

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
