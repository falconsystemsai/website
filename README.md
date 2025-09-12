# Falcon Systems site

Simple static site optimized for Cloudflare Pages. The page is written in plain HTML with Tailwind CSS from a CDN and a small vanilla JavaScript file for interactivity. There is no build step or server framework, keeping maintenance minimal.

## Development
- Edit files in `public/` and open `index.html` in a browser, or run a local server such as:
  ```bash
  npx wrangler pages dev public
  ```
- Deploy with:
  ```bash
  npx wrangler pages deploy public
  ```

## Structure
```
public/
  index.html
  script.js
wrangler.toml
```

## License
MIT
