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
  title: "Lawn Services in Detroit, MI",
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
        title="Lawn & Landscaping Services in Detroit, MI"
        copy="Grass cutting, mulch installation, sod, leaf and yard cleanup, bush and tree trimming, and snow plowing. Weekly lawn maintenance through the growing season, cleanups in fall, plowing all winter. One crew that already knows your yard, across Detroit, Redford, Southfield, West Bloomfield, and Warren."
      />

      <section className="section">
        <div className="shell">
          <ServiceCards />
          <div className="mt-7 bg-haze border-l-[3px] border-blade px-6 py-4 flex flex-wrap items-center justify-between gap-4 rounded-r-[3px]">
            <b className="font-display text-[17px] uppercase text-ink">
              Not sure what you need? Send photos and we will tell you.
            </b>
            <Link href="/contact" className="btn btn-sm btn-block btn-dark">
              Get a Free Estimate
            </Link>
          </div>
          <SectionCta
            className="mt-6"
            primary={{ href: "/contact", label: "Get a Free Estimate" }}
            secondary={{ href: "/gallery", label: "See Completed Jobs" }}
          />
        </div>
      </section>

      <StatBar />
      <ProcessSection />
      <CitiesSection />

      <section className="section bg-haze pt-0">
        <div className="shell max-w-[900px]">
          <SectionHead
            eyebrow="Common questions"
            title="Scheduling, Service, And What To Expect"
          />
          <Faq items={FAQS.slice(0, 6)} />
          <SectionCta
            className="mt-7"
            primary={{ href: "/contact", label: "Get a Free Estimate" }}
            secondary={{ href: "/faq", label: "All Questions" }}
          />
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
