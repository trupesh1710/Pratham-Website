# Hostinger deployment (Vite / React)

This project builds a static site into **`dist/`**. Hostinger can serve it via:
- **hPanel → Website → Files → File Manager** (upload `dist/`)
- or a **Static web hosting** option (if enabled on your plan)

## 1) Create the production build
Run:

```bash
npm install
npm run build
```

After this, your deployable output is in:
- `dist/index.html`
- `dist/assets/*`

## 2) Upload to Hostinger
### Option A: Upload via File Manager
1. Log in to Hostinger hPanel
2. Open **File Manager**
3. Go to your website root (commonly):
   - `public_html/`
   - or `www/` (depends on setup)
4. Delete (or rename) any existing files in that root to avoid conflicts
5. Upload everything from your local **`dist/`** folder into the host root

**You must upload all files**, including:
- `dist/index.html`
- `dist/assets/*`

## 3) Fix SPA routing (if needed)
This app appears to be a single-page app without React Router routes used in a way that requires redirects.
Still, if you later add client-side routing and refresh 404s occur:
1. Create/modify an `.htaccess` file in `public_html/`
2. Add:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Then refresh the page.

## 4) Cache considerations
If you change assets and don’t see updates:
- Clear browser cache
- In Hostinger, if you use a caching plugin/CDN, purge cache

## 5) Quick checklist
- [ ] `npm run build` ran successfully
- [ ] `dist/index.html` exists
- [ ] `dist/assets/` uploaded entirely
- [ ] `index.html` is at the web root (e.g., `public_html/index.html`)


