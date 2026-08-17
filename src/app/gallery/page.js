import Image from "next/image";
import {
  PageHeader,
  QuoteSection,
  SectionHead,
  SectionCta,
  StatBar,
  ServicesSection,
  OnTheJob,
} from "@/components/Sections";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { GALLERY, CITIES } from "@/lib/site";

export const metadata = {
  title: "Project Gallery | Lawn & Landscaping Work in Metro Detroit",
  description:
    "Completed lawn maintenance, mulch, sod, cleanup, and snow removal jobs across Detroit, Redford, Southfield, West Bloomfield, and Warren.",
  alternates: { canonical: "/gallery" },
};

export default function Gallery() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Gallery", href: "/gallery" },
        ])}
      />
      <PageHeader
        crumb="Home / Gallery"
        title="Lawn Care & Landscaping Photos in Metro Detroit"
        copy="Cut and edged lawns, fresh mulch beds, new sod installs, full yard cleanups, trimmed hedges, and plowed driveways. Every photo here is a real Detroit, Redford, Southfield, West Bloomfield, or Warren property we serviced."
      />

      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="The work"
            title="Properties We Have Serviced"
            copy="Over 150 properties across Detroit and the surrounding suburbs, and counting."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {GALLERY.map((g, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-[4px] overflow-hidden bg-turf-dk"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
          <SectionCta
            className="mt-7"
            primary={{ href: "/contact", label: "Get Your Yard on This Page" }}
            secondary={{ href: "/services", label: "Browse Services" }}
          />
        </div>
      </section>

      <StatBar />
      <OnTheJob />
      <ServicesSection />
      <QuoteSection
        title="Want Results Like These?"
        copy="Send us the property details and we will tell you exactly what it needs."
      />
    </>
  );
}
