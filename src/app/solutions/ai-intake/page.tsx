"use client";

import { motion } from "framer-motion";
import { Brain, Database, Zap, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import GlassCard from "@/components/ui/GlassCard";

const steps = [
  {
    title: "Receive",
    description: "Form submission triggers the n8n workflow",
  },
  {
    title: "Analyze",
    description: "GPT-4 classifies and summarizes the submission",
  },
  {
    title: "Populate",
    description: "Airtable record created, team notified instantly",
  },
];

const results = [
  {
    emoji: "⚡",
    title: "30 min → 8 seconds",
    description: "per intake submission",
  },
  {
    emoji: "🎯",
    title: "95% accuracy",
    description: "classification accuracy confirmed by the team",
  },
  {
    emoji: "📊",
    title: "Consistent CRM data",
    description: "no more missing fields",
  },
  {
    emoji: "💼",
    title: "Team focused",
    description: "on clients, not data entry",
  },
];

export default function AiIntakePage() {
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
              AI Integration
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-3 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10">
                OpenAI
              </span>
              <span className="px-3 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10">
                Airtable
              </span>
              <span className="px-3 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10">
                n8n
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] mb-6">
              AI Client Intake{" "}
              <span className="gradient-text">System</span>
            </h1>
            <p className="text-xl text-[#FFD700] mb-4">
              Your intake form just got a brain
            </p>
            <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
              GPT-powered intake form that classifies leads, generates summaries,
              and populates CRM automatically.
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
                A consulting firm was receiving client intake forms but spending 30
                minutes per submission manually reading, categorizing, and entering
                data into their Airtable CRM — with no consistency.
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
                We built an n8n pipeline that: (1) receives form submissions via
                webhook, (2) sends the response to GPT-4 with a classification
                prompt, (3) GPT returns a structured JSON with lead category,
                priority score, and a 3-line summary, (4) n8n creates a new Airtable
                record with all fields pre-filled, (5) sends a Slack alert to the
                right team based on category.
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
        headingText="Want AI to handle your intake?"
        subText="Request a Demo"
      />

      <Footer />
    </main>
  );
}