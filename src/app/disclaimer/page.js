import { PageHeader, SectionCta } from "@/components/Sections";
import { BIZ } from "@/lib/site";

export const metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimers about the information, pricing, photos, and results shown on the Woolfman Lawn Services website.",
  alternates: { canonical: "/disclaimer" },
};

const UPDATED = "August 2026";

const S = ({ title, children }) => (
  <section className="mb-7">
    <h2 className="text-[19px] sm:text-[21px] uppercase mb-2.5">{title}</h2>
    <div className="space-y-2.5 text-stone text-[15.5px]">{children}</div>
  </section>
);

export default function Disclaimer() {
  return (
    <>
      <PageHeader
        crumb="Home / Disclaimer"
        title="Disclaimer"
        copy={`What the information on this site does and does not promise. Last updated ${UPDATED}.`}
        cta={false}
      />

      <div className="section">
        <div className="shell max-w-[820px]">
          <S title="General information only">
            <p>
              The content on this website is provided for general informational purposes about{" "}
              {BIZ.legalName} and the services we offer. It is not professional advice for your
              specific property, and it should not be treated as a guarantee of any particular
              outcome.
            </p>
            <p>
              Every property is different. Soil, drainage, sun exposure, grade, existing plant
              health, and how a lawn has been maintained in the past all affect what a service can
              realistically achieve. Nothing on this site accounts for the conditions at your
              address.
            </p>
          </S>

          <S title="Pricing and estimates">
            <p>
              Any prices, ranges, or descriptions of what a service typically costs are examples,
              not offers. Real pricing depends on lot size, scope, access, condition of the
              property, and how often we service it.
            </p>
            <p>
              An estimate becomes a real number only after we have the property details, and it
              becomes binding only when we confirm the work and schedule it. Submitting a form on
              this site does not create a service agreement or reserve a spot on our route.
            </p>
          </S>

          <S title="Photos and results">
            <p>
              Photos on this site show work performed by {BIZ.name} and are representative of the
              services described. They are not a promise that your property will look the same.
              Results vary with the starting condition of the property, the season, the weather,
              and ongoing maintenance after we leave.
            </p>
            <p>
              Some images on this site may be stock or placeholder photography used for layout and
              illustration rather than depictions of a specific completed job.
            </p>
          </S>

          <S title="Lawn and plant health">
            <p>
              We are a lawn care and landscaping service, not agronomists, arborists, or
              horticulturists. Any general guidance on this site about watering, mowing height,
              mulch depth, timing, or plant care is offered as practical experience, not as
              professional horticultural, agricultural, or arboricultural advice.
            </p>
            <p>
              We cannot guarantee the survival, growth, or appearance of any grass, sod, shrub, or
              tree. Living material responds to drought, disease, insects, frost, animal damage,
              irrigation problems, and other conditions that are outside our control.
            </p>
          </S>

          <S title="Availability and service area">
            <p>
              Service areas listed on this site describe where we generally run routes. Coverage
              for a specific street or property depends on how the route is running that season
              and is confirmed only when we accept the job. Listing a city here is not a promise
              of availability at your address.
            </p>
          </S>

          <S title="Accuracy of content">
            <p>
              We work to keep this site accurate and current, but we make no representation or
              warranty that every detail is complete, correct, or up to date. Service
              descriptions, seasonal timing, hours, and contact details can change without notice.
            </p>
            <p>
              If you find something on this site that appears wrong or out of date, tell us at{" "}
              {BIZ.email} or {BIZ.phone} and we will correct it.
            </p>
          </S>

          <S title="External links">
            <p>
              This site may link to third party websites such as social media profiles, review
              platforms, or map services. We do not control those sites and are not responsible
              for their content, accuracy, availability, or privacy practices. A link is not an
              endorsement.
            </p>
          </S>

          <S title="No professional advice">
            <p>
              Nothing on this site is legal, financial, insurance, real estate, or engineering
              advice. If a project involves grading, drainage, retaining structures, property
              lines, permits, utilities, or anything that could affect your home or your
              neighbor&rsquo;s, consult the appropriate licensed professional before proceeding.
            </p>
            <p>
              Before any digging work, contact MISS DIG at 811 or miss-dig.org so underground
              utilities can be located and marked. This is required in Michigan.
            </p>
          </S>

          <S title="Limitation of liability">
            <p>
              To the fullest extent permitted by Michigan law, {BIZ.legalName} is not liable for
              any loss or damage resulting from your reliance on information found on this site.
              Use of this site is at your own risk.
            </p>
            <p>
              This disclaimer works alongside our Terms of Service and Privacy Policy. Where the
              Terms of Service address services actually performed on your property, those terms
              control.
            </p>
          </S>

          <S title="Contact">
            <p>
              Questions about anything on this page? Call {BIZ.phone} or email {BIZ.email}.
            </p>
          </S>

          <p className="text-stone text-[15px] border-t border-line pt-8">
            See also our{" "}
            <a href="/privacy-policy" className="text-turf underline underline-offset-4">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms-of-service" className="text-turf underline underline-offset-4">
              Terms of Service
            </a>
            .
          </p>

          <SectionCta
            className="mt-9"
            primary={{ href: "/contact", label: "Get a Free Estimate" }}
            secondary={{ href: "/", label: "Back to Home" }}
          />
        </div>
      </div>
    </>
  );
}
