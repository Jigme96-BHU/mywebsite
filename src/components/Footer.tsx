import { AGENCY, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a18] py-12">
      <div className="max-w-6xl mx-auto px-7">
        <div className="flex items-start justify-between flex-wrap gap-6">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 no-underline mb-2">
              <div className="w-9 h-9 bg-[#1e4637] rounded-[10px] flex items-center justify-center text-lg flex-shrink-0">
                🌱
              </div>
              <span className="font-display font-bold text-xl">
                <span className="text-[#f5a623]">Sprout</span>
                <span className="text-white/85"> Web</span>
              </span>
            </a>
            <p className="text-xs text-white/45 mt-1">{AGENCY.tagline}</p>
          </div>

          {/* Links */}
          <ul className="flex gap-7 list-none flex-wrap">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/50 text-sm no-underline hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.08] text-center text-[0.78rem] text-white/30">
          © {new Date().getFullYear()} {AGENCY.name}. All rights reserved. · ABN{" "}
          {AGENCY.abn} · {AGENCY.location}
        </div>
      </div>
    </footer>
  );
}
