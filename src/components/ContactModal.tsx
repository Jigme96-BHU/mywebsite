"use client";

import { useState, useEffect, useRef } from "react";

export default function ContactModal() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    plan: "",
    message: "",
  });
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = () => {
    overlayRef.current?.classList.remove("open");
    document.body.style.overflow = "";
    // Reset after transition
    setTimeout(() => setSubmitted(false), 400);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) close();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to Formspree / Resend / your own API
    // e.g. await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
    setSubmitted(true);
  };

  return (
    <div
      id="contact-modal"
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="hidden [&.open]:flex fixed inset-0 bg-[#1a1a18]/60 backdrop-blur-[6px] z-[500] items-center justify-center p-5"
    >
      <div className="bg-white rounded-2xl p-10 max-w-[480px] w-full relative animate-[slideUp_0.3s_ease]">
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#faf8f3] border-none flex items-center justify-center text-[#8a8a80] cursor-pointer hover:bg-[#e2ddd4] transition-colors text-base"
          aria-label="Close"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h3 className="font-display font-semibold text-xl text-[#1a1a18] mb-1.5">
              Get a free quote
            </h3>
            <p className="text-sm text-[#4a4a44] mb-6">
              Tell us a little about your business and we&apos;ll be in touch within one business day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[0.82rem] font-semibold text-[#1a1a18] mb-1.5">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jane Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border-[1.5px] border-[#e2ddd4] rounded-xl font-body text-[0.95rem] text-[#1a1a18] bg-[#faf8f3] outline-none focus:border-[#1e4637] focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[0.82rem] font-semibold text-[#1a1a18] mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@yourbusiness.com.au"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border-[1.5px] border-[#e2ddd4] rounded-xl font-body text-[0.95rem] text-[#1a1a18] bg-[#faf8f3] outline-none focus:border-[#1e4637] focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[0.82rem] font-semibold text-[#1a1a18] mb-1.5">
                  Business type
                </label>
                <input
                  type="text"
                  placeholder="e.g. Café, plumber, beauty salon…"
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="w-full px-4 py-3 border-[1.5px] border-[#e2ddd4] rounded-xl font-body text-[0.95rem] text-[#1a1a18] bg-[#faf8f3] outline-none focus:border-[#1e4637] focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[0.82rem] font-semibold text-[#1a1a18] mb-1.5">
                  Which plan are you interested in?
                </label>
                <select
                  value={form.plan}
                  onChange={(e) => setForm({ ...form, plan: e.target.value })}
                  className="w-full px-4 py-3 border-[1.5px] border-[#e2ddd4] rounded-xl font-body text-[0.95rem] text-[#1a1a18] bg-[#faf8f3] outline-none focus:border-[#1e4637] focus:bg-white transition-colors"
                >
                  <option value="">Not sure yet</option>
                  <option>Starter — $499 setup + $79/mo</option>
                  <option>Growth — $799 setup + $129/mo</option>
                  <option>Professional — $1,299 setup + $199/mo</option>
                </select>
              </div>
              <div>
                <label className="block text-[0.82rem] font-semibold text-[#1a1a18] mb-1.5">
                  Anything else we should know?
                </label>
                <textarea
                  placeholder="Do you have a logo? Existing website? Any must-have features?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border-[1.5px] border-[#e2ddd4] rounded-xl font-body text-[0.95rem] text-[#1a1a18] bg-[#faf8f3] outline-none focus:border-[#1e4637] focus:bg-white transition-colors resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#f5a623] text-[#1e4637] font-semibold text-sm py-3.5 rounded-full border-none cursor-pointer hover:bg-[#e8961a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,166,35,0.38)] transition-all"
              >
                Send my enquiry →
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-5">
            <div className="text-5xl mb-3">🎉</div>
            <h3 className="font-display font-semibold text-xl text-[#1a1a18] mb-2">
              You&apos;re on your way!
            </h3>
            <p className="text-sm text-[#4a4a44]">
              We&apos;ll be in touch within one business day to talk through your project.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
