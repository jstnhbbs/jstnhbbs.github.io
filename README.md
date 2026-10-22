# Justin Hobbs Portfolio

A static portfolio for Justin Hobbs, built for GitHub Pages. No build step, backend, package installation, analytics, or form service is required.

## Preview locally

From this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open http://127.0.0.1:4173.

## Publish on GitHub Pages

This repository is `jstnhbbs/jstnhbbs.github.io`. In Settings → Pages, use Deploy from a branch → `main` → `/ (root)`. Merging the portfolio update into `main` publishes the site at https://jstnhbbs.github.io/.

## Update content

- Copy and project descriptions: `index.html`
- Layout, typography, responsive behavior: `style.css`
- Screenshot switching and video dialog: `script.js`
- Downloadable resume: replace `assets/justin-hobbs-resume.pdf`
- Tugboat screenshots and demo: `assets/tugboat-*`

Screenshots use a demo household. Tugboat is described as a personal project; the website does not assert public App Store availability. Professional work is described without private client details. The demo loads only when requested. Google Fonts are optional; system fonts provide fallbacks.

## Add a custom domain later

Configure the domain in Settings → Pages → Custom domain, then add the DNS records GitHub specifies for your domain. Enable HTTPS when available. Use a separate subdomain for Tugboat if it needs its own backend, for example `app.yourdomain.com`; this portfolio can stay at the root or at `www`. The site uses relative asset URLs, so moving it does not require rewriting asset paths. Do not add a `CNAME` file until you own and configure the domain.
