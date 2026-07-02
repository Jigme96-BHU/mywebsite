"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AGENCY } from "@/lib/data";
import { reducedMotion } from "@/lib/motion";

// First visit only: a brief elevation counter (000 → 578 m,
// Canberra's elevation) on an ink sheet that lifts away.
// Total ≈ 1.5s. Skipped on repeat visits and reduced motion.
export default function Preloader() {
  const [show, setShow] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("gw-seen") || reducedMotion()) return;
      sessionStorage.setItem("gw-seen", "1");
    } catch {
      return;
    }
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show || !rootRef.current) return;
    document.documentElement.style.overflow = "hidden";
    const counter = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        setShow(false);
      },
    });
    tl.to(counter, {
      v: AGENCY.elevation,
      duration: 0.9,
      ease: "quart.out",
      onUpdate: () => {
        if (numRef.current)
          numRef.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
      },
    })
      .to(rootRef.current, {
        yPercent: -100,
        duration: 0.7,
        ease: "expo.inOut",
      }, "+=0.15");
    return () => {
      tl.kill();
      document.documentElement.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="fixed inset-0 z-[300] flex flex-col justify-between bg-ink px-6 py-6 sm:px-10"
    >
      <div className="gw-label flex justify-between text-paper/60">
        <span>Sprout Web — site plan 001</span>
        <span className="text-survey">{AGENCY.coords}</span>
      </div>
      <div className="flex items-end justify-between">
        <div className="gw-display text-paper" style={{ fontSize: "clamp(4rem, 18vw, 13rem)" }}>
          <span ref={numRef}>000</span>
          <span className="text-survey"> m</span>
        </div>
        <span className="gw-label mb-4 hidden text-paper/60 sm:block">
          Elevation — Canberra ACT
        </span>
      </div>
    </div>
  );
}
