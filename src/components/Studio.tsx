import Image from "next/image";
import { TEAM } from "@/lib/data";
import Reveal from "./Reveal";

// The studio: three editorial rows, not headshot cards.
export default function Studio() {
  return (
    <section id="studio" className="border-t border-ink/15 px-6 py-24 sm:px-10 sm:py-32">
      <div className="gw-label mb-10 flex justify-between text-ink/60">
        <span>
          <span className="mr-2 text-survey">05</span>The studio
        </span>
        <span className="hidden sm:block">Bhutan → Canberra</span>
      </div>
      <Reveal
        onScroll
        lines={["Three people,", "one standard"]}
        className="gw-display mb-6 text-[clamp(3rem,10vw,8.5rem)] text-ink"
      />
      <p className="mb-16 max-w-[34rem] text-[1.05rem] leading-[1.7] text-ink/70">
        Sprout Web started because small businesses kept paying agency prices
        for templated work. We&apos;re the other kind of small — every site
        custom, every client known by name.
      </p>

      <ul>
        {TEAM.map((member) => (
          <li
            key={member.name}
            className="grid grid-cols-12 items-start gap-x-4 gap-y-4 border-t border-ink/15 py-8"
          >
            <div className="col-span-4 sm:col-span-2 lg:col-span-1">
              <Image
                src={member.photo}
                alt={member.name}
                width={112}
                height={112}
                className="aspect-square w-full max-w-[112px] object-cover object-top grayscale transition-all duration-700 ease-out-expo hover:grayscale-0"
              />
            </div>
            <div className="col-span-8 sm:col-span-4 lg:col-span-4">
              <h3 className="gw-display text-[clamp(1.4rem,3vw,2.2rem)] text-ink">
                {member.name}
              </h3>
              <p className="gw-label mt-2 text-survey">{member.role}</p>
            </div>
            <div className="col-span-12 sm:col-span-6 sm:col-start-7">
              <p className="max-w-[32rem] text-[0.98rem] leading-[1.75] text-ink/70">
                {member.bio}
              </p>
              <p className="gw-label mt-4 text-ink/60">{member.skills.join(" · ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
