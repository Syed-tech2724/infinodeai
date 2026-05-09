"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface WhatsAppCTAProps {
  headingText: string;
  subText: string;
}

export default function WhatsAppCTA({ headingText, subText }: WhatsAppCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Gold gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-white mb-4">
            {headingText}
          </h2>
          <p className="text-[#A0A0A0] text-lg mb-8">{subText}</p>
          <a
            href="https://wa.me/919908134946?text=Hey!!%20Want%20to%20see%20the%20demo!!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}