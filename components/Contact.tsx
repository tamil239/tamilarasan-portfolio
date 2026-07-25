"use client";

import { Mail, ArrowRight } from "lucide-react";
import { contactInfo, socials } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative flex flex-col justify-center min-h-[70vh] px-6 py-24 md:px-10 bg-black text-white overflow-hidden border-t border-white/10">
      <div className="mx-auto w-full max-w-[1274px] flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="flex-1">
          <p className="font-body mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/50">
            <span className="dot-loop h-2 w-2 rounded-full bg-accent"></span>
            Contact
          </p>
          <h2 className="font-display text-[clamp(40px,8vw,96px)] leading-[0.9] tracking-[-0.03em]">
            Let&apos;s build<br />something together.
          </h2>
          
          <a
            href={`mailto:${contactInfo.email}`}
            data-cursor-hover="true"
            className="group mt-12 inline-flex items-center gap-4 border border-white/20 rounded-full px-8 py-4 font-body text-[18px] transition-all hover:bg-white hover:text-black"
          >
            Say Hello
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="flex flex-col items-start md:items-end gap-8 font-body">
          <div>
            <p className="text-white/40 uppercase tracking-widest text-xs mb-2">Location</p>
            <p className="text-lg">{contactInfo.location}</p>
          </div>
          <div>
            <p className="text-white/40 uppercase tracking-widest text-xs mb-2">Socials</p>
            <div className="flex flex-col md:items-end gap-1">
              <a 
                href={socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                data-cursor-hover="true"
                className="text-lg hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href={socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                data-cursor-hover="true"
                className="text-lg hover:text-accent transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
