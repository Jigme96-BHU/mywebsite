import { FAQS } from "@/lib/data";
import Reveal from "./Reveal";

// Native <details> — keyboard and screen-reader accessible
// with zero JS. The marker rotates via CSS.
export default function Faq() {
  return (
    <section id="faq" className="border-t border-ink/15 px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="gw-label mb-10 text-ink/60">
            <span className="mr-2 text-survey">06</span>Questions
          </div>
          <Reveal
            onScroll
            lines={["Fair", "questions"]}
            className="gw-display text-[clamp(2.6rem,7vw,5.5rem)] text-ink"
          />
        </div>
        <div className="lg:col-span-8">
          {FAQS.map((faq, i) => (
            <details key={faq.q} className="group border-b border-ink/15 first:border-t">
              <summary className="flex cursor-pointer list-none items-baseline gap-5 py-5 [&::-webkit-details-marker]:hidden">
                <span className="gw-label text-survey">{String(i + 1).padStart(2, "0")}</span>
                <span className="gw-display flex-1 text-[clamp(1.1rem,2.2vw,1.6rem)] text-ink">
                  {faq.q}
                </span>
                <span
                  aria-hidden="true"
                  className="gw-label text-ink/60 transition-transform duration-500 ease-out-expo group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[36rem] pb-7 pl-12 text-[0.98rem] leading-[1.75] text-ink/70">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
