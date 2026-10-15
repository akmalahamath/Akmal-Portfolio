"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GraduationCap, Calendar } from "lucide-react";

export const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="education" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          subtitle="Formal academic foundations in Computer Science, software engineering theory, and computing systems."
          align="center"
        />

        <div className="relative mt-16 sm:mt-20">
          {/* Static Background Vertical Timeline Track */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-white/10" />

          {/* Animated Glowing Vertical Progress Line */}
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-400 via-sky-400 to-blue-500 origin-top shadow-[0_0_12px_#00F0FF]"
          />

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {PORTFOLIO_DATA.education.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center"
                >
                  {/* Central Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: idx * 0.15 }}
                      className="w-8 h-8 rounded-full bg-[#04131F] border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.6)] flex items-center justify-center"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-pulse" />
                    </motion.div>
                  </div>

                  {/* Card Content (Alternating sides on desktop, offset on mobile) */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:ml-auto sm:text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <GlassCard className="p-6 sm:p-7 border border-white/10 group hover:border-cyan-500/40 transition-all duration-300" enableTilt={true}>
                        {/* Header: Logo and Period Badge */}
                        <div
                          className={`flex flex-wrap items-center justify-between gap-3 mb-4 ${
                            isEven ? "sm:flex-row-reverse" : "sm:flex-row"
                          }`}
                        >
                          {/* University Logo */}
                          {item.logo && (
                            <div className="p-1.5 px-3 rounded-lg bg-white/[0.05] border border-white/10 backdrop-blur-md flex items-center justify-center shadow-inner group-hover:border-cyan-400/30 group-hover:bg-white/[0.08] transition-all">
                              <Image
                                src={item.logo}
                                alt={`${item.institution} logo`}
                                width={160}
                                height={45}
                                className="h-6 sm:h-7 w-auto max-w-[110px] sm:max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                                unoptimized
                              />
                            </div>
                          )}

                          {/* Period & Current Badges */}
                          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30">
                              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                              <span>{item.period}</span>
                            </div>
                            {item.current && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/30 text-[10px] font-semibold">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Degree & Field */}
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                          {item.degree} in {item.field}
                        </h3>

                        {/* Institution Name */}
                        <div
                          className={`flex items-center gap-1.5 text-sm font-semibold text-cyan-400 mb-3 ${
                            isEven ? "sm:justify-end" : "sm:justify-start"
                          }`}
                        >
                          <GraduationCap className="w-4 h-4 shrink-0" />
                          <span>{item.institution}</span>
                        </div>

                        {/* Description */}
                        {item.description && (
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                            {item.description}
                          </p>
                        )}
                      </GlassCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

