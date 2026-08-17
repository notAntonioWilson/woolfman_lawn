import Link from "next/link";
import Image from "next/image";
import { BIZ, STATS, SERVICES, CITIES, PROCESS, PROMISES, PEEK, ONJOB } from "@/lib/site";
import QuoteForm from "./QuoteForm";

/* ---------- headings ---------- */
export function SectionHead({ eyebrow, title, copy, light = false, center = false }) {
  return (
    <div
      className={`flex flex-col ${
        center ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"
      } gap-6 mb-10`}
    >
      <div>
        {eyebrow && (
          <div className={`${light ? "eyebrow-light" : "eyebrow"} mb-3.5`}>{eyebrow}</div>
        )}
        <h2 className={`h-sec max-w-[17ch] ${light ? "text-white" : ""} ${center ? "mx-auto" : ""}`}>
          {title}
        </h2>
      </div>
      {copy && (
        <p className={`max-w-[46ch] text-[16px] ${light ? "text-white/70" : "text-stone"}`}>
          {copy}
        </p>
      )}
    </div>
  );
}

/* ---------- the button pair that closes every section ---------- */
export function SectionCta({
  primary = { href: "/contact", label: "Get a Free Estimate" },
  secondary = { href: "/gallery", label: "See Our Work" },
  light = false,
  left = false,
  className = "",
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${left ? "" : "justify-center"} ${className}`}>
      <Link href={primary.href} className="btn btn-primary">
        {primary.label}
      </Link>
      {secondary && (
        <Link href={secondary.href} className={`btn ${light ? "btn-line-light" : "btn-line"}`}>
          {secondary.label}
        </Link>
      )}
    </div>
  );
}

/* ---------- stats ---------- */
export function StatBar() {
  return (
    <section className="bg-turf-dk text-white relative overflow-hidden">
      <div className="absolute inset-0 stripe-bg" />
      <div className="shell relative py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="font-display font-extrabold text-[30px] leading-none text-white">
              {s.value}
            </div>
            <div className="font-display text-[10.5px] font-semibold tracking-[0.15em] uppercase text-white/55 mt-2">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- service ticker ---------- */
export function Ticker() {
  return (
    <div className="bg-blade text-turf-dk overflow-hidden py-3">
      <div className="flex gap-11 whitespace-nowrap animate-marquee font-display font-bold text-[13px] tracking-[0.12em] uppercase w-max">
        {[0, 1].map((k) =>
          SERVICES.map((s) => (
            <span key={s.slug + k}>{s.name} &#10022;</span>
          ))
        )}
      </div>
    </div>
  );
}

/* ---------- photo strip ---------- */
export function PhotoStrip({ eyebrow = "Sneak peek", title = "A Look At Our Work" }) {
  return (
    <section className="section">
      <div className="shell">
        <SectionHead
          eyebrow={eyebrow}
          title={title}
          copy="Real properties across Detroit and the surrounding metro. Cut, edged, mulched, and cleaned up."
        />
      </div>
      <div className="overflow-hidden mask-fade">
        <div className="flex gap-3.5 w-max animate-marquee-fast">
          {[0, 1].map((k) =>
            PEEK.map((p, i) => (
              <div
                key={`${k}-${i}`}
                className="relative w-[300px] sm:w-[400px] aspect-[4/3] rounded-[4px] overflow-hidden bg-turf-dk"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="400px"
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="shell mt-10">
        <SectionCta
          primary={{ href: "/gallery", label: "View The Full Gallery" }}
          secondary={{ href: "/contact", label: "Get a Free Estimate" }}
        />
      </div>
    </section>
  );
}

/* ---------- on the job marquee ---------- */
export function OnTheJob() {
  return (
    <section className="section bg-haze">
      <div className="shell">
        <SectionHead
          eyebrow="On the job"
          title="Out Working Across Metro Detroit"
          copy="Real days, real jobs. Our own truck, our own crew, on properties from Detroit out through the suburbs."
        />
      </div>
      <div className="overflow-hidden mask-fade">
        <div className="flex gap-3 w-max animate-marquee">
          {[0, 1].map((k) =>
            ONJOB.map((p, i) => (
              <div
                key={`${k}-${i}`}
                className="relative w-[200px] sm:w-[260px] aspect-square rounded-[4px] overflow-hidden bg-turf-dk"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="260px"
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="shell mt-10">
        <SectionCta
          primary={{ href: "/contact", label: "Get on the Schedule" }}
          secondary={{ href: "/about", label: "Meet Keonte" }}
        />
      </div>
    </section>
  );
}

/* ---------- services grid ---------- */
export function ServiceCards({ items = SERVICES, heading = true }) {
  return (
    <div className="flex flex-wrap gap-px bg-line border border-line">
      {items.map((s) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          className="group bg-white flex flex-col grow shrink-0 basis-full sm:basis-[calc(50%-1px)] lg:basis-[255px] hover:bg-haze transition-colors"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-turf-dk">
            <Image
              src={s.photo}
              alt={`${s.name} in Detroit, Michigan`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              unoptimized
            />
            {s.tag && (
              <span className="absolute top-3 left-3 font-display text-[10px] font-bold tracking-[0.14em] uppercase bg-blade text-turf-dk px-2 py-1 rounded-[2px]">
                {s.tag}
              </span>
            )}
          </div>
          <div className="p-6 flex flex-col flex-1">
            {heading ? (
              <h3 className="text-[19px] uppercase mb-2">{s.name}</h3>
            ) : (
              <div className="font-display font-extrabold text-[19px] uppercase mb-2">{s.name}</div>
            )}
            <p className="text-stone text-[14px] flex-1">{s.card}</p>
            <span className="mt-4 font-display text-[12px] font-bold tracking-[0.1em] uppercase text-turf">
              More Info &rarr;
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHead
          eyebrow="What we do"
          title="Seven Services, One Crew"
          copy="Everything a residential property needs through all four Michigan seasons. Pick one or hand us the whole yard."
        />
        <ServiceCards />
        <SectionCta
          className="mt-10"
          primary={{ href: "/contact", label: "Get a Free Estimate" }}
          secondary={{ href: "/services", label: "All Services" }}
        />
      </div>
    </section>
  );
}

/* ---------- cities ---------- */
export function CityGrid({ current = null }) {
  const list = current ? CITIES.filter((c) => c.slug !== current) : CITIES;
  return (
    <div className="flex flex-wrap gap-px bg-line border border-line">
      {list.map((c) => (
        <Link
          key={c.slug}
          href={`/service-areas/${c.slug}`}
          className="bg-white p-7 grow shrink-0 basis-full sm:basis-[calc(50%-1px)] lg:basis-[300px] hover:bg-haze transition-colors group"
        >
          <div className="flex items-baseline gap-2 mb-2">
            <h3 className="text-[20px] uppercase">{c.name}</h3>
            {c.primary && (
              <span className="font-display text-[9.5px] font-bold tracking-[0.14em] uppercase text-turf">
                Home Base
              </span>
            )}
          </div>
          <p className="text-stone text-[14px]">{c.blurb}</p>
          <p className="text-stone/70 text-[12.5px] mt-3">{c.zips}</p>
          <span className="mt-4 inline-block font-display text-[12.5px] font-bold tracking-[0.1em] uppercase text-turf">
            Lawn Care in {c.name} &rarr;
          </span>
        </Link>
      ))}
    </div>
  );
}

export function CitiesSection({ current = null }) {
  return (
    <section className="section bg-haze">
      <div className="shell">
        <SectionHead
          eyebrow="Service area"
          title="Where We Run Our Routes"
          copy="Detroit is home base. We also run weekly routes through Redford, Southfield, West Bloomfield, and Warren. On the edge of one of those? Call and ask."
        />
        <CityGrid current={current} />
        <SectionCta
          className="mt-10"
          primary={{ href: "/contact", label: "Check Your Address" }}
          secondary={{ href: "/service-areas", label: "All Service Areas" }}
        />
      </div>
    </section>
  );
}

/* ---------- process ---------- */
export function ProcessSection() {
  return (
    <section className="section">
      <div className="shell grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHead
            eyebrow="How it works"
            title="Four Steps, No Runaround"
            copy={null}
          />
          <p className="text-stone max-w-[46ch] -mt-4">
            You should not have to chase a landscaper for an answer. Here is exactly what happens
            after you reach out.
          </p>
          <div className="mt-8 bg-haze border-l-[3px] border-blade px-6 py-5 flex flex-wrap items-center justify-between gap-4 rounded-r-[3px]">
            <b className="font-display text-[17px] uppercase text-ink">
              Questions first? Text {BIZ.phone}
            </b>
            <a href={`sms:${BIZ.phoneRaw}`} className="btn btn-sm btn-dark">
              Send a Text
            </a>
          </div>
          <SectionCta
            left
            className="mt-8"
            primary={{ href: "/contact", label: "Start My Estimate" }}
            secondary={{ href: "/gallery", label: "See The Proof" }}
          />
        </div>
        <div className="grid sm:grid-cols-2 border-t border-line">
          {PROCESS.map((p) => (
            <div key={p.n} className="py-7 pr-6 border-b border-line sm:odd:border-r">
              <div className="font-display font-extrabold text-[13px] tracking-[0.1em] text-blade">
                {p.n}
              </div>
              <h4 className="text-[18px] uppercase mt-2.5 mb-2">{p.t}</h4>
              <p className="text-stone text-[14px]">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- promises (stands in for reviews until GBP is live) ---------- */
export function PromisesSection() {
  return (
    <section className="section bg-turf-dk text-white relative overflow-hidden">
      <div className="absolute inset-0 stripe-bg" />
      <div className="shell relative">
        <SectionHead
          light
          eyebrow="Why homeowners call us back"
          title="What You Get Every Single Visit"
          copy="We are two years in and building this on word of mouth. That only works if the standard never slips."
        />
        <div className="flex flex-wrap gap-px bg-white/10 border border-white/10">
          {PROMISES.map((p) => (
            <div
              key={p.t}
              className="bg-turf-dk p-7 grow shrink-0 basis-full sm:basis-[calc(50%-1px)] lg:basis-[300px]"
            >
              <h3 className="text-[18px] uppercase text-white mb-2.5">{p.t}</h3>
              <p className="text-white/65 text-[14.5px]">{p.d}</p>
            </div>
          ))}
        </div>
        <SectionCta
          light
          className="mt-10"
          primary={{ href: "/contact", label: "Get a Free Estimate" }}
          secondary={{ href: "/gallery", label: "See Our Work" }}
        />
      </div>
    </section>
  );
}

/* ---------- owner ---------- */
export function OwnerSection() {
  return (
    <section className="section">
      <div className="shell grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden bg-turf-dk">
            <Image
              src="https://picsum.photos/seed/wf-owner/1200/1500"
              alt={`${BIZ.ownerFull}, owner of ${BIZ.name}`}
              fill
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
          <h2 className="h-sec mb-5">Meet Keonte, The Man Behind Every Cut</h2>
          <p className="text-stone mb-4">
            {BIZ.name} is owned and run by {BIZ.ownerFull} out of Detroit. What started as one man
            with a mower has turned into a licensed and insured LLC serving over one hundred fifty
            properties across the metro.
          </p>
          <p className="text-stone mb-4">
            Keonte is on the jobs himself. He walks the property, explains what it needs, and
            makes sure the yard looks right before the trailer gets loaded. When you call, you get
            him directly, not a dispatcher and not a call center.
          </p>
          <p className="text-stone mb-4">
            The standard is the same on a simple lawn cut as it is on a full yard overhaul: treat
            the property like it is our own, be dependable, and leave it looking better than the
            neighbors expected.
          </p>
          <SectionCta
            left
            className="mt-7"
            primary={{ href: "/about", label: "Read Our Full Story" }}
            secondary={{ href: "/contact", label: "Get a Free Estimate" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- closing quote band ---------- */
export function QuoteSection({
  eyebrow = "Free estimate",
  title = "Tell Us About The Property",
  copy = "Takes about a minute. We get back to you the same day in most cases, with the work written out so there are no surprises.",
  defaultService = "",
}) {
  return (
    <section id="estimate" className="section bg-turf-dp text-white relative overflow-hidden">
      <div className="absolute inset-0 stripe-bg" />
      <div className="shell relative grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        <div>
          <div className="eyebrow-light mb-3.5">{eyebrow}</div>
          <h2 className="h-sec text-white mb-4">{title}</h2>
          <p className="text-white/70">{copy}</p>

          <div className="mt-8 pt-6 border-t border-white/15">
            <div className="eyebrow-light mb-2">Rather just call?</div>
            <a
              href={`tel:${BIZ.phoneRaw}`}
              className="font-display font-extrabold text-[30px] text-white block hover:text-blade transition-colors"
            >
              {BIZ.phone}
            </a>
            <p className="text-white/60 text-[14px] mt-2">{BIZ.hours}</p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/15">
            <div className="eyebrow-light mb-3">Serving</div>
            <p className="text-white/70 text-[14.5px]">
              {CITIES.map((c) => c.name).join(" · ")} and the surrounding metro Detroit area.
            </p>
          </div>

          <SectionCta
            light
            left
            className="mt-8"
            primary={{ href: "/gallery", label: "See Our Work First" }}
            secondary={{ href: "/services", label: "Browse Services" }}
          />
        </div>
        <QuoteForm defaultService={defaultService} />
      </div>
    </section>
  );
}

/* ---------- page header ---------- */
export function PageHeader({ crumb, title, copy, cta = true, center = false }) {
  return (
    <div className="bg-haze border-b border-line pt-14 pb-12">
      <div className={`shell ${center ? "text-center" : ""}`}>
        {crumb && (
          <div className="font-display text-[11px] font-bold tracking-[0.15em] uppercase text-stone mb-5">
            {crumb}
          </div>
        )}
        <h1
          className={`text-[clamp(34px,5.4vw,62px)] uppercase max-w-[19ch] ${
            center ? "mx-auto" : ""
          }`}
        >
          {title}
        </h1>
        {copy && (
          <p
            className={`text-stone text-[17px] mt-5 max-w-[62ch] ${center ? "mx-auto" : ""}`}
          >
            {copy}
          </p>
        )}
        {cta && (
          <SectionCta
            left={!center}
            className="mt-8"
            primary={{ href: "/contact", label: "Get a Free Estimate" }}
            secondary={{ href: "/gallery", label: "See Our Work" }}
          />
        )}
      </div>
    </div>
  );
}
