import { STEPS } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="how" className="py-[88px] bg-white border-t border-b border-[#e2ddd4]">
      <div className="max-w-6xl mx-auto px-7">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#fff4e0] text-[#1e4637] text-[0.75rem] font-semibold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full border border-[#f5a623]/35 mb-4">
            The process
          </span>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#1a1a18]">
            Up and running in four simple steps
          </h2>
          <p className="text-[#4a4a44] text-lg max-w-[520px] mx-auto mt-3">
            We make it genuinely easy. You&apos;ll barely need to lift a finger.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-7 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-[#e8f0ec] z-0" />

          {STEPS.map((step) => (
            <div key={step.num} className="text-center relative z-10 px-4">
              <div className="w-14 h-14 rounded-full bg-[#1e4637] text-white font-display font-bold text-xl flex items-center justify-center mx-auto mb-5 shadow-[0_4px_16px_rgba(30,70,55,0.25)]">
                {step.num}
              </div>
              <h3 className="font-display font-semibold text-lg text-[#1a1a18] mb-2.5">
                {step.title}
              </h3>
              <p className="text-[#4a4a44] text-[0.95rem]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
