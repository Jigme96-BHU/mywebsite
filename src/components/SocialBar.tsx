import { STATS } from "@/lib/data";

export default function SocialBar() {
  return (
    <div className="bg-[#1e4637] py-5">
      <div className="max-w-6xl mx-auto px-7 flex items-center justify-center gap-12 flex-wrap">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-12">
            <div className="text-center">
              <div className="font-display font-bold text-[1.8rem] text-[#f5a623] leading-none">
                {stat.value}
              </div>
              <div className="text-xs text-white/65 mt-1 font-medium">{stat.label}</div>
            </div>
            {i < STATS.length - 1 && (
              <div className="hidden sm:block w-px h-9 bg-white/20" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
