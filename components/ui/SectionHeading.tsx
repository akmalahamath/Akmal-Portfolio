"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-3 mb-4",
            align === "center" ? "justify-center" : "justify-start"
          )}
        >
          <span className="w-7 sm:w-9 h-[2px] bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full shadow-[0_0_8px_rgba(var(--theme-accent-rgb),0.5)] shrink-0" />
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-cyan-400 font-mono">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg text-slate-400 leading-relaxed font-normal max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
