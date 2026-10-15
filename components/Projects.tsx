"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Github, ExternalLink, Cpu } from "lucide-react";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative pt-20 sm:pt-28 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Featured Architecture & Work"
          title="Selected Projects"
          subtitle="Showcase of intelligent software systems, full-stack applications, and algorithmic prototypes."
          align="center"
        />

        {/* Projects List (Apple-style storytelling with alternating layout) */}
        <div className="space-y-20 lg:space-y-28">
          {PORTFOLIO_DATA.projects.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Image Preview (Balanced 6 cols with restrained maximum width) */}
                <div
                  className={`lg:col-span-6 flex justify-center ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="w-full max-w-[530px] xl:max-w-[560px]">
                    <GlassCard className="p-2 sm:p-2.5 overflow-hidden group border-white/10" enableTilt={true}>
                      <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#04131F]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-center filter brightness-[0.9] contrast-[1.05] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                          sizes="(max-width: 1024px) 100vw, 560px"
                        />

                        {/* Glass gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020B14] via-transparent to-transparent opacity-60 pointer-events-none" />

                        {/* Project Index Overlay Tag */}
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#04131F]/80 backdrop-blur-md border border-white/15 text-xs font-mono text-cyan-300">
                          0{idx + 1} / ARCHITECTURE
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>

                {/* Details Information (6 cols) */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>{project.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-cyan-300 border border-white/10 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                      <MagneticButton
                        variant="secondary"
                        size="sm"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </MagneticButton>
                    )}

                    {project.liveUrl && (
                      <MagneticButton
                        variant="cyan-glow"
                        size="sm"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Live Prototype</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </MagneticButton>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
