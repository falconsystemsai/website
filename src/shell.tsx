import React, { PropsWithChildren } from "react";

export function Html({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Falcon Systems – Teaming with AI</title>
        <link rel="stylesheet" href="/assets/index.css" />
        <link rel="icon" href="/assets/falcon-logo.png" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
        <div id="root">{children}</div>
        <script type="module" src="/assets/client.js"></script>
      </body>
    </html>
  );
}
