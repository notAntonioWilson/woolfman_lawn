import { BIZ } from "@/lib/site";

/* Brand-styled stand-in for a photo slot with no real picture yet.
   Deliberately not a stock or generated image: an obviously-placeholder
   panel is more honest than somebody else's work, and it reads as
   "new business, photos on the way" rather than "broken site".
   Uses the same diagonal band treatment as the hero. */
export default function ComingSoon({ label = "Coming Soon", className = "", small = false }) {
  return (
    <div
      className={`relative bg-turf-dk overflow-hidden flex items-center justify-center text-center ${className}`}
    >
      <div className="absolute inset-0 stripe-bold" />
      <div className="relative px-4">
        <div
          className={`font-display font-extrabold uppercase text-white leading-none ${
            small
              ? "text-[15px] tracking-[0.16em]"
              : "text-[22px] sm:text-[26px] tracking-[0.14em]"
          }`}
        >
          {label}
        </div>
        <div
          className={`font-display font-semibold uppercase text-blade ${
            small ? "text-[8.5px] tracking-[0.18em] mt-1.5" : "text-[10px] tracking-[0.2em] mt-2.5"
          }`}
        >
          {BIZ.name}
        </div>
      </div>
    </div>
  );
}
