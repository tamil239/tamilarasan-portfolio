"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate characters of the name
      tl.fromTo(
        ".hero-char",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.05 }
      )
        .fromTo(
          ".hero-portrait",
          { opacity: 0, scale: 0.95, x: 50 },
          { opacity: 1, scale: 1, x: 0, duration: 1.5, ease: "power2.out" },
          "-=0.7"
        )
        .fromTo(
          ".hero-fade",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
          "-=1.1"
        );

      // Scroll line infinite animation
      gsap.to(".hero-scroll-line", {
        y: 40,
        repeat: -1,
        duration: 1.5,
        ease: "power2.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const name = "Tamilarasan S";

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 bg-black pt-28 pb-16 md:py-0"
      aria-label="Introduction"
    >
      <div className="container-content grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10 w-full">
        {/* Left Column: Name & Tagline */}
        <div className="text-left flex flex-col justify-center">
          <h1 className="hero-name font-display text-[clamp(40px,5.5vw,90px)] font-bold leading-[0.95] tracking-[0.01em] text-white will-change-transform">
            <span className="inline-block overflow-hidden">
              {name.split("").map((char, index) => (
                <span
                  key={index}
                  className="hero-char inline-block"
                  style={{ minWidth: char === " " ? "1rem" : "auto" }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>
          <p className="hero-fade font-body mt-8 max-w-[600px] text-[clamp(16px,1.6vw,20px)] leading-relaxed tracking-tight text-white/80">
            AI & Data Science undergraduate building intelligent solutions for healthcare, agriculture, and automation through machine learning and computer vision.
          </p>
        </div>

        {/* Right Column: Color Cutout Portrait */}
        <div className="hero-portrait w-full max-w-[380px] md:max-w-none mx-auto flex items-center justify-center">
          <div className="relative w-full aspect-[4/5] md:h-[65vh] md:aspect-auto md:w-full min-h-[300px] sm:min-h-[380px]">
            <Image
              src="/images/tamilarasan_color.png"
              alt="Tamilarasan S Portrait"
              fill
              priority
              className="object-contain md:object-right-bottom"
            />
          </div>
        </div>
      </div>
      
      <div className="hero-fade absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="font-body text-[10px] uppercase tracking-[0.35em] text-white/40">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-white/15">
          <span className="hero-scroll-line absolute inset-x-0 top-0 block h-4 w-px bg-accent"></span>
        </span>
      </div>
    </section>
  );
}
