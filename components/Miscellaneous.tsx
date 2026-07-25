"use client";

import { useEffect, useRef } from "react";
import { certifications, achievements } from "@/lib/data";
import TiltCard from "./TiltCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Miscellaneous() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run horizontal scroll on desktop (width >= 768px)
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (!mediaQuery.matches) return;

    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    // Calculate how far we need to scroll horizontally
    const scrollWidth = container.scrollWidth - window.innerWidth;
    if (scrollWidth <= 0) return;

    const ctx = gsap.context(() => {
      gsap.to(container, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.5,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-[#0a0a0a] md:overflow-hidden">
      <div 
        ref={containerRef} 
        className="flex w-full flex-col gap-8 py-16 px-5 sm:px-6 md:h-screen md:w-max md:flex-row md:flex-nowrap md:items-stretch md:gap-0 md:py-0 md:px-0"
      >
        <div className="flex w-full shrink-0 flex-col justify-center md:h-full md:w-[46vw] md:pr-16 md:[padding-left:calc(max((100vw-1354px)/2,0px)+2.5rem)]">
          <p className="font-body mb-4 md:mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/50">
            <span className="dot-loop h-2 w-2 rounded-full bg-accent"></span>
            Beyond the code
          </p>
          <h2 className="font-display text-[clamp(32px,8vw,80px)] leading-[0.9] tracking-[-0.03em] text-white">
            Certifications &<br />Achievements
          </h2>
          <span className="font-body mt-10 hidden text-sm uppercase tracking-[0.2em] text-white/40 md:block">
            Scroll ↓
          </span>
        </div>

        {/* Mobile: vertical grid of cards / Desktop: horizontal scroll cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:hidden">
          {certifications.map((cert, i) => (
            <div key={`cert-${i}`} className="group">
              <TiltCard maxRotate={8} className="w-full">
                <div 
                  data-cursor-hover="true" 
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center p-6 sm:p-8"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="text-center" style={{ transform: "translateZ(30px)" }}>
                    <h3 className="font-display text-[20px] sm:text-[24px] leading-tight tracking-tight text-white/90 group-hover:text-white transition-colors">
                      {cert.name}
                    </h3>
                    <p className="font-body mt-3 text-[14px] sm:text-[16px] text-white/50">Issued by {cert.issuer}</p>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}

          {achievements.map((ach, i) => (
            <div key={`ach-${i}`} className="group">
              <TiltCard maxRotate={8} className="w-full">
                <div 
                  data-cursor-hover="true" 
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center p-6 sm:p-8"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="text-center" style={{ transform: "translateZ(30px)" }}>
                    <h3 className="font-display text-[18px] sm:text-[22px] leading-tight tracking-tight text-white/90 group-hover:text-white transition-colors">
                      {ach}
                    </h3>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal scroll cards (hidden on mobile) */}
        {certifications.map((cert, i) => (
          <div key={`cert-${i}`} className="group hidden md:flex w-full shrink-0 flex-col justify-center md:h-full md:w-[42vw] md:px-10">
            <TiltCard maxRotate={8} className="w-full">
              <div 
                data-cursor-hover="true" 
                className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-neutral-900 border border-white/10 flex items-center justify-center p-12"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-center" style={{ transform: "translateZ(30px)" }}>
                  <h3 className="font-display text-[clamp(32px,3.5vw,56px)] leading-tight tracking-tight text-white/90 group-hover:text-white transition-colors">
                    {cert.name}
                  </h3>
                  <p className="font-body mt-4 text-[20px] text-white/50">Issued by {cert.issuer}</p>
                </div>
              </div>
            </TiltCard>
          </div>
        ))}

        {achievements.map((ach, i) => (
          <div key={`ach-${i}`} className="group hidden md:flex w-full shrink-0 flex-col justify-center md:h-full md:w-[42vw] md:px-10">
            <TiltCard maxRotate={8} className="w-full">
              <div 
                data-cursor-hover="true" 
                className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-neutral-900 border border-white/10 flex items-center justify-center p-12"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-center" style={{ transform: "translateZ(30px)" }}>
                  <h3 className="font-display text-[clamp(24px,2.5vw,40px)] leading-tight tracking-tight text-white/90 group-hover:text-white transition-colors">
                    {ach}
                  </h3>
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
        
        <div className="hidden shrink-0 md:block md:h-full md:w-[8vw]"></div>
      </div>
    </div>
  );
}
