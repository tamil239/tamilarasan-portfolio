"use client";

import { certifications, achievements } from "@/lib/data";
import { Award } from "lucide-react";

export default function CertificationsAchievements() {
  return (
    <section id="certifications">
      <div className="wrap">
        <div className="eyebrow reveal">RECOGNITION</div>
        <h2 className="section-title reveal reveal-delay-1">Certifications &amp; Achievements</h2>
        <p className="section-sub reveal reveal-delay-2">
          Continued academic learning and leadership contributions recognized across forums.
        </p>

        <div className="cert-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className={`cert-card glass grad-border reveal reveal-delay-${(idx % 3) + 1}`} data-cursor="hover">
              <div className="cert-ico">
                <Award size={20} style={{ color: "var(--accent)" }} />
              </div>
              <h4>{cert.name}</h4>
              <p style={{ fontSize: "13px", color: "var(--text-dim)", marginBottom: "6px" }}>
                Issuer: {cert.issuer}
              </p>
              <span>{cert.date}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "44px" }} className="reveal reveal-delay-2">
          <div className="about-card-label" style={{ marginBottom: "18px" }}>
            HONORS &amp; VOLUNTEER WORK
          </div>
          <div className="badge-row">
            {achievements.map((ach, idx) => (
              <div key={idx} className={`ach-badge glass grad-border reveal reveal-delay-${(idx % 3) + 1}`} data-cursor="hover">
                <div className="dot" />
                <span>{ach}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
