import Image from "next/image";
import { SectionHead, SectionCta } from "./Sections";

/* ------------------------------------------------------------------
   BeforeAfterWheel

   A continuous belt of before/after pairs. The pair list is rendered
   twice, back to back, inside one flex row that slides from 0 to -50%.
   At -50% the second copy sits exactly where the first one started, so
   the frame at the end of the cycle is pixel-identical to the frame at
   the start. The animation restarts there and nothing moves visually:
   no snap back, no gap, no empty stretch. The first pair is simply
   always coming in behind the last one.

   Two things keep it clean:
   - A pair is one flex child, so Before and After can never be split
     apart at the wrap point.
   - Images are eager, not lazy. Lazy images inside a moving row load
     late and slide in blank.
   ------------------------------------------------------------------ */

function Tile({ photo, label }) {
  return (
    <div className="relative w-[190px] sm:w-[230px] lg:w-[250px] aspect-square rounded-[4px] overflow-hidden bg-turf-dk shrink-0">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        loading="eager"
        sizes="250px"
        className="object-cover"
      />
      <span
        className={`absolute top-2.5 left-2.5 font-display text-[10px] font-bold tracking-[0.14em] uppercase px-2 py-1 rounded-[2px] ${
          label === "After" ? "bg-blade text-turf-dk" : "bg-turf-dp/85 text-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function Pair({ item, hidden }) {
  return (
    <div className="flex gap-1.5 shrink-0" aria-hidden={hidden || undefined}>
      <Tile photo={item.before} label="Before" />
      <Tile photo={item.after} label="After" />
    </div>
  );
}

export default function BeforeAfterWheel({
  pairs,
  eyebrow = "Before and after",
  title = "The Same Yard, Before And After",
  copy = "Real properties across metro Detroit. Shot before we started and again after we pulled away.",
  primary = { href: "/contact", label: "Get on the Schedule" },
  secondary = { href: "/gallery", label: "See More Work" },
  flush = false,
}) {
  if (!pairs || pairs.length === 0) return null;

  // Keep the belt moving at a steady speed no matter how many pairs there are.
  const duration = Math.max(28, pairs.length * 7);

  return (
    <section className={`section-tight bg-haze ${flush ? "pt-0" : ""}`}>
      <div className="shell">
        <SectionHead eyebrow={eyebrow} title={title} copy={copy} />
      </div>

      <div className="overflow-hidden mask-fade">
        <div
          className="flex w-max animate-marquee"
          style={{ animationDuration: `${duration}s`, willChange: "transform" }}
        >
          {/* Each copy is its own block with a trailing gap, so the two
              halves are exactly equal in width and -50% lands precisely
              one copy over. Putting the gap on the outer row instead
              leaves it a half-gap short every cycle, which shows up as a
              small jump. */}
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-7 pr-7 shrink-0">
              {pairs.map((p) => (
                <Pair key={`${p.id}-${copy}`} item={p} hidden={copy === 1} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="shell mt-7">
        <SectionCta primary={primary} secondary={secondary} />
      </div>
    </section>
  );
}
