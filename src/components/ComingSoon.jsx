import { BIZ } from "@/lib/site";

/* Brand-styled stand-in for a photo slot we do not have a real picture for
   yet. Deliberately not a stock or generated image: an obviously-placeholder
   panel is more honest than a photo of somebody else's work, and it reads as
   "new business, photos on the way" rather than "broken site". */
export default function ComingSoon({ label = "Photos coming soon", className = "", small = false }) {
  return (
    <div
      className={`relative bg-turf-dk overflow-hidden flex items-center justify-center text-center ${className}`}
    >
      <div className="absolute inset-0 stripe-bg" />
      <div className="relative px-4">
        <div
          className={`font-display font-extrabold uppercase text-white/85 leading-tight ${
            small ? "text-[13px] tracking-[0.1em]" : "text-[17px] sm:text-[19px] tracking-[0.02em]"
          }`}
        >
          {label}
        </div>
        {!small && (
          <div className="mt-2 font-display text-[10px] font-semibold tracking-[0.16em] uppercase text-blade">
            {BIZ.name}
          </div>
        )}
      </div>
    </div>
  );
}
