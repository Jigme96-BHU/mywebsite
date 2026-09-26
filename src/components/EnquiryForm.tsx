"use client";

import { useEffect, useState } from "react";
import { AGENCY, PLANS } from "@/lib/data";

// Pricing enquiries. If NEXT_PUBLIC_ENQUIRY_ENDPOINT is set
// (e.g. a Formspree form URL) the form posts there as JSON;
// otherwise it opens a pre-filled email to the studio, so it
// works with no backend at all.
const ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;
const PLAN_OPTIONS = [...PLANS.map((p) => p.name), "Not sure yet"];

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border-0 border-b border-paper/25 bg-transparent px-0 py-3 text-[1.05rem] text-paper placeholder:text-paper/35 focus:border-survey focus:outline-none focus:ring-0";

export default function EnquiryForm() {
  const [plan, setPlan] = useState("Not sure yet");
  const [status, setStatus] = useState<Status>("idle");

  // "Get a quote" links in Pricing carry data-plan; pick it up
  // so the form arrives with that plan already selected.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element).closest?.("[data-plan]");
      if (el) setPlan(el.getAttribute("data-plan") ?? "Not sure yet");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (data._gotcha) return; // honeypot: bots fill hidden fields

    if (!ENDPOINT) {
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.business && `Business: ${data.business}`,
        `Plan: ${data.plan}`,
        "",
        data.message,
      ]
        .filter((l) => l !== undefined && l !== "")
        .join("\n");
      window.location.href = `mailto:${AGENCY.email}?subject=${encodeURIComponent(
        `Pricing enquiry — ${data.plan}`
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `Pricing enquiry — ${data.plan}` }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div id="enquire" className="scroll-mt-24 border-t border-paper/15 py-10">
        <p className="gw-display text-[clamp(2rem,5vw,3.5rem)] text-paper">Enquiry received.</p>
        <p className="mt-3 text-paper/70">We&apos;ll reply with a quote within one business day.</p>
      </div>
    );
  }

  return (
    <form
      id="enquire"
      onSubmit={onSubmit}
      className="grid scroll-mt-24 gap-x-10 gap-y-6 border-t border-paper/15 pt-10 md:grid-cols-2"
    >
      <div className="gw-label text-paper/60 md:col-span-2">
        <span className="mr-2 text-survey">Enquiry</span>Tell us about your business — we&apos;ll
        send a quote
      </div>

      <label className="block">
        <span className="gw-label text-paper/60">Name</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className="gw-label text-paper/60">Email</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className="gw-label text-paper/60">Business (optional)</span>
        <input name="business" autoComplete="organization" className={field} />
      </label>
      <label className="block">
        <span className="gw-label text-paper/60">Plan</span>
        <select
          name="plan"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className={`${field} cursor-pointer [&>option]:bg-ink`}
        >
          {PLAN_OPTIONS.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </label>
      <label className="block md:col-span-2">
        <span className="gw-label text-paper/60">What do you need?</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Pages, features, timeline, current website…"
          className={`${field} resize-y`}
        />
      </label>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <input
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px opacity-0"
      />

      <div className="flex flex-wrap items-center gap-6 md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="gw-label bg-survey px-6 py-3.5 text-ink transition-colors duration-300 hover:bg-paper disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry →"}
        </button>
        {status === "error" && (
          <span role="alert" className="text-[0.95rem] text-survey">
            That didn&apos;t send — please email {AGENCY.email} instead.
          </span>
        )}
      </div>
    </form>
  );
}
