import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-padding" aria-label="Education">
      <div className="container-content">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-4">
            Education
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-14 max-w-2xl">
            Academic foundation in AI and data science.
          </h2>
        </Reveal>

        <Reveal stagger={0.08} className="grid md:grid-cols-3 gap-5">
          {education.map((item) => (
            <div
              key={item.degree + item.period}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-accent mb-4">
                {item.period}
              </p>
              <h3 className="font-display font-semibold text-lg mb-1.5">
                {item.degree}
              </h3>
              {item.field && (
                <p className="text-sm text-text-secondary mb-1.5">
                  {item.field}
                </p>
              )}
              {item.institution && (
                <p className="text-sm text-text-secondary mb-1.5">
                  {item.institution}
                </p>
              )}
              {item.affiliation && (
                <p className="text-sm text-text-secondary mb-5">
                  {item.affiliation}
                </p>
              )}
              <div className="mt-auto pt-5 border-t border-border">
                <p className="text-accent font-display font-semibold">
                  {item.score}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
