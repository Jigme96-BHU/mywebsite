"use client";

import { useEffect, useRef } from "react";
import { MARQUEE_ITEMS } from "@/lib/data";
import { registerGsap, reducedMotion } from "@/lib/motion";

// Signature moment no. 2: the strip drifts continuously, and
// scroll velocity drives both its speed and Archivo's width
// axis — letterforms stretch open as you scroll fast, then
// settle back to their condensed rest state.
export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reducedMotion()) return;
    const { gsap } = registerGsap();

    const loop = gsap.to(track, {
      xPercent: -50,
      duration: 28,
      ease: "none",
      repeat: -1,
    });

    let lastScroll = window.scrollY;
    let velocity = 0;
    let wdth = 62;
    const onTick = () => {
      const sy = window.scrollY;
      velocity += (Math.min(Math.abs(sy - lastScroll), 80) - velocity) * 0.1;
      lastScroll = sy;
      loop.timeScale(1 + velocity * 0.12);
      wdth += (62 + velocity * 0.85 - wdth) * 0.12;
      track.style.setProperty("--wdth", wdth.toFixed(1));
    };
    gsap.ticker.add(onTick);

    return () => {
      gsap.ticker.remove(onTick);
      loop.kill();
    };
  }, []);

  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section aria-label="Services ticker" className="overflow-hidden border-y border-ink/15 py-4">
      <p className="sr-only">{MARQUEE_ITEMS.join(", ")}</p>
      <div ref={trackRef} aria-hidden="true" className="flex w-max whitespace-nowrap will-change-transform">
        {row.map((item, i) => (
          <span
            key={i}
            className="gw-display flex items-center text-[clamp(2.2rem,6vw,4.5rem)] leading-none text-ink"
          >
            {item}
            <span className="mx-6 inline-block h-2 w-2 rounded-full bg-survey sm:mx-8" />
          </span>
        ))}
      </div>
    </section>
  );
}
