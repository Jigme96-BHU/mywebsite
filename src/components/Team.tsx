"use client";

import Image from "next/image";
import { useState } from "react";
import { TEAM } from "@/lib/data";

function Avatar({ member }: { member: (typeof TEAM)[0] }) {
  const [err, setErr] = useState(false);

  if (err) {
    return (
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 mx-auto"
        style={{ background: member.avatarBg }}
      >
        {member.initials}
      </div>
    );
  }

  return (
    <Image
      src={member.photo}
      alt={member.name}
      width={96}
      height={96}
      className="w-24 h-24 rounded-full object-cover object-top flex-shrink-0 mx-auto"
      onError={() => setErr(true)}
    />
  );
}

export default function Team() {
  return (
    <section id="team" className="py-[88px] bg-white">
      <div className="max-w-6xl mx-auto px-7">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#fff4e0] text-[#1e4637] text-[0.75rem] font-semibold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full border border-[#f5a623]/35 mb-4">
            Our team
          </span>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#1a1a18]">
            Engineers who care about small business
          </h2>
          <p className="text-[#4a4a44] text-base max-w-xl mx-auto mt-4 leading-relaxed">
            We&apos;re a small, tight-knit team from Bhutan and Australia — with
            real engineering and data science degrees, and a genuine interest in
            helping local businesses grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="bg-[#faf8f3] border border-[#e2ddd4] rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <Avatar member={member} />
              <div className="mt-5 flex flex-col items-center">
                <h3 className="font-display font-semibold text-[#1a1a18] text-lg leading-tight">
                  {member.name}
                </h3>
                <span className="inline-block mt-2 mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#1e4637] bg-[#e8f0ec] px-3 py-1 rounded-full">
                  {member.role}
                </span>
                <p className="text-[0.9rem] text-[#4a4a44] leading-[1.65]">
                  {member.bio}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-5 justify-center">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[0.72rem] font-medium text-[#4a4a44] bg-white border border-[#e2ddd4] px-2.5 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[0.85rem] text-[#8a8a80] mt-10">
          Based in Canberra, ACT — building for businesses across Australia
        </p>
      </div>
    </section>
  );
}
