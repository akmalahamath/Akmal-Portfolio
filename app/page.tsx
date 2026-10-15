import React from "react";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { CurrentlyExploring } from "@/components/CurrentlyExploring";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-white">
        {/* Full-Page Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Global Cinematic Animated Background */}
        <AnimatedBackground />

        {/* Floating Glassmorphism Navbar */}
        <Navbar />

        {/* Page Content Stream */}
        <main className="relative z-10 flex flex-col">
          {/* Section 01: Hero */}
          <Hero />

          {/* Section 02: About Me */}
          <About />

          {/* Section 03: Skills & Technologies */}
          <Skills />

          {/* Section 04: Education */}
          <Education />

          {/* Section 05: Certifications & Achievements */}
          <Certifications />

          {/* Section 06: Selected Projects Showcase */}
          <Projects />

          {/* Section 07: Currently Exploring */}
          <CurrentlyExploring />

          {/* Section 08: Contact */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
