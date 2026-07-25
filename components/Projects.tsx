"use client";

import { useState, useMemo, useRef } from "react";
import { projects } from "@/lib/data";
import { Search, ExternalLink, Github, Sparkles, Award, Eye } from "lucide-react";

const projectCategories: Record<string, string> = {
  "DermAI — Skin Disease Prediction Model": "ai vision",
  "Pearl — Women's Health Tracking & PCOD Diet Guide App": "ai fullstack",
  "Semantic-Aware Grayscale Video Colorization": "ai vision",
  "Pet Monitoring Web Application": "iot fullstack"
};

const projectGradients: Record<string, string> = {
  "DermAI — Skin Disease Prediction Model":
    "linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)",
  "Pearl — Women's Health Tracking & PCOD Diet Guide App":
    "linear-gradient(135deg, #06B6D4 0%, #0891B2 50%, #0E7490 100%)",
  "Semantic-Aware Grayscale Video Colorization":
    "linear-gradient(135deg, #6366F1 0%, #4F46E5 50%, #4338CA 100%)",
  "Pet Monitoring Web Application":
    "linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)"
};

const projectCodeSnippets: Record<string, { code: string; arch: string }> = {
  "DermAI — Skin Disease Prediction Model": {
    arch: "Input RGB Image (224x224) ➔ ConvNeXt Backbone ➔ Attention Feature Maps ➔ Softmax Classifier (96.0% Accuracy)",
    code: `import torch
import torch.nn as nn
from timm import create_model

class DermAIClassifier(nn.Module):
    def __init__(self, num_classes=7):
        super().__init__()
        self.backbone = create_model('convnext_tiny', pretrained=True)
        self.head = nn.Sequential(
            nn.Linear(self.backbone.head.fc.in_features, 512),
            nn.GELU(),
            nn.Dropout(0.3),
            nn.Linear(512, num_classes)
        )
    
    def forward(self, x):
        features = self.backbone.forward_features(x)
        return self.head(self.backbone.forward_head(features))`
  },
  "Pearl — Women's Health Tracking & PCOD Diet Guide App": {
    arch: "User Health Metrics ➔ FastAPI Microservice ➔ PCOD Diet Rule Engine ➔ Mobile UI",
    code: `@app.post("/api/v1/recommend-diet")
async def recommend_pcod_diet(metrics: HealthMetrics):
    # Rule engine matching glycemic load & hormone indicators
    diet_plan = calculate_macronutrients(metrics)
    return {"status": "success", "diet_plan": diet_plan}`
  },
  "Semantic-Aware Grayscale Video Colorization": {
    arch: "Grayscale Frame Sequence ➔ U-Net Generator + GAN Discriminator ➔ Temporal Color Consistency Filter",
    code: `class ColorizationGenerator(nn.Module):
    def __init__(self):
        super().__init__()
        self.encoder = ResNetBackbone()
        self.decoder = UpsampleDecoderWithSkipConnections()
        
    def forward(self, l_channel):
        ab_channels = self.decoder(self.encoder(l_channel))
        return torch.cat([l_channel, ab_channels], dim=1)`
  },
  "Pet Monitoring Web Application": {
    arch: "Arduino Hardware Sensors ➔ Serial/ESP32 Gateway ➔ Node.js Server ➔ Real-Time Web Dashboard",
    code: `void setup() {
    Serial.begin(115200);
    initSensors();
}
void loop() {
    float temp = readTemperature();
    float activity = readIMU();
    sendTelemetry(temp, activity);
    delay(1000);
}`
  }
};

export default function Projects({
  onOpenDermAi,
  onSelectProject
}: {
  onOpenDermAi?: () => void;
  onSelectProject?: (proj: any) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const featuredProject = projects[0]; // DermAI
  const otherProjects = projects.slice(1);

  const filteredOtherProjects = useMemo(() => {
    return otherProjects.filter((project) => {
      const category = projectCategories[project.name] || "ai";
      const matchesFilter =
        activeFilter === "all" || category.includes(activeFilter);

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        project.name.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tech.some((t) => t.toLowerCase().includes(q));

      return matchesFilter && matchesSearch;
    });
  }, [searchQuery, activeFilter, otherProjects]);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = "";
  };

  const openInspector = (proj: any) => {
    if (onSelectProject) {
      const extra = projectCodeSnippets[proj.name] || {
        arch: "Input Data Pipeline ➔ Deep Learning Backbone ➔ Inference Output",
        code: `# ${proj.name}\nimport torch\n# Model code snippet`
      };
      onSelectProject({
        ...proj,
        codeSnippet: extra.code,
        architecture: extra.arch
      });
    }
  };

  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow reveal">FEATURED LABS</div>
        <h2 className="section-title reveal reveal-delay-1">AI Models &amp; Engineering Projects</h2>
        <p className="section-sub reveal reveal-delay-2">
          A showcase of deep learning platforms, computer vision applications, and IoT prototypes.
        </p>

        <div
          className="glass grad-border featured-proj-banner reveal reveal-delay-1"
          style={{
            marginBottom: "40px",
            padding: "36px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(17,21,30,0.85) 100%)",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "28px",
            alignItems: "center"
          }}
        >
          <div className="featured-proj-7" style={{ gridColumn: "span 7" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.3)",
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
                fontSize: "11.5px",
                marginBottom: "16px"
              }}
            >
              <Sparkles size={14} /> FEATURED FLAGSHIP PROJECT
            </div>

            <h3 style={{ fontSize: "26px", fontWeight: "700", fontFamily: "var(--font-display)", marginBottom: "12px" }}>
              {featuredProject.name}
            </h3>

            <p style={{ color: "var(--text-dim)", fontSize: "15px", lineHeight: "1.7", marginBottom: "18px" }}>
              {featuredProject.description}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
              {featuredProject.highlights.map((h, idx) => (
                <div key={idx} style={{ fontSize: "13.5px", color: "var(--text)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "var(--accent)" }}>✓</span> {h}
                </div>
              ))}
            </div>

            <div className="proj-tech" style={{ marginBottom: "24px" }}>
              {featuredProject.tech.map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              {onOpenDermAi && (
                <button
                  onClick={onOpenDermAi}
                  className="btn btn-primary"
                  data-cursor="hover"
                >
                  <Sparkles size={16} /> Test Live AI Model
                </button>
              )}

              <button
                onClick={() => openInspector(featuredProject)}
                className="btn btn-ghost"
                data-cursor="hover"
              >
                <Eye size={16} /> Inspect Code &amp; Architecture
              </button>
            </div>
          </div>

          <div
            className="featured-proj-5"
            style={{
              gridColumn: "span 5",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "28px",
              borderRadius: "20px",
              background: "rgba(17,21,30,0.6)",
              border: "1px solid var(--glass-border)",
              textAlign: "center"
            }}
          >
            <Award size={48} style={{ color: "var(--accent)", marginBottom: "12px" }} />
            <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 800, color: "var(--accent)" }}>
              96.0%
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-dim)", marginTop: "4px" }}>
              SPECIALIST PRECISION ACCURACY
            </div>
            <div style={{ fontSize: "12px", color: "var(--text-faint)", marginTop: "12px" }}>
              ConvNeXt-Tiny · EfficientNet-B3 · ResNet-18
            </div>
          </div>
        </div>

        <div className="proj-toolbar reveal reveal-delay-2">
          <div className="proj-search glass">
            <Search size={16} style={{ color: "var(--text-dim)" }} />
            <input
              type="text"
              placeholder="Search other projects or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-row">
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Labs
            </button>
            <button
              className={`filter-btn ${activeFilter === "ai" ? "active" : ""}`}
              onClick={() => setActiveFilter("ai")}
            >
              AI / ML
            </button>
            <button
              className={`filter-btn ${activeFilter === "vision" ? "active" : ""}`}
              onClick={() => setActiveFilter("vision")}
            >
              Computer Vision
            </button>
            <button
              className={`filter-btn ${activeFilter === "fullstack" ? "active" : ""}`}
              onClick={() => setActiveFilter("fullstack")}
            >
              Mobile / Full Stack
            </button>
            <button
              className={`filter-btn ${activeFilter === "iot" ? "active" : ""}`}
              onClick={() => setActiveFilter("iot")}
            >
              IoT
            </button>
          </div>
        </div>

        {filteredOtherProjects.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px 0",
              color: "var(--text-faint)",
              fontFamily: "var(--font-mono)"
            }}
          >
            No matching projects found.
          </div>
        ) : (
          <div className="projects-grid">
            {filteredOtherProjects.map((project, idx) => {
              const bgGradient =
                projectGradients[project.name] ||
                "linear-gradient(135deg, #10B981, #059669)";

              return (
                <div
                  key={idx}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className={`proj-card glass grad-border reveal reveal-delay-${(idx % 3) + 1}`}
                  onMouseMove={(e) => handleMouseMove(e, idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                >
                  <div className="proj-banner" style={{ background: bgGradient }}>
                    <div className="mesh" />
                    <span className="tag-float">
                      {project.tech[0] || "System"}
                    </span>
                  </div>

                  <div className="proj-body">
                    <h3>{project.name}</h3>

                    <div className="proj-block">
                      <div className="lbl">SUMMARY</div>
                      <p>{project.description}</p>
                    </div>

                    <div className="proj-block">
                      <div className="lbl">HIGHLIGHTS</div>
                      <div className="proj-features">
                        {project.highlights.map((h, hIdx) => (
                          <span key={hIdx}>✓ {h}</span>
                        ))}
                      </div>
                    </div>

                    <div className="proj-tech">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx}>{t}</span>
                      ))}
                    </div>

                    <div className="proj-links">
                      <button
                        onClick={() => openInspector(project)}
                        className="btn-ghost"
                        data-cursor="hover"
                        style={{ flex: 1, textAlign: "center", justifyContent: "center" }}
                      >
                        <Eye size={14} style={{ display: "inline", marginRight: "6px" }} />
                        Inspect Code
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="primary"
                          data-cursor="hover"
                          style={{ flex: 1, textAlign: "center", justifyContent: "center" }}
                        >
                          <Github size={14} style={{ display: "inline", marginRight: "6px" }} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
