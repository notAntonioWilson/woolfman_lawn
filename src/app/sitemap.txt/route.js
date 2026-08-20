import { SITE_URL, SERVICES, CITIES } from "@/lib/site";

export const dynamic = "force-static";

/* Plain-text sitemap. Same URL set as sitemap.xml, one per line.
   Some crawlers and directory submissions want this format. */
export function GET() {
  const paths = [
    "",
    "/services",
    "/service-areas",
    "/gallery",
    "/about",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer",
    ...SERVICES.map((s) => `/services/${s.slug}`),
    ...CITIES.map((c) => `/service-areas/${c.slug}`),
  ];

  return new Response(paths.map((p) => `${SITE_URL}${p}`).join("\n") + "\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
