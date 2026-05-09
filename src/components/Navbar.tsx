"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "./ui/Button";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "Solutions", href: "/#solutions" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-lg border-b border-[rgba(255,215,0,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/#home" className="flex items-center gap-3">
            <Image
              src="/Firefly (1).png"
              alt="Infinode AI"
              width={40}
              height={40}
              style={{ width: "auto", height: "2.5rem" }}
            />
            <span
              className="text-xl font-bold font-[family-name:var(--font-syne)]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Infinode AI
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-[#FFD700] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/919908134946?text=Hey!!%20Want%20to%20see%20the%20demo!!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FFD700] text-black font-bold px-6 py-2 rounded-full hover:scale-105 transition-transform duration-200 text-sm"
            >
              Get a Free Audit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full bg-[#0A0A0A] z-50 md:hidden"
          >
            <div className="flex flex-col p-6">
              <button
                className="self-end text-white mb-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white/80 hover:text-[#FFD700] py-4 border-b border-white/10"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-8">
                <a
                  href="https://wa.me/919908134946?text=Hey!!%20Want%20to%20see%20the%20demo!!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-[#FFD700] text-black font-bold px-6 py-3 rounded-full"
                >
                  Get a Free Audit
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}