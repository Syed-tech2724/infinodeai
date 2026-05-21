"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import GlassCard from "@/components/ui/GlassCard";

const steps = [
  {
    title: "We Audit",
    description: "We study your server structure and community workflow",
  },
  {
    title: "We Design",
    description: "We build and configure your custom bot and n8n triggers",
  },
  {
    title: "We Deploy",
    description: "We install, test, and hand over the fully working bot",
  },
];

const useCases = [
  {
    emoji: "🎉",
    title: "Welcome Flows",
    description: "Automatically greet new members with a custom onboarding message sequence",
  },
  {
    emoji: "🔐",
    title: "Role Assignment",
    description: "Auto-assign roles based on reactions, purchases, or quiz answers",
  },
  {
    emoji: "🎫",
    title: "Support Tickets",
    description: "Create private ticket threads automatically when a user asks for help",
  },
  {
    emoji: "📢",
    title: "Announcements",
    description: "Schedule and auto-post announcements to multiple channels at once",
  },
];

export default function DiscordPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm mb-6">
              <MessageCircle className="w-4 h-4" />
              Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] mb-6">
              Discord & Community{" "}
              <span className="gradient-text">Bots</span>
            </h1>
            <p className="text-xl text-[#FFD700] mb-4">
              Your community deserves better than manual moderation
            </p>
            <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
              Custom bots that manage your community, onboard users, and handle
              support - automatically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-[family-name:var(--font-syne)] text-white mb-6">
              The Problem
            </h2>
            <GlassCard className="p-8">
              <p className="text-lg text-[#A0A0A0]">
                You&apos;re spending hours welcoming new members, assigning roles,
                answering repeated questions, and moderating your Discord server
                manually.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-[family-name:var(--font-syne)] text-white mb-6">
              What We Do
            </h2>
            <GlassCard className="p-8">
              <p className="text-lg text-[#A0A0A0]">
                We build custom Discord bots connected to n8n workflows that
                automate onboarding, role assignment, gating, support ticketing, and
                community engagement — so you focus on building, not managing.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-[family-name:var(--font-syne)] text-white mb-12 text-center"
          >
            How It Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative">
                  <div className="text-6xl font-bold text-[#FFD700]/20 font-[family-name:var(--font-syne)]">
                    {index + 1}
                  </div>
                  <GlassCard className="p-6 mt-[-2rem]">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2 font-[family-name:var(--font-syne)]">
                      {step.title}
                    </h3>
                    <p className="text-[#A0A0A0]">{step.description}</p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-[family-name:var(--font-syne)] text-white mb-12 text-center"
          >
            Use Cases
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 group hover:border-amber-400/40 hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] transition-all">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{useCase.emoji}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-syne)] group-hover:text-[#FFD700] transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-[#A0A0A0] text-sm">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <WhatsAppCTA
        headingText="Want a bot for your Discord server?"
        subText="Request a Demo"
      />

      <Footer />
    </main>
  );
}
