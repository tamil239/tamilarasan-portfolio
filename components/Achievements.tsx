import { Trophy } from "lucide-react";
import Reveal from "./Reveal";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding" aria-label="Achievements">
      <div className="container-content">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-4">
            Achievements
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-14 max-w-2xl">
            Beyond the classroom.
          </h2>
        </Reveal>

        <Reveal stagger={0.08} className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a) => (
            <div
              key={a}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
            >
              <div className="shrink-0 h-11 w-11 rounded-full bg-accent-dim flex items-center justify-center">
                <Trophy size={18} className="text-accent" aria-hidden="true" />
              </div>
              <p className="text-sm text-text-secondary leading-relaxed pt-2">
                {a}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
