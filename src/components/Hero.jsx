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
          fetchPriority="high"
          quality={65}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-turf-dp/95 via-turf-dp/92 to-turf-dp/85 lg:bg-gradient-to-r lg:from-turf-dp lg:via-turf-dp/90 lg:to-turf-dp/55" />
        <div className="absolute inset-0 stripe-bg animate-drift" />
      </div>

      <div className="shell relative py-12 lg:py-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
        <div>
          <div className="eyebrow-light mb-4">
            {BIZ.tagline} &nbsp;&#124;&nbsp; Licensed &amp; Insured LLC
          </div>

          <h1 className="text-[clamp(33px,8.4vw,80px)] font-black uppercase max-w-[15ch]">
            Lawn Care &amp; Landscaping in <span className="text-blade">Detroit, MI</span>
          </h1>

          <p className="mt-4 font-display font-semibold text-[14px] sm:text-[15px] tracking-[0.02em] text-white/85">
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

          <p className="mt-5 max-w-[56ch] text-[16.5px] text-white/75">
            Weekly grass cutting, mulch installation, sod, yard cleanups, bush and tree trimming,
            and snow plowing for homeowners across metro Detroit. Searching for a lawn mowing
            service near you? Over 150 properties serviced, same crew every week, and everything
            written out before we start.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <a
              href={`tel:${BIZ.phoneRaw}`}
              className="btn btn-primary w-full sm:w-auto"
            >
              Call {BIZ.phone}
            </a>
            <Link href="/services" className="btn btn-ghost flex-1 sm:flex-none px-4 sm:px-6">
              View Services
            </Link>
            <Link href="/gallery" className="btn btn-ghost flex-1 sm:flex-none px-4 sm:px-6">
              See Our Work
            </Link>
          </div>

          <div className="mt-7 pt-5 border-t border-white/15 flex flex-wrap gap-x-5 sm:gap-x-8 gap-y-2">
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

        <div className="mt-2 lg:mt-0 lg:pl-4">
          <QuoteForm compact pageSource="/ hero" />
        </div>
      </div>
    </section>
  );
}
