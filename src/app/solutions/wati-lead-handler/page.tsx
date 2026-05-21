"use client";

import { motion } from "framer-motion";
import { Zap, MessageSquare, Target, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import GlassCard from "@/components/ui/GlassCard";

const steps = [
  {
    title: "Trigger",
    description: "New WhatsApp message hits WATI",
  },
  {
    title: "Qualify",
    description: "n8n scores the lead using predefined rules",
  },
  {
    title: "Route",
    description: "Lead is assigned and sales rep is notified instantly",
  },
];

const results = [
  {
    emoji: "⚡",
    title: "3 Hours saved daily",
    description: "on manual lead sorting",
  },
  {
    emoji: "📈",
    title: "40% faster response time",
    description: "to hot leads",
  },
  {
    emoji: "🚫",
    title: "0 leads dropped",
    description: "since deployment",
  },
  {
    emoji: "💰",
    title: "2x increase",
    description: "in lead-to-call conversion rate",
  },
];

export default function WatiLeadHandlerPage() {
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
              Lead Automation
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-3 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10">
                n8n
              </span>
              <span className="px-3 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10">
                WATI
              </span>
              <span className="px-3 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10">
                WhatsApp
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] mb-6">
              WATI Lead{" "}
              <span className="gradient-text">Handler</span>
            </h1>
            <p className="text-xl text-[#FFD700] mb-4">
              Zero lead left behind
            </p>
            <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
              Automated WhatsApp lead qualification pipeline that routes prospects
              to the right sales rep in real-time.
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
                The client was receiving 100+ WhatsApp leads per day. Their sales
                team was manually reading each one, copy-pasting info into a
                spreadsheet, and assigning reps - losing 3-4 hours daily and
                dropping hot leads.
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
                We connected their WATI account to an n8n workflow that: (1)
                captures every new WhatsApp message, (2) uses a qualification
                script to score the lead, (3) automatically assigns them to the
                right sales rep based on location and product interest, (4) pushes
                the lead data to their CRM with full conversation context.
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
        headingText="Want this for your business?"
        subText="Request a Demo"
      />

      <Footer />
    </main>
  );
}
