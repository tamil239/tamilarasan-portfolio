"use client";

import { useState, useMemo, useRef } from "react";
import { projects } from "@/lib/data";
import { Search, ExternalLink, Github } from "lucide-react";

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
    "linear-gradient(135deg, #EC4899 0%, #D97706 50%, #B45309 100%)",
  "Semantic-Aware Grayscale Video Colorization":
    "linear-gradient(135deg, #6366F1 0%, #4F46E5 50%, #4338CA 100%)",
  "Pet Monitoring Web Application":
    "linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)"
};

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
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
  }, [searchQuery, activeFilter]);

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

  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">PORTFOLIO</div>
        <h2 className="section-title">Featured Work</h2>
        <p className="section-sub">
          AI models, computer vision applications, and full-stack IoT platforms built for real-world impact.
        </p>

        <div className="proj-toolbar">
          <div className="proj-search glass">
            <Search size={16} style={{ color: "var(--text-dim)" }} />
            <input
              type="text"
              placeholder="Search projects or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-row">
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Projects
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
              Full Stack
            </button>
            <button
              className={`filter-btn ${activeFilter === "iot" ? "active" : ""}`}
              onClick={() => setActiveFilter("iot")}
            >
              IoT
            </button>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 0",
              color: "var(--text-faint)",
              fontFamily: "var(--font-mono)"
            }}
          >
            No projects matching your search.
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project, idx) => {
              const bgGradient =
                projectGradients[project.name] ||
                "linear-gradient(135deg, #10B981, #059669)";

              return (
                <div
                  key={idx}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className="proj-card glass grad-border"
                  onMouseMove={(e) => handleMouseMove(e, idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                >
                  <div className="proj-banner" style={{ background: bgGradient }}>
                    <div className="mesh" />
                    <span className="tag-float">
                      {project.tech[0] || "AI System"}
                    </span>
                  </div>

                  <div className="proj-body">
                    <h3>{project.name}</h3>

                    <div className="proj-block">
                      <div className="lbl">OVERVIEW</div>
                      <p>{project.description}</p>
                    </div>

                    <div className="proj-block">
                      <div className="lbl">KEY HIGHLIGHTS</div>
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
                      <a
                        href={project.githubUrl || "https://github.com/tamil239"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        data-cursor="hover"
                      >
                        <Github size={14} style={{ display: "inline", marginRight: "6px" }} />
                        GitHub
                      </a>
                      <a
                        href={project.liveUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary"
                        data-cursor="hover"
                      >
                        Live Demo
                        <ExternalLink size={14} style={{ display: "inline", marginLeft: "6px" }} />
                      </a>
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
