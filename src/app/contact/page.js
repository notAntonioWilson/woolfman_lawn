import Link from "next/link";
import {
  PageHeader,
  QuoteSection,
  SectionHead,
  SectionCta,
  StatBar,
  ServicesSection,
  CitiesSection,
} from "@/components/Sections";
import Faq from "@/components/Faq";
import JsonLd, { breadcrumbSchema, faqSchema } from "@/components/JsonLd";
import { BIZ, FAQS, CITIES } from "@/lib/site";

export const metadata = {
  title: "Contact & Free Estimate",
  description:
    "Call, text, or request a free lawn care estimate from Woolfman Lawn Services. Serving Detroit, Redford, Southfield, West Bloomfield, and Warren, Michigan.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  const items = [
    { t: "Call or text", v: BIZ.phone, href: `tel:${BIZ.phoneRaw}` },
    { t: "Second line", v: BIZ.phoneAlt, href: `tel:${BIZ.phoneAltRaw}` },
    { t: "Email", v: BIZ.email, href: `mailto:${BIZ.email}` },
    { t: "Hours", v: BIZ.hours, href: null },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      <JsonLd data={faqSchema(FAQS.slice(0, 4))} />

      <PageHeader
        crumb="Home / Contact"
        title="Get In Touch"
        copy="Call, text, or send the form. The fastest response is a text during business hours, and most estimates go out the same day."
        cta={false}
      />

      <section className="pt-12">
        <div className="shell">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {items.map((i) => (
              <div key={i.t} className="bg-white p-6">
                <h2 className="text-[18px] uppercase mb-2">{i.t}</h2>
                {i.href ? (
                  <a
                    href={i.href}
                    className="text-stone hover:text-turf transition-colors break-all"
                  >
                    {i.v}
                  </a>
                ) : (
                  <p className="text-stone">{i.v}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 bg-haze border-l-[3px] border-blade px-6 py-5 rounded-r-[3px]">
            <p className="text-stone text-[15px]">
              <b className="text-ink font-display uppercase text-[15px]">Service area: </b>
              {CITIES.map((c) => c.name).join(", ")}, and the surrounding metro Detroit
              communities. We are a mobile service, so we come to you.
            </p>
          </div>
          <SectionCta
            className="mt-8"
            primary={{ href: "#estimate", label: "Fill Out The Estimate Form" }}
            secondary={{ href: "/gallery", label: "See Our Work First" }}
          />
        </div>
      </section>

      <QuoteSection
        eyebrow="Free estimate"
        title="Request Your Free Estimate"
        copy="Tell us about the property and we will get back to you with a full estimate and the work written out. No obligation."
      />

      <StatBar />
      <ServicesSection />

      <section className="section bg-haze">
        <div className="shell max-w-[900px]">
          <SectionHead eyebrow="Before you call" title="Quick Answers" />
          <Faq items={FAQS.slice(0, 4)} />
          <SectionCta
            className="mt-10"
            primary={{ href: "#estimate", label: "Get a Free Estimate" }}
            secondary={{ href: "/faq", label: "All Questions" }}
          />
        </div>
      </section>

      <CitiesSection />
    </>
  );
}
