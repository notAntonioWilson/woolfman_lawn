import {
  PageHeader,
  CityGrid,
  QuoteSection,
  SectionHead,
  SectionCta,
  StatBar,
  ServicesSection,
  PhotoStrip,
} from "@/components/Sections";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { CITIES } from "@/lib/site";

export const metadata = {
  title: "Service Areas in Metro Detroit",
  description:
    "Woolfman Lawn Services covers Detroit, Redford, Southfield, West Bloomfield, and Warren with weekly lawn maintenance, mulch, sod, cleanups, and snow removal. Free estimates.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreas() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
        ])}
      />
      <PageHeader
        center
        crumb="Home / Service Areas"
        title="Lawn Care & Landscaping Near You in Metro Detroit"
        copy="Detroit is home base. We run weekly lawn mowing, mulch, sod, yard cleanup, and snow removal routes out through Redford, Southfield, West Bloomfield, and Warren, plus the streets in between. Looking for a lawn service near you in metro Detroit? Start here."
      />

      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Where we work"
            title="Pick Your City"
            copy="Every area gets the same crew and the same standard. Click through to see what we run most in your neighborhood."
          />
          <CityGrid />
          <SectionCta
            className="mt-7"
            primary={{ href: "/contact", label: "Check If We Cover You" }}
            secondary={{ href: "/gallery", label: "See Local Work" }}
          />
        </div>
      </section>

      <StatBar />
      <PhotoStrip eyebrow="Around the metro" title="Recent Jobs In These Areas" />

      <section className="section bg-haze">
        <div className="shell">
          <SectionHead
            eyebrow="Not on the list?"
            title="Ask Us Anyway"
            copy="We add streets when the route makes sense. If you are close to one of our cities, call and we will tell you straight whether we can cover you."
          />
          <p className="text-stone max-w-[60ch]">
            We regularly service properties in and around{" "}
            {CITIES.map((c) => c.name).join(", ")} and the surrounding communities. Coverage
            depends on how the route runs that season, so the fastest answer is a quick call or a
            form with your ZIP.
          </p>
          <SectionCta
            className="mt-6"
            primary={{ href: "/contact", label: "Send My Address" }}
            secondary={{ href: "/services", label: "Browse Services" }}
          />
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
