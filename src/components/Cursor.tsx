"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { finePointer, reducedMotion } from "@/lib/motion";

// A small dot that trails the pointer (difference-blended so
// it reads on both paper and ink sections); over elements
// marked [data-cursor="view"] it grows into an orange "View"
// disc. Desktop pointers only — never rendered on touch.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setEnabled(finePointer() && !reducedMotion());
  }, []);

  useEffect(() => {
    if (!enabled || !dotRef.current) return;
    const dot = dotRef.current;
    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    const xTo = gsap.quickTo(dot, "x", { duration: 0.35, ease: "expo.out" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.35, ease: "expo.out" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      if (!dot.style.opacity) dot.style.opacity = "1";
    };

    const setMode = (view: boolean) => {
      dot.style.mixBlendMode = view ? "normal" : "difference";
      gsap.to(dot, {
        width: view ? 76 : 10,
        height: view ? 76 : 10,
        backgroundColor: view ? "#FF4D00" : "#EDE9E3",
        duration: 0.45,
        ease: "expo.out",
      });
      gsap.to(labelRef.current, {
        opacity: view ? 1 : 0,
        duration: 0.3,
        ease: "expo.out",
      });
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      setMode(!!t.closest?.('[data-cursor="view"]'));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] flex h-[10px] w-[10px] items-center justify-center rounded-full bg-paper opacity-0 mix-blend-difference"
    >
      <span ref={labelRef} className="gw-label select-none text-ink opacity-0">
        View
      </span>
    </div>
  );
}
