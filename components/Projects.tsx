"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";

const projectImages = [
  "/images/dermai.png",
  "/images/pearl.png",
  "/images/colorization.png",
  "/images/pet.png"
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch every 4 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="projects"
      className="flex min-h-0 md:min-h-screen flex-col justify-center bg-black px-5 sm:px-6 py-16 md:px-10 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1274px]">
        <div>
          <p className="font-body mb-4 md:mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/50">
            <span className="dot-loop h-2 w-2 rounded-full bg-accent"></span>
            Featured Projects
          </p>
          <h2 className="font-display text-[clamp(32px,8vw,80px)] leading-[0.9] tracking-[-0.03em] text-white">
            Featured Work
          </h2>
          <p className="font-body mt-4 md:mt-6 max-w-[760px] text-[clamp(15px,3.5vw,26px)] sm:text-[clamp(18px,2.2vw,26px)] leading-snug tracking-tight text-white/70">
            AI models, computer vision applications, and full-stack platforms designed to solve real-world problems.
          </p>
        </div>

        <div
          className="mt-10 md:mt-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            data-cursor-hover="true"
            className="relative block overflow-hidden rounded-2xl md:rounded-[20px] bg-neutral-900 w-full h-[50vh] sm:h-[55vh] md:h-[70vh]"
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: activeIndex === idx ? 1 : 0 }}
              >
                <Image
                  src={projectImages[idx] || "/images/dermai.png"}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-3/4 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

            {/* Counter badge */}
            <span className="pointer-events-none absolute left-4 top-4 sm:left-5 sm:top-5 z-20 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 sm:px-3 sm:py-1.5 font-body text-xs tracking-[0.25em] text-white backdrop-blur-md">
              0{activeIndex + 1} / 0{projects.length}
            </span>

            {/* Progress bar */}
            <div className="pointer-events-none absolute top-4 left-16 right-4 sm:top-5 sm:left-20 sm:right-5 z-20 flex gap-1.5 sm:gap-2 items-center">
              {projects.map((_, idx) => (
                <div key={idx} className="flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-300"
                    style={{ width: activeIndex === idx ? "100%" : activeIndex > idx ? "100%" : "0%" }}
                  />
                </div>
              ))}
            </div>

            {/* Project info overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5 sm:p-7 md:p-10">
              <h3 className="font-display text-[clamp(20px,5vw,44px)] sm:text-[clamp(26px,3.2vw,44px)] font-medium leading-tight text-white">
                {projects[activeIndex].name}
              </h3>
              <p className="font-body mt-1.5 sm:mt-2 max-w-[560px] text-[13px] sm:text-[15px] leading-relaxed text-white/75 md:text-[16px]">
                {projects[activeIndex].description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                {projects[activeIndex].tech.map((t, i) => (
                  <span
                    key={i}
                    className="font-body rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs tracking-wide text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tab selector */}
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-x-4 sm:gap-x-7 gap-y-2 border-t border-white/10 pt-4 sm:pt-5">
            {projects.map((project, idx) => (
              <button
                key={idx}
                type="button"
                data-cursor-hover="true"
                onClick={() => { setActiveIndex(idx); setIsPaused(true); }}
                onMouseEnter={() => setActiveIndex(idx)}
                className="font-body text-[13px] sm:text-[15px] transition-all duration-300 md:text-base font-medium hover:text-accent"
                style={{ color: activeIndex === idx ? "#C6F13D" : "rgba(255,255,255,0.4)" }}
              >
                {project.name.split("—")[0].trim()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
