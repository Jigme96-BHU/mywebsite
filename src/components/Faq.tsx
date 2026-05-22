"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Split into two columns
  const left = FAQS.filter((_, i) => i % 2 === 0);
  const right = FAQS.filter((_, i) => i % 2 !== 0);

  return (
    <section id="faq" className="py-[88px] bg-white border-t border-[#e2ddd4]">
      <div className="max-w-6xl mx-auto px-7">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#fff4e0] text-[#1e4637] text-[0.75rem] font-semibold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full border border-[#f5a623]/35 mb-4">
            Questions answered
          </span>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#1a1a18]">
            Things people usually ask
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[left, right].map((col, colIdx) => (
            <div key={colIdx} className="space-y-4">
              {col.map((faq) => {
                const globalIdx = FAQS.indexOf(faq);
                const isOpen = openIndex === globalIdx;
                return (
                  <div
                    key={faq.q}
                    className="border border-[#e2ddd4] rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(globalIdx)}
                      className={`w-full text-left px-6 py-5 flex items-center justify-between gap-3 font-body font-semibold text-[0.95rem] text-[#1a1a18] cursor-pointer transition-colors border-none ${
                        isOpen ? "bg-[#faf8f3]" : "bg-white hover:bg-[#faf8f3]"
                      }`}
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[#e8f0ec] flex items-center justify-center text-xs text-[#1e4637] transition-transform duration-250 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    <div
                      style={{ maxHeight: isOpen ? "200px" : "0px" }}
                      className="overflow-hidden transition-[max-height] duration-[350ms] ease-in-out"
                    >
                      <div className="px-6 pb-5 text-[0.93rem] text-[#4a4a44] leading-[1.7]">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
