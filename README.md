# uael.ink clone — Amazon affiliate site for TikTok videos

Next.js 14 + TypeScript + Tailwind. Static pages, one per TikTok video, with
a search bar across all products/videos.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2. Add your real content

1. **Get your Amazon tags.** Amazon Associates gives you a different tracking
   ID per marketplace (e.g. `travel07ca-21` for `.ae`, a different one for
   `.sa`). Replace `"travel07ca-21"` in the sample JSON files with your real tags.
2. **Add product photos** to `public/products/` (see the README inside that
   folder). Keep them square, compressed, ~500x500px.
3. **Add a video**: copy `data/videos/1001.json` to `data/videos/{newId}.json`,
   change `id`, `title`, `publishedAt`, and the `products` array. That's it —
   no code changes needed. The page `/v/{newId}` and the search index both
   pick it up automatically on next build.
4. **Edit `app/contact/page.tsx`** with your real support email.
5. **Review the four legal pages** (`/disclosure`, `/privacy`, `/terms`,
   `/cookies`) — I've drafted them to be accurate to what this specific site
   does, but they are templates, not legal advice. If you'll be handling EU
   visitors too, consider a quick review by a local advisor for GDPR-specific
   wording.

## 3. Deploy to Vercel (free)

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/{you}/{repo}.git
   git push -u origin main
   ```
2. Go to https://vercel.com → **New Project** → import that repo.
   Framework preset auto-detects as Next.js. No env vars needed. Click Deploy.
3. You'll get a `{something}.vercel.app` URL immediately.

## 4. Point your real domain at it

1. Buy a domain (Namecheap, GoDaddy, or Cloudflare Registrar — cheapest, no
   markup).
2. In Vercel: **Project → Settings → Domains → Add**, enter your domain.
3. Vercel gives you DNS records (usually an `A` record + a `CNAME` for `www`).
   Add those in your domain registrar's DNS settings.
4. Wait for DNS to propagate (~10 min to a few hours). Vercel auto-issues an
   SSL certificate.

## 5. Put it in your TikTok bio / video description

- **Bio link:** point it at your homepage (`https://yourdomain.com`) so it
  always shows the latest videos + search.
- **Video description (optional, single-product videos):** you can drop the
  direct Amazon link there instead of/alongside the site link — see the
  chat discussion on when that's worth doing.
- Consider a short redirect per video for a cleaner link if TikTok's caption
  space is tight, e.g. `yourdomain.com/v/1001` is already short enough to
  type/read directly.

## 6. After launch — things to keep an eye on

- **Amazon Associates requires 3 qualifying sales within 180 days** of
  joining or your account gets closed — post consistently early on.
- Each marketplace (`.ae`, `.sa`) has its **own approval and its own 180-day
  clock** — don't assume approval on one carries to the other.
- If you expand to more GCC countries, remember there's currently no local
  Amazon storefront for Qatar/Kuwait/Bahrain/Oman — that traffic converts via
  `amazon.ae`. Re-check this if Amazon changes policy (worth a quick search
  before you build out region-specific pages).
- Add basic analytics (Vercel Analytics is one click in the dashboard, free
  tier available) so you can see which videos/products actually convert.

## Project structure

```
data/videos/*.json      one file per TikTok video — your main daily edit
lib/videos.ts           reads video JSON at build time
lib/search.ts           flattens all videos into a searchable index
lib/marketplaces.ts     amazon.ae / amazon.sa config
app/page.tsx            homepage: search + latest videos grid
app/v/[videoId]/        one static page per video
app/{disclosure,privacy,terms,cookies,contact}/  compliance pages
components/             SearchBar, ProductCard, Header, Footer
```
