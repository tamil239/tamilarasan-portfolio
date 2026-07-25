import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg-secondary/40" aria-label="Skills">
      <div className="container-content">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-4">
            Skills
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-14 max-w-2xl">
            A toolkit built for applied AI, end to end.
          </h2>
        </Reveal>

        <Reveal
          stagger={0.08}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
            >
              <h3 className="font-display font-semibold text-sm uppercase tracking-[0.14em] text-text-primary mb-5">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-text-secondary bg-bg/60 border border-border rounded-full px-3.5 py-1.5 transition-colors duration-300 group-hover:border-accent/30 hover:!text-accent hover:!border-accent/60"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
