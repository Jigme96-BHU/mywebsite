import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[88px] bg-[#faf8f3]">
      <div className="max-w-6xl mx-auto px-7">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#fff4e0] text-[#1e4637] text-[0.75rem] font-semibold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full border border-[#f5a623]/35 mb-4">
            Happy clients
          </span>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#1a1a18]">
            Real businesses, real results
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-[#e2ddd4] rounded-2xl p-8 relative"
            >
              <span className="font-display text-[5rem] text-[#e8f0ec] absolute top-2.5 left-6 leading-none pointer-events-none select-none">
                &ldquo;
              </span>
              <div className="text-[#f5a623] text-sm mb-3 relative z-10">
                {"★".repeat(t.stars)}
              </div>
              <p className="text-[0.97rem] text-[#4a4a44] leading-[1.7] mb-5 relative z-10">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: t.bg }}
                >
                  {t.emoji}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#1a1a18]">{t.name}</div>
                  <div className="text-xs text-[#8a8a80]">{t.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
