"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  Mail,
  Linkedin,
  Download,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject";
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  /**
   * Isolated contact submission handler.
   * Connect to Resend, EmailJS, or API Route easily.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulated network transmission for demonstration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Initiate Contact"
          title="Let's Build Something Intelligent."
          subtitle="I'm open to internships, learning opportunities, collaborations, and projects where I can continue growing as an AI Engineer and Software Developer."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
          
          {/* LEFT COLUMN: Contact Details & Quick Links (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                Reach Out Directly
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Whether you have an inquiry regarding internships, AI projects, collaborative software development, or simply want to connect, feel free to reach out anytime.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 mb-8">
                {/* Email Box */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Email</p>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                        className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                      >
                        {PORTFOLIO_DATA.personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* LinkedIn Box */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-400/20">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">LinkedIn</p>
                      <p className="text-sm font-semibold text-white">Akmal Ahamath</p>
                    </div>
                  </div>

                  <a
                    href={PORTFOLIO_DATA.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-400/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Location</p>
                    <p className="text-sm font-semibold text-white">
                      {PORTFOLIO_DATA.personal.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
              <MagneticButton
                variant="primary"
                size="sm"
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                size="sm"
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </MagneticButton>

              <MagneticButton
                variant="cyan-glow"
                size="sm"
                href={PORTFOLIO_DATA.personal.cvPath}
                download="Akmal_Ahamath_CV.pdf"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </MagneticButton>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Modern Floating Labels Glass Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-5 xs:p-6 sm:p-8 lg:p-10 border-white/10" enableTilt={false}>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Send a Direct Message
                </h4>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Received</h4>
                  <p className="text-sm text-slate-300 max-w-sm mb-6">
                    Thank you for reaching out! I will review your message and get back to you shortly.
                  </p>
                  <MagneticButton
                    variant="secondary"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </MagneticButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="relative">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div className="relative">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. AI Engineering Internship Opportunity"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-400 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <MagneticButton
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </MagneticButton>
                </form>
              )}
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
