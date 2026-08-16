import { SITE_URL, SERVICES, CITIES } from "@/lib/site";

export default function sitemap() {
  const now = new Date();

  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" },
    { url: "/service-areas", priority: 0.9, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { url: "/gallery", priority: 0.8, changeFrequency: "weekly" },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" },
    { url: "/reviews", priority: 0.7, changeFrequency: "weekly" },
    { url: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { url: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { url: "/terms-of-service", priority: 0.2, changeFrequency: "yearly" },
    { url: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${SITE_URL}${p.url}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
    ...CITIES.map((c) => ({
      url: `${SITE_URL}/service-areas/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
  ];
}
