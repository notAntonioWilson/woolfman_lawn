import Link from "next/link";
import { BIZ, SERVICES, CITIES } from "@/lib/site";
import { Wordmark } from "./Nav";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 pt-12 pb-7 text-[14.5px]">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block mb-3.5">
              <Wordmark light />
            </Link>
            <p className="max-w-[32ch] text-[14px]">
              Licensed and insured lawn care and landscaping for homeowners across
              Detroit and metro Detroit. {BIZ.tagline}.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={BIZ.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={BIZ.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-display text-[11px] font-bold tracking-[0.16em] uppercase text-white mb-3.5">
              Services
            </h5>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display text-[11px] font-bold tracking-[0.16em] uppercase text-white mb-3.5">
              Service Areas
            </h5>
            <ul className="space-y-2">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/service-areas/${c.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    Lawn Care in {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display text-[11px] font-bold tracking-[0.16em] uppercase text-white mb-3.5">
              Contact
            </h5>
            <ul className="space-y-2">
              <li>
                <a href={`tel:${BIZ.phoneRaw}`} className="hover:text-white transition-colors">
                  {BIZ.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${BIZ.phoneAltRaw}`} className="hover:text-white transition-colors">
                  {BIZ.phoneAlt}
                </a>
              </li>
              <li>
                <a href={`mailto:${BIZ.email}`} className="hover:text-white transition-colors break-all">
                  {BIZ.email}
                </a>
              </li>
              <li>{BIZ.hours}</li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Common Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="btn btn-sm btn-primary mt-2 w-full sm:w-auto">
                  Get a Free Estimate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 sm:justify-between text-[13px]">
          <span>
            &copy; {new Date().getFullYear()} {BIZ.legalName}. All rights reserved.
          </span>
          <span className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
            <span>Built by OTAI</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
