import { SERVICES, PROCESS } from "@/lib/data";
import Reveal from "./Reveal";

// Services as an editorial index: numbered rows that expand
// on hover/focus (always expanded on touch, where there is
// no hover). Pure CSS — grid-rows 0fr → 1fr.
export default function Services() {
  return (
    <section id="services" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="gw-label mb-10 flex justify-between text-ink/60">
        <span>
          <span className="mr-2 text-survey">02</span>Services
        </span>
        <span className="hidden sm:block">Everything, one monthly fee</span>
      </div>
      <Reveal
        onScroll
        lines={["What we", "take care of"]}
        className="gw-display mb-16 text-[clamp(3rem,10vw,8.5rem)] text-ink"
      />

      <ul>
        {SERVICES.map((service) => (
          <li key={service.index} className="group border-t border-ink/15 last:border-b">
            <div tabIndex={0} className="grid grid-cols-12 items-baseline gap-4 py-7 outline-offset-[-2px]">
              <span className="gw-label col-span-2 text-survey sm:col-span-1">
                {service.index}
              </span>
              <h3 className="gw-display col-span-10 text-[clamp(1.6rem,4.5vw,3.2rem)] text-ink transition-transform duration-500 ease-out-expo group-hover:translate-x-3 sm:col-span-4">
                {service.title}
              </h3>
              <div className="col-span-10 col-start-3 sm:col-span-7 sm:col-start-6">
                <p className="text-[1rem] leading-[1.7] text-ink/70">{service.line}</p>
                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out-expo sm:grid-rows-[0fr] sm:group-hover:grid-rows-[1fr] sm:group-focus-within:grid-rows-[1fr]">
                  <ul className="gw-label overflow-hidden text-ink/60">
                    {service.details.map((d) => (
                      <li key={d} className="pt-3 first:pt-4">
                        <span className="mr-2 text-survey">+</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="gw-label mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-ink/60">
        <span className="text-ink">The route:</span>
        {PROCESS.map((step, i) => (
          <span key={step} className="flex items-center gap-8">
            <span>
              <span className="mr-2 text-survey">{String(i + 1).padStart(2, "0")}</span>
              {step}
            </span>
            {i < PROCESS.length - 1 && <span aria-hidden="true">→</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
