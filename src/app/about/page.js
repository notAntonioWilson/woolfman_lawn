import Image from "next/image";
import Link from "next/link";
import {
  PageHeader,
  QuoteSection,
  SectionHead,
  SectionCta,
  StatBar,
  ProcessSection,
  PromisesSection,
  CitiesSection,
  OnTheJob,
} from "@/components/Sections";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { BIZ, PHOTOS, SITE_URL } from "@/lib/site";

export const metadata = {
  title: "About Keonte Woolf & Woolfman Lawn Services",
  description:
    "Woolfman Lawn Services is a licensed and insured Detroit LLC owned by Keonte Woolf. Two years in business, 150+ properties serviced across metro Detroit.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: BIZ.ownerFull,
          jobTitle: "Owner",
          worksFor: { "@id": `${SITE_URL}/#business` },
          url: `${SITE_URL}/about`,
        }}
      />

      <PageHeader
        crumb="Home / About"
        title="A Local Crew That Actually Shows Up"
        copy={`Woolfman Lawn Services is owned and run by ${BIZ.ownerFull}, out of Detroit, Michigan.`}
      />

      <section className="section">
        <div className="shell grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden bg-turf-dk">
              <Image
                src={PHOTOS.owner.src}
                alt={PHOTOS.owner.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-5 left-5 bg-blade text-turf-dk px-6 py-4 rounded-[3px]">
              <div className="font-display font-extrabold text-[26px] leading-none">150+</div>
              <div className="font-display text-[10px] font-bold tracking-[0.14em] uppercase mt-1">
                Properties Serviced
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-3.5">Meet the owner</div>
            <h2 className="h-sec mb-5">Keonte Woolf</h2>
            <p className="text-stone mb-4">
              Keonte started Woolfman Lawn Services with one mower, one trailer, and a short list
              of neighbors who needed their grass cut. Two years later it is a licensed and
              insured LLC running weekly routes through Detroit, Redford, Southfield, West
              Bloomfield, and Warren, with more than 150 properties serviced.
            </p>
            <p className="text-stone mb-4">
              What has not changed is who shows up. Keonte is on the jobs himself. He walks the
              property, tells you what it actually needs instead of what is easiest to sell, and
              checks the yard before the trailer gets loaded. Call the number on this site and you
              get him, not a dispatcher.
            </p>
            <p className="text-stone mb-4">
              The business grew on word of mouth, which only works one way: do the job right every
              time so the customer tells the next person. That is the whole strategy, and it is
              why the standard does not slip when the schedule gets full.
            </p>
            <SectionCta
              className="mt-7"
              primary={{ href: "/contact", label: "Work With Keonte" }}
              secondary={{ href: "/gallery", label: "See His Work" }}
            />
          </div>
        </div>
      </section>

      <StatBar />

      <section className="section">
        <div className="shell grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-3.5">Our standard</div>
            <h2 className="h-sec mb-5">We Treat Every Property Like It Is Ours</h2>
            <p className="text-stone mb-4">
              That line gets used by a lot of companies. Here is what it means in practice: the
              beds get edged even when nobody asked, the driveway gets blown off before we pull
              away, and the clippings do not end up in the street.
            </p>
            <p className="text-stone mb-4">
              We focus on reliable service, clean and detailed work, and building real
              relationships with customers instead of just showing up to cut grass. We are a
              local, growing business that takes pride in being dependable, honest, and
              willing to go the extra mile.
            </p>
            <p className="text-stone mb-4">
              Whether it is a simple lawn cut or a full yard cleanup, the goal is the same: leave
              every customer completely satisfied and make their property look its best.
            </p>
            <p className="font-display font-extrabold text-[20px] uppercase text-ink mt-6">
              {BIZ.tagline}.
            </p>
            <SectionCta
              className="mt-7"
              primary={{ href: "/contact", label: "Get a Free Estimate" }}
              secondary={{ href: "/services", label: "What We Offer" }}
            />
          </div>

          <div className="grid gap-3.5">
            <div className="relative aspect-[16/10] rounded-[4px] overflow-hidden bg-turf-dk">
              <Image
                src={PHOTOS.aboutTruck.src}
                alt={PHOTOS.aboutTruck.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative aspect-[16/10] rounded-[4px] overflow-hidden bg-turf-dk">
              <Image
                src={PHOTOS.aboutCrew.src}
                alt={PHOTOS.aboutCrew.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <PromisesSection />
      <ProcessSection />
      <OnTheJob />
      <CitiesSection />

      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Credentials"
            title="Licensed, Insured, And Local"
            copy="The paperwork matters. So does knowing who is on your property."
          />
          <div className="grid sm:grid-cols-3 gap-px bg-line border border-line">
            {[
              {
                t: "Licensed LLC",
                d: `${BIZ.legalName} is a properly registered Michigan limited liability company.`,
              },
              {
                t: "Fully insured",
                d: "Carrying insurance on every job, so you are covered if something goes wrong on your property.",
              },
              {
                t: "Detroit based",
                d: "We live and work here. Our routes run out of Detroit through the surrounding metro.",
              },
            ].map((x) => (
              <div key={x.t} className="bg-white p-7">
                <h3 className="text-[19px] uppercase mb-2.5">{x.t}</h3>
                <p className="text-stone text-[14.5px]">{x.d}</p>
              </div>
            ))}
          </div>
          <SectionCta
            className="mt-10"
            primary={{ href: "/contact", label: "Get a Free Estimate" }}
            secondary={{ href: "/gallery", label: "See Our Work" }}
          />
        </div>
      </section>

      <QuoteSection
        title="Let's Take a Look at Your Yard"
        copy="Send the details and Keonte will get back to you with a real price, usually the same day."
      />
    </>
  );
}
