"use client";

import { useEffect, useState } from "react";
import { Cpu, Sparkles } from "lucide-react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setHidden(true), 250);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="loader" className={hidden ? "hide" : ""}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px"
        }}
      >
        {/* Animated Cyber Core Icon */}
        <div
          style={{
            position: "relative",
            width: "68px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "rgba(16,185,129,0.12)",
            border: "1px solid rgba(16,185,129,0.3)",
            boxShadow: "0 0 30px rgba(16,185,129,0.25)",
            animation: "pulse 2s infinite"
          }}
        >
          <Cpu size={32} style={{ color: "var(--accent)", animation: "spin 6s linear infinite" }} />
          <Sparkles
            size={16}
            style={{
              position: "absolute",
              top: "-4px",
              right: "-4px",
              color: "var(--accent)"
            }}
          />
        </div>

        {/* Custom Brand Header */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 800,
              fontFamily: "var(--font-display)",
              letterSpacing: "2px",
              color: "var(--text)"
            }}
          >
            TAMILARASAN <span style={{ color: "var(--accent)" }}>S.</span>
          </div>
          <div
            style={{
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              color: "var(--text-dim)",
              letterSpacing: "1.5px",
              marginTop: "4px"
            }}
          >
            AI &amp; DATA SCIENCE ENGINEER
          </div>
        </div>

        {/* Numeric Counter & Sleek Loader Bar */}
        <div style={{ width: "220px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              color: "var(--text-dim)",
              marginBottom: "6px"
            }}
          >
            <span>LOADING ENGINE</span>
            <span style={{ color: "var(--accent)" }}>{progress}%</span>
          </div>
          <div className="loader-bar" style={{ width: "100%", height: "4px" }}>
            <span style={{ width: `${progress}%`, transition: "width 0.05s linear" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
