import { TESTIMONIALS } from "@/lib/data";

// Client words as quiet field notes — no stars, no cards.
export default function FieldNotes() {
  return (
    <section className="border-t border-ink/15 px-6 py-24 sm:px-10">
      <div className="gw-label mb-14 text-ink/60">
        <span className="mr-2 text-survey">04</span>Field notes — from clients
      </div>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="max-w-[26rem]">
            <blockquote className="text-[1.05rem] leading-[1.75] text-ink/80">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <figcaption className="gw-label mt-6 text-ink/60">
              {t.name} — <span className="normal-case">{t.business}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
