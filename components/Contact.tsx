"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { contactInfo, socials } from "@/lib/data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setStatusMsg("Opening your email client...");
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="eyebrow">GET IN TOUCH</div>
        <h2 className="section-title">Let&apos;s Connect</h2>
        <p className="section-sub">
          Have a project, research collaboration, or opportunity in mind? Feel free to reach out!
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="item">
              <div className="ico">
                <Mail size={18} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <h4>EMAIL</h4>
                <a href={`mailto:${contactInfo.email}`} data-cursor="hover">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="item">
              <div className="ico">
                <Phone size={18} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <h4>PHONE</h4>
                <a href={`tel:${contactInfo.phone}`} data-cursor="hover">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="item">
              <div className="ico">
                <MapPin size={18} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <h4>LOCATION</h4>
                <p>{contactInfo.location}</p>
              </div>
            </div>

            <div className="social-row">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                data-cursor="hover"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                data-cursor="hover"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <form className="glass grad-border" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="cf-name">YOUR NAME</label>
                <input
                  id="cf-name"
                  type="text"
                  placeholder="e.g. John Doe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="cf-email">YOUR EMAIL</label>
                <input
                  id="cf-email"
                  type="email"
                  placeholder="e.g. john@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="cf-msg">YOUR MESSAGE</label>
                <textarea
                  id="cf-msg"
                  rows={4}
                  placeholder="Share details about your project or inquiry..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary" data-cursor="hover">
                Send Message <Send size={16} />
              </button>

              {statusMsg && <div className="form-msg">{statusMsg}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
