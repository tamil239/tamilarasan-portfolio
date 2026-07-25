"use client";

import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-black px-5 sm:px-6 py-16 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1274px]">
        <div className="mb-10 md:mb-14">
          <div className="flex items-end justify-between">
            <h2 className="font-display pb-[0.2em] text-[clamp(28px,7vw,80px)] sm:text-[clamp(40px,8vw,80px)] leading-[0.9] tracking-[-0.03em] text-white">
              Experience & Education
            </h2>
            <span className="font-body hidden text-sm uppercase tracking-[0.25em] text-white/40 md:block">
              (0{experience.length + education.length})
            </span>
          </div>
          <p className="font-body mt-4 md:mt-6 max-w-[620px] text-[clamp(15px,3.5vw,26px)] sm:text-[clamp(18px,2.2vw,26px)] leading-snug tracking-tight text-white/70">
            My academic background and professional journey in building robust software and AI systems.
          </p>
        </div>

        <div className="border-b border-white/10">
          {/* Experience */}
          {experience.map((exp, idx) => (
            <div
              key={idx}
              data-cursor-hover="true"
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 border-t border-white/10 py-6 md:py-12 transition-colors hover:bg-white/[0.02] px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-xl"
            >
              <div className="flex flex-col gap-2 md:gap-4 md:w-1/2">
                <span className="font-body text-sm uppercase tracking-[0.2em] text-accent">
                  {exp.period}
                </span>
                <h3 
                  className="font-display text-[clamp(20px,5vw,36px)] sm:text-[clamp(24px,4vw,64px)] leading-[0.95] tracking-[-0.02em] text-white/90 transition-all duration-300 group-hover:text-white group-hover:translate-x-2"
                >
                  {exp.role}
                </h3>
                <p className="font-body text-base sm:text-xl text-white/50">{exp.org}</p>
              </div>
              <div className="md:w-1/2 font-body text-[15px] leading-relaxed text-white/60">
                <ul className="list-disc pl-5 space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Education */}
          {education.map((edu, idx) => (
            <div
              key={idx + experience.length}
              data-cursor-hover="true"
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 border-t border-white/10 py-6 md:py-12 transition-colors hover:bg-white/[0.02] px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-xl"
            >
              <div className="flex flex-col gap-2 md:gap-4 md:w-1/2">
                <span className="font-body text-sm uppercase tracking-[0.2em] text-accent">
                  {edu.period}
                </span>
                <h3 
                  className="font-display text-[clamp(20px,5vw,36px)] sm:text-[clamp(24px,4vw,64px)] leading-[0.95] tracking-[-0.02em] text-white/90 transition-all duration-300 group-hover:text-white group-hover:translate-x-2"
                >
                  {edu.degree}
                </h3>
                <p className="font-body text-base sm:text-xl text-white/50">{edu.institution}</p>
              </div>
              <div className="md:w-1/2 font-body text-[14px] sm:text-[15px] leading-relaxed text-white/60 flex flex-col justify-center">
                {edu.field && <p className="text-white/80 text-base sm:text-lg mb-2">{edu.field}</p>}
                <p>Score: <span className="text-accent">{edu.score}</span></p>
                {edu.affiliation && <p>{edu.affiliation}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
