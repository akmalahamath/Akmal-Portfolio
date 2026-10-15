"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { PORTFOLIO_DATA, Certification } from "@/data/portfolio";
import {
  Sparkles,
  Trophy,
  Code,
  Users2,
  Bot,
  ShieldCheck,
  CheckCircle,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "AI & ML": Sparkles,
  Award: Trophy,
  Programming: Code,
  Management: Users2,
  Workshop: Bot,
};

export const Certifications: React.FC = () => {
  const [activeModalCert, setActiveModalCert] = useState<Certification | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScrollState();
      el.addEventListener("scroll", checkScrollState, { passive: true });
      window.addEventListener("resize", checkScrollState);
      return () => {
        el.removeEventListener("scroll", checkScrollState);
        window.removeEventListener("resize", checkScrollState);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector("div[data-card]")?.clientWidth || 360;
      const scrollAmount = cardWidth + 24; // card width + gap
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="certifications" className="relative pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header with Title and Scroll Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Credentials & Honors"
            title="Certifications & Achievements"
            subtitle="Verified technical credentials, workshop completions, and competitive academic recognitions with authentic digital credentials."
            align="left"
            className="mb-0"
            titleClassName="text-[1.7rem] xs:text-3xl sm:text-4xl md:text-5xl"
          />

          {/* Navigation Scroll Buttons (Event Hub Style) */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`w-11 h-11 rounded-full border border-white/15 bg-[#031322]/80 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] ${
                canScrollLeft
                  ? "hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 hover:scale-105 active:scale-95 cursor-pointer"
                  : "opacity-40 cursor-not-allowed text-slate-500 border-white/5"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`w-11 h-11 rounded-full border border-white/15 bg-[#031322]/80 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] ${
                canScrollRight
                  ? "hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 hover:scale-105 active:scale-95 cursor-pointer"
                  : "opacity-40 cursor-not-allowed text-slate-500 border-white/5"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Event-Hub Style Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {PORTFOLIO_DATA.certifications.map((cert, idx) => {
            const Icon = CATEGORY_ICONS[cert.category] || ShieldCheck;

            return (
              <div
                key={cert.id}
                data-card="true"
                className="snap-center shrink-0 w-[calc(100vw-2.2rem)] xs:w-[calc(100vw-2.5rem)] max-w-[440px] sm:w-[380px] lg:w-[500px] xl:w-[560px]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <GlassCard
                    className="p-4 sm:p-5 lg:p-6 h-full flex flex-col justify-between border-white/10 group cursor-pointer hover:border-cyan-500/40 transition-all duration-300"
                    enableTilt={true}
                    spotlight={true}
                    onClick={() => setActiveModalCert(cert)}
                  >
                    <div>
                      {/* Visual Certificate Graphic Preview */}
                      <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden mb-5 bg-[#031120] border border-white/10 group-hover:border-cyan-400/40 transition-all duration-300">
                        <Image
                          src={cert.image}
                          alt={`${cert.title} certificate for Akmal Ahamath`}
                          fill
                          className="object-cover object-center filter brightness-[0.95] group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
                          sizes="(max-width: 768px) 85vw, (max-width: 1280px) 500px, 560px"
                        />

                        {/* Click to expand hover overlay */}
                        <div className="absolute inset-0 bg-[#020B14]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                          <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/60 text-cyan-300 text-xs font-medium flex items-center gap-1.5 backdrop-blur-md">
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>View Full Credential</span>
                          </div>
                        </div>

                        {/* Category overlay badge */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#020B14]/85 backdrop-blur-md border border-white/15 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
                          <Icon className="w-3 h-3 text-cyan-400" />
                          <span>{cert.category}</span>
                        </div>
                      </div>

                      {/* Certificate Information */}
                      <div className="px-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-mono text-slate-400">
                            {cert.issuer}
                          </span>

                          {cert.category === "Award" && (
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold flex items-center gap-1">
                              <Trophy className="w-3 h-3 text-amber-400" />
                              Podium
                            </span>
                          )}
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Footer: Credential Button */}
                    <div className="pt-4 mt-4 px-1 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-500">
                        ID: CERT-0{idx + 1}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Verified Record</span>
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL LIGHTBOX FOR HIGH-RESOLUTION CERTIFICATE INSPECTION */}
      <AnimatePresence>
        {activeModalCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl lg:max-w-5xl w-full rounded-2xl bg-[#04131F] border border-cyan-400/30 shadow-[0_0_60px_rgba(0,240,255,0.2)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalCert(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-red-500/80 hover:bg-red-500 text-white transition-all shadow-lg cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Certificate Image */}
              <div className="p-4 sm:p-6 pb-0">
                <div className="relative w-full max-h-[70vh] rounded-xl overflow-hidden border border-white/10 bg-[#020B14] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeModalCert.image}
                    alt={activeModalCert.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="p-4 pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
                      {activeModalCert.category}
                    </span>
                    <span className="text-xs text-slate-400">{activeModalCert.issuer}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {activeModalCert.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-cyan-300 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Authenticated Credential</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

