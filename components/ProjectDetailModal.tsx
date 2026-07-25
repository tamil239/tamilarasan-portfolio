"use client";

import React, { useState } from "react";
import { X, Github, ExternalLink, Code2, Cpu } from "lucide-react";

type ProjectDetail = {
  name: string;
  category: string;
  description: string;
  architecture: string;
  highlights: string[];
  tech: string[];
  codeSnippet: string;
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectDetailModal({
  project,
  onClose
}: {
  project: ProjectDetail | null;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"overview" | "code" | "arch">("overview");

  if (!project) return null;

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
          maxWidth: "760px",
          maxHeight: "90vh",
          overflowY: "auto",
          borderRadius: "24px",
          background: "linear-gradient(135deg, rgba(17,21,30,0.96) 0%, rgba(10,13,20,0.98) 100%)",
          padding: "32px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
          <div>
            <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--accent)" }}>
              PROJECT DEEP-DIVE INSPECTOR
            </span>
            <h2 style={{ fontSize: "24px", fontWeight: 700, fontFamily: "var(--font-display)", marginTop: "4px" }}>
              {project.name}
            </h2>
          </div>

          <button onClick={onClose} className="icon-btn" style={{ borderRadius: "50%" }} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Tabs */}
        <div className="filter-row" style={{ marginBottom: "20px" }}>
          <button
            className={`filter-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`filter-btn ${activeTab === "code" ? "active" : ""}`}
            onClick={() => setActiveTab("code")}
          >
            <Code2 size={13} style={{ display: "inline", marginRight: "4px" }} /> Code Snippet
          </button>
          <button
            className={`filter-btn ${activeTab === "arch" ? "active" : ""}`}
            onClick={() => setActiveTab("arch")}
          >
            <Cpu size={13} style={{ display: "inline", marginRight: "4px" }} /> Pipeline Architecture
          </button>
        </div>

        {/* Content Body */}
        <div className="glass grad-border" style={{ padding: "24px", borderRadius: "18px", background: "rgba(17,21,30,0.6)" }}>
          {activeTab === "overview" && (
            <div>
              <p style={{ fontSize: "14.5px", color: "var(--text-dim)", lineHeight: "1.7", marginBottom: "18px" }}>
                {project.description}
              </p>

              <h4 style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--accent)", marginBottom: "8px" }}>
                KEY HIGHLIGHTS &amp; MILESTONES:
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                {project.highlights.map((h, i) => (
                  <div key={i} style={{ fontSize: "13.5px", color: "var(--text)", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--accent)" }}>✓</span> {h}
                  </div>
                ))}
              </div>

              <div className="proj-tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div>
              <div style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--accent)", marginBottom: "8px" }}>
                {"// SAMPLE IMPLEMENTATION SNIPPET (PyTorch / Python)"}
              </div>
              <pre
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  background: "#0D1117",
                  border: "1px solid #30363D",
                  color: "#C9D1D9",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  overflowX: "auto",
                  lineHeight: "1.6"
                }}
              >
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}

          {activeTab === "arch" && (
            <div>
              <div style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--accent)", marginBottom: "8px" }}>
                {"// PIPELINE ARCHITECTURE FLOW"}
              </div>
              <p style={{ fontSize: "14px", color: "var(--text-dim)", lineHeight: "1.7", marginBottom: "16px" }}>
                {project.architecture}
              </p>
            </div>
          )}
        </div>

        {/* Links Footer */}
        <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
          <a
            href={project.githubUrl || "https://github.com/tamil239"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: "13px" }}
          >
            <Github size={15} /> Source Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ fontSize: "13px" }}
            >
              Live Demo <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
