"use client";

import { AI_FEATURES } from "@/lib/data";

export default function AiAddons() {
  const openModal = () => {
    document.getElementById("contact-modal")?.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  return (
    <section id="ai" className="py-[88px] bg-[#0f1a15] relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] w-[500px] h-[500px] rounded-full bg-[#1e4637]/50 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-100px] bottom-[-80px] w-[420px] h-[420px] rounded-full bg-[#f5a623]/8 blur-[110px]" />

      <div className="max-w-6xl mx-auto px-7 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#f5a623]/15 text-[#f5a623] text-[0.75rem] font-semibold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full border border-[#f5a623]/25 mb-4">
            AI &amp; Machine Learning
          </span>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,3.5vw,2.8rem)] text-white">
            Your website, supercharged with AI
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            We&apos;re not just web developers — we&apos;re AI engineers with
            real machine learning experience. Every site we build can be enhanced
            with intelligent features that save you time and win more customers.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {AI_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.07] hover:border-[#f5a623]/20 transition-all group"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-3xl">{feature.icon}</span>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[#f5a623] bg-[#f5a623]/10 border border-[#f5a623]/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {feature.tag}
                </span>
              </div>
              <h3 className="font-display font-semibold text-white text-[1.1rem] mb-2.5">
                {feature.title}
              </h3>
              <p className="text-white/50 text-[0.9rem] leading-[1.75] group-hover:text-white/65 transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="border border-white/[0.08] rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5 bg-white/[0.02]">
          <div>
            <p className="text-white font-semibold text-[0.95rem] mb-0.5">
              Not sure which AI features suit your business?
            </p>
            <p className="text-white/45 text-sm">
              Book a free 20-minute call — we&apos;ll tell you exactly what would move the needle for you.
            </p>
          </div>
          <button
            onClick={openModal}
            className="bg-[#f5a623] text-[#1e4637] font-semibold text-sm px-7 py-3.5 rounded-full border-none cursor-pointer hover:bg-[#e8961a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,166,35,0.38)] transition-all whitespace-nowrap flex-shrink-0"
          >
            Book a free call →
          </button>
        </div>
      </div>
    </section>
  );
}
