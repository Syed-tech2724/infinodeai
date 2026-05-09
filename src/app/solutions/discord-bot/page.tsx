"use client";

import { motion } from "framer-motion";
import { Users, MessageCircle, Shield, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import GlassCard from "@/components/ui/GlassCard";

const steps = [
  {
    title: "Trigger",
    description: "Member joins the Discord server",
  },
  {
    title: "Welcome",
    description: "Bot sends DM with onboarding buttons",
  },
  {
    title: "Assign",
    description: "Role assigned instantly based on user selection",
  },
];

const results = [
  {
    emoji: "⚡",
    title: "50+ members onboarded",
    description: "per day — zero admin effort",
  },
  {
    emoji: "🎯",
    title: "80% completion rate",
    description: "on the onboarding flow",
  },
  {
    emoji: "😊",
    title: "60% increase",
    description: "in member satisfaction score",
  },
  {
    emoji: "🕐",
    title: "2+ hours saved",
    description: "per day by admins",
  },
];

export default function DiscordBotPage() {
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
              Community Bot
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-3 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10">
                Discord
              </span>
              <span className="px-3 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10">
                n8n
              </span>
              <span className="px-3 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10">
                Webhooks
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] mb-6">
              Discord Onboarding{" "}
              <span className="gradient-text">Bot</span>
            </h1>
            <p className="text-xl text-[#FFD700] mb-4">
              From stranger to community member in 60 seconds
            </p>
            <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
              Smart button-based workflow that automates member onboarding, role
              assignment, and welcome sequences.
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
                A fast-growing Discord community was manually welcoming 50+ new
                members daily, assigning roles one by one, and struggling to
                maintain engagement — admins were burning out.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* What We Built Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-[family-name:var(--font-syne)] text-white mb-6">
              What We Built
            </h2>
            <GlassCard className="p-8">
              <p className="text-lg text-[#A0A0A0]">
                We built a custom Discord bot connected to an n8n webhook pipeline
                that: (1) detects new member joins, (2) sends a personalized
                welcome DM with onboarding steps, (3) presents interactive buttons
                for role selection, (4) assigns roles automatically based on user
                choice, and (5) posts a public welcome message in the #general
                channel.
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

      {/* Results Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-[family-name:var(--font-syne)] text-white mb-12 text-center"
          >
            Results
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 text-center group hover:border-amber-400/40 hover:shadow-[0_0_20px_rgba(255,215,0,0.15)] transition-all">
                  <span className="text-4xl mb-4 block">{result.emoji}</span>
                  <h3 className="text-lg font-bold text-[#FFD700] mb-2 font-[family-name:var(--font-syne)]">
                    {result.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-sm">{result.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <WhatsAppCTA
        headingText="Want a bot for your community?"
        subText="Request a Demo"
      />

      <Footer />
    </main>
  );
}