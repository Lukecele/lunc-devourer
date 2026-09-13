"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
  color: string;
}

export default function EmberParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
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

    const colors = [
      "rgba(255, 77, 0, ",
      "rgba(255, 157, 0, ",
      "rgba(255, 30, 0, ",
      "rgba(255, 210, 80, ",
    ];

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(width / 15), 65);

    const createParticle = (): Particle => {
      return {
        x: Math.random() * width,
        y: height + Math.random() * 50,
        size: Math.random() * 2.8 + 0.8,
        speedY: -(Math.random() * 1.5 + 0.5),
        speedX: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.8 + 0.2,
        fadeSpeed: Math.random() * 0.005 + 0.002,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    for (let i = 0; i < particleCount; i++) {
      const p = createParticle();
      p.y = Math.random() * height; // initial spread
      particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.3;
        p.opacity -= p.fadeSpeed;

        if (p.opacity <= 0 || p.y < -10) {
          particles[index] = createParticle();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = "rgba(255, 77, 0, 0.8)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.6,
      }}
    />
  );
}
