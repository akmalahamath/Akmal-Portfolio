"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import {
  Brain,
  Sparkles,
  Cpu,
  Layers,
  Component,
  FileCode2,
  Palette,
  Layout,
  Activity,
  Server,
  ArrowLeftRight,
  Terminal,
  Code,
  Code2,
  Binary,
  GitBranch,
  Boxes,
  Database,
  Table,
  Search,
  HardDrive,
  GitCommit,
  Github,
  Monitor,
  Send,
  TerminalSquare,
  Network,
  CheckCircle,
} from "lucide-react";

// Icon mapping helper
const ICON_MAP: Record<string, React.ElementType> = {
  Brain,
  Sparkles,
  Cpu,
  Layers,
  Component,
  FileCode2,
  Palette,
  Layout,
  Activity,
  Server,
  ArrowLeftRight,
  Terminal,
  Code,
  Code2,
  Binary,
  GitBranch,
  Boxes,
  Database,
  Table,
  Search,
  HardDrive,
  GitCommit,
  Github,
  Monitor,
  Send,
  TerminalSquare,
  Network,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...PORTFOLIO_DATA.skills.categories.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === "All"
      ? PORTFOLIO_DATA.skills.categories
      : PORTFOLIO_DATA.skills.categories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Technical Stack & Expertise"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of verified competencies, core computer science foundations, and modern software toolkits."
          align="center"
        />


        {/* CATEGORY FILTER PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200",
                selectedCategory === cat
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_18px_rgba(0,240,255,0.25)]"
                  : "bg-white/[0.03] text-slate-400 border border-white/10 hover:text-white hover:bg-white/[0.06]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* CATEGORIZED SKILL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
            >
              <GlassCard className="p-6 h-full flex flex-col justify-between" enableTilt={false}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {group.category}
                    </h4>
                    <span className="text-[11px] font-mono text-cyan-400/70">
                      {group.skills.length} tools
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2.5">
                    {group.skills.map((skill) => {
                      const IconComponent = ICON_MAP[skill.icon] || Code;
                      return (
                        <div
                          key={skill.name}
                          className={cn(
                            "flex items-center gap-2 p-2.5 rounded-xl transition-all duration-200 border",
                            skill.highlight
                              ? "bg-white/[0.04] border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/10 text-slate-200 hover:text-cyan-200"
                              : "bg-white/[0.02] border-white/5 hover:border-white/20 text-slate-400 hover:text-white"
                          )}
                        >
                          <IconComponent className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span className="text-xs font-medium truncate">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* INFINITE HORIZONTAL MARQUEE */}
        <div className="relative mt-16 overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Edge blur fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#020B14] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#020B14] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee gap-4">
            {[
              ...PORTFOLIO_DATA.skills.marqueeTechnologies,
              ...PORTFOLIO_DATA.skills.marqueeTechnologies,
            ].map((tech, idx) => (
              <div
                key={`${tech}-${idx}`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] hover:shadow-[0_0_20px_-3px_rgba(0,240,255,0.3)] transition-all duration-200 cursor-default select-none"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">{tech}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
