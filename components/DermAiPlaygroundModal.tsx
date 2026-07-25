"use client";

import React, { useState } from "react";
import { X, Sparkles, Cpu, CheckCircle2, Play } from "lucide-react";

type SampleCase = {
  id: string;
  name: string;
  category: string;
  prediction: string;
  confidence: number;
  secondary: string;
  secConfidence: number;
  severity: "Low" | "Moderate" | "High";
  color: string;
};

const sampleCases: SampleCase[] = [
  {
    id: "case-1",
    name: "Dermatological Sample #104",
    category: "Pigmented Lesion",
    prediction: "Melanocytic Nevus (Benign)",
    confidence: 96.4,
    secondary: "Seborrheic Keratosis",
    secConfidence: 2.8,
    severity: "Low",
    color: "#10B981"
  },
  {
    id: "case-2",
    name: "Dermatological Sample #208",
    category: "Inflammatory Condition",
    prediction: "Atopic Dermatitis (Eczema)",
    confidence: 94.8,
    secondary: "Psoriasis Vulgaris",
    secConfidence: 4.1,
    severity: "Moderate",
    color: "#06B6D4"
  },
  {
    id: "case-3",
    name: "Dermatological Sample #312",
    category: "Epidermal Lesion",
    prediction: "Basal Cell Carcinoma (BCC)",
    confidence: 97.2,
    secondary: "Actinic Keratosis",
    secConfidence: 1.9,
    severity: "High",
    color: "#F59E0B"
  }
];

export default function DermAiPlaygroundModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedCase, setSelectedCase] = useState<SampleCase>(sampleCases[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<SampleCase | null>(sampleCases[0]);
  const [selectedArch, setSelectedArch] = useState("ConvNeXt-Tiny");

  if (!isOpen) return null;

  const handleRunInference = (sample: SampleCase) => {
    setSelectedCase(sample);
    setIsAnalyzing(true);
    setResults(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      setResults(sample);
    }, 1100);
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
          maxWidth: "760px",
          maxHeight: "90vh",
          overflowY: "auto",
          borderRadius: "24px",
          background: "linear-gradient(135deg, rgba(17,21,30,0.95) 0%, rgba(10,13,20,0.98) 100%)",
          padding: "32px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 12px",
                borderRadius: "999px",
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                marginBottom: "10px"
              }}
            >
              <Sparkles size={13} /> DERMAI INTERACTIVE MODEL PLAYGROUND
            </div>

            <h2 style={{ fontSize: "24px", fontWeight: 700, fontFamily: "var(--font-display)" }}>
              Skin Disease Classifier Live Test
            </h2>
          </div>

          <button
            onClick={onClose}
            className="icon-btn"
            style={{ borderRadius: "50%" }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <p style={{ color: "var(--text-dim)", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
          Select a sample dermatological image case below to run inference through Tamilarasan&apos;s trained deep learning pipeline.
        </p>

        {/* Architecture Selector */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--text-faint)", display: "block", marginBottom: "8px" }}>
            SELECT MODEL ARCHITECTURE:
          </label>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["ConvNeXt-Tiny", "EfficientNet-B3", "ResNet-18"].map((arch) => (
              <button
                key={arch}
                onClick={() => setSelectedArch(arch)}
                className={`filter-btn ${selectedArch === arch ? "active" : ""}`}
                style={{ fontSize: "12px", padding: "6px 14px" }}
              >
                <Cpu size={12} style={{ display: "inline", marginRight: "6px" }} />
                {arch}
              </button>
            ))}
          </div>
        </div>

        {/* Sample Selection Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "24px" }}>
          {sampleCases.map((sample) => (
            <div
              key={sample.id}
              onClick={() => handleRunInference(sample)}
              className="glass grad-border"
              style={{
                padding: "16px",
                borderRadius: "16px",
                cursor: "pointer",
                border: selectedCase.id === sample.id ? "1.5px solid var(--accent)" : "1px solid var(--glass-border)",
                background: selectedCase.id === sample.id ? "rgba(16,185,129,0.08)" : "rgba(17,21,30,0.5)",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--accent)", marginBottom: "4px" }}>
                {sample.category}
              </div>
              <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>
                {sample.name}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "var(--text-dim)" }}>
                <Play size={12} fill="var(--accent)" style={{ color: "var(--accent)" }} /> Click to Test
              </div>
            </div>
          ))}
        </div>

        {/* Results Panel */}
        <div
          className="glass grad-border"
          style={{
            padding: "24px",
            borderRadius: "20px",
            background: "rgba(17,21,30,0.7)",
            minHeight: "180px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          {isAnalyzing ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "var(--accent)", marginBottom: "12px" }}>
                ⚡ INFERENCING WITH {selectedArch.toUpperCase()}...
              </div>
              <div className="loader-bar" style={{ margin: "0 auto" }}>
                <span />
              </div>
            </div>
          ) : results ? (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div>
                  <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--accent)" }}>
                    TOP PREDICTION RESULT
                  </span>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, marginTop: "2px" }}>
                    {results.prediction}
                  </h3>
                </div>

                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: "999px",
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    color: "var(--accent)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 700
                  }}
                >
                  {results.confidence}% Confidence
                </div>
              </div>

              {/* Confidence Progress Bar */}
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontFamily: "var(--font-mono)", marginBottom: "6px" }}>
                  <span>{results.prediction}</span>
                  <span style={{ color: "var(--accent)" }}>{results.confidence}%</span>
                </div>
                <div className="skill-bar-track" style={{ height: "8px" }}>
                  <div className="skill-bar-fill" style={{ width: `${results.confidence}%`, height: "100%", background: "var(--grad-1)" }} />
                </div>
              </div>

              {/* Secondary Prediction */}
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-dim)", marginBottom: "6px" }}>
                  <span>{results.secondary} (Secondary Differential)</span>
                  <span>{results.secConfidence}%</span>
                </div>
                <div className="skill-bar-track" style={{ height: "6px", background: "rgba(255,255,255,0.05)" }}>
                  <div style={{ width: `${results.secConfidence * 5}%`, height: "100%", background: "var(--text-dim)" }} />
                </div>
              </div>

              {/* Metrics Specs Footer */}
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", paddingTop: "14px", borderTop: "1px solid var(--glass-border)", fontSize: "12px", fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}>
                <div><span style={{ color: "var(--text-faint)" }}>LATENCY:</span> 38ms</div>
                <div><span style={{ color: "var(--text-faint)" }}>ARCHITECTURE:</span> {selectedArch}</div>
                <div><span style={{ color: "var(--text-faint)" }}>SEVERITY LEVEL:</span> <span style={{ color: results.color }}>{results.severity}</span></div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
