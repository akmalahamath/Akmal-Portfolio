"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Brain, Cpu, Sparkles, Network, Layers, ArrowUpRight } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Brain,
  Cpu,
  Sparkles,
  Network,
  Layers,
};

export const CurrentlyExploring: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ======================================================== */}
        {/* MOBILE RESPONSIVE LAYOUT (< lg screens)                 */}
        {/* Exact 2-Column Visual Card Design Matching Skills View   */}
        {/* ======================================================== */}
        <div className="block lg:hidden">
          {/* Mobile Section Heading with Badge Matching Certificate Design */}
          <div className="mb-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#020B14]/85 backdrop-blur-md border border-white/15 text-cyan-300 text-xs font-mono tracking-wider mb-3 shadow-[0_0_12px_rgba(0,240,255,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Continuous Horizon</span>
            </div>
            <h2 className="text-3xl xs:text-4xl font-extrabold text-white tracking-tight mb-2">
              Currently Exploring
            </h2>
            <p className="text-sm xs:text-base text-slate-300 leading-relaxed max-w-xl">
              Areas of intense investigation, modern research papers, and technical curiosity.
            </p>
          </div>

          {/* 2-Column Card Grid */}
          <div className="grid grid-cols-2 gap-3 xs:gap-3.5 sm:gap-4">
            {PORTFOLIO_DATA.currentlyExploring.map((item, idx) => {
              const Icon = ICON_MAP[item.icon] || Brain;
              const isLastOdd = idx === 4;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`rounded-2xl bg-[#031120]/80 border border-white/10 p-3 xs:p-4 flex flex-col justify-between hover:border-cyan-400/40 transition-all duration-300 shadow-lg ${
                    isLastOdd ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <div>
                    {/* Top Row: Website Blue Round Glow Icon & Index Tag matching certificate badge style */}
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="w-8 h-8 xs:w-9 xs:h-9 rounded-full bg-[#020B14]/85 backdrop-blur-md border border-white/15 text-cyan-300 flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.25)]">
                        <Icon className="w-4 h-4 xs:w-4.5 xs:h-4.5 text-cyan-400" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400/70">
                        FOCUS 0{idx + 1}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xs xs:text-sm sm:text-base font-bold text-white tracking-tight mb-1 leading-snug">
                      {item.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-[10px] xs:text-[11px] font-mono text-cyan-400/80 mb-2 leading-tight">
                      {item.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-[10px] xs:text-[11px] sm:text-xs text-slate-400 leading-snug mb-3 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Investigation Pill */}
                  <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="font-mono text-[9px] xs:text-[10px]">Active</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP / LAPTOP LAYOUT (lg: screens and up) - UNTOUCHED */}
        {/* ======================================================== */}
        <div className="hidden lg:block">
          <SectionHeading
            eyebrow="Continuous Horizon"
            title="Currently Exploring"
            subtitle="Areas of intense investigation, modern research papers, and technical curiosity."
            align="center"
          />

          {/* Dynamic Neural Canvas Accent in background of this section */}
          <div className="relative mt-12">
            {/* Subtle connecting lines SVG background */}
            <div className="absolute inset-0 pointer-events-none opacity-20 -z-10 flex items-center justify-center">
              <svg
                className="w-full h-full max-h-[500px]"
                viewBox="0 0 1000 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 100 200 Q 300 50, 500 200 T 900 200"
                  stroke="url(#gradient-line-1)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                <path
                  d="M 150 100 Q 400 350, 650 150 T 850 300"
                  stroke="url(#gradient-line-2)"
                  strokeWidth="1.2"
                />
                <defs>
                  <linearGradient id="gradient-line-1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#00F0FF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="gradient-line-2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#818CF8" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#00F0FF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Exploring Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PORTFOLIO_DATA.currentlyExploring.map((item, idx) => {
                const Icon = ICON_MAP[item.icon] || Brain;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}
                  >
                    <GlassCard
                      className="p-7 h-full flex flex-col justify-between group border-white/10"
                      enableTilt={true}
                    >
                      <div>
                        {/* Top icon and index */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-mono text-cyan-400/60">
                            FOCUS 0{idx + 1}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h4 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs font-mono text-cyan-400/80 mb-4">
                          {item.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-300 transition-colors">
                        <span className="font-mono text-[11px]">Active Investigation</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
