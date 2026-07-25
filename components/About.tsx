"use client";

import { useState, useEffect } from "react";

type Role = "For anyone" | "Recruiters" | "Engineers" | "Collaborators";

const intros: Record<Role, string> = {
  "For anyone": "I'm Tamilarasan S — an AI & Data Science undergraduate who blends machine learning, computer vision, and IoT into functional solutions that tackle real-world problems.",
  "Recruiters": "I'm a highly motivated AI Developer with a CGPA of 8.05. I specialize in Python, PyTorch, and deep learning architectures like ConvNeXt and ResNet. I'm actively seeking opportunities to build impactful AI systems.",
  "Engineers": "I'm a tech-driven problem solver. I enjoy architecting robust models using frameworks like PyTorch and FastAPI, and prototyping IoT hardware solutions with Arduino. Let's talk system design.",
  "Collaborators": "I believe the best tech is built together. I thrive in cross-functional environments, bridging the gap between data science algorithms and user-centric application development."
};

export default function About() {
  const [activeRole, setActiveRole] = useState<Role>("For anyone");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const roles = Object.keys(intros) as Role[];
    const interval = setInterval(() => {
      setActiveRole((current) => {
        const nextIndex = (roles.indexOf(current) + 1) % roles.length;
        return roles[nextIndex];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="about" className="flex min-h-[100svh] items-center overflow-hidden bg-black px-6 py-24 md:px-10">
      <div 
        className="mx-auto flex w-full max-w-[1274px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex shrink-0 flex-col items-start lg:w-[240px] lg:pt-1">
          <h2 className="font-display font-medium text-[clamp(40px,8vw,80px)] leading-[0.9] tracking-[-0.03em] text-white">Intro</h2>
          <nav className="mt-8 flex flex-col items-start gap-1">
            {(Object.keys(intros) as Role[]).map((role) => (
              <button
                key={role}
                type="button"
                data-cursor-hover="true"
                onClick={() => setActiveRole(role)}
                onMouseEnter={() => setActiveRole(role)}
                className={`group font-body flex items-center gap-3 py-2 text-left text-[18px] transition-colors duration-200 md:text-[20px] ${
                  activeRole === role ? "text-white" : "text-white/40 hover:text-white/75"
                }`}
              >
                <span
                  className={`block h-px bg-current transition-all duration-300 ${
                    activeRole === role ? "w-9 opacity-100" : "w-4 opacity-40 group-hover:w-6"
                  }`}
                ></span>
                {role}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="w-full lg:max-w-[790px] lg:flex-1">
          <div className="relative h-[400px] overflow-hidden p-8 md:h-[500px] md:p-11 lg:h-[450px]">
            <p
              key={activeRole} // Force re-render for animation
              className="font-display text-[26px] font-normal leading-[1.3] tracking-[-0.01em] md:text-[44px] animate-fade-in-up text-white"
            >
              {intros[activeRole]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
