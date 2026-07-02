import { AGENCY } from "@/lib/data";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import Clock from "./Clock";

// The field office: the site's destination. Giant contact
// type on ink, live Canberra readout, underline-reveal links.
export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="px-6 pb-10 pt-24 sm:px-10 sm:pt-32">
        <div className="gw-label mb-16 flex justify-between text-paper/60">
          <span>Field office — {AGENCY.location}</span>
          <span className="hidden text-survey sm:block">{AGENCY.coords}</span>
        </div>

        <Reveal
          as="p"
          onScroll
          lines={["Let's build", "your plot."]}
          className="gw-display text-[clamp(3.5rem,13vw,12rem)] text-paper"
        />

        <div className="mt-14 flex flex-col gap-10 border-t border-paper/15 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3 text-[1.05rem]">
            <Magnetic className="self-start">
              <a
                href={`mailto:${AGENCY.email}`}
                className="gw-underline text-paper no-underline hover:text-survey"
              >
                {AGENCY.email}
              </a>
            </Magnetic>
            <Magnetic className="self-start">
              <a
                href={`tel:${AGENCY.phoneIntl}`}
                className="gw-underline text-paper no-underline hover:text-survey"
              >
                {AGENCY.phone}
              </a>
            </Magnetic>
          </div>
          <div className="gw-label flex flex-col gap-2 text-paper/60 sm:items-end">
            <Clock />
            <span>
              © {new Date().getFullYear()} {AGENCY.name} — websites from the ground up
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
