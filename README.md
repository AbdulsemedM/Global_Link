# Angler Trading PLC — website

Marketing site for Angler Trading PLC, an Addis Ababa import, export and wholesale company.
Built with Next.js 15 (App Router), React 19, Tailwind CSS and Framer Motion. Every page is statically generated.

## Getting started

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # production build (all pages prerendered)
npm run lint
npm run generate:map   # rebuild the trade-network map (see below)
```

> `next dev` and `next build` share the `.next` folder. Stop the dev server before running a production build, or the two will corrupt each other's output.

## Editing content

Almost all copy and company facts live in **`src/lib/site.ts`**:

| Export        | Used for                                                                 |
| ------------- | ------------------------------------------------------------------------ |
| `site`        | Name, email, phone, address, hours, social links (header, footer, contact, schema) |
| `sectors`     | The six sectors — index, mega menu, `/services/[id]` landing pages, photos, SEO titles/descriptions, keywords and FAQs |
| `stats`       | Key figures under the hero and on the About page                        |
| `lanes`       | Trade lanes drawn on the map and listed in the lanes table              |
| `testimonials`, `partners`, `values`, `process`, `faqs` | Their respective sections |

Adding an entry to `sectors` automatically creates a landing page, sitemap entry and navigation links. Give it a share image in `public/og/<id>.png` (1200×630).

## Design system

- **Type:** Newsreader (editorial serif, headlines), Instrument Sans (body), IBM Plex Mono (labels and data). All are self-hosted through `next/font` in `src/app/fonts.ts`; the Newsreader files in `src/app/fonts/` are subset and instanced to keep them small.
- **Colour:** warm paper and ink with the logo green (`brand-500`, #5DC22E) as the primary colour: buttons, italic emphasis, section indices and the forest bands. The `brand` scale and fixed surfaces (`ink`, `paper`, `forest`) are in `tailwind.config.ts`; theme tokens (including the AA-safe text green `accent`) are CSS variables in `src/app/globals.css`.
- **Building blocks:** `.display-1/2/3` serif headings, `.label` mono metadata, `.lead` intro text, `SectionHead` and `PageHeader` components, square corners and hairline rules.
- **Themes:** light is the default and dark is a toggle (remembered per visitor). Wrap a section in the `dark` class to force dark tokens on a fixed dark surface (footer, forest bands).

## Structure

```
src/app/                  Routes: /, /services, /services/[slug], /about, /contact, 404
                          plus fonts, sitemap.ts, robots.ts, manifest.ts and icons
src/components/home/      Home-only pieces (hero photograph, sector index)
src/components/sections/  Shared sections (page header, section head, figures, process, FAQ, testimonials, partners)
src/components/visuals/   Trade-network map and its generated data
src/components/ui/        Button, Reveal, ThemeToggle, LocalTime (Addis Ababa clock and office status)
src/lib/seo.ts            Page metadata builder and JSON-LD helpers
scripts/generate-map.mjs  Map generator (Natural Earth data via d3-geo)
```

## Trade-network map

The map is generated, not drawn: `npm run generate:map` projects Natural Earth coastlines and writes `public/images/map/land.svg` and `src/components/visuals/map-data.ts`. Sea lanes follow real shipping routes through waypoints (Bab-el-Mandeb, Suez, Gibraltar, Malacca). To add a lane, follow the steps at the top of the script.

## Images

Photography lives in `public/images/photos/` (WebP, colour-graded for consistency) and is served through Next's image optimiser, which delivers right-sized AVIF/WebP per device. This needs `sharp`, which Next installs automatically.

The sector photos are Unsplash stock (free for commercial use). Replace them with Angler's own photography where possible; keep the same file names or update `src/lib/site.ts`.

## Contact form

There is no backend: on submit the form validates input and opens the visitor's email app with a fully composed inquiry addressed to `site.email`.
To receive submissions server-side instead, add a route handler (e.g. `src/app/api/contact/route.ts`) or a form service and post to it from `src/components/contact/contact-form.tsx`.

## SEO

- Per-page titles, descriptions, canonical URLs and Open Graph/Twitter cards via `pageMetadata()`
- A dedicated, statically generated landing page per sector, each with its own share card in `public/og/`
- JSON-LD: Organization/LocalBusiness, WebSite, Service, BreadcrumbList, FAQPage, ItemList
- Generated `sitemap.xml`, `robots.txt` and web manifest

## Deployment (DirectAdmin / Apache shared hosting)

The site is a static export (`output: 'export'` in `next.config.ts`).

1. `npm run build` writes the complete site to `out/`.
2. Upload the **contents** of `out/` to `domains/anglertrading.com/public_html/` via DirectAdmin File Manager or FTP. Zip, upload, then extract in place.
3. `public/.htaccess` is copied into the build. It forces HTTPS on the bare domain, serves clean URLs (`/about` → `about.html`), sets the 404 page, and enables caching and compression.
4. Enable the free Let's Encrypt certificate under **SSL Certificates** in DirectAdmin.

To update the site: rebuild and re-upload. Because the export has no image server, photos are served as the pre-compressed WebP files in `public/images/photos/`. `server.js` is only for Node hosting and is not used here.
