"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight, Award, CheckCircle2 } from "lucide-react";
import { socials, contactInfo } from "@/lib/data";

const roles = [
  "AI & Deep Learning Developer",
  "Computer Vision Specialist",
  "Data Science Undergraduate",
  "FastAPI & PyTorch Engineer",
  "IoT Systems Prototyper"
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setTypedText(currentWord.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 85);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1400);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setTypedText(currentWord.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 45);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div className="hero-content">
          <div className="hero-badge glass">
            <span className="live-dot" /> Available for AI &amp; ML Roles
          </div>

          <div className="hero-eyebrow">
            AI &amp; DATA SCIENCE ENGINEER
          </div>

          <div className="hero-hi">
            <span className="hi-accent" /> Hello, I&apos;m
          </div>

          <h1>
            Tamilarasan<br />
            <span className="name">S.</span>
          </h1>

          <div className="hero-role">
            Specialized as <span id="typed">{typedText}</span>
            <span className="cursor-blink" />
          </div>

          <p className="hero-desc">
            Passionate Artificial Intelligence &amp; Data Science undergraduate focused on
            building intelligent models, computer vision applications, and IoT prototypes
            that solve high-impact real-world problems.
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary" data-cursor="hover">
              Explore Work
            </a>
            <Link
              href="/resume"
              className="btn btn-ghost"
              data-cursor="hover"
            >
              View Resume <ArrowUpRight size={16} />
            </Link>

            <div className="hero-social-row" style={{ marginTop: 0, marginLeft: "12px" }}>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                data-cursor="hover"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                data-cursor="hover"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="icon-btn"
                data-cursor="hover"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-photo-wrap reveal in" style={{ position: "relative" }}>
          <div
            className="glass grad-border"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "340px",
              height: "420px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(16,185,129,0.15)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center"
            }}
          >
            <Image
              src="/images/tamilarasan_color.png"
              alt="Tamilarasan S"
              width={340}
              height={420}
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center top",
                width: "100%",
                height: "100%"
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(7,9,14,0.85) 0%, transparent 60%)",
                pointerEvents: "none"
              }}
            />
          </div>

          <div
            className="glass"
            style={{
              position: "absolute",
              bottom: "20px",
              left: "-20px",
              padding: "10px 16px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "12.5px",
              fontFamily: "var(--font-mono)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              backdropFilter: "blur(16px)",
              zIndex: 10
            }}
          >
            <CheckCircle2 size={16} style={{ color: "var(--accent)" }} />
            <div>
              <span style={{ color: "var(--text-faint)", display: "block", fontSize: "10px" }}>ACADEMICS</span>
              <strong style={{ color: "var(--text)" }}>CGPA 8.05 / 10</strong>
            </div>
          </div>

          <div
            className="glass"
            style={{
              position: "absolute",
              top: "25px",
              right: "-20px",
              padding: "10px 16px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "12.5px",
              fontFamily: "var(--font-mono)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              backdropFilter: "blur(16px)",
              zIndex: 10
            }}
          >
            <Award size={16} style={{ color: "var(--accent)" }} />
            <div>
              <span style={{ color: "var(--text-faint)", display: "block", fontSize: "10px" }}>MODEL ACCURACY</span>
              <strong style={{ color: "var(--accent)" }}>96.0% DermAI</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>EXPLORE</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
