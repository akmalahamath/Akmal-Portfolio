"use client";

import React from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#020B14]/80 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand: Round Logo + AKMAL TECH wordmark */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.4)] shrink-0">
              <Image
                src="/images/akmal-round-logo.png"
                alt="Akmal Tech Round Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-5 w-28 shrink-0">
              <Image
                src="/images/akmal-tech-text.png?v=3"
                alt="AKMAL TECH"
                fill
                className="object-contain object-left filter brightness-110 drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]"
              />
            </div>
          </div>
          <p className="text-xs text-cyan-300 font-mono tracking-wider">
            &ldquo;Designing. Building. Learning.&rdquo;
          </p>
        </div>

        {/* Copyright details */}
        <div className="flex flex-col items-center text-center">
          <p className="text-xs text-slate-400">
            © {currentYear} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </p>
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            aria-label="Email"
            className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/25 hover:text-white transition-all ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
