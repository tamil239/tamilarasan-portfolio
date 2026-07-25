"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-inner">
          <p>© {currentYear} Tamilarasan S. All rights reserved.</p>

          <p className="credit">
            Crafted with <span>Intelligence</span> &amp; Precision
          </p>

          <div style={{ display: "flex", gap: "18px", fontSize: "13px", fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
