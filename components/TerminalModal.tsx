"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X, CornerDownLeft } from "lucide-react";
import { contactInfo } from "@/lib/data";

type CommandOutput = {
  command: string;
  output: React.ReactNode;
};

export default function TerminalModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      output: (
        <div style={{ color: "var(--accent)" }}>
          Tamilarasan S — Developer CLI Terminal [v1.0.0]<br />
          Type <span style={{ color: "#FFF", fontWeight: 700 }}>&apos;help&apos;</span> to list available commands.
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let outNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outNode = (
          <div>
            Available Commands:<br />
            &nbsp;&nbsp;<span style={{ color: "var(--accent)" }}>skills</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— View AI, ML &amp; programming skills<br />
            &nbsp;&nbsp;<span style={{ color: "var(--accent)" }}>projects</span> &nbsp;&nbsp;&nbsp;— List featured AI engineering projects<br />
            &nbsp;&nbsp;<span style={{ color: "var(--accent)" }}>education</span> &nbsp;— Academic degree &amp; CGPA<br />
            &nbsp;&nbsp;<span style={{ color: "var(--accent)" }}>contact</span> &nbsp;&nbsp;&nbsp;— Email, phone &amp; location details<br />
            &nbsp;&nbsp;<span style={{ color: "var(--accent)" }}>clear</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Clear terminal history<br />
            &nbsp;&nbsp;<span style={{ color: "var(--accent)" }}>whoami</span> &nbsp;&nbsp;&nbsp;&nbsp;— Information about Tamilarasan S<br />
            &nbsp;&nbsp;<span style={{ color: "var(--accent)" }}>exit</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Close CLI terminal window
          </div>
        );
        break;

      case "skills":
        outNode = (
          <div>
            Tech Stack Breakdown:<br />
            • <span style={{ color: "var(--accent)" }}>AI &amp; ML:</span> PyTorch, ConvNeXt, ResNet, Attention U-Nets, GANs, OpenCV<br />
            • <span style={{ color: "var(--accent)" }}>Languages:</span> Python, TypeScript, C, C++, SQL<br />
            • <span style={{ color: "var(--accent)" }}>Frameworks:</span> FastAPI, Next.js, React, Node.js<br />
            • <span style={{ color: "var(--accent)" }}>Hardware:</span> Arduino IoT, Sensors, ESP32
          </div>
        );
        break;

      case "projects":
        outNode = (
          <div>
            Featured AI Projects:<br />
            1. <span style={{ color: "var(--accent)" }}>DermAI</span> — Skin Disease Prediction (96.0% Accuracy)<br />
            2. <span style={{ color: "var(--accent)" }}>Pearl</span> — Women&apos;s Health &amp; PCOD Diet App<br />
            3. <span style={{ color: "var(--accent)" }}>Video Colorization</span> — GAN Grayscale Video Colorizer<br />
            4. <span style={{ color: "var(--accent)" }}>Pet Monitoring</span> — IoT Web Application
          </div>
        );
        break;

      case "education":
        outNode = (
          <div>
            Degree: B.Tech Artificial Intelligence &amp; Data Science<br />
            Institution: Dr. Mahalingam College of Engineering &amp; Technology<br />
            Score: <span style={{ color: "var(--accent)" }}>CGPA 8.05 / 10</span><br />
            Expected Graduation: Class of 2027
          </div>
        );
        break;

      case "contact":
        outNode = (
          <div>
            Contact Details:<br />
            Email: <a href={`mailto:${contactInfo.email}`} style={{ color: "var(--accent)" }}>{contactInfo.email}</a><br />
            Phone: <a href={`tel:${contactInfo.phone}`} style={{ color: "var(--accent)" }}>{contactInfo.phone}</a><br />
            Location: {contactInfo.location}
          </div>
        );
        break;

      case "whoami":
        outNode = (
          <div>
            Tamilarasan S — AI &amp; Data Science Undergraduate focused on building intelligent models, computer vision pipelines, and full-stack software for real-world impact.
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        onClose();
        setInputVal("");
        return;

      default:
        outNode = (
          <div style={{ color: "#EF4444" }}>
            Command not recognized: &apos;{cmd}&apos;. Type <span style={{ color: "#FFF" }}>&apos;help&apos;</span> for a list of commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: outNode }]);
    setInputVal("");
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(7,9,14,0.85)",
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}
      onClick={onClose}
    >
      <div
        className="glass grad-border"
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "480px",
          borderRadius: "20px",
          background: "#0D1117",
          padding: "0",
          boxShadow: "0 25px 60px rgba(0,0,0,0.9)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div
          style={{
            padding: "12px 18px",
            background: "#161B22",
            borderBottom: "1px solid #30363D",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TerminalIcon size={16} style={{ color: "var(--accent)" }} />
            <span style={{ fontSize: "13px", fontFamily: "var(--font-mono)", color: "var(--text)" }}>
              tamilarasan@portfolio-cli:~
            </span>
          </div>

          <button onClick={onClose} style={{ background: "none", border: "none", color: "#8B949E", cursor: "pointer" }}>
            <X size={16} />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            lineHeight: "1.6",
            color: "#C9D1D9"
          }}
        >
          {history.map((h, i) => (
            <div key={i} style={{ marginBottom: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent)" }}>
                <span>➜</span>
                <span style={{ color: "#58A6FF" }}>~</span>
                <span style={{ color: "#FFF" }}>{h.command}</span>
              </div>
              <div style={{ marginTop: "4px", paddingLeft: "18px" }}>{h.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Command Input Form */}
        <form
          onSubmit={handleCommandSubmit}
          style={{
            padding: "12px 18px",
            borderTop: "1px solid #30363D",
            background: "#161B22",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "14px" }}>➜</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type 'help'..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              color: "#FFF",
              fontFamily: "var(--font-mono)",
              fontSize: "14px"
            }}
          />
          <button type="submit" style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer" }}>
            <CornerDownLeft size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
