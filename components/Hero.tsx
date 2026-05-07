'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle animation
    interface Particle {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      vx: number;
      vy: number;
      color: string;
    }

    const particles: Particle[] = [];
    const particleCount = 40;
    const colors = ['rgba(0, 212, 255,', 'rgba(232, 232, 232,'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 15, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary wrap
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.fillStyle = `${particle.color}${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Subtle gradient orbs */}
      <div className="absolute top-32 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 mb-6 md:mb-8 px-4 py-2 rounded-full glass">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-xs md:text-sm text-blue-300 font-medium">Digital Creative Solutions</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight animate-slide-up text-white">
          Stuck Growing Your Brand Online?
          <br />
          <span className="gradient-text">We&apos;re Ready to Help.</span>
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          AdenX Creations helps businesses grow through premium website development, graphic design, video editing, photo editing, branding, UI/UX design, social media creatives, and digital design solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          <button className="btn-primary w-full sm:w-auto flex items-center justify-center space-x-2 group">
            <span>Get Started</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary w-full sm:w-auto flex items-center justify-center space-x-2">
            <span>Contact Us</span>
          </button>
        </div>

        {/* Floating elements indicator */}
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
          <span>↓ Scroll to explore</span>
        </div>
      </div>

      {/* Scroll indicator animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-slide-down"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
