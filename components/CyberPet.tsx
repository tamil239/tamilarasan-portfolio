"use client";

import React, { useEffect, useState, useRef } from "react";
import { Sparkles, Heart, Zap } from "lucide-react";

const sectionMessages: Record<string, string[]> = {
  home: [
    "Hi there! I'm Nexus, your AI Cyber Pet! 🐾",
    "Welcome to Tamilarasan's portfolio! ⚡",
    "Let's explore some awesome AI projects!"
  ],
  about: [
    "Tamilarasan studies AI & DS at Dr. MCET! 🎓",
    "Deep Learning & OpenCV are his specialties! 🧠",
    "CGPA 8.05 / 10 — Solid academic record! 🌟"
  ],
  education: [
    "Macvel Solutions Internship completed! 💻",
    "Anna University affiliated B.Tech degree! 📚",
    "Always learning new AI frameworks!"
  ],
  skills: [
    "PyTorch, FastAPI, OpenCV, and Python! ⚡",
    "Check out those proficiency progress bars! 🚀",
    "IoT hardware prototyping with Arduino!"
  ],
  projects: [
    "DermAI has 96.0% specialist precision! 🏆",
    "ConvNeXt, EfficientNet & ResNet models! 🧬",
    "Pearl health app & Video Colorization!"
  ],
  certifications: [
    "NPTEL E-Business & Entrepreneurship! 📜",
    "NSS Volunteer & Event Coordinator! 🏅",
    "Dedicated to continuous innovation!"
  ],
  github: [
    "Live GitHub statistics loaded from tamil239! 🐙",
    "Check out the real-time public repositories!",
    "Star & fork his open-source code!"
  ],
  contact: [
    "Send Tamilarasan a message below! 📩",
    "Open for AI & Machine Learning roles! 💼",
    "Located in Sivakasi, Tamil Nadu, India 📍"
  ]
};

export default function CyberPet() {
  const [currentMessage, setCurrentMessage] = useState(
    "Hi! I'm Nexus 🐾 Scroll to explore with me!"
  );
  const [isSleeping, setIsSleeping] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [petMood, setPetMood] = useState<"happy" | "excited" | "sleepy">("happy");

  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsWalking(true);
      setIsSleeping(false);
      setPetMood("excited");

      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        setIsWalking(false);
        setPetMood("happy");
      }, 300);

      // Detect active section
      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "certifications",
        "github",
        "contact"
      ];
      const scrollPosition = window.scrollY + 300;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const msgs = sectionMessages[sectionId];
            if (msgs && msgs.length > 0) {
              const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
              setCurrentMessage(randomMsg);
            }
            break;
          }
        }
      }

      // Reset idle timer
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        setIsSleeping(true);
        setPetMood("sleepy");
        setCurrentMessage("zZz... Sleeping mode activated. Scroll or click to wake me!");
      }, 6000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  const handlePetClick = (e: React.MouseEvent) => {
    setIsSleeping(false);
    setPetMood("excited");
    const rect = e.currentTarget.getBoundingClientRect();
    const newHeart = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    setHearts((prev) => [...prev.slice(-4), newHeart]);

    const clickMsgs = [
      "Purrr... 💚 I love AI code!",
      "Nexus is happy! Let's build AI models!",
      "⚡ Cyber Pet Boost Activated!",
      "You clicked me! 🐾 Happy coding!"
    ];
    setCurrentMessage(clickMsgs[Math.floor(Math.random() * clickMsgs.length)]);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
        pointerEvents: "none"
      }}
    >
      {/* Speech Bubble */}
      <div
        className="glass"
        style={{
          pointerEvents: "auto",
          padding: "10px 16px",
          borderRadius: "16px",
          border: "1px solid var(--glass-border)",
          maxWidth: "250px",
          fontSize: "12px",
          fontFamily: "var(--font-mono)",
          color: "var(--text)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(198,241,61,0.15)",
          backdropFilter: "blur(16px)",
          position: "relative",
          animation: "float1 4s ease-in-out infinite",
          lineHeight: "1.4"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: isSleeping ? "#EAB308" : "var(--accent)",
              boxShadow: "0 0 8px var(--accent)"
            }}
          />
          <span style={{ fontSize: "10px", color: "var(--accent)", fontWeight: 700 }}>
            NEXUS {isSleeping ? "[ SLEEPING ]" : isWalking ? "[ EXPLORING ]" : "[ ONLINE ]"}
          </span>
        </div>
        {currentMessage}
        {/* Triangle arrow at bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "-6px",
            left: "24px",
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "6px solid var(--glass-border)"
          }}
        />
      </div>

      {/* Cyber Pet Pedestal & Character Container */}
      <div
        onClick={handlePetClick}
        style={{
          pointerEvents: "auto",
          cursor: "pointer",
          position: "relative",
          padding: "12px 16px",
          borderRadius: "20px",
          background: "rgba(17,21,30,0.75)",
          border: "1px solid var(--glass-border)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 12px 35px rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          transition: "transform 0.2s ease, border-color 0.2s ease"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        {/* Floating Heart Effect */}
        {hearts.map((h) => (
          <div
            key={h.id}
            style={{
              position: "absolute",
              left: `${h.x}px`,
              top: `${h.y}px`,
              color: "var(--accent)",
              pointerEvents: "none",
              animation: "float1 1.2s ease-out forwards",
              opacity: 0.9
            }}
          >
            <Heart size={14} fill="var(--accent)" />
          </div>
        ))}

        {/* Cyber Cat SVG Illustration */}
        <div
          style={{
            width: "44px",
            height: "44px",
            position: "relative",
            animation: isWalking
              ? "heroFloat 0.6s ease-in-out infinite"
              : "heroFloat 4s ease-in-out infinite"
          }}
        >
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
            {/* Cat Ears */}
            <path d="M14 22L22 6L30 20Z" fill="url(#petGrad)" stroke="var(--accent)" strokeWidth="1.5" />
            <path d="M50 22L42 6L34 20Z" fill="url(#petGrad)" stroke="var(--accent)" strokeWidth="1.5" />

            {/* Inner Ear Glow */}
            <path d="M18 20L22 11L26 19Z" fill="var(--accent)" opacity="0.6" />
            <path d="M46 20L42 11L38 19Z" fill="var(--accent)" opacity="0.6" />

            {/* Head Contour */}
            <circle cx="32" cy="34" r="20" fill="#11151E" stroke="var(--accent)" strokeWidth="2" />

            {/* Cyber Visor */}
            <rect
              x="16"
              y="26"
              width="32"
              height="12"
              rx="6"
              fill={isSleeping ? "#1F2937" : "url(#petGrad)"}
              stroke="var(--accent)"
              strokeWidth="1.5"
            />

            {/* Visor Eyes / LED */}
            {isSleeping ? (
              <text x="24" y="35" fill="#EAB308" fontSize="9" fontFamily="monospace">
                zZz
              </text>
            ) : (
              <>
                <circle cx="24" cy="32" r="3" fill="#000" />
                <circle cx="25" cy="31" r="1" fill="#FFF" />
                <circle cx="40" cy="32" r="3" fill="#000" />
                <circle cx="41" cy="31" r="1" fill="#FFF" />
              </>
            )}

            {/* Cute Whisker Lines */}
            <line x1="8" y1="34" x2="15" y2="33" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" />
            <line x1="8" y1="38" x2="15" y2="37" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" />
            <line x1="56" y1="34" x2="49" y2="33" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" />
            <line x1="56" y1="38" x2="49" y2="37" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" />

            {/* Nose & Mouth */}
            <polygon points="32,38 30,41 34,41" fill="var(--accent)" />
            <path d="M29 43C30 45 31 45 32 44C33 45 34 45 35 43" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />

            {/* Animated Tail */}
            <path
              d="M50 44C56 46 58 52 54 58"
              stroke="var(--accent)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                transformOrigin: "50px 44px",
                animation: isWalking
                  ? "spin 0.5s ease-in-out infinite alternate"
                  : "spin 3s ease-in-out infinite alternate"
              }}
            />

            <defs>
              <linearGradient id="petGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10B981" />
                <stop offset="1" stopColor="#C6F13D" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Pet Name & Badge Info */}
        <div>
          <div style={{ fontSize: "12px", fontWeight: 700, fontFamily: "var(--font-mono)", color: "var(--text)" }}>
            NEXUS <Sparkles size={11} style={{ display: "inline", color: "var(--accent)" }} />
          </div>
          <div style={{ fontSize: "10.5px", fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}>
            {isSleeping ? "Sleeping Mode" : isWalking ? "Following Scroll" : "Click to Play!"}
          </div>
        </div>
      </div>
    </div>
  );
}
