"use client";

import { PLANS } from "@/lib/data";

export default function Pricing() {
  const openModal = () => {
    document.getElementById("contact-modal")?.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  return (
    <section id="pricing" className="py-[88px] bg-[#1e4637] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute top-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full bg-white/[0.04]" />
      <div className="pointer-events-none absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] rounded-full bg-white/[0.03]" />

      <div className="max-w-6xl mx-auto px-7 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#f5a623]/18 text-[#f5a623] text-[0.75rem] font-semibold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full border border-[#f5a623]/35 mb-4">
            Transparent pricing
          </span>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,3.5vw,2.8rem)] text-white">
            Simple plans. No lock-in.
          </h2>
          <p className="text-white/65 text-lg max-w-[520px] mx-auto mt-3">
            Pay a small upfront fee, then a predictable monthly amount. Cancel anytime with 30 days notice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-9 transition-all duration-200 ${
                plan.featured
                  ? "bg-white border-2 border-[#f5a623] shadow-[0_16px_48px_rgba(0,0,0,0.25)] hover:-translate-y-1.5"
                  : "bg-white/[0.07] border border-white/[0.14] hover:bg-white/[0.11] hover:-translate-y-1"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#f5a623] text-[#1e4637] text-[0.7rem] font-bold tracking-[0.1em] uppercase px-4 py-1 rounded-full whitespace-nowrap">
                  Most popular
                </span>
              )}

              <div className={`font-display text-lg font-semibold mb-4 ${plan.featured ? "text-[#8a8a80]" : "text-white/65"}`}>
                {plan.name}
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span className={`font-display font-bold text-[2.2rem] leading-none ${plan.featured ? "text-[#1e4637]" : "text-[#f5a623]"}`}>
                    {plan.setup}
                  </span>
                  <span className={`text-sm font-medium ${plan.featured ? "text-[#8a8a80]" : "text-white/55"}`}>
                    setup fee
                  </span>
                </div>
                <div className={`text-base font-medium ${plan.featured ? "text-[#4a4a44]" : "text-white/80"}`}>
                  then{" "}
                  <strong className={plan.featured ? "text-[#1a1a18] text-lg" : "text-white text-lg"}>
                    {plan.monthly}/mo
                  </strong>
                </div>
              </div>

              <ul className="space-y-2.5 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.featured ? "text-[#4a4a44]" : "text-white/75"}`}>
                    <span className={`font-bold flex-shrink-0 ${plan.featured ? "text-[#1e4637]" : "text-[#f5a623]"}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={openModal}
                className={`w-full py-3.5 rounded-full font-semibold text-sm cursor-pointer transition-all hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-[#f5a623] text-[#1e4637] border-none hover:bg-[#e8961a] hover:shadow-[0_8px_24px_rgba(245,166,35,0.38)]"
                    : "bg-transparent text-white border-2 border-white/30 hover:bg-white/15 hover:border-white"
                }`}
              >
                Get started{plan.featured ? " →" : ""}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
