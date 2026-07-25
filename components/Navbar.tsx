"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { socials } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      const target = document.querySelector(href);
      const lenis = (window as any).__lenis;
      if (target) {
        if (lenis) {
          lenis.scrollTo(target as HTMLElement, { offset: -100 });
        } else {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } else {
      setOpen(false);
    }
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-4 animate-fade-in-down">
        <div className="flex w-full items-center justify-between rounded-full border border-white/10 transition-all duration-500 ease-out max-w-[1400px] bg-black/50 backdrop-blur-md px-3 py-2">
          {/* Logo / Name */}
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e as any, "#home")}
            className="group flex items-center gap-2.5"
            aria-label="Home"
            data-cursor-hover="true"
          >
            <span className="relative shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110">
              <div className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20 bg-neutral-800 flex items-center justify-center font-display font-bold text-lg text-white">
                T
              </div>
              <span className="dot-loop absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-accent"></span>
            </span>
            <span className="font-display whitespace-nowrap text-[14px] sm:text-[16px] text-white lg:text-[18px] font-medium">
              Tamilarasan S<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="relative hidden items-center justify-end lg:flex">
            <div className="flex items-center gap-5 md:gap-7">
              <nav className="font-body flex items-center gap-6 text-[15px] text-white lg:gap-8 lg:text-[16px] font-medium">
                {["Projects", "Experience", "About"].map((label) => {
                  const href = `#${label.toLowerCase()}`;
                  return (
                    <a
                      key={label}
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="group relative inline-flex items-center gap-1 py-1 transition-colors duration-300 hover:text-accent"
                      data-cursor-hover="true"
                    >
                      {label}
                      <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 transition-all duration-300 group-hover:w-full bg-accent"></span>
                    </a>
                  );
                })}
                <Link
                  href="/resume"
                  className="group relative inline-flex items-center gap-1 py-1 transition-colors duration-300 hover:text-accent"
                  data-cursor-hover="true"
                >
                  Resume
                  <span className="text-[0.7em] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 transition-all duration-300 group-hover:w-full bg-accent"></span>
                </Link>
              </nav>

              <span className="h-4 w-px bg-white/20" aria-hidden="true"></span>

              <div className="flex items-center gap-3.5">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:rotate-6 hover:scale-110 text-white hover:text-[#2867B2]"
                  data-cursor-hover="true"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:-rotate-6 hover:scale-110 text-white hover:text-white"
                  data-cursor-hover="true"
                >
                  <Github size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            className="relative flex h-10 w-10 items-center justify-center lg:hidden z-50 text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col justify-center px-6 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="font-display flex flex-col text-[32px] text-white gap-6">
          {["Home", "Projects", "Experience", "About"].map((label) => {
            const href = label === "Home" ? "#home" : `#${label.toLowerCase()}`;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                {label}
              </a>
            );
          })}
          <Link
            href="/resume"
            onClick={() => setOpen(false)}
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            Resume <span className="text-[0.6em] text-white/50">↗</span>
          </Link>
        </nav>

        <div className="mt-12 flex items-center gap-6 border-t border-white/10 pt-8">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#2867B2] transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition-colors"
          >
            <Github size={28} />
          </a>
        </div>
      </div>
    </>
  );
}
