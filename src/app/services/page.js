import Link from "next/link";
import {
  PageHeader,
  ServiceCards,
  CitiesSection,
  ProcessSection,
  QuoteSection,
  SectionHead,
  SectionCta,
  StatBar,
} from "@/components/Sections";
import Faq from "@/components/Faq";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { FAQS, SERVICES } from "@/lib/site";

export const metadata = {
  title: "Lawn & Landscaping Services in Detroit, MI",
  description:
    "Lawn maintenance, mulching, sod installation, leaf removal, snow removal, bush trimming, and tree trimming across Detroit, Redford, Southfield, West Bloomfield, and Warren. Free estimates.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ])}
      />
      <PageHeader
        crumb="Home / Services"
        title="Everything Your Property Needs, All Year"
        copy="Weekly maintenance through the growing season, cleanups in fall, plowing in winter. One crew that already knows your yard."
      />

      <section className="section">
        <div className="shell">
          <ServiceCards />
          <div className="mt-10 bg-haze border-l-[3px] border-blade px-6 py-5 flex flex-wrap items-center justify-between gap-4 rounded-r-[3px]">
            <b className="font-display text-[17px] uppercase text-ink">
              Not sure what you need? Send photos and we will tell you.
            </b>
            <Link href="/contact" className="btn btn-sm btn-dark">
              Get a Free Estimate
            </Link>
          </div>
          <SectionCta
            className="mt-8"
            primary={{ href: "/contact", label: "Request Pricing" }}
            secondary={{ href: "/gallery", label: "See Completed Jobs" }}
          />
        </div>
      </section>

      <StatBar />
      <ProcessSection />
      <CitiesSection />

      <section className="section bg-haze">
        <div className="shell max-w-[900px]">
          <SectionHead
            eyebrow="Common questions"
            title="Pricing, Scheduling, And What To Expect"
          />
          <Faq items={FAQS.slice(0, 6)} />
          <SectionCta
            className="mt-10"
            primary={{ href: "/contact", label: "Get a Free Estimate" }}
            secondary={{ href: "/faq", label: "All Questions" }}
          />
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
