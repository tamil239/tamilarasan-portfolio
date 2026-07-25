"use client";

import React from "react";
import { MapPin, GraduationCap, Cpu, Sparkles, Code2, Brain } from "lucide-react";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="eyebrow reveal">
          SYSTEM ARCHITECTURE AND BIOGRAPHY
        </div>
        <h2 className="section-title reveal reveal-delay-1">Engineering Philosophy</h2>
        <p className="section-sub reveal reveal-delay-2">
          Bridging machine learning models, computer vision pipelines, and full-stack software for real-world impact.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "24px",
            marginTop: "32px"
          }}
        >
          <div
            className="glass grad-border reveal reveal-delay-1"
            style={{
              gridColumn: "span 7",
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  color: "var(--accent)",
                  marginBottom: "16px"
                }}
              >
                <Brain size={18} /> BACKGROUND AND CORE FOCUS
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  fontFamily: "var(--font-display)",
                  marginBottom: "16px"
                }}
              >
                Building Intelligent Solutions for Healthcare, Agriculture and Automation
              </h3>

              <p style={{ color: "var(--text-dim)", lineHeight: "1.8", fontSize: "15px", marginBottom: "14px" }}>
                I am Tamilarasan S, an Artificial Intelligence and Data Science undergraduate at Dr. Mahalingam College of Engineering and Technology.
              </p>

              <p style={{ color: "var(--text-dim)", lineHeight: "1.8", fontSize: "15px" }}>
                My expertise centers on deep learning architectures (ConvNeXt, ResNet, Attention U-Nets), computer vision pipelines with OpenCV and PyTorch, FastAPI web services, and IoT hardware integration with Arduino.
              </p>
            </div>

            <div
              style={{
                marginTop: "24px",
                paddingTop: "20px",
                borderTop: "1px solid var(--glass-border)",
                display: "flex",
                gap: "16px",
                flexWrap: "wrap"
              }}
            >
              <div style={{ fontSize: "13px", fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}>
                <span style={{ color: "var(--accent)" }}>✓</span> Clinical AI Assistive Models
              </div>
              <div style={{ fontSize: "13px", fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}>
                <span style={{ color: "var(--accent)" }}>✓</span> Real-Time IoT Monitoring
              </div>
              <div style={{ fontSize: "13px", fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}>
                <span style={{ color: "var(--accent)" }}>✓</span> GAN Video Colorization
              </div>
            </div>
          </div>

          <div
            className="glass grad-border reveal reveal-delay-2"
            style={{
              gridColumn: "span 5",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-mono)",
                color: "var(--accent)",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}
            >
              <Code2 size={16} /> QUICK SPECIFICATIONS
            </div>

            <div className="quick-fact glass" data-cursor="hover">
              <div className="qf-ico">
                <MapPin size={16} />
              </div>
              <div>
                <div style={{ fontSize: "10px", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
                  LOCATION
                </div>
                <div style={{ fontSize: "13.5px", fontWeight: 600 }}>Sivakasi, Tamil Nadu, India</div>
              </div>
            </div>

            <div className="quick-fact glass" data-cursor="hover">
              <div className="qf-ico">
                <GraduationCap size={16} />
              </div>
              <div>
                <div style={{ fontSize: "10px", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
                  INSTITUTION
                </div>
                <div style={{ fontSize: "13.5px", fontWeight: 600 }}>Dr. MCET (CGPA 8.05 / 10)</div>
              </div>
            </div>

            <div className="quick-fact glass" data-cursor="hover">
              <div className="qf-ico">
                <Cpu size={16} />
              </div>
              <div>
                <div style={{ fontSize: "10px", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
                  SPECIALIZATION
                </div>
                <div style={{ fontSize: "13.5px", fontWeight: 600 }}>B.Tech AI and Data Science</div>
              </div>
            </div>

            <div className="quick-fact glass" data-cursor="hover">
              <div className="qf-ico">
                <Sparkles size={16} />
              </div>
              <div>
                <div style={{ fontSize: "10px", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
                  EXPECTED GRADUATION
                </div>
                <div style={{ fontSize: "13.5px", fontWeight: 600 }}>Class of 2027</div>
              </div>
            </div>
          </div>

          <div
            className="glass grad-border reveal reveal-delay-3"
            style={{
              gridColumn: "span 12",
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px"
            }}
          >
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent)" }}>
              TECH DOMAINS
            </div>

            <div className="chip-row">
              <span className="chip">Machine Learning</span>
              <span className="chip">Deep Learning</span>
              <span className="chip">Computer Vision</span>
              <span className="chip">PyTorch</span>
              <span className="chip">FastAPI</span>
              <span className="chip">OpenCV</span>
              <span className="chip">IoT and Arduino</span>
              <span className="chip">Data Analytics</span>
              <span className="chip">Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
