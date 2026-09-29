# abunawlaw.com

Website for Abunaw & Associates, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the built site
```

## Deployment

Every push to `main` builds and deploys the site through `.github/workflows/deploy.yml`.

One-time setup: in the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

The site is currently a preview at **https://abunawlaw.github.io/abunawlaw.com/**. The workflow sets `SITE` and `BASE_PATH` so that links work under that subfolder.

### Switching to abunawlaw.com

The domain currently points to Squarespace, so this step replaces the Squarespace site.
1. Delete the `env:` block (`SITE` / `BASE_PATH`) from `.github/workflows/deploy.yml`.
2. Add `public/CNAME` containing `abunawlaw.com`, then commit and push.
3. At the DNS provider, replace the Squarespace records. Point the apex `A` records at 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153, and set `www` as a `CNAME` to `abunawlaw.github.io`.
4. In **Settings → Pages**, confirm the custom domain and turn on **Enforce HTTPS**.

## Contact form

The enquiry form on `/contact/` posts to [Formspree](https://formspree.io). Create a form there, then replace `FORM_ID` in `src/pages/contact.astro` with the form's ID. Until that's done, submissions show an error message.

## Structure

- `src/pages/`: one file per route (`/`, `/fr/`, `/practices/…`, `/people/…`, `/about/`, `/insights/…`, `/careers/`, `/contact/`)
- `src/components/`: header (with the mobile menu and EN/FR toggle) and footer
- `src/layouts/Base.astro`: page shell, fonts, meta tags
- `src/assets/people/`: lawyer photographs (resized at build time)
- `design/handoff/`: the original design handoff (spec, prototype, source). Use it as the visual reference.

## Content still needed from the firm

Text in `[square brackets]`, set in monospace, is a placeholder:
- Street addresses and phone numbers for Douala and Buea
- A general enquiries email
- Article dates, authors and final copy
- Current job openings and a recruitment email
- The incorporation timetable
- The full French translation (only the navigation and home page hero are translated so far)
- Confirmation of Kelly's email domain (`kelly.orock@abunawlaw.com`; the firm supplied `bunawlaw.com`, which was treated as a typo)
