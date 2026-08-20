import { SITE_URL } from "@/lib/site";

export default function robots() {
  return {
    rules: [
      // Search engines: everything except the lead endpoint and Next internals.
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
      // Answer engines and AI crawlers are explicitly welcome. A local service
      // business wants to be quotable when someone asks an assistant for a
      // landscaper in Detroit.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/sitemap.txt`],
    host: SITE_URL,
  };
}
