"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = window.innerWidth >= 640 ? 80 : 68;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#020B14]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand: Round Shape Logo + AKMAL TECH wordmark side by side */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-3 sm:gap-3.5 transition-transform hover:scale-105 duration-200 shrink-0"
            aria-label="Akmal Tech - Home"
          >
            {/* Round Logo Emblem */}
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_18px_rgba(0,240,255,0.45)] group-hover:border-cyan-300 group-hover:shadow-[0_0_26px_rgba(0,240,255,0.7)] transition-all duration-300 shrink-0">
              <Image
                src="/images/akmal-round-logo.png"
                alt="Akmal Tech Round Logo"
                fill
                priority
                className="object-cover"
                sizes="48px"
              />
            </div>

            {/* AKMAL TECH Wordmark Image with transparent background */}
            <div className="relative h-6 sm:h-7 w-32 sm:w-40 flex items-center shrink-0">
              <Image
                src="/images/akmal-tech-text.png?v=3"
                alt="AKMAL TECH"
                fill
                priority
                className="object-contain object-left filter brightness-110 drop-shadow-[0_0_14px_rgba(0,240,255,0.45)]"
                sizes="(max-width: 640px) 128px, 160px"
              />
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-cyan-400 font-semibold"
                      : "text-slate-300 hover:text-white"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.7)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button: Download CV */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.cvPath}
              download="Akmal_Ahamath_CV.pdf"
              className={cn(
                "group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium tracking-wide",
                "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40 hover:border-cyan-300 hover:text-white",
                "hover:bg-cyan-500/30 transition-all duration-200 shadow-[0_0_20px_-3px_rgba(0,240,255,0.3)] hover:shadow-[0_0_28px_0px_rgba(0,240,255,0.5)]"
              )}
            >
              <Download className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={PORTFOLIO_DATA.personal.cvPath}
              download="Akmal_Ahamath_CV.pdf"
              className="sm:hidden p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400"
              aria-label="Download CV"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 sm:top-20 z-40 bg-[#020B14]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl shadow-cyan-950/40 lg:hidden flex flex-col gap-3"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="relative h-10 w-10 rounded-full overflow-hidden border border-cyan-400/40 shrink-0">
                  <Image
                    src="/images/akmal-round-logo.png"
                    alt="Akmal Tech Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-6 w-32 shrink-0">
                  <Image
                    src="/images/akmal-tech-text.png?v=3"
                    alt="AKMAL TECH"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1.5 pt-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      isActive
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={PORTFOLIO_DATA.personal.cvPath}
                download="Akmal_Ahamath_CV.pdf"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
