"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
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
            {"// AI & DATA SCIENCE ENGINEER"}
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
              View Work
            </a>
            <Link
              href="/resume"
              className="btn btn-ghost"
              data-cursor="hover"
            >
              Resume <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="hero-social-row">
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

        <div className="hero-photo-wrap reveal in">
          <div className="hero-photo">
            <Image
              src="/images/tamilarasan_color.png"
              alt="Tamilarasan S"
              width={320}
              height={320}
              priority
            />
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
