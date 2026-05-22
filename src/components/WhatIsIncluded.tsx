import { INCLUDED } from "@/lib/data";

export default function WhatIsIncluded() {
  return (
    <section id="included" className="py-[88px] bg-[#faf8f3]">
      <div className="max-w-6xl mx-auto px-7">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#fff4e0] text-[#1e4637] text-[0.75rem] font-semibold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full border border-[#f5a623]/35 mb-4">
            Everything you need
          </span>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#1a1a18]">
            One price. No extras. No surprises.
          </h2>
          <p className="text-[#4a4a44] text-lg max-w-[520px] mx-auto mt-3">
            Every plan includes the full package. We don&apos;t charge extra for things that should just be included.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INCLUDED.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#e2ddd4] rounded-2xl p-8 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(30,70,55,0.16)] hover:border-[#e8f0ec] transition-all duration-200"
            >
              <div
                className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl mb-4 ${
                  item.color === "green" ? "bg-[#e8f0ec]" : "bg-[#fff4e0]"
                }`}
              >
                {item.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-[#1a1a18] mb-2.5">
                {item.title}
              </h3>
              <p className="text-[#4a4a44] text-[0.95rem] mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#4a4a44]">
                    <span className="text-[#1e4637] font-bold mt-px flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
