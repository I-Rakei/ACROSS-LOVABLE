#!/usr/bin/env node
// Regenerates public/sitemap.xml from the app's actual routes + special-packages data,
// so it never drifts out of sync when packages are added/removed. Runs automatically
// before every build (see package.json), and can be run manually via `npm run generate:sitemap`.

import { readFileSync, writeFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SITE_URL = "https://acrosstour.com";

function lastmodOf(relPath) {
  return statSync(path.join(root, relPath)).mtime.toISOString().slice(0, 10);
}

// Static, hand-authored routes — keep in sync with src/routes/*.tsx
const staticRoutes = [
  { loc: "/", file: "src/routes/index.tsx", changefreq: "weekly", priority: "1.0" },
  { loc: "/packages", file: "src/routes/packages.tsx", changefreq: "weekly", priority: "0.8" },
  { loc: "/special-packages", file: "src/routes/special-packages.index.tsx", changefreq: "weekly", priority: "0.8" },
];

// Dynamic routes — one per special package, sourced from the data file itself so a new
// package (or a removed one) is picked up automatically without touching the sitemap.
const dataFile = "src/data/special-packages.ts";
const dataSrc = readFileSync(path.join(root, dataFile), "utf8");
const slugs = [...dataSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const dataLastmod = lastmodOf(dataFile);

const urls = [
  ...staticRoutes.map((r) => ({
    loc: r.loc,
    lastmod: lastmodOf(r.file),
    changefreq: r.changefreq,
    priority: r.priority,
  })),
  ...slugs.map((slug) => ({
    loc: `/special-packages/${slug}`,
    lastmod: dataLastmod,
    changefreq: "monthly",
    priority: "0.9",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(path.join(root, "public/sitemap.xml"), xml);
console.log(`sitemap.xml written with ${urls.length} URLs (${slugs.length} special packages).`);
