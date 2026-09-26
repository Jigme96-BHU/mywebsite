import Link from "next/link";
import Footer from "@/components/Footer";
import { AGENCY } from "@/lib/data";

export default function NotFound() {
  return (
    <>
      <main className="flex min-h-svh flex-col justify-between px-6 pb-8 pt-24 sm:px-10">
        <div className="gw-label flex justify-between text-ink/60">
          <span>Unsurveyed territory</span>
          <span className="hidden text-survey sm:block">{AGENCY.coords}</span>
        </div>
        <div>
          <h1 className="gw-display text-[clamp(6rem,26vw,24rem)] leading-none text-ink">
            404
          </h1>
          <p className="mt-6 max-w-[28rem] text-[1.05rem] leading-[1.7] text-ink/70">
            This plot isn&apos;t on the plan. The page may have moved, or the
            address has a typo.
          </p>
        </div>
        <Link href="/" className="gw-label gw-underline self-start text-ink no-underline">
          ← Back to the site plan
        </Link>
      </main>
      <Footer />
    </>
  );
}
