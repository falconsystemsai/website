import React, { PropsWithChildren } from "react";

export function Html({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Falcon Systems – AI Multifamily Deal Intelligence</title>
        <link rel="stylesheet" href="/assets/client.css" />
        <link rel="icon" type="image/png" href="/dist/assets/Falcon-Logo.png" />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div id="root">{children}</div>
        <script type="module" src="/assets/client.js"></script>
      </body>
    </html>
  );
}
