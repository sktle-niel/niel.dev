# Deploying the CODEKATHAX website to Hostinger

This is a static Vite/React build (`npm run build` → `dist/`) — no Node
server needed at runtime, so it runs on standard **Hostinger shared hosting**
served straight out of `public_html`.

The plan: `codekathax.online` (root domain, non-www canonical) serves this
site; `api.codekathax.online` serves the PHP backend that stores the visitor
activity heatmap — see the backend project's own `DEPLOY.md` for that half.

---

## 1. Point `VITE_API_BASE` at the live API

Already set in `.env.production` (not committed — see `.gitignore`):

```ini
VITE_API_BASE=https://api.codekathax.online
```

`npm run build` loads this automatically (Vite build mode = production). No
manual step needed unless the API subdomain ever changes.

## 2. Build

```
npm run build
```

Produces `dist/`. Vite copies everything in `public/` — including
`public/.htaccess` — into `dist/` as-is. **Confirm `dist/.htaccess` exists
after every build** before uploading; if a future Vite upgrade ever stops
copying dotfiles, copy it in manually.

That `.htaccess` handles three things Hostinger's static hosting doesn't do
for you:
- redirects `www` → non-www and `http` → `https`,
- serves `index.html` for any route that isn't a real file (React Router
  client-side routing — without this, a hard refresh or a direct link to any
  path other than `/` 404s),
- sets baseline security headers and long-lived caching on the hashed
  `assets/*.js` / `*.css` files (with `index.html` itself never cached, so a
  new deploy is picked up immediately).

## 3. Upload `dist/` to `public_html`

hPanel → **File Manager** (or FTP) → `public_html`. Upload the **contents**
of `dist/` (not the `dist` folder itself) so `index.html` lands directly in
`public_html/`.

Re-deploying later: delete the old contents of `public_html` first (or at
least `index.html` and `assets/`) so you don't end up mixing an old build's
JS/CSS with a new `index.html`.

## 4. SSL

hPanel → **Security → SSL** → issue the free Let's Encrypt certificate for
`codekathax.online` (Hostinger does this automatically once the domain
resolves to the hosting account; on a domain bought directly through
Hostinger this is usually already the case). Confirm it covers both
`codekathax.online` and `www.codekathax.online` — the `.htaccess` redirect
needs `www` reachable over HTTPS too, before it can redirect it away.

## 5. Test the live site

- Visit `https://codekathax.online/` → landing page loads.
- Visit `https://www.codekathax.online/` → redirects to the non-www HTTPS URL.
- Open `https://codekathax.online/projects`, refresh the page → should load
  the Projects page, not 404 (confirms the SPA fallback rule is working for
  the card pages: `/profile`, `/projects`, `/skills`, `/activity`, `/contact`).
- Open the Activity card / page ("Every square is a visitor") → it should
  show visitor counts, and today's square should reflect your own visit
  within a few seconds. If it stays empty, check the backend's `visits`
  table and the CORS / `VITE_API_BASE` settings below.

---

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| Landing page loads but any other path 404s on refresh | `dist/.htaccess` didn't make it to `public_html` — re-upload it (check for hidden-file upload settings in your FTP client / File Manager). |
| CORS error calling the API | Confirm the API's `.env` has `ALLOWED_ORIGINS=https://codekathax.online` (non-www, matching the canonical redirect). |
| Mixed content / not padlocked | SSL not yet issued, or a hardcoded `http://` URL somewhere — check `VITE_API_BASE` is `https://`. |
| Old JS/CSS after a redeploy | Browser cached the old `index.html`. The `.htaccess` sets `Cache-Control: no-cache` on it, but do a hard refresh once after deploying. |
| Heatmap is empty / stays at zero | The API isn't reachable (check `VITE_API_BASE` and that `api.codekathax.online` returns the health JSON), or the `visits` table is missing — see the backend `DEPLOY.md`. |
