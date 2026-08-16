# Woolfman Lawn Services

Next.js 16 (App Router) marketing site for Woolfman Lawn Services, Detroit MI.
Built by OTAI.

---

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build && npm start   # production build
```

---

## Deploy to Vercel

1. `git init && git add -A && git commit -m "initial"`
2. Push to a new GitHub repo.
3. In Vercel: **Add New → Project → import the repo**. Framework auto-detects as Next.js. No build settings to change.
4. Add the domain `woolfmanlawnservices.com` under **Settings → Domains** and point the registrar's nameservers or A/CNAME records at Vercel.
5. Add the env var below once the n8n flow exists.

---

## Lead routing

Every estimate form on the site POSTs to `/api/lead`. That route forwards the lead as JSON to whatever URL is in `LEAD_WEBHOOK_URL`.

**Vercel → Settings → Environment Variables:**

| Key | Value |
| --- | --- |
| `LEAD_WEBHOOK_URL` | your n8n or Make webhook URL |

No code change is needed. Until that variable is set, leads are written to the Vercel runtime logs so nothing is lost.

Payload shape sent to the webhook:

```json
{
  "source": "woolfmanlawnservices.com",
  "name": "", "phone": "", "email": "",
  "address": "", "city": "",
  "service": "", "timing": "",
  "preferredContact": "Text | Call | Email",
  "heardAbout": "", "message": "",
  "pageSource": "/services/mulching",
  "submittedAt": "ISO timestamp",
  "userAgent": ""
}
```

Map those field names straight onto Airtable columns.

---

## Editing content

**Everything lives in `src/lib/site.js`.** Business details, services, cities, stats, FAQs, and photo paths all read from that one file. Change it there and it updates the pages, the nav, the footer, the sitemap, and the schema at the same time.

| To change | Edit |
| --- | --- |
| Phone, email, hours, address | `BIZ` |
| Stat bar numbers | `STATS` |
| A service, its copy or its page | `SERVICES` |
| A city page | `CITIES` |
| FAQ questions | `FAQS` |
| Why-us blocks | `PROMISES` |
| Any photo | `PHOTOS`, `PEEK`, `ONJOB`, `GALLERY`, or `SERVICES[].photo` |

Adding a service or a city automatically creates its page, adds it to the nav footer, and adds it to the sitemap. No other file needs touching.

---

## Photos

All images currently point at `picsum.photos` placeholders so nothing renders broken. See `public/images/README.txt` for the shot list and how to swap them in.

---

## SEO that ships with this

- Per-page titles, descriptions, canonicals, and OpenGraph tags
- `LandscapingBusiness` JSON-LD with hours, geo, service catalog, and `areaServed`
- `Service`, `FAQPage`, `BreadcrumbList`, and `Person` schema on the relevant pages
- Auto-generated `/sitemap.xml` and `/robots.txt`
- 7 service pages and 5 city pages, all statically generated
- The street address appears **only** in JSON-LD, never on a rendered page. This is correct for a service-area business on Google Business Profile. Keep the NAP identical between the schema and the GBP listing.

### After launch, in order

1. Create and verify the Google Business Profile. Verification can take 1–2 weeks, so start it the day the domain resolves.
2. Add the site to Google Search Console and submit `/sitemap.xml`.
3. Paste the GBP review link into `GOOGLE_REVIEW_URL` in `src/app/reviews/page.js`.
4. As reviews come in, add them to the `REVIEWS` array on that same page. The page swaps from the empty state to the review wall automatically. Only add `aggregateRating` to schema once there are real published reviews behind it.

---

## Stack

Next.js 16 · React 19 · Tailwind CSS 3 · no database, no CMS, fully static apart from `/api/lead`.
