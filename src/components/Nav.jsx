"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { BIZ, NAV_LINKS } from "@/lib/site";

export function Wordmark({ light = false }) {
  return (
    <span className="flex items-center gap-[11px] shrink-0">
      <span className="relative w-[34px] h-[34px] rounded-[3px] bg-turf overflow-hidden">
        <span
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(114deg, rgba(255,255,255,.22) 0 5px, transparent 5px 10px)",
          }}
        />
      </span>
      <span
        className={`font-display font-black text-[15px] tracking-[-0.02em] leading-[1.05] uppercase ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Woolfman
        <span
          className={`block text-[9px] font-semibold tracking-[0.19em] ${
            light ? "text-white/45" : "text-stone"
          }`}
        >
          Lawn Services
        </span>
      </span>
    </span>
  );
}

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-line">
      <div className="shell flex items-center gap-8 h-[74px]">
        <Link href="/" aria-label="Woolfman Lawn Services home">
          <Wordmark />
        </Link>

        <nav className="hidden lg:flex gap-6 ml-auto">
          {NAV_LINKS.map((l) => {
            const on = path === l.href || path.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative py-1 text-[14.5px] font-medium transition-colors ${
                  on ? "text-ink" : "text-stone hover:text-ink"
                }`}
              >
                {l.label}
                {on && (
                  <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-blade" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3.5 shrink-0">
          <a href={`tel:${BIZ.phoneRaw}`} className="font-display font-bold text-[15px]">
            {BIZ.phone}
          </a>
          <Link href="/contact" className="btn btn-sm btn-dark">
            Free Estimate
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden ml-auto w-11 h-11 flex items-center justify-center"
        >
          <span className="relative block w-5 h-[2px] bg-ink before:content-[''] before:absolute before:left-0 before:-top-[6px] before:w-5 before:h-[2px] before:bg-ink after:content-[''] after:absolute after:left-0 after:top-[6px] after:w-5 after:h-[2px] after:bg-ink" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white pb-6">
          <div className="shell">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-3.5 font-display font-bold text-[19px] border-b border-line"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2.5 mt-5">
              <a href={`tel:${BIZ.phoneRaw}`} className="btn btn-sm btn-line flex-1">
                Call Us
              </a>
              <Link href="/contact" className="btn btn-sm btn-primary flex-1">
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
