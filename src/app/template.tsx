"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { reducedMotion } from "@/lib/motion";

// Soft page-enter transition: content rises in on each route
// change. Initial hidden state lives in CSS (.page-enter),
// with a .no-js override so content is never trapped hidden.
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (reducedMotion()) {
      ref.current.classList.remove("page-enter");
      return;
    }
    gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "expo.out",
      onComplete: () => ref.current?.classList.remove("page-enter"),
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  );
}
