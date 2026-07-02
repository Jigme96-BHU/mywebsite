"use client";

import dynamic from "next/dynamic";
import { AGENCY, HERO } from "@/lib/data";
import Reveal from "./Reveal";

// The contour field is the heaviest client code on the page —
// keep it out of the main bundle and off the server.
const ContourField = dynamic(() => import("./ContourField"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pb-8 pt-24 sm:px-10">
      <ContourField />

      <div className="gw-label relative flex justify-between text-ink/60">
        <span>{HERO.annotation}</span>
        <span className="hidden text-survey md:block">{AGENCY.coords}</span>
      </div>

      <div className="relative">
        <Reveal
          as="h1"
          lines={HERO.lines}
          delay={0.2}
          className="gw-display text-[clamp(4rem,15.5vw,15rem)] text-ink"
        />
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <p className="text-[1.05rem] leading-[1.7] text-ink/70 md:col-span-4 md:col-start-8 lg:col-span-3 lg:col-start-9">
            {HERO.statement}
          </p>
        </div>
      </div>

      <div className="gw-label relative mt-12 flex flex-wrap items-end justify-between gap-4 border-t border-ink/15 pt-5 text-ink/60">
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {HERO.facts.map((fact) => (
            <li key={fact} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-survey" aria-hidden="true" />
              {fact}
            </li>
          ))}
        </ul>
        <span aria-hidden="true">Scroll ↓</span>
      </div>
    </section>
  );
}
