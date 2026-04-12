// Falcon Systems — Single-file Cloudflare Worker that serves a flashy landing page
// Save this as worker.js and deploy with wrangler (see steps below).

const R2_ORIGIN =
  "https://pub-d19e7dbfe91f43cf8b5602b495c5de08.r2.dev";
const LOGO_URL = `${R2_ORIGIN}/Falcon-Logo.png`;
const LEAPSPICKER_URL = `${R2_ORIGIN}/leapspicker.png`;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Simple router
    if (request.method === 'GET') {
      if (url.pathname.startsWith('/assets/')) {
        return env.ASSETS.fetch(request);
      }
      if (url.pathname === '/tempovore' || url.pathname === '/tempovore/') {
        return Response.redirect('https://falconsystems.ai/tempovore.png', 302);
      }
      return new Response(indexHTML, { headers: htmlHeaders });
    }

    return new Response('Method Not Allowed', { status: 405 });
  }
};

const htmlHeaders = {
  'content-type': 'text/html; charset=UTF-8',
  // Conservative CSP that allows inline CSS/JS used below and Google Fonts
  'Content-Security-Policy': [
    "default-src 'self'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    `img-src 'self' data: ${R2_ORIGIN}`,
    "script-src 'self' 'unsafe-inline'",
    "connect-src 'self'",
    "frame-ancestors 'none'"
  ].join('; '),
  'Cache-Control': 'public, max-age=300',
};



