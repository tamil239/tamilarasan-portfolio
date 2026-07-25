"use client";

import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const PARTICLE_COUNT = Math.min(80, Math.floor((width * height) / 20000));

    type Particle = {
      x: number;
      y: number;
      ox: number; // original X
      oy: number; // original Y
      r: number;
      vx: number;
      vy: number;
      o: number;
    };

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }).map(
      () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          ox: x,
          oy: y,
          r: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          o: Math.random() * 0.3 + 0.1
        };
      }
    );

    let raf: number;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      for (const p of particles) {
        if (!prefersReducedMotion) {
          // Normal ambient movement
          p.x += p.vx;
          p.y += p.vy;

          // Wrap boundaries
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Mouse interaction (repel effect)
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelDist = 120;

          if (dist < repelDist) {
            const force = (repelDist - dist) / repelDist;
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * force * 2;
            p.y += Math.sin(angle) * force * 2;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(198, 241, 61, ${p.o})`; // Accent color particles
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-black" />
      {/* Drifting subtle ambient blur blobs */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[140px] pointer-events-none transition-transform duration-1000"
        style={{
          background:
            "radial-gradient(circle, rgba(198,241,61,0.4) 0%, rgba(198,241,61,0) 70%)"
        }}
      />
      <div
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[150px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(198,241,61,0.3) 0%, rgba(198,241,61,0) 70%)"
        }}
      />
      <div
        className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full opacity-[0.05] blur-[130px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
