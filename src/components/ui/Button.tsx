"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "solid",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  if (variant === "solid") {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`px-8 py-3 bg-[#FFD700] text-black font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] flex items-center justify-center align-middle ${className}`}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-8 py-3 border-2 border-[#FFD700] text-[#FFD700] font-semibold rounded-full transition-all duration-300 hover:bg-[#FFD700]/10 flex items-center justify-center align-middle ${className}`}
    >
      {children}
    </motion.button>
  );
}
