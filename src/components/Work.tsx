import Link from "next/link";
import { PLOTS } from "@/lib/data";
import PlotShot from "./PlotShot";
import Reveal from "./Reveal";

// Selected work as a stack of surveyed plots: each panel is
// position-sticky, so the next case slides over the last —
// the stack itself needs no JS. PlotShot handles the image
// reveal and the opt-in live preview.
export default function Work() {
  return (
    <section id="work" className="bg-ink text-paper">
      <div className="px-6 pb-4 pt-24 sm:px-10">
        <div className="gw-label mb-10 flex justify-between text-paper/60">
          <span>
            <span className="mr-2 text-survey">01</span>The plots
          </span>
          <span className="hidden sm:block">{PLOTS.length} plots surveyed</span>
        </div>
        <Reveal
          onScroll
          lines={["Selected", "work"]}
          className="gw-display text-[clamp(3.5rem,11vw,10rem)] text-paper"
        />
      </div>

      <div>
        {PLOTS.map((plot) => {
          const external = !plot.slug;
          const linkProps = {
            "data-cursor": "view",
            "aria-label": `${plot.name} — ${external ? "live site (opens in new tab)" : "case study"}`,
            className: "absolute inset-0 z-10",
          };

          // The whole card is clickable via a stretched link
          // rather than wrapping it, so the preview button can
          // sit on top without nesting interactive elements.
          return (
            <div key={plot.index} className="sticky top-0 border-t border-paper/15 bg-ink">
              <article className="relative flex h-svh flex-col justify-between px-6 pb-6 pt-20 sm:px-10">
                <div className="gw-label flex flex-wrap justify-between gap-2 border-t border-paper/15 pt-4 text-paper/60">
                  <span>
                    <span className="mr-2 text-survey">Plot {plot.index}</span>
                    {plot.sector}
                  </span>
                  <span>
                    {plot.loc} — {plot.year}
                    {plot.inProgress && <span className="ml-3 text-survey">In progress</span>}
                  </span>
                </div>

                {/* Name on the left, site on the right — side by
                    side from sm up, stacked on phones; never overlapping. */}
                <div className="flex min-h-0 flex-1 flex-col gap-5 py-6 sm:flex-row sm:gap-10">
                  <h3 className="gw-display shrink-0 break-words text-[clamp(2.2rem,9vw,3.25rem)] text-paper sm:w-[28%] sm:text-[clamp(2.2rem,4.2vw,4.75rem)]">
                    {plot.name}
                  </h3>
                  <PlotShot
                    src={plot.image}
                    name={plot.name}
                    url={plot.url}
                    embeddable={plot.embeddable}
                    sizes="(min-width: 640px) 68vw, 100vw"
                    className="relative min-h-0 flex-1"
                  />
                </div>

                <div className="gw-label flex flex-wrap items-center justify-between gap-2 text-paper/60">
                  <span className="max-w-[36rem] normal-case tracking-normal">{plot.outcome}</span>
                  <span className="text-paper">{external ? "Live site ↗" : "Case study →"}</span>
                </div>

                {external ? (
                  <a href={plot.url} target="_blank" rel="noopener noreferrer" {...linkProps} />
                ) : (
                  <Link href={`/work/${plot.slug}`} {...linkProps} />
                )}
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
