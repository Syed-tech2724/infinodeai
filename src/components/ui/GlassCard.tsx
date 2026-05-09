"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-[#161616]/80 backdrop-blur-md border border-[rgba(255,215,0,0.1)] rounded-2xl p-6 transition-all duration-300 hover:border-[rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] ${className}`}
    >
      {children}
    </motion.div>
  );
}