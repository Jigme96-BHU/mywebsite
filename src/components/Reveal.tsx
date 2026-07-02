"use client";

import { useEffect, useRef } from "react";
import { registerGsap, reducedMotion, EASE, DUR } from "@/lib/motion";

type Props = {
  lines: string[];
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  onScroll?: boolean;
  accentLast?: boolean;
};

// Masked line-by-line reveal. Lines are explicit (headlines
// on this site are hand-broken), each clipped by an
// overflow-hidden row. Initial offset lives in CSS so there
// is no flash; without JS the .no-js class keeps text visible.
export default function Reveal({
  lines,
  as: Tag = "h2",
  className = "",
  delay = 0,
  onScroll = false,
  accentLast = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || reducedMotion()) return;
    const { gsap, ScrollTrigger } = registerGsap();
    const spans = ref.current.querySelectorAll(".gw-line > span");
    const tween = gsap.to(spans, {
      y: 0,
      yPercent: 0,
      duration: DUR.md,
      ease: EASE.out,
      stagger: 0.09,
      delay,
      ...(onScroll && {
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      }),
      onStart: () => ref.current?.classList.add("gw-revealed-live"),
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, onScroll]);

  return (
    // @ts-expect-error — polymorphic tag
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="gw-line">
          <span
            className={
              accentLast && i === lines.length - 1 ? "text-survey" : undefined
            }
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
