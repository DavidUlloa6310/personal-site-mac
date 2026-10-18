# Macintosh, 1984

David Ulloa's personal site, styled after the original Macintosh OS. Live at [davidulloa.dev](https://davidulloa.dev).

Built with Next.js (static export), React, Tailwind CSS and GSAP.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # writes the static site to out/
```

## Deployment

Every push to `main` builds the site and deploys `out/` to GitHub Pages through `.github/workflows/deploy.yml`. Pull requests run the same build and lint without deploying.

The resume is built from LaTeX in `resume/` as part of the same workflow and served at [davidulloa.dev/resume](https://davidulloa.dev/resume). See [resume/README.md](resume/README.md).

One-time setup:

1. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Point DNS for `davidulloa.dev` at GitHub Pages:
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records for `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` record for `www`: `davidulloa6310.github.io`
3. In **Settings → Pages**, set the custom domain to `davidulloa.dev` (it's also in `public/CNAME`) and turn on **Enforce HTTPS** once the certificate is issued. `.dev` domains only load over HTTPS.
4. Optional: to keep Google Analytics, add a repository variable `NEXT_PUBLIC_GOOGLE_ANALYTICS` (**Settings → Secrets and variables → Actions → Variables**) with the measurement ID. Without it, no analytics script is loaded.
