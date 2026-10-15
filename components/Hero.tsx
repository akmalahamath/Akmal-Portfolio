"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  Download,
  Sparkles,
  Cpu,
  BrainCircuit,
  MapPin,
} from "lucide-react";

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Cycling titles
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % PORTFOLIO_DATA.personal.titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax effect for portrait container
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (clientX - centerX) / 50;
    const y = (clientY - centerY) / 50;
    setMouseOffset({ x, y });
  };

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = window.innerWidth >= 640 ? 80 : 68;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Shared Portrait Graphic Component for Desktop & Mobile
  const PortraitGraphic = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div
      className={
        isMobile
          ? "relative w-[160px] h-[160px] xs:w-[185px] xs:h-[185px] sm:w-[230px] sm:h-[230px] flex items-center justify-center shrink-0 rounded-full"
          : "relative w-[270px] h-[270px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] flex items-center justify-center rounded-full"
      }
      style={
        !isMobile
          ? {
              transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
              transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }
          : undefined
      }
    >
      {/* Ambient Circle Glow Behind Portrait (Pure Radial Circle - Eliminates Square Artifacts) */}
      <div
        className="absolute -inset-3 sm:-inset-4 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.28) 0%, rgba(0, 240, 255, 0.1) 48%, rgba(0, 240, 255, 0) 70%)",
        }}
      />

      {/* Orbit 1: Outer Rotating Thin Ring with Dashes */}
      <div className="absolute inset-[-10px] sm:inset-[-15px] rounded-full border border-cyan-400/25 animate-spin-slow pointer-events-none border-dashed" />

      {/* Orbit 2: Intermediate Counter-Rotating Ring */}
      <div className="absolute inset-[-4px] sm:inset-[-7px] rounded-full border border-cyan-300/30 animate-spin-reverse pointer-events-none" />

      {/* Orbiting Satellite Dots */}
      <div className="absolute inset-[-10px] sm:inset-[-15px] rounded-full animate-spin-slow pointer-events-none">
        <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.8)] absolute top-2 left-1/4" />
        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.6)] absolute bottom-4 right-1/4" />
      </div>

      {/* User Portrait Container */}
      <div className="relative w-full h-full rounded-full p-1.5 sm:p-2.5 bg-gradient-to-b from-cyan-400/50 via-cyan-500/20 to-cyan-500/40 shadow-[0_0_35px_rgba(0,240,255,0.4)]">
        <div className="relative w-full h-full rounded-full overflow-hidden bg-[#04131F] shadow-2xl">
          <Image
            src="/images/akmal-portrait.jpg"
            alt="Akmal Ahamath - AI Engineer and Full-Stack Developer"
            fill
            priority
            className="object-cover object-center filter contrast-[1.03] brightness-[1.01] transition-transform duration-700 hover:scale-105"
            sizes={isMobile ? "(max-width: 640px) 230px, 260px" : "360px"}
          />
          <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] flex items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl w-full mx-auto z-10">
        
        {/* ======================================================== */}
        {/* MOBILE & TABLET LAYOUT (< lg screens)                     */}
        {/* Profile photo on RIGHT, Name block on LEFT in SAME LINE   */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:hidden w-full">
          {/* TOP ROW (SAME LINE): Name block LEFT, Enriched Profile Photo RIGHT */}
          <div className="flex flex-row items-center justify-between gap-3 sm:gap-6 w-full mb-6 pt-2">
            {/* LEFT SIDE: Hello I'm + Name + Auto Changing Label */}
            <div className="flex flex-col text-left flex-1 min-w-0 pr-1">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-slate-300 text-base xs:text-lg sm:text-xl font-medium mb-1"
              >
                Hello, I&apos;m
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[1.7rem] xs:text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2 leading-[1.1]"
              >
                {PORTFOLIO_DATA.personal.name}
              </motion.h1>

              {/* Animated Cycling Title with increased size and no wrapping */}
              <div className="min-h-[38px] sm:min-h-[46px] flex items-center overflow-hidden w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={titleIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2 text-lg xs:text-xl sm:text-2xl font-bold tracking-tight text-gradient-cyan text-left whitespace-nowrap"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0" />
                    <span className="whitespace-nowrap">{PORTFOLIO_DATA.personal.titles[titleIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT SIDE: Enriched Profile Photo on same line (Increased Size, No badges) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="shrink-0"
            >
              <PortraitGraphic isMobile={true} />
            </motion.div>
          </div>

          {/* MOBILE CONTENT BELOW TOP ROW */}
          <div className="flex flex-col text-left pt-2 sm:pt-3">
            {/* Main Verified Introduction with balanced same-level spacing above and below */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-[15px] sm:text-base leading-[1.75] mt-3 mb-5 font-normal"
            >
              {PORTFOLIO_DATA.personal.heroBio}
            </motion.p>

            {/* Supporting Tagline with balanced space */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-cyan-300 font-semibold text-sm sm:text-base mb-11 sm:mb-12 flex items-start gap-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF] shrink-0 mt-1.5" />
              <span>{PORTFOLIO_DATA.personal.heroTagline}</span>
            </motion.p>

            {/* Action CTAs with generous spacing between each button */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 sm:gap-5 mb-10 sm:mb-12 w-full"
            >
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4 w-full">
                <MagneticButton
                  variant="cyan-glow"
                  size="md"
                  href="#projects"
                  onClick={(e) => handleScrollTo(e, "projects")}
                  className="text-center justify-center py-4 px-3 sm:px-5 whitespace-nowrap text-sm sm:text-base font-semibold"
                >
                  <span className="whitespace-nowrap">Explore My Work</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                </MagneticButton>

                <MagneticButton
                  variant="cyan-glow"
                  size="md"
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "contact")}
                  className="text-center justify-center py-4 px-3 sm:px-5 whitespace-nowrap text-sm sm:text-base font-semibold"
                >
                  <span className="whitespace-nowrap">Contact Me</span>
                </MagneticButton>
              </div>

              <MagneticButton
                variant="cyan-glow"
                size="md"
                href={PORTFOLIO_DATA.personal.cvPath}
                download="Akmal_Ahamath_CV.pdf"
                className="w-full text-center justify-center py-4 px-6 whitespace-nowrap text-sm sm:text-base font-semibold"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span className="whitespace-nowrap">Download CV</span>
              </MagneticButton>
            </motion.div>

            {/* Social Connect Links & Dedicated Address Line */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col gap-4 pt-7 pb-2 border-t border-white/10 w-full"
            >
              {/* Row 1: Social Connect Icons */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mr-1">
                  Connect
                </span>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  aria-label="Email Akmal"
                  className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Row 2: Dedicated Next Line for Location Address (No truncation!) */}
              <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP LAYOUT (lg: screens and up) - UNTOUCHED           */}
        {/* ======================================================== */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-center">
          {/* LEFT COLUMN: User Portrait (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-5 flex justify-center"
          >
            <PortraitGraphic isMobile={false} />
          </motion.div>

          {/* RIGHT COLUMN: Introduction & CTAs (7 cols) */}
          <div className="col-span-7 flex flex-col items-start text-left">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-400 text-xl font-medium tracking-normal mb-1"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3"
            >
              {PORTFOLIO_DATA.personal.name}
            </motion.h1>

            <div className="h-12 flex items-center mb-5 overflow-hidden w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={titleIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-2.5 text-2xl md:text-3xl font-bold tracking-tight text-gradient-cyan text-left"
                >
                  <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>{PORTFOLIO_DATA.personal.titles[titleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-4 font-normal"
            >
              {PORTFOLIO_DATA.personal.heroBio}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-cyan-300 font-semibold text-base mb-8 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF] shrink-0" />
              <span>{PORTFOLIO_DATA.personal.heroTagline}</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8"
            >
              <MagneticButton
                variant="cyan-glow"
                size="md"
                href="#projects"
                onClick={(e) => handleScrollTo(e, "projects")}
                className="whitespace-nowrap px-6 py-3"
              >
                <span className="whitespace-nowrap">Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </MagneticButton>

              <MagneticButton
                variant="cyan-glow"
                size="md"
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="whitespace-nowrap px-6 py-3"
              >
                <span className="whitespace-nowrap">Contact Me</span>
              </MagneticButton>

              <MagneticButton
                variant="cyan-glow"
                size="md"
                href={PORTFOLIO_DATA.personal.cvPath}
                download="Akmal_Ahamath_CV.pdf"
                className="whitespace-nowrap px-6 py-3"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span className="whitespace-nowrap">Download CV</span>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3.5 text-slate-400 pt-5 border-t border-white/10 w-full"
            >
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1">
                Connect
              </span>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile of Akmal Ahamath"
                className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-200 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile of Akmal Ahamath"
                className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-200 shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                aria-label="Email Akmal Ahamath"
                className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>

              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 ml-3 pl-3 border-l border-white/10">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
