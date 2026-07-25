import { Award } from "lucide-react";
import Reveal from "./Reveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding bg-bg-secondary/40"
      aria-label="Certifications"
    >
      <div className="container-content">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-4">
            Certifications
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-14 max-w-2xl">
            Continued learning, formally recognized.
          </h2>
        </Reveal>

        <Reveal stagger={0.08} className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
            >
              <div className="shrink-0 h-11 w-11 rounded-full bg-accent-dim flex items-center justify-center">
                <Award size={18} className="text-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-base mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-text-secondary mb-1">{cert.issuer}</p>
                <p className="text-xs text-text-secondary/70">{cert.date}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
