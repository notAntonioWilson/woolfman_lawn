import Link from "next/link";
import Image from "next/image";
import { BIZ, CITIES, PHOTOS } from "@/lib/site";
import QuoteForm from "./QuoteForm";

const CHIPS = ["Licensed", "Insured", "150+ Properties", "Free Estimates"];

export default function Hero() {
  const others = CITIES.filter((c) => !c.primary);

  return (
    <section className="relative bg-turf-dp text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={PHOTOS.hero.src}
          alt={PHOTOS.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-turf-dp via-turf-dp/90 to-turf-dp/55" />
        <div className="absolute inset-0 stripe-bg animate-drift" />
      </div>

      <div className="shell relative py-16 lg:py-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div>
          <div className="eyebrow-light mb-5">
            {BIZ.tagline} &nbsp;&#124;&nbsp; Licensed &amp; Insured LLC
          </div>

          <h1 className="text-[clamp(40px,6.6vw,80px)] font-black uppercase max-w-[15ch]">
            Lawn Care &amp; Landscaping in <span className="text-blade">Detroit, MI</span>
          </h1>

          <p className="mt-5 font-display font-semibold text-[15px] tracking-[0.02em] text-white/85">
            Also serving{" "}
            {others.map((c, i) => (
              <span key={c.slug}>
                <Link
                  href={`/service-areas/${c.slug}`}
                  className="underline decoration-blade/50 underline-offset-4 hover:decoration-blade"
                >
                  {c.name}
                </Link>
                {i < others.length - 2 ? ", " : i === others.length - 2 ? ", and " : ""}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-[54ch] text-[17px] text-white/75">
            Weekly lawn maintenance, mulch, sod, cleanups, and snow removal for homeowners across
            metro Detroit. Over 150 properties serviced, same crew every week, and everything
            written out before we start.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`tel:${BIZ.phoneRaw}`} className="btn btn-primary">
              Call {BIZ.phone}
            </a>
            <Link href="/services" className="btn btn-ghost">
              View Services
            </Link>
            <Link href="/gallery" className="btn btn-ghost">
              See Our Work
            </Link>
          </div>

          <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap gap-x-8 gap-y-3">
            {CHIPS.map((c) => (
              <span
                key={c}
                className="font-display text-[11px] font-bold tracking-[0.15em] uppercase text-white/65"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:pl-4">
          <QuoteForm compact pageSource="/ hero" />
        </div>
      </div>
    </section>
  );
}
