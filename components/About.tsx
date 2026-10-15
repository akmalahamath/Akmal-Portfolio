"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  Brain,
  Code2,
  Workflow,
  Sparkles,
  CheckCircle2,
  Target,
  Compass,
} from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Profile & Philosophy"
          title="About Me"
          subtitle="Building intelligent solutions for the future."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-12">
          
          {/* LEFT COLUMN: Large Typography & Core Focus Pillars (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3">
                <Target className="w-3.5 h-3.5" />
                <span>Mission & Approach</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
                Architecting at the intersection of{" "}
                <span className="text-gradient-cyan">Artificial Intelligence</span> & robust software systems.
              </h3>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                As a Computer Science undergraduate, I immerse myself in the core theoretical principles of computation while eagerly designing intelligent algorithms and modern web architectures.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="space-y-4">
              {PORTFOLIO_DATA.personal.aboutPillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20 shrink-0">
                      {idx === 0 && <Brain className="w-5 h-5" />}
                      {idx === 1 && <Code2 className="w-5 h-5" />}
                      {idx === 2 && <Workflow className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-white mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Premium Glass Card with Verified Bio & Tags (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <GlassCard className="p-5 xs:p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full border border-white/10" enableTilt={true}>
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
                    <span className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                      Executive Summary
                    </span>
                  </div>
                  <span className="text-xs font-mono text-cyan-400/80">01 / Profile</span>
                </div>

                <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {PORTFOLIO_DATA.personal.aboutBio.map((paragraph, idx) => (
                    <p key={idx} className="relative">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Verified Visual Tags */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Core Focus Disciplines</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.personal.aboutTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-400/25 hover:border-cyan-300 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Location indicator */}
                <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Based in {PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
