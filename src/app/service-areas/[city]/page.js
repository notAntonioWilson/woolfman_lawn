import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  PageHeader,
  ServiceCards,
  CityGrid,
  QuoteSection,
  SectionHead,
  SectionCta,
  StatBar,
  OnTheJob,
} from "@/components/Sections";
import Faq from "@/components/Faq";
import JsonLd, { breadcrumbSchema, faqSchema } from "@/components/JsonLd";
import { CITIES, FAQS, getCity, getService, BIZ, SITE_URL, PHOTOS } from "@/lib/site";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  return {
    title: `Lawn Care & Landscaping in ${c.name}, MI`,
    description: `${c.intro} Lawn maintenance, mulch, sod, cleanups, and snow removal in ${c.name}, Michigan. Licensed and insured. Free estimates.`,
    alternates: { canonical: `/service-areas/${c.slug}` },
    openGraph: {
      title: `Lawn Care & Landscaping in ${c.name}, MI`,
      description: c.intro,
    },
  };
}

export default async function CityPage({ params }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const services = c.services.map(getService).filter(Boolean);
  const cityFaqs = [
    {
      q: `Do you service all of ${c.name}?`,
      a: `We run routes across ${c.name} including ${c.zips}. If your street is not on the current route we will tell you straight rather than promise a day we cannot hold.`,
    },
    ...FAQS.slice(0, 4),
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: c.name, href: `/service-areas/${c.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(cityFaqs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Lawn Care and Landscaping in ${c.name}, MI`,
          description: c.intro,
          url: `${SITE_URL}/service-areas/${c.slug}`,
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: { "@type": "City", name: c.name },
        }}
      />

      <PageHeader
        crumb={`Home / Service Areas / ${c.name}`}
        title={`Lawn Care & Landscaping in ${c.name}, MI`}
        copy={c.intro}
      />

      <section className="section">
        <div className="shell grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-3.5">{c.name}, Michigan</div>
            <h2 className="h-sec mb-5">What We Run Most in {c.name}</h2>
            {c.body.map((p, i) => (
              <p key={i} className="text-stone mb-4">
                {p}
              </p>
            ))}
            <p className="text-stone">
              Serving ZIP codes {c.zips} and the surrounding streets. Licensed, insured, and over
              150 properties serviced across the metro.
            </p>
            <SectionCta
              className="mt-8"
              primary={{ href: "/contact", label: `Get a ${c.name} Estimate` }}
              secondary={{ href: "/gallery", label: "See Our Work" }}
            />
          </div>
          <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden bg-turf-dk">
            <Image
              src={PHOTOS.areaMap.src}
              alt={`Residential property serviced in ${c.name}, Michigan`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      <StatBar />

      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Popular here"
            title={`Services We Run in ${c.name}`}
            copy="These are the jobs we book most often in this area, but we offer the full list everywhere we go."
          />
          <ServiceCards items={services} />
          <SectionCta
            className="mt-10"
            primary={{ href: "/contact", label: "Get a Free Estimate" }}
            secondary={{ href: "/services", label: "All Seven Services" }}
          />
        </div>
      </section>

      <OnTheJob />

      <section className="section">
        <div className="shell max-w-[900px]">
          <SectionHead eyebrow="Common questions" title={`Working With Us in ${c.name}`} />
          <Faq items={cityFaqs} />
          <SectionCta
            className="mt-10"
            primary={{ href: "/contact", label: "Ask About My Street" }}
            secondary={{ href: "/faq", label: "All Questions" }}
          />
        </div>
      </section>

      <section className="section bg-haze">
        <div className="shell">
          <SectionHead
            eyebrow="Nearby"
            title="Other Areas We Cover"
            copy="Same crew, same standard, across the whole route."
          />
          <CityGrid current={c.slug} />
          <SectionCta
            className="mt-10"
            primary={{ href: "/contact", label: "Get a Free Estimate" }}
            secondary={{ href: "/service-areas", label: "All Service Areas" }}
          />
        </div>
      </section>

      <QuoteSection
        title={`Free Estimate in ${c.name}`}
        copy={`Tell us about the property and we will send a real price back, usually the same day. Serving ${c.zips} and the surrounding streets.`}
      />
    </>
  );
}
