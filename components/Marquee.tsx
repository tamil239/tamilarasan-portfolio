"use client";

import { skillGroups } from "@/lib/data";

// All skills flattened and doubled for seamless infinite scroll
const skills = skillGroups.flatMap((g) => g.skills);

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-white py-4 sm:py-6 text-black border-y border-white/10 select-none">
      {/* A single track that is 200% wide (content duplicated inside) */}
      {/* CSS animation translates it by -50%, creating a seamless loop */}
      <div className="marquee-track">
        {/* First copy */}
        {skills.map((skill, i) => (
          <span key={`a-${i}`} className="flex shrink-0 items-center gap-8 mr-8">
            <span className="font-display font-medium text-[clamp(28px,5vw,64px)] leading-none tracking-tight whitespace-nowrap">
              {skill}
            </span>
            <span className="text-[clamp(20px,3vw,40px)] text-black">✳</span>
          </span>
        ))}
        {/* Duplicate copy for seamless loop */}
        {skills.map((skill, i) => (
          <span key={`b-${i}`} className="flex shrink-0 items-center gap-8 mr-8">
            <span className="font-display font-medium text-[clamp(28px,5vw,64px)] leading-none tracking-tight whitespace-nowrap">
              {skill}
            </span>
            <span className="text-[clamp(20px,3vw,40px)] text-black">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
