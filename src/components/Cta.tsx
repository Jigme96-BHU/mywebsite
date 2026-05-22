"use client";

export default function Cta() {
  const openModal = () => {
    document.getElementById("contact-modal")?.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  return (
    <section className="py-[88px] bg-[#f5a623]">
      <div className="max-w-6xl mx-auto px-7">
        <div className="text-center max-w-[640px] mx-auto">
          <h2 className="font-display font-semibold text-[clamp(1.9rem,4vw,3rem)] text-[#1e4637] mb-4">
            Ready to get your business online properly?
          </h2>
          <p className="text-[#1e4637]/75 text-lg mb-9">
            Get a free, no-obligation quote. We&apos;ll chat through what you need and give you a clear picture of what we can do.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <button
              onClick={openModal}
              className="bg-transparent text-[#1e4637] font-semibold text-sm px-7 py-3.5 rounded-full border-2 border-[#1e4637] cursor-pointer hover:bg-[#1e4637] hover:text-white hover:-translate-y-0.5 transition-all"
            >
              Get a free quote →
            </button>
            <a
              href="#pricing"
              className="bg-[#1e4637]/12 text-[#1e4637] font-semibold text-sm px-7 py-3.5 rounded-full no-underline hover:bg-[#1e4637]/20 hover:-translate-y-0.5 transition-all inline-flex items-center"
            >
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
