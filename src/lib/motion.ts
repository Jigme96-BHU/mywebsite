import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// One place for the motion grammar: every animation on the
// site pulls its easing and duration from here.
export const EASE = {
  out: "expo.out",
  inOut: "expo.inOut",
  quart: "quart.out",
} as const;

export const DUR = {
  xs: 0.35,
  sm: 0.7,
  md: 1.0,
  lg: 1.4,
} as const;

let registered = false;
export function registerGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

export const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const finePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches;
