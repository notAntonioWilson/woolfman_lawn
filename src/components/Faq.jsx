"use client";

import { useState } from "react";

export default function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-6 text-left font-display font-bold text-[18px] sm:text-[19px] tracking-[-0.01em]"
            >
              {f.q}
              <span className="relative shrink-0 w-[22px] h-[22px]">
                <span className="absolute left-0 top-[10px] w-[22px] h-[2px] bg-turf" />
                <span
                  className={`absolute left-[10px] top-0 w-[2px] h-[22px] bg-turf transition-transform duration-200 ${
                    isOpen ? "scale-y-0" : ""
                  }`}
                />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="text-stone pb-6 max-w-[68ch] text-[15.5px]">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
