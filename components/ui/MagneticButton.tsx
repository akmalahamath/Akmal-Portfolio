"use client";

import React, { useRef, useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "cyan-glow";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  onClick?: (e: React.MouseEvent) => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  target,
  rel,
  download,
  onClick,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isGlowActive, setIsGlowActive] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Subtle magnetic attraction factor
    const deltaX = (clientX - centerX) * 0.18;
    const deltaY = (clientY - centerY) * 0.18;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { id: Date.now(), x, y };

      setRipples((prev) => [...prev.slice(-1), newRipple]);
      setIsGlowActive(true);

      setTimeout(() => setIsGlowActive(false), 500);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 700);
    }
    if (onClick) onClick(e);
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400 text-slate-950 font-semibold shadow-[0_0_25px_-5px_rgba(var(--theme-accent-rgb),0.4)] hover:shadow-[0_0_35px_-2px_rgba(var(--theme-accent-rgb),0.65)] hover:from-cyan-300 hover:to-cyan-400 border border-cyan-300/40",
    "cyan-glow":
      "bg-cyan-500/10 text-cyan-300 border border-cyan-400/40 shadow-[0_0_20px_-3px_rgba(var(--theme-accent-rgb),0.25)] hover:bg-cyan-500/20 hover:border-cyan-300 hover:text-white hover:shadow-[0_0_30px_0px_rgba(var(--theme-accent-rgb),0.45)] backdrop-blur-xl active:shadow-[0_0_45px_5px_rgba(0,240,255,0.7)] active:border-cyan-200 active:text-white",
    secondary:
      "bg-white/[0.04] text-white border border-white/15 backdrop-blur-xl hover:bg-white/[0.09] hover:border-cyan-400/50 hover:text-cyan-200 shadow-[0_4px_20px_rgba(0,0,0,0.2)] active:shadow-[0_0_35px_rgba(0,240,255,0.5)] active:border-cyan-400",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/[0.05] active:bg-cyan-500/15",
  };

  const sharedClasses = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 active:scale-95 cursor-pointer select-none overflow-hidden",
    sizeClasses[size],
    variantClasses[variant],
    isGlowActive && "shadow-[0_0_45px_4px_rgba(0,240,255,0.85)] border-cyan-300 text-white",
    className
  );

  const motionProps = {
    animate: { x: position.x, y: position.y },
    transition: { type: "spring", stiffness: 250, damping: 18, mass: 0.1 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  const glowContent = (
    <>
      {/* Outer Glow Shockwave Ring on Click */}
      <AnimatePresence>
        {isGlowActive && (
          <motion.span
            initial={{ opacity: 0.95, scale: 0.95 }}
            animate={{ opacity: 0, scale: 1.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="absolute -inset-1 rounded-full border-2 border-cyan-400 shadow-[0_0_30px_#00F0FF] pointer-events-none z-10"
          />
        )}
      </AnimatePresence>

      {/* Internal Expanding Glow Ripple */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.9 }}
          animate={{ scale: 4.5, opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="absolute rounded-full bg-cyan-400/40 pointer-events-none blur-sm z-0"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 70,
            height: 70,
            marginLeft: -35,
            marginTop: -35,
          }}
        />
      ))}

      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={btnRef as any}
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={handleClick as any}
        className={sharedClasses}
        {...motionProps}
      >
        {glowContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={btnRef as any}
      type={(props as any).type || "button"}
      onClick={handleClick}
      className={sharedClasses}
      {...motionProps}
      {...(props as any)}
    >
      {glowContent}
    </motion.button>
  );
};
