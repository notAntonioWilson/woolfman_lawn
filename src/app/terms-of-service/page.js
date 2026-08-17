import { PageHeader, SectionCta } from "@/components/Sections";
import { BIZ } from "@/lib/site";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you use the Woolfman Lawn Services website and request or receive services.",
  alternates: { canonical: "/terms-of-service" },
};

const UPDATED = "August 2026";

const S = ({ title, children }) => (
  <section className="mb-7">
    <h2 className="text-[21px] uppercase mb-2.5">{title}</h2>
    <div className="space-y-2.5 text-stone text-[15.5px]">{children}</div>
  </section>
);

export default function Terms() {
  return (
    <>
      <PageHeader
        crumb="Home / Terms of Service"
        title="Terms of Service"
        copy={`The terms that apply when you use this site or hire ${BIZ.name}. Last updated ${UPDATED}.`}
        cta={false}
      />

      <div className="section">
        <div className="shell max-w-[820px]">
          <S title="Agreement">
            <p>
              By using this website or requesting services from {BIZ.legalName}, you agree to these
              terms. If you do not agree, please do not use the site or request service.
            </p>
          </S>

          <S title="Estimates and pricing">
            <p>
              Estimates provided through this site, by phone, or by text are based on the
              information you give us and, where applicable, a visual assessment of the property.
              An estimate is not a binding contract until we confirm the work and schedule it.
            </p>
            <p>
              If conditions on the property differ materially from what was described, we will
              tell you before proceeding and give you a revised price. We do not change a
              confirmed price without telling you first.
            </p>
          </S>

          <S title="Scheduling and access">
            <p>
              We assign service days and hold them where possible, but weather, equipment issues,
              and route changes can move a visit. We will communicate schedule changes as early as
              we can.
            </p>
            <p>
              You are responsible for giving us access to the property. That includes unlocking
              gates or providing codes, securing pets, and clearing the work area of toys,
              furniture, hoses, and other obstacles. If we cannot access or safely service the
              property on a scheduled visit, we may charge for the trip.
            </p>
          </S>

          <S title="Payment">
            <p>
              Payment terms are agreed before work begins. Recurring maintenance is billed on the
              schedule we agree to. One time jobs are due on completion unless we agree otherwise
              in writing. Late payments may pause service until the balance is settled.
            </p>
          </S>

          <S title="Cancellation">
            <p>
              Recurring maintenance runs until you tell us to stop. Let us know before your next
              scheduled visit and we will remove you from the route. Seasonal snow contracts are
              governed by the terms of that specific agreement.
            </p>
          </S>

          <S title="Property conditions and limits">
            <p>
              We are not responsible for damage caused by pre-existing conditions, hidden or
              unmarked items in the lawn such as irrigation heads, invisible fence wire, cables,
              landscape lighting, or debris, or by conditions outside our control including
              weather, disease, insects, and drought.
            </p>
            <p>
              Please mark or tell us about anything in the yard that could be struck by equipment.
              If something is damaged by our work, tell us the same day so we can look at it.
            </p>
          </S>

          <S title="Our work">
            <p>
              We stand behind what we do. If the work is not right, contact us the same day and we
              will come back and address it. Our responsibility is limited to correcting the work
              or refunding the amount paid for the specific service in question.
            </p>
          </S>

          <S title="Photos of completed work">
            <p>
              We may photograph completed work for our website and social media. Photos show the
              property, not identifying details such as house numbers where avoidable, and we do
              not publish addresses. If you do not want photos of your property used, tell us and
              we will not use them.
            </p>
          </S>

          <S title="Website content">
            <p>
              The content on this site, including text, layout, and images, belongs to{" "}
              {BIZ.legalName} or is used with permission. Do not copy or reuse it without written
              permission. We work to keep the site accurate but do not guarantee that every detail
              is current or error free.
            </p>
          </S>

          <S title="Acceptable use of this site">
            <p>
              Do not use this site to submit false or misleading requests, to send automated or
              bulk submissions, to attempt to gain unauthorized access to any system, to scrape or
              republish content, or to interfere with the operation of the site. We may block
              access for any of these reasons.
            </p>
          </S>

          <S title="Weather and events outside our control">
            <p>
              We are not responsible for delays or failure to perform caused by conditions beyond
              our reasonable control, including severe weather, frozen or saturated ground,
              equipment failure, supply shortages, illness, road closures, utility work, or
              emergencies. We will reschedule affected work as soon as conditions allow.
            </p>
          </S>

          <S title="Limitation of liability">
            <p>
              To the fullest extent permitted by Michigan law, {BIZ.legalName} is not liable for
              indirect, incidental, special, or consequential damages arising from use of this
              site or from services performed. Our total liability for any claim is limited to the
              amount you paid for the specific service that gave rise to the claim.
            </p>
            <p>
              Nothing in these terms limits liability that cannot be limited or excluded by law.
            </p>
          </S>

          <S title="Indemnification">
            <p>
              You agree to hold {BIZ.legalName} harmless from claims, losses, or expenses arising
              from your breach of these terms, from your misuse of this site, or from your failure
              to disclose hazards or obstructions on the property before we service it.
            </p>
          </S>

          <S title="Governing law and disputes">
            <p>
              These terms are governed by the laws of the State of Michigan without regard to
              conflict of law rules. Any dispute will be handled in the state or federal courts
              serving Wayne County, Michigan, and both parties consent to that jurisdiction.
            </p>
            <p>
              Before filing anything, contact us at {BIZ.phone} or {BIZ.email}. Nearly every issue
              we have ever had was resolved with a phone call and a return trip.
            </p>
          </S>

          <S title="Severability and entire agreement">
            <p>
              If any part of these terms is found unenforceable, the rest stays in effect. These
              terms, along with our Privacy Policy and Disclaimer and any written service
              agreement we sign with you, make up the entire agreement between us.
            </p>
            <p>
              If a signed service agreement conflicts with these terms, the signed agreement
              controls for that job.
            </p>
          </S>

          <S title="Changes">
            <p>
              We may update these terms. The updated date at the top tells you when they last
              changed. Continued use of the site or our services after a change means you accept
              the updated terms.
            </p>
          </S>

          <S title="Contact">
            <p>
              Questions about these terms? Call {BIZ.phone} or email {BIZ.email}.
            </p>
          </S>

          <p className="text-stone text-[15px] border-t border-line pt-8">
            See also our{" "}
            <a href="/privacy-policy" className="text-turf underline underline-offset-4">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/disclaimer" className="text-turf underline underline-offset-4">
              Disclaimer
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
