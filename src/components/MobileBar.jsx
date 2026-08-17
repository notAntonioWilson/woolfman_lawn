import Link from "next/link";
import { BIZ } from "@/lib/site";

/* Phone-only action bar. On a trades site most mobile visitors want to call,
   and the header phone number is behind the hamburger, so this keeps both
   actions one thumb-tap away on every page. Hidden from lg up. */
export default function MobileBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-white/97 backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex gap-2 px-3 py-2.5">
        <a
          href={`tel:${BIZ.phoneRaw}`}
          className="btn btn-dark flex-1 h-[46px] px-3 text-[14px]"
          aria-label={`Call ${BIZ.phone}`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2.2 2.3z" />
          </svg>
          Call Now
        </a>
        <Link href="/contact" className="btn btn-primary flex-1 h-[46px] px-3 text-[14px]">
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
