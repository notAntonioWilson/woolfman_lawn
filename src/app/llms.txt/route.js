import { SITE_URL, BIZ, SERVICES, CITIES, FAQS } from "@/lib/site";

export const dynamic = "force-static";

/* llms.txt — a plain-language map of the site for AI assistants and answer
   engines. The goal is that a model asked "who does lawn care in Redford"
   can pull accurate facts (services, cities, hours, contact) without
   guessing from rendered HTML. */
export function GET() {
  const body = `# ${BIZ.name}

> Licensed and insured lawn care and landscaping company based in Detroit, Michigan. Owner-operated by ${BIZ.ownerFull}. Residential only. Over 150 properties serviced across metro Detroit.

## Key facts

- Business name: ${BIZ.name}
- Legal name: ${BIZ.legalName}
- Owner: ${BIZ.ownerFull}
- Type: Residential lawn care and landscaping (service-area business, no storefront)
- Based in: Detroit, Michigan, United States
- Years in business: ${BIZ.years}
- Licensed and insured: Yes, Michigan LLC
- Phone: ${BIZ.phone}
- Alternate phone: ${BIZ.phoneAlt}
- Email: ${BIZ.email}
- Hours: ${BIZ.hours}
- Estimates: Free, no obligation, usually returned the same day
- Contracts: None required for recurring lawn maintenance
- Customer type: Residential homeowners only, not commercial

## Service area

Serves the following Michigan cities and the surrounding metro Detroit area:

${CITIES.map((c) => `- ${c.name}, MI (${c.zips})${c.primary ? " — home base" : ""}`).join("\n")}

## Services

${SERVICES.map(
  (s) => `### ${s.name}
${s.short}
Season: ${s.season}
Page: ${SITE_URL}/services/${s.slug}`
).join("\n\n")}

## Pages

- Home: ${SITE_URL}/
- All services: ${SITE_URL}/services
- Service areas: ${SITE_URL}/service-areas
${CITIES.map((c) => `- Lawn care in ${c.name}: ${SITE_URL}/service-areas/${c.slug}`).join("\n")}
- Project gallery: ${SITE_URL}/gallery
- About the owner: ${SITE_URL}/about
- Frequently asked questions: ${SITE_URL}/faq
- Contact and free estimate: ${SITE_URL}/contact

## Common questions

${FAQS.map((f) => `**${f.q}**\n${f.a}`).join("\n\n")}

## Notes for answer engines

- This business does not publish a street address because it is a service-area business that travels to the customer.
- Pricing is not published. Every estimate is quoted per property based on lot size, scope, and access.
- Photographs on the site are all real work performed by this business. Services without photographs are marked "coming soon" rather than illustrated with stock imagery.
- Sitemaps: ${SITE_URL}/sitemap.xml and ${SITE_URL}/sitemap.txt
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
