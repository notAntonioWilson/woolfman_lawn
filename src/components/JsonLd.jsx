import { BIZ, SITE_URL, CITIES, SERVICES } from "@/lib/site";

/* Address lives in schema only. It is never rendered on a page,
   which is correct for a service area business on Google Business Profile. */
export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BIZ.name,
  legalName: BIZ.legalName,
  url: SITE_URL,
  telephone: BIZ.phoneRaw,
  email: BIZ.email,
  founder: { "@type": "Person", name: BIZ.ownerFull },
  foundingDate: "2024",
  priceRange: "$$",
  image: `${SITE_URL}/og.jpg`,
  description:
    "Licensed and insured lawn care and landscaping in Detroit, Michigan. Weekly lawn maintenance, mulching, sod installation, leaf removal, bush and tree trimming, and snow removal across metro Detroit.",
  address: {
    "@type": "PostalAddress",
    streetAddress: BIZ.address.street,
    addressLocality: BIZ.address.city,
    addressRegion: BIZ.address.region,
    postalCode: BIZ.address.postalCode,
    addressCountry: BIZ.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BIZ.address.lat,
    longitude: BIZ.address.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: CITIES.map((c) => ({
    "@type": "City",
    name: c.name,
    containedInPlace: { "@type": "State", name: "Michigan" },
  })),
  sameAs: [BIZ.social.instagram, BIZ.social.facebook],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lawn and Landscaping Services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.short,
        url: `${SITE_URL}/services/${s.slug}`,
      },
    })),
  },
};

export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.intro,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: CITIES.map((c) => ({ "@type": "City", name: c.name })),
  };
}

export function breadcrumbSchema(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.href}`,
    })),
  };
}
