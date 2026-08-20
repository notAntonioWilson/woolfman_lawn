import { BIZ } from "@/lib/site";

/* Brand-styled stand-in for a photo slot with no real picture yet.
   Deliberately not a stock or generated image: an obviously-placeholder
   panel is more honest than somebody else's work, and it reads as
   "new business, photos on the way" rather than "broken site".

   Pass `fill` to stretch it over a positioned parent. Do NOT pass
   "absolute inset-0" through className: the root would then carry both
   `absolute` and `relative`, Tailwind emits `.relative` last, and the
   panel collapses to the height of its text. */
export default function ComingSoon({ label = "Coming Soon", className = "", small = false, fill = false }) {
  return (
    <div
      className={`${
        fill ? "absolute inset-0" : "relative"
      } bg-turf-dk overflow-hidden flex flex-col items-center justify-center text-center ${className}`}
    >
      <div className="absolute inset-0 stripe-bold" />
      <div className="relative px-4">
        <div
          className={`font-display font-extrabold uppercase text-white leading-none ${
            small
              ? "text-[19px] sm:text-[22px] tracking-[0.12em]"
              : "text-[28px] sm:text-[38px] tracking-[0.1em]"
          }`}
        >
          {label}
        </div>
        <div
          className={`font-display font-semibold uppercase text-blade ${
            small
              ? "text-[9.5px] tracking-[0.18em] mt-2"
              : "text-[11px] sm:text-[12px] tracking-[0.2em] mt-3"
          }`}
        >
          {BIZ.name}
        </div>
      </div>
    </div>
  );
}
