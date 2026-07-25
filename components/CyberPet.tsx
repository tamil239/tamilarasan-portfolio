"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { Sparkles, Heart, Moon, Sun, MessageSquare, X } from "lucide-react";

const petFacts = [
  "Tamilarasan built DermAI skin prediction model with 96.0% accuracy! 🏆",
  "Tamilarasan studies B.Tech AI & Data Science at Dr. MCET! 🎓",
  "Specialized in PyTorch, OpenCV, FastAPI, and Deep Learning! ⚡",
  "Featured Project: Semantic Grayscale Video Colorization using GANs! 🎨",
  "Macvel Solutions Full-Time AI Internship completed! 💻",
  "NSS Volunteer Coordinator & Active Community Member! 🏅"
];

export default function CyberPet() {
  const [currentMessage, setCurrentMessage] = useState(
    "Hi! I'm Nexus, your AI Cyber Pet! 🐾 Click me to play or ask me facts!"
  );
  const [showBubble, setShowBubble] = useState(true);
  const [isSleeping, setIsSleeping] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [factIndex, setFactIndex] = useState(0);

  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const walkTimerRef = useRef<NodeJS.Timeout | null>(null);

  const wakeUp = useCallback(() => {
    setIsSleeping(false);
    setShowBubble(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      wakeUp();
      setIsWalking(true);

      if (walkTimerRef.current) clearTimeout(walkTimerRef.current);
      walkTimerRef.current = setTimeout(() => {
        setIsWalking(false);
      }, 400);

      // Reset sleeping timer (12s idle)
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        setIsSleeping(true);
        setCurrentMessage("zZz... Sleeping mode. Click or scroll to wake me up! 🌙");
      }, 12000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (walkTimerRef.current) clearTimeout(walkTimerRef.current);
    };
  }, [wakeUp]);

  const handlePat = (e: React.MouseEvent) => {
    wakeUp();
    const rect = e.currentTarget.getBoundingClientRect();
    const newHeart = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    setHearts((prev) => [...prev.slice(-4), newHeart]);

    const happyMsgs = [
      "Purrr... 💚 I love AI code & neural networks!",
      "Nexus feels happy! Let me help you explore!",
      "⚡ Cyber Pet energy boosted! 100% Online!",
      "You patted Nexus! 🐾 Tamilarasan appreciates you!"
    ];
    setCurrentMessage(happyMsgs[Math.floor(Math.random() * happyMsgs.length)]);
  };

  const handleAskFact = (e: React.MouseEvent) => {
    e.stopPropagation();
    wakeUp();
    const nextIdx = (factIndex + 1) % petFacts.length;
    setFactIndex(nextIdx);
    setCurrentMessage(petFacts[nextIdx]);
  };

  const toggleSleepMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSleeping) {
      wakeUp();
      setCurrentMessage("Nexus is awake and ready to explore! 🚀");
    } else {
      setIsSleeping(true);
      setCurrentMessage("zZz... Sleeping mode activated. 🌙");
    }
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
        gap: "10px"
      }}
    >
      {/* Speech Bubble cleanly separated ABOVE the pet */}
      {showBubble && (
        <div
          className="glass"
          style={{
            padding: "12px 16px",
            borderRadius: "16px",
            border: "1px solid var(--glass-border)",
            width: "280px",
            maxWidth: "calc(100vw - 48px)",
            fontSize: "12px",
            fontFamily: "var(--font-mono)",
            color: "var(--text)",
            boxShadow: "0 14px 35px rgba(0,0,0,0.6), 0 0 25px rgba(16,185,129,0.15)",
            backdropFilter: "blur(20px)",
            background: "rgba(17,21,30,0.9)",
            marginBottom: "4px",
            position: "relative",
            lineHeight: "1.5"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "6px",
              borderBottom: "1px solid var(--glass-border)",
              paddingBottom: "4px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: isSleeping ? "#EAB308" : "var(--accent)",
                  boxShadow: "0 0 10px var(--accent)"
                }}
              />
              <span style={{ fontSize: "10px", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.5px" }}>
                NEXUS {isSleeping ? "[ SLEEPING ]" : isWalking ? "[ EXPLORING ]" : "[ ONLINE ]"}
              </span>
            </div>

            <button
              onClick={() => setShowBubble(false)}
              style={{
                background: "none",
                border: "none",
                color: "var(--text-dim)",
                cursor: "pointer",
                padding: "2px",
                display: "flex",
                alignItems: "center"
              }}
              title="Close bubble"
            >
              <X size={13} />
            </button>
          </div>

          <p style={{ margin: 0, color: "var(--text)", fontSize: "12px" }}>
            {currentMessage}
          </p>

          {/* Action Buttons Bar */}
          <div
            style={{
              display: "flex",
              gap: "6px",
              marginTop: "10px",
              paddingTop: "8px",
              borderTop: "1px solid rgba(255,255,255,0.06)"
            }}
          >
            <button
              onClick={handleAskFact}
              style={{
                flex: 1,
                padding: "4px 8px",
                borderRadius: "8px",
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: "var(--accent)",
                fontSize: "10px",
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px"
              }}
            >
              <MessageSquare size={10} /> Fact
            </button>

            <button
              onClick={toggleSleepMode}
              style={{
                padding: "4px 8px",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid var(--glass-border)",
                color: "var(--text-dim)",
                fontSize: "10px",
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px"
              }}
            >
              {isSleeping ? <Sun size={10} /> : <Moon size={10} />} {isSleeping ? "Wake" : "Sleep"}
            </button>
          </div>
        </div>
      )}

      {/* Cyber Pet Pedestal & Character Button */}
      <div
        onClick={handlePat}
        style={{
          cursor: "pointer",
          position: "relative",
          padding: "10px 14px",
          borderRadius: "18px",
          background: "rgba(17,21,30,0.85)",
          border: "1px solid var(--glass-border)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 12px 35px rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          transition: "transform 0.2s ease, border-color 0.2s ease",
          userSelect: "none"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        {/* Floating Hearts */}
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

        {/* Cyber Cat Animated SVG Icon */}
        <div
          style={{
            width: "40px",
            height: "40px",
            position: "relative",
            animation: isWalking
              ? "heroFloat 0.5s ease-in-out infinite"
              : "heroFloat 4s ease-in-out infinite"
          }}
        >
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
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

            {/* Visor Eye LED */}
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

            {/* Whiskers */}
            <line x1="8" y1="34" x2="15" y2="33" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" />
            <line x1="8" y1="38" x2="15" y2="37" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" />
            <line x1="56" y1="34" x2="49" y2="33" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" />
            <line x1="56" y1="38" x2="49" y2="37" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" />

            {/* Nose & Mouth */}
            <polygon points="32,38 30,41 34,41" fill="var(--accent)" />
            <path d="M29 43C30 45 31 45 32 44C33 45 34 45 35 43" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />

            {/* Tail */}
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

        {/* Pet Title & Info */}
        <div>
          <div style={{ fontSize: "12px", fontWeight: 700, fontFamily: "var(--font-mono)", color: "var(--text)" }}>
            NEXUS <Sparkles size={11} style={{ display: "inline", color: "var(--accent)" }} />
          </div>
          <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}>
            {isSleeping ? "Sleeping Mode" : isWalking ? "Following Scroll" : "Click to Pat 🐾"}
          </div>
        </div>
      </div>
    </div>
  );
}
