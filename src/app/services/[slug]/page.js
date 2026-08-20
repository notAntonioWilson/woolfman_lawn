import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  PageHeader,
  ServiceCards,
  CitiesSection,
  QuoteSection,
  SectionHead,
  SectionCta,
  StatBar,
  OnTheJob,
} from "@/components/Sections";
import Faq from "@/components/Faq";
import BeforeAfterWheel from "@/components/BeforeAfterWheel";
import JsonLd, { serviceSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";
import { SERVICES, CITIES, FAQS, getService, getBeforeAfter, BIZ } from "@/lib/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.h1 || `${s.name} in Detroit, MI`,
    description: `${s.intro} Serving Detroit, Redford, Southfield, West Bloomfield, and Warren. Free estimates from Woolfman Lawn Services.`,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.h1 || `${s.name} in Detroit, MI`, description: s.intro },
  };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);
  const pairs = getBeforeAfter(s.slug);

  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: s.name, href: `/services/${s.slug}` },
        ])}
      />

      <PageHeader
        crumb={`Home / Services / ${s.name}`}
        title={s.h1 || `${s.name} in Detroit, MI`}
        copy={s.intro}
      />

      <section className="section">
        <div className="shell grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="eyebrow mb-3.5">What you get</div>
            <h2 className="h-sec mb-4">Every Visit, Every Time</h2>
            {s.body.map((p, i) => (
              <p key={i} className="text-stone mb-3">
                {p}
              </p>
            ))}

            <ul className="mt-6 border-t border-line">
              {s.includes.map((i) => (
                <li
                  key={i}
                  className="relative py-3 pl-7 border-b border-line text-[15px] before:content-[''] before:absolute before:left-0 before:top-[20px] before:w-3 before:h-[2px] before:bg-blade"
                >
                  {i}
                </li>
              ))}
            </ul>

            <div className="eyebrow mt-5">Season &middot; {s.season}</div>

            <SectionCta
              left
              className="mt-7"
              primary={{ href: "/contact", label: `Get a Free Estimate` }}
              secondary={{ href: "/gallery", label: "See This Work" }}
            />
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden bg-turf-dk">
              <Image
                src={s.photo}
                alt={`${s.name} on a property in Detroit, Michigan`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="mt-3.5 bg-haze border-l-[3px] border-blade px-5 py-3.5 rounded-r-[3px] flex flex-wrap items-center justify-between gap-3">
              <b className="font-display text-[15px] uppercase">Call {BIZ.phone}</b>
              <a href={`tel:${BIZ.phoneRaw}`} className="btn btn-sm btn-block btn-dark">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <StatBar />

      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Where we do it"
            title={`${s.name} Across Metro Detroit`}
            copy="Detroit is home base, and we run this service through every city on our route."
          />
          <div className="flex flex-wrap gap-px bg-line border border-line">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="bg-white p-5 grow shrink-0 basis-full sm:basis-[calc(50%-1px)] lg:basis-[190px] hover:bg-haze transition-colors"
              >
                <h3 className="text-[18px] uppercase mb-2">{c.name}</h3>
                <p className="text-stone text-[13.5px]">{c.blurb}</p>
              </Link>
            ))}
          </div>
          <SectionCta
            className="mt-7"
            primary={{ href: "/contact", label: "Check My Address" }}
            secondary={{ href: "/service-areas", label: "All Service Areas" }}
          />
        </div>
      </section>

      <section className="section bg-haze">
        <div className="shell">
          <SectionHead eyebrow="Also available" title="Other Services We Offer" />
          <ServiceCards items={others} />
          <SectionCta
            className="mt-7"
            primary={{ href: "/services", label: "View All Services" }}
            secondary={{ href: "/contact", label: "Get a Free Estimate" }}
          />
        </div>
      </section>

      {pairs ? (
        <BeforeAfterWheel
          flush
          pairs={pairs}
          eyebrow="Before and after"
          title={`${s.name} Before And After`}
          copy={`Real ${s.name.toLowerCase()} jobs across Detroit, Redford, Southfield, West Bloomfield, and Warren. Shot before we started and again after we pulled away.`}
        />
      ) : (
        <OnTheJob flush />
      )}
      <QuoteSection
        title={`Free Estimate for ${s.name}`}
        defaultService={s.name}
        copy="Tell us about the property and we will get back to you with a full estimate, usually the same day."
      />
    </>
  );
}
