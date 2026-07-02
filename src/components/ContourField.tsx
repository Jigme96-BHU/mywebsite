"use client";

import { useEffect, useRef } from "react";
import { reducedMotion } from "@/lib/motion";

// The signature moment: a drifting topographic contour field
// drawn on 2D canvas. Lines are horizontal isolines displaced
// by layered sines; the cursor pushes them aside and scroll
// velocity tightens their amplitude. Reduced motion gets a
// single static frame. Loaded via next/dynamic (client only).

const INK = "18, 19, 15";
const STEP_X = 8;
const LINE_GAP = 36;

function field(x: number, y: number, t: number) {
  return (
    Math.sin(x * 1.7 + y * 0.8 + t) +
    0.5 * Math.sin(x * 3.1 - y * 1.2 - t * 1.3) +
    0.25 * Math.sin(x * 5.3 + y * 2.9 + t * 0.7)
  );
}

export default function ContourField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const staticMode = reducedMotion();
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let t = 0;
    const mouse = { x: -9999, y: -9999, energy: 0 };
    let lastScroll = typeof window !== "undefined" ? window.scrollY : 0;
    let velocity = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (staticMode) draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const amp = 20 + Math.min(velocity * 0.06, 26);
      const lines = Math.ceil(h / LINE_GAP) + 2;

      for (let i = 0; i < lines; i++) {
        const baseY = i * LINE_GAP;
        const alpha = 0.05 + 0.09 * Math.abs(Math.sin(i * 0.7 + 1));
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${INK}, ${alpha})`;
        ctx.lineWidth = 1;
        for (let x = -STEP_X; x <= w + STEP_X; x += STEP_X) {
          let y = baseY + field(x * 0.0026, baseY * 0.004, t) * amp;
          const dx = x - mouse.x;
          const dy = baseY - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 36000) {
            y += (dy > 0 ? 1 : -1) * Math.exp(-d2 / 14000) * 42 * mouse.energy;
          }
          x === -STEP_X ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Benchmark marker — the studio's survey point.
      const bx = w * 0.68;
      const by = h * 0.34;
      ctx.strokeStyle = "#FF4D00";
      ctx.fillStyle = "#FF4D00";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(bx, by, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(bx - 14, by);
      ctx.lineTo(bx - 7, by);
      ctx.moveTo(bx + 7, by);
      ctx.lineTo(bx + 14, by);
      ctx.moveTo(bx, by - 14);
      ctx.lineTo(bx, by - 7);
      ctx.moveTo(bx, by + 7);
      ctx.lineTo(bx, by + 14);
      ctx.stroke();
    };

    const tick = () => {
      t += 0.004;
      const sy = window.scrollY;
      velocity += (Math.abs(sy - lastScroll) * 6 - velocity) * 0.08;
      lastScroll = sy;
      mouse.energy += ((mouse.x > -9000 ? 1 : 0) - mouse.energy) * 0.06;
      draw();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!running && !staticMode) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    const io = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop()
    );

    resize();
    window.addEventListener("resize", resize);
    if (!staticMode) {
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      io.observe(canvas);
    }

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
