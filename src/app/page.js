import Link from "next/link";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import JsonLd, { faqSchema } from "@/components/JsonLd";
import {
  StatBar,
  Ticker,
  PhotoStrip,
  ServicesSection,
  CitiesSection,
  ProcessSection,
  PromisesSection,
  OwnerSection,
  OnTheJob,
  QuoteSection,
  SectionHead,
  SectionCta,
} from "@/components/Sections";
import { FAQS } from "@/lib/site";

export const metadata = {
  title: { absolute: "Lawn Care & Landscaping in Detroit, MI | Woolfman Lawn" },
  description:
    "Licensed and insured lawn care in Detroit, MI. Weekly maintenance, mulching, sod, leaf removal, and snow removal across Detroit, Redford, Southfield, West Bloomfield, and Warren. 150+ properties serviced. Free estimates.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const homeFaqs = FAQS.slice(0, 5);
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <StatBar />
      <Ticker />
      <PhotoStrip />
      <ServicesSection flush />
      <PromisesSection />
      <CitiesSection />
      <OwnerSection />
      <ProcessSection flush />
      <OnTheJob />

      <section className="section">
        <div className="shell max-w-[900px]">
          <SectionHead
            eyebrow="Common questions"
            title="Before You Call"
            copy="The things homeowners ask us every week. If yours is not here, text and Keonte will answer directly."
          />
          <Faq items={homeFaqs} />
          <SectionCta
            className="mt-7"
            primary={{ href: "/contact", label: "Get a Free Estimate" }}
            secondary={{ href: "/faq", label: "Read All Questions" }}
          />
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
