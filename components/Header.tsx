"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon, Terminal as TerminalIcon, Sparkles } from "lucide-react";

export default function Header({
  onOpenTerminal,
  onOpenDermAi
}: {
  onOpenTerminal?: () => void;
  onOpenDermAi?: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextState = !isLight;
    setIsLight(nextState);
    if (nextState) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <nav className="wrap">
        <Link href="#home" className="logo" aria-label="Home">
          Tamilarasan <span>S.</span>
        </Link>

        <div
          id="menu-overlay"
          className={menuOpen ? "show" : ""}
          onClick={closeMenu}
        />

        <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
          <li>
            <a href="#about" className="nav-link" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#education" className="nav-link" onClick={closeMenu}>
              Academics
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#github" className="nav-link" onClick={closeMenu}>
              GitHub
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          {onOpenDermAi && (
            <button
              className="icon-btn"
              onClick={onOpenDermAi}
              aria-label="Test DermAI Playground"
              title="Test DermAI Playground"
              style={{ color: "var(--accent)" }}
            >
              <Sparkles size={16} />
            </button>
          )}

          {onOpenTerminal && (
            <button
              className="icon-btn"
              onClick={onOpenTerminal}
              aria-label="Developer Terminal CLI"
              title="Open CLI Terminal"
            >
              <TerminalIcon size={16} />
            </button>
          )}

          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {isLight ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="hamburger"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
