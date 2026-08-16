import { PageHeader, SectionCta } from "@/components/Sections";
import { BIZ } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Woolfman Lawn Services collects, uses, and protects the information you submit through this website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const UPDATED = "August 2026";

const S = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-[22px] uppercase mb-3">{title}</h2>
    <div className="space-y-3 text-stone text-[15.5px]">{children}</div>
  </section>
);

export default function Privacy() {
  return (
    <>
      <PageHeader
        crumb="Home / Privacy Policy"
        title="Privacy Policy"
        copy={`How ${BIZ.name} handles the information you send us. Last updated ${UPDATED}.`}
        cta={false}
      />

      <div className="section">
        <div className="shell max-w-[820px]">
          <S title="Who we are">
            <p>
              {BIZ.legalName} operates this website and provides lawn care and landscaping
              services in the Detroit, Michigan metropolitan area. You can reach us at{" "}
              {BIZ.phone} or {BIZ.email}.
            </p>
          </S>

          <S title="Information we collect">
            <p>
              When you submit an estimate request or contact form, we collect the information you
              choose to give us. That typically includes your name, phone number, property address
              or ZIP code, city, the service you are interested in, your preferred contact method,
              your email address if you provide one, and any details you add in the message field.
            </p>
            <p>
              We also collect basic technical information automatically, such as your IP address,
              browser type, device type, the pages you visit, and the site that referred you. This
              is standard web server and analytics data.
            </p>
          </S>

          <S title="How we use it">
            <p>
              We use the information you submit to respond to your request, prepare and send you a
              price, schedule service, and communicate with you about work on your property. If
              you become a customer, we use your contact details to coordinate service, billing,
              and scheduling.
            </p>
            <p>
              We use technical and analytics information to understand how the site is used and to
              improve it. We do not sell your personal information to anyone.
            </p>
          </S>

          <S title="How we contact you">
            <p>
              By submitting a form on this site you are asking us to contact you about your
              request. We may reach you by phone call, text message, or email using the details
              you provided and the contact method you selected. Message and data rates from your
              carrier may apply. You can ask us to stop contacting you at any time by replying
              STOP to a text or telling us directly.
            </p>
          </S>

          <S title="Who we share it with">
            <p>
              We share information only with the service providers that help us run the business.
              That may include our website host, our form and lead routing tools, our customer
              records system, and analytics providers. These providers only receive what they need
              to perform their function.
            </p>
            <p>
              We may disclose information if required by law, or to protect the rights, property,
              or safety of our business, our customers, or the public.
            </p>
          </S>

          <S title="Cookies and analytics">
            <p>
              This site may use cookies and similar technologies to keep the site working properly
              and to measure traffic. Most browsers let you refuse or delete cookies through your
              settings. Turning cookies off may affect how parts of the site work.
            </p>
          </S>

          <S title="How long we keep it">
            <p>
              We keep estimate requests and customer records for as long as needed to serve you
              and to meet our legal, tax, and accounting obligations. When information is no
              longer needed, we delete it or remove the details that identify you.
            </p>
          </S>

          <S title="How we protect it">
            <p>
              We use reasonable administrative and technical measures to protect the information
              you send us, including encrypted connections on this website and access controls on
              the tools we use to store customer records.
            </p>
            <p>
              No method of transmitting or storing information is completely secure. We cannot
              guarantee absolute security, and you send information to us at your own risk.
            </p>
          </S>

          <S title="Third party sites">
            <p>
              This site links to third party services such as Instagram, Facebook, and review
              platforms. Once you leave this site, their privacy policies apply rather than ours.
              We are not responsible for how those companies handle your information.
            </p>
          </S>

          <S title="Your choices and rights">
            <p>
              You can ask us what information we have about you, ask us to correct it, or ask us
              to delete it. Contact us at {BIZ.email} or {BIZ.phone} and we will handle the
              request. Some information may need to be kept for legal, tax, or accounting reasons.
            </p>
            <p>
              Depending on where you live, you may have additional rights under state privacy law,
              including the right to know what personal information we collect, the right to
              request deletion, the right to correct inaccurate information, and the right not to
              be discriminated against for exercising those rights. We do not sell personal
              information and we do not share it for cross context behavioral advertising.
            </p>
            <p>
              To exercise any of these rights, contact us using the details on this page. We may
              need to verify your identity before acting on a request.
            </p>
          </S>

          <S title="Do not track">
            <p>
              Some browsers send a Do Not Track signal. There is no common industry standard for
              how to respond to it, so this site does not currently change its behavior based on
              that signal.
            </p>
          </S>

          <S title="Children">
            <p>
              This site is meant for adults. We do not knowingly collect information from anyone
              under 13. If you believe a child has given us information, contact us and we will
              remove it.
            </p>
          </S>

          <S title="Changes to this policy">
            <p>
              We may update this policy as the business changes. The updated date at the top of
              this page tells you when it last changed. Continuing to use the site after a change
              means you accept the updated policy.
            </p>
          </S>

          <S title="Contact us">
            <p>
              Questions about this policy? Call {BIZ.phone} or email {BIZ.email}.
            </p>
          </S>

          <p className="text-stone text-[15px] border-t border-line pt-8">
            See also our{" "}
            <a href="/terms-of-service" className="text-turf underline underline-offset-4">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/disclaimer" className="text-turf underline underline-offset-4">
              Disclaimer
            </a>
            .
          </p>

          <SectionCta
            className="mt-12"
            primary={{ href: "/contact", label: "Get a Free Estimate" }}
            secondary={{ href: "/", label: "Back to Home" }}
          />
        </div>
      </div>
    </>
  );
}
