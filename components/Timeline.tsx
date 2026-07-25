"use client";

import { experience, education } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Timeline() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="eyebrow reveal">ROADMAP &amp; MILESTONES</div>
        <h2 className="section-title reveal reveal-delay-1">Experience &amp; Academics</h2>
        <p className="section-sub reveal reveal-delay-2">
          A side-by-side view of my professional internships and academic background.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "32px",
            marginTop: "32px"
          }}
        >
          <div className="reveal reveal-delay-1">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "var(--accent)",
                marginBottom: "24px",
                paddingBottom: "12px",
                borderBottom: "1px solid var(--glass-border)"
              }}
            >
              <Briefcase size={18} /> WORK EXPERIENCE
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {experience.map((exp, idx) => (
                <div key={`exp-${idx}`} className={`tl-card glass grad-border reveal reveal-delay-${idx + 1}`}>
                  <div className="tl-date">{exp.period}</div>
                  <h3>{exp.role}</h3>
                  <div className="org">{exp.org}</div>
                  <ul>
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                  <div className="badge-cgpa">Full-Time Internship</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "var(--accent)",
                marginBottom: "24px",
                paddingBottom: "12px",
                borderBottom: "1px solid var(--glass-border)"
              }}
            >
              <GraduationCap size={18} /> ACADEMIC JOURNEY
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {education.map((edu, idx) => (
                <div key={`edu-${idx}`} className={`tl-card glass grad-border reveal reveal-delay-${(idx % 3) + 1}`}>
                  <div className="tl-date">{edu.period}</div>
                  <h3>{edu.degree}</h3>
                  <div className="org">
                    {edu.institution}
                    {edu.affiliation ? ` (${edu.affiliation})` : ""}
                  </div>
                  {edu.field && (
                    <p style={{ fontSize: "13.5px", color: "var(--text-dim)", marginBottom: "8px" }}>
                      Field: {edu.field}
                    </p>
                  )}
                  <div className="badge-cgpa">{edu.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
