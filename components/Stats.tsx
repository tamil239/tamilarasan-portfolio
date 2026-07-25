"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 8.05, label: "Academic CGPA", decimal: true },
  { value: 4, label: "AI Projects", suffix: "+" },
  { value: 1, label: "Internship", suffix: "" },
  { value: 2, label: "Certifications", suffix: "+" },
  { value: 100, label: "Dedication & Passion", suffix: "%" }
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            stats.forEach((stat, index) => {
              let start = 0;
              const target = stat.value;
              const duration = 1200;
              const steps = 40;
              const increment = target / steps;
              const intervalTime = duration / steps;

              const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                  start = target;
                  clearInterval(timer);
                }
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = start;
                  return updated;
                });
              }, intervalTime);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="wrap reveal" ref={containerRef}>
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className={`stat glass grad-border reveal reveal-delay-${(i % 4) + 1}`}>
            <div className="stat-num">
              {stat.decimal ? counts[i].toFixed(2) : Math.floor(counts[i])}
              {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
