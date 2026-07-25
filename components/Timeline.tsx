"use client";

import { experience, education } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="eyebrow">BACKGROUND</div>
        <h2 className="section-title">Experience &amp; Education</h2>
        <p className="section-sub">
          My academic journey and professional experience in building software and AI systems.
        </p>

        <div className="timeline">
          {/* Internship Experience */}
          {experience.map((exp, idx) => (
            <div key={`exp-${idx}`} className="tl-item">
              <div className="tl-dot" />
              <div className="tl-date">{exp.period}</div>
              <div className="tl-card glass grad-border">
                <h3>{exp.role}</h3>
                <div className="org">{exp.org}</div>
                <ul>
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
                <div className="badge-cgpa">Internship</div>
              </div>
            </div>
          ))}

          {/* Academic Education */}
          {education.map((edu, idx) => (
            <div key={`edu-${idx}`} className="tl-item">
              <div className="tl-dot" />
              <div className="tl-date">{edu.period}</div>
              <div className="tl-card glass grad-border">
                <h3>{edu.degree}</h3>
                <div className="org">
                  {edu.institution}
                  {edu.affiliation ? ` (${edu.affiliation})` : ""}
                </div>
                {edu.field && (
                  <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "8px" }}>
                    Specialization: {edu.field}
                  </p>
                )}
                <div className="badge-cgpa">{edu.score}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
