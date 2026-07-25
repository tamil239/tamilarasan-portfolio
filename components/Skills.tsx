"use client";

import { useEffect, useRef } from "react";
import { skillGroups } from "@/lib/data";

const skillCategoryIcons: Record<string, string> = {
  "AI & Machine Learning": "🧠",
  "Programming Languages": "💻",
  "Libraries & Frameworks": "⚡",
  "Databases": "🗄️",
  "Tools & Technologies": "🛠️",
  "Domains": "🌐",
  "Professional Skills": "🎯"
};

const skillLevels: Record<string, number> = {
  "AI & Machine Learning": 92,
  "Programming Languages": 88,
  "Libraries & Frameworks": 90,
  "Databases": 82,
  "Tools & Technologies": 85,
  "Domains": 94,
  "Professional Skills": 95
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fillBars = entry.target.querySelectorAll(".skill-bar-fill");
            fillBars.forEach((bar) => {
              const element = bar as HTMLElement;
              element.style.width = `${element.dataset.progress || 80}%`;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="wrap" ref={containerRef}>
        <div className="eyebrow">CAPABILITIES</div>
        <h2 className="section-title">Skills &amp; Technical Toolkit</h2>
        <p className="section-sub">
          A broad suite of AI frameworks, programming languages, and engineering tools built for applied intelligence.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, idx) => {
            const icon = skillCategoryIcons[group.title] || "🚀";
            const level = skillLevels[group.title] || 85;

            return (
              <div key={idx} className="skill-card glass grad-border">
                <div className="skill-head">
                  <div className="skill-ico">{icon}</div>
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="skill-bar-track">
                  <div className="skill-bar-fill" data-progress={level} />
                </div>
                <div className="skill-bar-label">
                  <span>Proficiency</span>
                  <span>{level}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
