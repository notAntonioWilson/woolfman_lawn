import Faq from "@/components/Faq";
import {
  PageHeader,
  QuoteSection,
  SectionHead,
  SectionCta,
  StatBar,
  ServicesSection,
} from "@/components/Sections";
import JsonLd, { faqSchema, breadcrumbSchema } from "@/components/JsonLd";
import { FAQS, BIZ } from "@/lib/site";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Estimates, scheduling, contracts, insurance, and service areas. The questions Detroit homeowners ask Woolfman Lawn Services every week.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ])}
      />
      <PageHeader
        crumb="Home / FAQ"
        title="Questions We Get Every Week"
        copy={`If yours is not here, text ${BIZ.phone} and Keonte will answer it directly.`}
      />

      <section className="section">
        <div className="shell max-w-[900px]">
          <Faq items={FAQS} />
          <SectionCta
            className="mt-10"
            primary={{ href: "/contact", label: "Ask Us Directly" }}
            secondary={{ href: "/gallery", label: "See Our Work" }}
          />
        </div>
      </section>

      <StatBar />
      <ServicesSection />
      <QuoteSection />
    </>
  );
}
