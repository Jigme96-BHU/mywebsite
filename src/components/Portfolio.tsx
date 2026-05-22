"use client";

import { PORTFOLIO } from "@/lib/data";

function BrowserDots() {
  return (
    <div className="absolute top-0 left-0 right-0 h-8 bg-[#f0ede8] border-b border-[#ddd] flex items-center px-3 gap-1.5 z-10">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-[88px] bg-white border-t border-[#e2ddd4]">
      <div className="max-w-6xl mx-auto px-7">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#fff4e0] text-[#1e4637] text-[0.75rem] font-semibold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full border border-[#f5a623]/35 mb-4">
            Our work
          </span>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#1a1a18]">
            Real websites, real businesses
          </h2>
          <p className="text-[#4a4a44] text-lg max-w-[520px] mx-auto mt-3">
            From property agencies to dharma schools and community care organisations — here&apos;s what we&apos;ve built.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.map((project) => (
            <div
              key={project.url}
              className="group rounded-2xl overflow-hidden border border-[#e2ddd4] bg-white flex flex-col hover:-translate-y-1.5 hover:shadow-[0_12px_48px_rgba(30,70,55,0.16)] transition-all duration-200"
            >
              {/* Thumbnail */}
              <div className="relative h-[210px] overflow-hidden">
                {project.inProgress && (
                  <span className="absolute top-2.5 right-2.5 z-20 bg-[#f5a623] text-[#1e4637] text-[0.65rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full">
                    In progress
                  </span>
                )}
                <BrowserDots />
                {/* URL bar */}
                <div className="absolute top-0 left-0 right-0 h-8 z-10 flex items-center pl-20 pr-3">
                  <span className="bg-[#e4e1dc] rounded h-[18px] flex items-center px-2 text-[0.68rem] text-[#888] font-body overflow-hidden whitespace-nowrap text-ellipsis flex-1">
                    {project.domain}
                  </span>
                </div>

                {/* Screenshot area */}
                <div
                  className={`absolute top-8 left-0 right-0 bottom-0 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center gap-2`}
                >
                  {/* Try to load real screenshot; fall back to gradient + emoji */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://api.screenshotone.com/take?url=${encodeURIComponent(project.url)}&viewport_width=1280&viewport_height=800&format=jpg&cache=true&block_ads=true&block_trackers=true`}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[5000ms]"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = "none";
                      const parent = img.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <span style="font-size:2.5rem">${project.emoji}</span>
                          <span style="font-size:0.75rem;font-weight:600;color:rgba(255,255,255,0.8);letter-spacing:0.05em">${project.domain}</span>
                        `;
                      }
                    }}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[#2c5f4a] mb-1">
                  {project.industry}
                </span>
                <h3 className="font-display font-semibold text-[1.05rem] text-[#1a1a18] mb-1.5">
                  {project.name}
                </h3>
                <p className="text-[0.87rem] text-[#8a8a80] leading-[1.55] flex-1 mb-3.5">
                  {project.desc}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-[#1e4637] no-underline group/link"
                >
                  <span>View live site</span>
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
