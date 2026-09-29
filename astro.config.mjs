import { defineConfig } from 'astro/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// SITE and BASE_PATH are set by the deploy workflow. While the site is previewed at
// https://abunawlaw.github.io/abunawlaw.com/ the base is "/abunawlaw.com"; once the custom
// domain is live, remove both from the workflow (and add public/CNAME).
const site = process.env.SITE || 'https://abunawlaw.com';
const base = (process.env.BASE_PATH || '').replace(/\/$/, '');

// Pages hard-code root-relative links ("/people/"). When deploying under a base path,
// prefix them in the built HTML.
function prefixLinks() {
  return {
    name: 'prefix-root-links',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        if (!base) return;
        const root = fileURLToPath(dir);
        const escaped = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp(`(href|src|action)="/(?!/|${escaped.slice(1)}/)`, 'g');
        const walk = async (d) => {
          for (const e of await fs.readdir(d, { withFileTypes: true })) {
            const p = path.join(d, e.name);
            if (e.isDirectory()) await walk(p);
            else if (e.name.endsWith('.html')) {
              const html = await fs.readFile(p, 'utf8');
              await fs.writeFile(p, html.replace(re, `$1="${base}/`));
            }
          }
        };
        await walk(root);
      },
    },
  };
}

export default defineConfig({
  site,
  base: base || undefined,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [prefixLinks()],
});
