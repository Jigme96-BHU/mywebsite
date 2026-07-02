import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudy, getNextCaseStudy } from "@/lib/caseStudies";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ParallaxShot from "@/components/ParallaxShot";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};
  return {
    title: `${cs.name} — Case study`,
    description: cs.summary,
    openGraph: { title: `${cs.name} — Case study`, description: cs.summary },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();
  const next = getNextCaseStudy(cs.slug);

  return (
    <>
      <Nav />
      <main>
        {/* ── Title sheet ─────────────────────────────── */}
        <section className="px-6 pb-16 pt-28 sm:px-10 sm:pt-36">
          <div className="gw-label mb-12 flex flex-wrap justify-between gap-2 text-ink/60">
            <span>
              <span className="mr-2 text-survey">Plot {cs.index}</span>
              {cs.sector}
            </span>
            <span>
              {cs.loc} — {cs.year}
              {cs.inProgress && <span className="ml-3 text-survey">In progress</span>}
            </span>
          </div>
          <Reveal
            as="h1"
            lines={cs.name.split(" ").reduce<string[]>((acc, word, i) => {
              // Break the name near its midpoint into two lines.
              const mid = Math.ceil(cs.name.split(" ").length / 2);
              const li = i < mid ? 0 : 1;
              acc[li] = acc[li] ? `${acc[li]} ${word}` : word;
              return acc;
            }, [])}
            className="gw-display text-[clamp(2.8rem,9.5vw,9rem)] text-ink"
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
            <p className="text-[1.1rem] leading-[1.7] text-ink/70 md:col-span-5 md:col-start-7 lg:col-span-4 lg:col-start-8">
              {cs.summary}
            </p>
          </div>
        </section>

        {/* ── Full-bleed shot ─────────────────────────── */}
        <ParallaxShot
          src={`/work/${cs.slug}.jpg`}
          name={cs.name}
          priority
          className="relative mx-6 aspect-[4/3] sm:mx-10 sm:aspect-[16/9]"
        />

        {/* ── Survey record ───────────────────────────── */}
        <section className="px-6 py-16 sm:px-10">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink/15 pt-8 md:grid-cols-4">
            <div>
              <dt className="gw-label mb-3 text-ink/60">Scope</dt>
              {cs.scope.map((s) => (
                <dd key={s} className="text-[0.95rem] leading-[1.8] text-ink">{s}</dd>
              ))}
            </div>
            <div>
              <dt className="gw-label mb-3 text-ink/60">Stack</dt>
              {cs.stack.map((s) => (
                <dd key={s} className="text-[0.95rem] leading-[1.8] text-ink">{s}</dd>
              ))}
            </div>
            <div>
              <dt className="gw-label mb-3 text-ink/60">Location</dt>
              <dd className="text-[0.95rem] leading-[1.8] text-ink">{cs.loc}</dd>
              <dt className="gw-label mb-3 mt-6 text-ink/60">Year</dt>
              <dd className="text-[0.95rem] leading-[1.8] text-ink">{cs.year}</dd>
            </div>
            <div>
              <dt className="gw-label mb-3 text-ink/60">Status</dt>
              <dd className="text-[0.95rem] leading-[1.8] text-ink">
                {cs.inProgress ? "In development" : "Live"}
              </dd>
              <dd className="mt-6">
                <a
                  href={cs.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gw-underline text-[0.95rem] text-ink no-underline"
                >
                  Visit live site ↗
                </a>
              </dd>
            </div>
          </dl>
        </section>

        {/* ── The story ───────────────────────────────── */}
        {cs.sections.map((section, i) => (
          <section key={section.label} className="px-6 py-12 sm:px-10">
            <div className="grid grid-cols-1 gap-6 border-t border-ink/15 pt-8 md:grid-cols-12">
              <span className="gw-label text-ink/60 md:col-span-3">
                <span className="mr-2 text-survey">{String(i + 1).padStart(2, "0")}</span>
                {section.label}
              </span>
              <div className="md:col-span-7 md:col-start-5">
                <Reveal
                  as="h2"
                  onScroll
                  lines={[section.heading]}
                  className="gw-display mb-6 text-[clamp(1.8rem,4.5vw,3.4rem)] text-ink"
                />
                <p className="max-w-[38rem] text-[1.05rem] leading-[1.8] text-ink/70">
                  {section.body}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* ── Outcomes ────────────────────────────────── */}
        <section className="mt-12 bg-ink px-6 py-20 text-paper sm:px-10">
          <span className="gw-label text-paper/60">Surveyed outcomes</span>
          <ul className="mt-10">
            {cs.outcomes.map((outcome, i) => (
              <li
                key={outcome}
                className="flex items-baseline gap-6 border-t border-paper/15 py-6"
              >
                <span className="gw-label text-survey">{String(i + 1).padStart(2, "0")}</span>
                <span className="gw-display text-[clamp(1.3rem,3.2vw,2.4rem)]">{outcome}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Next plot ───────────────────────────────── */}
        <Link
          href={`/work/${next.slug}`}
          data-cursor="view"
          className="group block border-t border-ink/15 px-6 py-16 no-underline sm:px-10"
        >
          <span className="gw-label text-ink/60">
            Next plot <span className="text-survey">{next.index}</span>
          </span>
          <span className="gw-display mt-4 block text-[clamp(2.2rem,7vw,6rem)] text-ink transition-colors duration-500 group-hover:text-survey">
            {next.name} →
          </span>
        </Link>
      </main>
      <Footer />
    </>
  );
}
