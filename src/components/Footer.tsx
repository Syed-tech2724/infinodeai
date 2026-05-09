"use client";

import { motion } from "framer-motion";
import { Send, Phone, PhoneCall } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Privacy", href: "#" },
];

const socials = [
  { icon: "linkedin", href: "https://www.linkedin.com/company/infinodeai", label: "LinkedIn" },
  { icon: Send, href: "#", label: "Twitter" },
  { icon: Phone, href: "https://wa.me/919908134946?text=Hey!!%20Want%20to%20see%20the%20demo!!", label: "WhatsApp" },
  { icon: PhoneCall, href: "tel:+919908134946", label: "Call" },
];

export default function Footer() {
  return (
    <footer className="py-12 bg-[#0A0A0A] border-t border-[rgba(255,215,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-3 mb-3">
              <Image
                src="/Firefly (1).png"
                alt="Infinode AI"
                width={32}
                height={32}
                style={{ width: "auto", height: "2rem" }}
              />
              <span className="text-lg font-bold font-[family-name:var(--font-syne)]">
                Infinode AI
              </span>
            </a>
            <p className="text-[#A0A0A0] text-sm">Automate the Impossible</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#A0A0A0] hover:text-[#FFD700] transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#FFD700] hover:border-[#FFD700]/30 transition-colors"
                aria-label={social.label}
              >
                {social.icon === "linkedin" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ) : (
                  <social.icon size={18} />
                )}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-[#A0A0A0] text-sm">
            &copy; 2026 Infinode AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}