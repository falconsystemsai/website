import React, { PropsWithChildren } from "react";

const logo =
  "https://e627cadd9a6a50a3de7877cd5ae8beaa.r2.cloudflarestorage.com/falconwebsite/Falcon-Logo.png";

export function Html({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Falcon Systems – Teaming with AI</title>
        <link rel="stylesheet" href="/assets/index.css" />
        <link rel="icon" href={logo} />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
        <div id="root">{children}</div>
        <script type="module" src="/assets/client.js"></script>
      </body>
    </html>
  );
}
