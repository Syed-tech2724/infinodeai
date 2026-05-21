"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/95" />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        {/* Logo with Floating Animation - Positioned above headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            {/* Radial Glow Behind Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] radial-glow pointer-events-none" />
            <div className="float-animation relative z-10">
              <Image
                src="/Firefly (1).png"
                alt="Infinode AI"
                width={100}
                height={100}
                style={{ width: "auto", height: "6rem" }}
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block px-4 py-2 rounded-full border border-[#FFD700]/50 text-[#FFD700] text-sm mb-4"
        >
          AI Automation Agency
        </motion.p>

        {/* Headline - Single line with smaller text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] mb-4"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          We Build AI That <span className="gradient-text">Works</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-[#A0A0A0] max-w-xl mx-auto mb-8"
        >
          Infinode AI designs intelligent automation systems using n8n, custom AI
          agents, and smart integrations - so your business runs on autopilot.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a
            href="https://wa.me/919908134946?text=Hey!!%20Want%20to%20see%20the%20demo!!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD700] text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-200 text-sm"
          >
            Start Automating
          </a>
          <Button variant="ghost" onClick={scrollToServices} className="px-6 py-3 text-sm">
            See Our Work
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 text-[#A0A0A0]"
        >
          <div className="text-center">
            <span className="block text-xl md:text-2xl font-bold text-[#FFD700]">50+</span>
            <span className="text-xs md:text-sm">Workflows Built</span>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <span className="block text-xl md:text-2xl font-bold text-[#FFD700]">98%</span>
            <span className="text-xs md:text-sm">Client Retention</span>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <span className="block text-xl md:text-2xl font-bold text-[#FFD700]">24/7</span>
            <span className="text-xs md:text-sm">Automation</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white/50 cursor-pointer"
          onClick={scrollToServices}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
