"use client";

import { MapPin, GraduationCap, Cpu, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-layout">
          <div className="about-left">
            <div className="eyebrow">Biography</div>
            <h2 className="section-title">About Me</h2>
            <div className="about-accent-line" />
            <p className="about-tagline">
              Blending machine learning, computer vision, and IoT into functional
              solutions for real-world impact.
            </p>

            <div className="quick-facts" style={{ marginTop: "28px" }}>
              <div className="quick-fact glass" data-cursor="hover">
                <div className="qf-ico">
                  <MapPin size={17} />
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
                    LOCATION
                  </div>
                  <div>Sivakasi, Tamil Nadu, India</div>
                </div>
              </div>

              <div className="quick-fact glass" data-cursor="hover">
                <div className="qf-ico">
                  <GraduationCap size={17} />
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
                    COLLEGE
                  </div>
                  <div>Dr. MCET (CGPA 8.05)</div>
                </div>
              </div>

              <div className="quick-fact glass" data-cursor="hover">
                <div className="qf-ico">
                  <Cpu size={17} />
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
                    FOCUS
                  </div>
                  <div>AI, Machine Learning &amp; Computer Vision</div>
                </div>
              </div>

              <div className="quick-fact glass" data-cursor="hover">
                <div className="qf-ico">
                  <Sparkles size={17} />
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
                    STATUS
                  </div>
                  <div>Final Year B.Tech Student</div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-card glass grad-border">
              <div className="about-card-label">PASSION &amp; EXPERTISE</div>
              <p>
                I&apos;m <strong>Tamilarasan S</strong>, an Artificial Intelligence &amp;
                Data Science undergraduate at Dr. Mahalingam College of Engineering and
                Technology. I specialize in developing practical machine learning
                models, computer vision pipelines, and full-stack AI integrations.
              </p>

              <p>
                My technical journey spans deep learning architectures such as ConvNeXt,
                ResNet, and Attention-Guided U-Nets, paired with framework experience in
                PyTorch, OpenCV, and FastAPI. I am also passionate about IoT and hardware
                prototyping with Arduino.
              </p>

              <p>
                Whether it&apos;s building clinical-assistive AI applications like
                DermAI (achieving 96.0% precision), women&apos;s health platforms like Pearl,
                or IoT monitoring applications, I thrive at the intersection of data science
                and user-centric software development.
              </p>

              <div className="about-card-label" style={{ marginTop: "28px" }}>
                CORE INTERESTS
              </div>
              <div className="chip-row">
                <span className="chip">Machine Learning</span>
                <span className="chip">Deep Learning</span>
                <span className="chip">Computer Vision</span>
                <span className="chip">FastAPI</span>
                <span className="chip">PyTorch</span>
                <span className="chip">IoT &amp; Arduino</span>
                <span className="chip">Data Analytics</span>
                <span className="chip">Full Stack AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
