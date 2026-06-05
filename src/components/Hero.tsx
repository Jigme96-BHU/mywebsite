"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add("visible"), 100);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    document.getElementById("contact-modal")?.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="pointer-events-none absolute right-[-120px] top-[-80px] w-[540px] h-[540px] rounded-full bg-gradient-radial from-[#e8f0ec]/80 to-transparent" />

      <div className="max-w-6xl mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div ref={ref} className="fade-up">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-0.5 bg-[#f5a623]" />
            <span className="text-[#2c5f4a] text-xs font-semibold tracking-[0.12em] uppercase font-body">
              Websites for small business
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.2] mb-6 text-[#1a1a18]">
            Your business deserves a website you&apos;re{" "}
            <em className="text-[#1e4637]">proud of</em>
          </h1>

          <p className="text-[#4a4a44] text-lg max-w-[480px] mb-9 leading-relaxed">
            We handle everything — design, development, and hosting — for one
            simple monthly fee. No tech headaches. No surprise bills.
          </p>

          <div className="flex gap-3 flex-wrap mb-12">
            <button
              onClick={openModal}
              className="bg-[#f5a623] text-[#1e4637] font-semibold text-sm px-7 py-3.5 rounded-full border-none cursor-pointer hover:bg-[#e8961a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,166,35,0.38)] transition-all"
            >
              Get a free quote →
            </button>
            <a
              href="#pricing"
              className="bg-transparent text-[#1e4637] font-semibold text-sm px-7 py-3.5 rounded-full border-2 border-[#1e4637] no-underline hover:bg-[#1e4637] hover:text-white hover:-translate-y-0.5 transition-all inline-flex items-center"
            >
              See pricing
            </a>
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            {["No lock-in contracts", "Live in 2 weeks", "Canberra-based engineers"].map(
              (item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-[#8a8a80] font-medium">
                  <span className="w-5 h-5 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[10px] text-[#1e4637] font-bold flex-shrink-0">
                    ✓
                  </span>
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Visual — floating cards */}
        <div className="hidden lg:block relative h-[420px]">
          {/* Main card */}
          <div className="float-a absolute w-[320px] top-5 left-5 bg-white rounded-2xl shadow-[0_12px_48px_rgba(30,70,55,0.16)] p-6 border border-[#e2ddd4]">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[#8a8a80] mb-2">
              Your new website
            </div>
            <div className="font-display font-semibold text-[#1a1a18] mb-1">
              mybusiness.com.au
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#2a9d5c] font-semibold">
              <span className="pulse w-1.5 h-1.5 rounded-full bg-[#2a9d5c] inline-block" />
              Live and running
            </div>
            <div className="flex items-end gap-1.5 h-10 mt-3">
              {[30, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i >= 5 ? "#1e4637" : i >= 3 ? "#2c5f4a" : "#c2d9cc",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Team card */}
          <div className="float-b absolute w-[210px] bottom-10 right-0 bg-white rounded-2xl shadow-[0_12px_48px_rgba(30,70,55,0.16)] p-5 border border-[#e2ddd4]">
            <div className="flex -space-x-2.5 mb-3">
              {[
                { src: "/team/jigme.jpeg", name: "Jigme" },
                { src: "/team/rohit.jpeg", name: "Rohit" },
                { src: "/team/palden.jpeg", name: "Palden" },
              ].map((m) => (
                <Image
                  key={m.name}
                  src={m.src}
                  alt={m.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover object-top"
                />
              ))}
            </div>
            <div className="font-semibold text-sm text-[#1a1a18] mb-0.5">Your dedicated team</div>
            <div className="text-xs text-[#8a8a80]">Canberra, ACT 🇦🇺</div>
          </div>

          {/* Award card */}
          <div className="float-c absolute w-[200px] top-0 right-8 bg-white rounded-2xl shadow-[0_12px_48px_rgba(30,70,55,0.16)] p-5 border border-[#f5a623]">
            <div className="text-2xl mb-1.5">🏆</div>
            <div className="font-semibold text-sm text-[#1a1a18] mb-0.5">
              REIA Innovation Award
            </div>
            <div className="text-xs text-[#8a8a80]">Won by a client we built for</div>
          </div>
        </div>
      </div>
    </section>
  );
}
