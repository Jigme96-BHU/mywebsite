import { AGENCY, PLANS } from "@/lib/data";
import Reveal from "./Reveal";

// Plans as full-bleed editorial rows, not cards. The featured
// plan inverts to ink. Prices are quoted on enquiry — each
// row links to the enquiry form with its plan pre-selected.
export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="px-6 sm:px-10">
        <div className="gw-label mb-10 flex justify-between text-ink/60">
          <span>
            <span className="mr-2 text-survey">03</span>Pricing
          </span>
          <span className="hidden sm:block">Quoted per project — no lock-in</span>
        </div>
        <Reveal
          onScroll
          lines={["Priced", "to fit"]}
          className="gw-display mb-16 text-[clamp(3rem,10vw,8.5rem)] text-ink"
        />
      </div>

      <ul>
        {PLANS.map((plan) => {
          const dark = plan.featured;
          return (
            <li
              key={plan.name}
              className={
                dark
                  ? "bg-ink text-paper"
                  : "border-t border-ink/15 text-ink last:border-b"
              }
            >
              <div className="grid grid-cols-12 gap-x-4 gap-y-6 px-6 py-10 sm:px-10 md:items-baseline">
                <span className={`gw-label col-span-2 md:col-span-1 ${dark ? "text-survey" : "text-survey"}`}>
                  {plan.index}
                </span>
                <div className="col-span-10 md:col-span-3">
                  <h3 className="gw-display text-[clamp(1.8rem,3.8vw,3rem)]">{plan.name}</h3>
                  {dark && (
                    <span className="gw-label mt-2 inline-block text-survey">
                      Most chosen
                    </span>
                  )}
                </div>
                <div className={`col-span-10 col-start-3 font-mono text-[0.95rem] md:col-span-3 md:col-start-5 ${dark ? "text-paper/80" : "text-ink/80"}`}>
                  <div>Setup + monthly</div>
                  <div className={`mt-1 ${dark ? "text-paper/50" : "text-ink/50"}`}>Price on enquiry</div>
                </div>
                <ul className={`col-span-10 col-start-3 md:col-span-4 md:col-start-8 ${dark ? "text-paper/70" : "text-ink/70"}`}>
                  {plan.features.map((f) => (
                    <li key={f} className="py-0.5 text-[0.92rem] leading-[1.7]">
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#enquire"
                  data-plan={plan.name}
                  className={`gw-label col-span-10 col-start-3 self-start no-underline md:col-span-1 md:col-start-12 md:justify-self-end ${
                    dark ? "text-survey" : "text-ink"
                  } gw-underline`}
                >
                  Get a quote →
                </a>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 flex flex-col gap-4 px-6 sm:flex-row sm:items-baseline sm:justify-between sm:px-10">
        <p className="gw-label text-ink/60">
          Every plan: custom design, hosting, SSL, and a real human on support. Cancel with 30 days notice.
        </p>
        <p className="text-[0.95rem] text-ink/80">
          For pricing,{" "}
          <a href={`mailto:${AGENCY.email}?subject=Pricing%20enquiry`} className="gw-underline text-ink no-underline">
            email us
          </a>{" "}
          or{" "}
          <a href="#enquire" data-plan="Not sure yet" className="gw-underline text-ink no-underline">
            send an enquiry →
          </a>
        </p>
      </div>
    </section>
  );
}
