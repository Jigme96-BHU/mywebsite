"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { registerGsap, reducedMotion } from "@/lib/motion";

// A site capture inside a clipped frame that settles from
// 1.12 → 1 as it scrolls into view.
export default function ParallaxShot({
  src,
  name,
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  name: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!frameRef.current || !innerRef.current || reducedMotion()) return;
    const { gsap } = registerGsap();
    const tween = gsap.fromTo(
      innerRef.current,
      { scale: 1.12, yPercent: -4 },
      {
        scale: 1,
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: frameRef.current,
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
      }
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  // Caller provides positioning (absolute or relative) via className.
  return (
    <div
      ref={frameRef}
      className={`overflow-hidden bg-[#1d1e19] ${className}`}
    >
      <div ref={innerRef} className="absolute inset-0 will-change-transform">
        <Image
          src={src}
          alt={`The ${name} website`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
