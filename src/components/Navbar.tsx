"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openModal = () => {
    document.getElementById("contact-modal")?.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf8f3]/90 backdrop-blur-md shadow-sm"
          : "bg-[#faf8f3]/80 backdrop-blur-sm"
      } border-b border-[#e2ddd4]`}
    >
      <div className="max-w-6xl mx-auto px-7 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 bg-[#1e4637] rounded-[10px] flex items-center justify-content text-lg flex-shrink-0 flex items-center justify-center">
            🌱
          </div>
          <span className="font-display font-bold text-xl text-[#1a1a18]">
            <span className="text-[#1e4637]">Sprout</span> Web
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#4a4a44] text-sm font-medium no-underline hover:text-[#1e4637] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={openModal}
          className="bg-[#f5a623] text-[#1e4637] font-semibold text-sm px-6 py-3 rounded-full border-none cursor-pointer hover:bg-[#e8961a] hover:-translate-y-0.5 hover:shadow-lg transition-all"
        >
          Get Started →
        </button>
      </div>
    </nav>
  );
}
