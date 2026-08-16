import Link from "next/link";
import {
  PageHeader,
  QuoteSection,
  SectionHead,
  SectionCta,
  StatBar,
  PromisesSection,
  PhotoStrip,
} from "@/components/Sections";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import { BIZ } from "@/lib/site";

export const metadata = {
  title: "Reviews & Customer Feedback",
  description:
    "What metro Detroit homeowners say about Woolfman Lawn Services. Leave a review or read what customers think of our lawn care and landscaping.",
  alternates: { canonical: "/reviews" },
};

/* ------------------------------------------------------------------
   TO ADD REVIEWS: paste objects into this array and the page switches
   from the empty state to the review wall automatically. Once the
   Google Business Profile is verified, also uncomment the
   aggregateRating block in the JSON-LD below. Never add a rating to
   schema that is not backed by real published reviews.
   ------------------------------------------------------------------ */
const REVIEWS = [
  // { name: "First L.", city: "Redford", service: "Lawn Maintenance", source: "Google", text: "..." },
];

const GOOGLE_REVIEW_URL = "#"; // replace with the GBP review link once verified

export default function Reviews() {
  const hasReviews = REVIEWS.length > 0;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/reviews" },
        ])}
      />

      <PageHeader
        crumb="Home / Reviews"
        title="What Metro Detroit Homeowners Say"
        copy="Almost every job we book came from a neighbor telling a neighbor. We are building this page out as customers leave reviews."
      />

      <section className="section">
        <div className="shell">
          {hasReviews ? (
            <>
              <SectionHead
                eyebrow="Customer feedback"
                title="Straight From The Homeowners"
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
                {REVIEWS.map((r, i) => (
                  <div key={i} className="bg-white p-7 flex flex-col">
                    <div className="eyebrow mb-4">{r.source}</div>
                    <p className="text-ink text-[16px] italic flex-1">{r.text}</p>
                    <div className="mt-5 font-display text-[12px] font-bold tracking-[0.12em] uppercase text-stone">
                      {r.name} &middot; {r.city} &middot; {r.service}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="border-[1.5px] border-dashed border-line rounded-[4px] bg-haze px-8 py-14 text-center">
              <div className="eyebrow mb-4">Word of mouth</div>
              <h2 className="text-[clamp(26px,3.4vw,38px)] uppercase mb-4">
                Be The First Public Review
              </h2>
              <p className="text-stone max-w-[52ch] mx-auto mb-8">
                Two years and over 150 properties, almost all of it built on customers telling
                their neighbors and texting Keonte directly. If we have cut your grass, laid your
                sod, or cleared your driveway, a public review helps the next homeowner find us.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={GOOGLE_REVIEW_URL}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leave a Google Review
                </a>
                <a href={`sms:${BIZ.phoneRaw}`} className="btn btn-line">
                  Text Us Your Feedback
                </a>
              </div>
            </div>
          )}

          <SectionCta
            className="mt-10"
            primary={{ href: "/contact", label: "Get a Free Estimate" }}
            secondary={{ href: "/gallery", label: "See The Work Instead" }}
          />
        </div>
      </section>

      <StatBar />
      <PromisesSection />
      <PhotoStrip
        eyebrow="Proof over promises"
        title="Judge Us By The Yards"
      />

      <section className="section bg-haze">
        <div className="shell max-w-[820px] text-center">
          <SectionHead
            center
            eyebrow="Already a customer?"
            title="Tell Us How We Did"
            copy="Good or bad, we want to hear it. If something was not right, we would rather fix it than find out from a review."
          />
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={`tel:${BIZ.phoneRaw}`} className="btn btn-dark">
              Call {BIZ.phone}
            </a>
            <a href={`sms:${BIZ.phoneRaw}`} className="btn btn-line">
              Send a Text
            </a>
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
