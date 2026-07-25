"use client";

import React, { useState } from "react";
import { X, Download, Copy, FileText, CheckCircle2, UserCheck } from "lucide-react";
import { useToast } from "@/components/Toast";
import { contactInfo } from "@/lib/data";

export default function ResumeViewerModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<"overview" | "projects" | "education">("overview");

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    showToast(`Copied ${contactInfo.email} to clipboard!`);
  };

  const handleDownloadVCard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Tamilarasan S
TITLE:AI & Data Science Engineer
EMAIL:${contactInfo.email}
TEL:${contactInfo.phone}
ADR:;;Sivakasi;Tamil Nadu;;India
URL:https://github.com/tamil239
END:VCARD`;

    const blob = new Blob([vcardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Tamilarasan_S_Contact.vcf";
    a.click();
    URL.revokeObjectURL(url);
    showToast("Downloaded Tamilarasan's contact card (vCard)!");
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
          maxWidth: "800px",
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, fontFamily: "var(--font-display)" }}>
              Tamilarasan S — Curriculum Vitae
            </h2>
            <p style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "12.5px", marginTop: "2px" }}>
              B.Tech Artificial Intelligence &amp; Data Science (Class of 2027)
            </p>
          </div>

          <button onClick={onClose} className="icon-btn" style={{ borderRadius: "50%" }} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Action Toolbar */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "24px" }}>
          <a
            href="/resume"
            target="_blank"
            className="btn btn-primary"
            style={{ fontSize: "13px", padding: "8px 18px" }}
          >
            <Download size={15} /> Download PDF Resume
          </a>

          <button
            onClick={handleDownloadVCard}
            className="btn btn-ghost"
            style={{ fontSize: "13px", padding: "8px 18px" }}
          >
            <UserCheck size={15} /> Save Contact Card (.vcf)
          </button>

          <button
            onClick={handleCopyEmail}
            className="btn btn-ghost"
            style={{ fontSize: "13px", padding: "8px 18px" }}
          >
            <Copy size={15} /> Copy Email
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
            className={`filter-btn ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Key Projects
          </button>
          <button
            className={`filter-btn ${activeTab === "education" ? "active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Academics
          </button>
        </div>

        {/* Tab Content */}
        <div className="glass grad-border" style={{ padding: "24px", borderRadius: "18px", background: "rgba(17,21,30,0.6)" }}>
          {activeTab === "overview" && (
            <div style={{ fontSize: "14px", lineHeight: "1.7", color: "var(--text-dim)" }}>
              <h3 style={{ color: "var(--text)", fontSize: "16px", marginBottom: "10px" }}>Executive Summary</h3>
              <p style={{ marginBottom: "16px" }}>
                Artificial Intelligence &amp; Data Science undergraduate student with expertise in computer vision, deep learning architecture development (ConvNeXt, ResNet, U-Nets), web microservices (FastAPI), and IoT hardware integrations (Arduino).
              </p>

              <h4 style={{ color: "var(--accent)", fontSize: "13px", fontFamily: "var(--font-mono)", marginBottom: "8px" }}>
                CORE COMPETENCIES:
              </h4>
              <div className="chip-row">
                <span className="chip">PyTorch</span>
                <span className="chip">FastAPI</span>
                <span className="chip">OpenCV</span>
                <span className="chip">Deep Learning</span>
                <span className="chip">Computer Vision</span>
                <span className="chip">IoT &amp; Arduino</span>
                <span className="chip">Data Science</span>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <h4 style={{ color: "var(--text)", fontSize: "15px", fontWeight: 700 }}>
                  DermAI — Skin Disease Classifier (96.0% Accuracy)
                </h4>
                <p style={{ fontSize: "13.5px", color: "var(--text-dim)" }}>
                  Deep learning pipeline leveraging ConvNeXt-Tiny, EfficientNet-B3, and ResNet-18 for clinical skin disease prediction.
                </p>
              </div>

              <div>
                <h4 style={{ color: "var(--text)", fontSize: "15px", fontWeight: 700 }}>
                  Pearl — Women&apos;s Health &amp; PCOD Diet Tracker
                </h4>
                <p style={{ fontSize: "13.5px", color: "var(--text-dim)" }}>
                  Mobile application with personalized AI diet recommendations and wellness tracking.
                </p>
              </div>

              <div>
                <h4 style={{ color: "var(--text)", fontSize: "15px", fontWeight: 700 }}>
                  Semantic Grayscale Video Colorization
                </h4>
                <p style={{ fontSize: "13.5px", color: "var(--text-dim)" }}>
                  GAN framework producing temporal consistency for video colorization.
                </p>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div>
              <div style={{ marginBottom: "14px" }}>
                <h4 style={{ fontSize: "15px", fontWeight: 700 }}>B.Tech Artificial Intelligence &amp; Data Science</h4>
                <p style={{ color: "var(--accent)", fontSize: "13px", fontFamily: "var(--font-mono)" }}>
                  Dr. Mahalingam College of Engineering and Technology (Anna University)
                </p>
                <div style={{ fontSize: "13px", color: "var(--text-dim)", marginTop: "4px" }}>
                  CGPA: <strong>8.05 / 10</strong> | Class of 2027
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
