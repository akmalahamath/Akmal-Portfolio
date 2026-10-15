"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  // Mouse move listener for subtle ambient light
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Canvas particle and neural network visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isReducedMotion) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Create sparse, elegant particles
    const particleCount = Math.min(Math.floor((width * height) / 28000), 45);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    const maxDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Update positions
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap boundaries
        if (p1.x < 0) p1.x = width;
        else if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        else if (p1.y > height) p1.y = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p1.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(0, 240, 255, 0.4)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isReducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#020B14]">
      {/* Dynamic Cursor Light (Desktop) */}
      <div
        className="absolute rounded-full blur-[130px] opacity-40 transition-transform duration-75 ease-out"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 75%)",
          transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
        }}
      />

      {/* Atmospheric Aurora Glowing Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[650px] h-[650px] rounded-full bg-cyan-600/10 blur-[150px] animate-pulse-glow" />
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[160px] animate-float-slow" />
      <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-indigo-600/10 blur-[180px] animate-float-delayed" />
      <div className="absolute top-[65%] left-[-5%] w-[450px] h-[450px] rounded-full bg-cyan-400/8 blur-[140px]" />

      {/* Subtle Matrix / Digital Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 60%, transparent 100%)",
        }}
      />

      {/* Lightweight Canvas Neural Node Network */}
      <canvas ref={canvasRef} className="absolute inset-0 block opacity-70" />

      {/* Subtle Vignette & Depth Mask */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
    </div>
  );
};
