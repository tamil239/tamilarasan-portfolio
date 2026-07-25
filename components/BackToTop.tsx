"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="totop"
      className={`glass icon-btn ${show ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to Top"
      title="Back to Top"
      data-cursor="hover"
    >
      <ArrowUp size={18} style={{ color: "var(--accent)" }} />
    </button>
  );
}
