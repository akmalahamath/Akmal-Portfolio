"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[2.5px] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 origin-left"
        style={{ scaleX }}
      />
      {/* Light bleeding glow under the line */}
      <motion.div
        className="absolute top-0 h-[4px] w-full bg-cyan-400/30 blur-[3px] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};
