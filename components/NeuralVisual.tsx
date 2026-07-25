"use client";

import { useEffect, useRef } from "react";

/**
 * The page's signature element: a slowly-breathing constellation of nodes
 * and connecting edges, evoking a neural network / attention graph without
 * being a literal or gimmicky "AI brain" cliché.
 */
export default function NeuralVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    const NODE_COUNT = 26;
    type Node = { x: number; y: number; vx: number; vy: number; r: number; layer: number };

    const layers = 3;
    const nodes: Node[] = Array.from({ length: NODE_COUNT }).map((_, i) => {
      const layer = i % layers;
      return {
        x: (layer / (layers - 1)) * width * 0.8 + width * 0.1 + (Math.random() - 0.5) * 40,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 2 + 1.5,
        layer
      };
    });

    let raf: number;
    let t = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // edges between nearby / adjacent-layer nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.abs(a.layer - b.layer) === 1 ? 220 : 90;
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(79, 209, 197, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.y < -10) n.y = height + 10;
          if (n.y > height + 10) n.y = -10;
        }
        const pulse = prefersReducedMotion
          ? 1
          : 0.75 + Math.sin(t * 0.02 + n.x * 0.01) * 0.25;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(79, 209, 197, 0.85)";
        ctx.shadowColor = "rgba(79, 209, 197, 0.6)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      t += 1;
      if (!prefersReducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    }
    draw();

    function handleResize() {
      resize();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[320px]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
