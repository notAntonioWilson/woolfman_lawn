"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { BIZ, NAV_LINKS, SERVICES } from "@/lib/site";

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
  const [drop, setDrop] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const dropRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    setOpen(false);
    setDrop(false);
    setMobileServices(false);
  }, [path]);

  useEffect(() => {
    const onClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDrop(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setDrop(false);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isOn = (href) => path === href || path.startsWith(href + "/");

  const openDrop = () => {
    clearTimeout(closeTimer.current);
    setDrop(true);
  };
  const closeDrop = () => {
    closeTimer.current = setTimeout(() => setDrop(false), 140);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-line">
      <div className="shell flex items-center gap-6 h-[74px]">
        <Link href="/" aria-label="Woolfman Lawn Services home">
          <Wordmark />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 ml-auto">
          <Link
            href="/"
            className={`relative py-1 text-[14.5px] font-medium transition-colors ${
              path === "/" ? "text-ink" : "text-stone hover:text-ink"
            }`}
          >
            Home
            {path === "/" && (
              <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-blade" />
            )}
          </Link>

          <div
            ref={dropRef}
            className="relative"
            onMouseEnter={openDrop}
            onMouseLeave={closeDrop}
          >
            <div className="flex items-center">
              <Link
                href="/services"
                className={`relative py-1 text-[14.5px] font-medium transition-colors ${
                  isOn("/services") ? "text-ink" : "text-stone hover:text-ink"
                }`}
              >
                Services
                {isOn("/services") && (
                  <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-blade" />
                )}
              </Link>
              <button
                onClick={() => setDrop((v) => !v)}
                aria-expanded={drop}
                aria-haspopup="true"
                aria-label="Show all services"
                className="pl-1.5 pr-0.5 py-1 text-stone hover:text-ink transition-colors"
              >
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${drop ? "rotate-180" : ""}`}
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </button>
            </div>

            {drop && (
              <div className="absolute left-0 top-full pt-3 w-[290px]">
                <div className="bg-white border border-line rounded-[4px] shadow-[0_14px_40px_rgba(11,46,26,0.14)] overflow-hidden">
                  <Link
                    href="/services"
                    className={`block px-5 py-3.5 border-b border-line font-display font-bold text-[13px] tracking-[0.08em] uppercase transition-colors hover:bg-haze ${
                      path === "/services" ? "text-turf" : "text-ink"
                    }`}
                  >
                    All Services
                  </Link>
                  <ul>
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className={`block px-5 py-3 text-[14.5px] transition-colors hover:bg-haze hover:text-ink ${
                            path === `/services/${s.slug}`
                              ? "text-ink font-medium"
                              : "text-stone"
                          }`}
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.filter((l) => l.href !== "/services").map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative py-1 text-[14.5px] font-medium transition-colors ${
                isOn(l.href) ? "text-ink" : "text-stone hover:text-ink"
              }`}
            >
              {l.label}
              {isOn(l.href) && (
                <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-blade" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3.5 shrink-0">
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
        <div className="lg:hidden border-t border-line bg-white pb-6 max-h-[calc(100dvh-74px)] overflow-y-auto">
          <div className="shell">
            <Link
              href="/"
              className="block py-3.5 font-display font-bold text-[19px] border-b border-line"
            >
              Home
            </Link>

            <div className="border-b border-line">
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  className="py-3.5 font-display font-bold text-[19px] flex-1"
                >
                  Services
                </Link>
                <button
                  onClick={() => setMobileServices((v) => !v)}
                  aria-expanded={mobileServices}
                  aria-label="Show all services"
                  className="w-11 h-11 flex items-center justify-center text-stone"
                >
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 10 7"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${
                      mobileServices ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </button>
              </div>
              {mobileServices && (
                <ul className="pb-3 pl-3 ml-1 mb-1 border-l-2 border-blade">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="block py-3 text-[16px] text-stone"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {NAV_LINKS.filter((l) => l.href !== "/services").map((l) => (
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
