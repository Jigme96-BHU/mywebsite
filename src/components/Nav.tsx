"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, AGENCY } from "@/lib/data";
import Magnetic from "./Magnetic";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <nav
        aria-label="Main"
        className="flex h-14 items-center justify-between border-b border-ink/15 bg-paper px-6 sm:px-10"
      >
        <Link
          href="/"
          className="gw-display text-[1.05rem] text-ink no-underline"
          onClick={() => setOpen(false)}
        >
          Sprout Web<span className="text-survey">.</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="gw-label gw-underline text-ink no-underline">
                <span className="mr-1.5 text-survey">{link.index}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <Magnetic>
            <a
              href="#contact"
              className="gw-label hidden bg-ink px-5 py-2.5 text-paper no-underline transition-colors duration-300 hover:bg-survey hover:text-ink lg:inline-block"
            >
              Let&apos;s talk
            </a>
          </Magnetic>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="gw-label flex items-center gap-2 text-ink lg:hidden"
          >
            {open ? "Close" : "Menu"}
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0.5 block h-px w-5 bg-ink transition-transform duration-500 ease-out-expo ${open ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-0.5 left-0 block h-px w-5 bg-ink transition-transform duration-500 ease-out-expo ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Full-screen ink menu — mobile / tablet */}
      <div
        className={`fixed inset-0 top-14 z-[90] flex flex-col justify-between bg-ink px-6 pb-8 pt-12 transition-[clip-path] duration-700 ease-inout-expo lg:hidden ${
          open ? "[clip-path:inset(0_0_0%_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!open}
      >
        <ul>
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} className="border-b border-paper/15">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="gw-display flex items-baseline gap-4 py-4 text-[clamp(2.4rem,10vw,4rem)] text-paper no-underline transition-colors hover:text-survey"
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              >
                <span className="gw-label text-survey">{link.index}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="gw-label flex justify-between text-paper/60">
          <span>{AGENCY.location}</span>
          <span>{AGENCY.coords}</span>
        </div>
      </div>
    </header>
  );
}
