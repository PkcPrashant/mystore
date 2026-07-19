# mystore — Amazon affiliate site for TikTok videos

Next.js 14 + TypeScript + Tailwind. Homepage is one searchable, flat catalog
of every product across all your videos — thumbnail + buy buttons right
there, no click-through required. Each video also gets its own static page
at `/v/{videoId}` for a short, shareable link if you want one per TikTok.

**Live at:** https://mystore-tiktok.vercel.app/
(This is a Vercel preview URL. Fine for testing — get a real custom domain
before you push real TikTok traffic to it, see step 3.)

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2. Add your real content

1. **Get your Amazon tags.** You currently have a UAE tag only
   (`travel07ca-21`). It's applied to every product's `.ae` button. The `.sa`
   buttons in the sample data reuse the same tag as a placeholder — swap
   those to your real `.sa` tag once that program is approved (don't leave
   the UAE tag on `.sa` links, it won't get you credited there).
2. **Add product photos** to `public/products/` (see the README inside that
   folder). Square, compressed, ~500x500px.
3. **Add a video**: copy `data/videos/1001.json` to `data/videos/{newId}.json`,
   change `id`, `title`, `publishedAt`, and `products`. No code changes
   needed — the homepage catalog and `/v/{newId}` both pick it up on next
   build/deploy.
4. **Review the legal pages** (`/disclosure`, `/privacy`, `/terms`,
   `/cookies`) — drafted to match what this site actually does, but they're
   templates, not legal advice.

## 3. Deploy

This project is already connected to Vercel at the URL above. To ship
changes:

```bash
git add .
git commit -m "Update products"
git push
```

Vercel redeploys automatically on push to `main`.

**To move off the `.vercel.app` URL:** buy a domain (Namecheap, Cloudflare
Registrar), then in Vercel: **Project → Settings → Domains → Add**, enter it,
and add the DNS records Vercel gives you at your registrar. Then update
`siteUrl` in `app/layout.tsx` to match.

## 4. Put it in your TikTok bio / video description

- **Bio link:** point at the homepage — it always shows every product,
  searchable.
- **Video description (optional, single-product videos):** the direct
  Amazon link can go there instead of/alongside the site link.
- `/v/{videoId}` pages still exist if you want a short link scoped to one
  video instead of the full catalog.

## 5. After launch — keep an eye on

- **Amazon Associates requires 3 qualifying sales within 180 days** of
  joining or the account closes — post consistently early on.
- `.ae` and `.sa` are **separate approvals with separate 180-day clocks** —
  don't assume approval on one carries to the other.
- No local Amazon storefront exists for Qatar/Kuwait/Bahrain/Oman — that
  traffic currently converts via `amazon.ae`. Re-check if Amazon's policy
  changes before building region-specific pages.
- Add Vercel Analytics (one click in the dashboard, free tier) to see which
  products actually convert.

## Project structure

```
data/videos/*.json      one file per TikTok video — your main daily edit
lib/videos.ts           reads video JSON at build time
lib/search.ts           flattens all videos into the homepage catalog
lib/marketplaces.ts     amazon.ae / amazon.sa config
app/page.tsx            homepage: flat searchable product catalog
app/v/[videoId]/        optional per-video static page
app/{disclosure,privacy,terms,cookies}/  compliance pages
components/             Catalog, ProductCard, Header, Footer
```
