"use client";

import { motion } from "framer-motion";
import { Bell, Mail, MessageSquare, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import GlassCard from "@/components/ui/GlassCard";

const steps = [
  {
    title: "Aggregate",
    description: "All platform alerts funnel into one n8n hub",
  },
  {
    title: "Filter",
    description: "AI rules classify and prioritize each alert",
  },
  {
    title: "Deliver",
    description: "Right alert → right channel → right time",
  },
];

const results = [
  {
    emoji: "⚡",
    title: "10 tools unified",
    description: "into 1 notification system",
  },
  {
    emoji: "🔕",
    title: "70% reduction",
    description: "in notification noise",
  },
  {
    emoji: "🚨",
    title: "0 critical alerts missed",
    description: "since deployment",
  },
  {
    emoji: "📬",
    title: "Inbox cleared",
    description: "digests replace 50+ daily emails",
  },
];

export default function NotificationHubPage() {
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
              Notifications
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-3 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10">
                Slack
              </span>
              <span className="px-3 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10">
                Email
              </span>
              <span className="px-3 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10">
                n8n
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] mb-6">
              Multi-Channel Notification{" "}
              <span className="gradient-text">Hub</span>
            </h1>
            <p className="text-xl text-[#FFD700] mb-4">
              One hub. Every alert. Zero noise.
            </p>
            <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
              Central automation hub that aggregates alerts from 10+ platforms and
              delivers smart digests.
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
                A SaaS company had alerts firing from Stripe, GitHub, Jira, Google
                Analytics, and 6 other tools — all going to different places.
                Critical alerts were missed and the team was drowning in
                notification noise.
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
                We built a central n8n notification hub that: (1) receives webhooks
                and API triggers from all 10+ platforms, (2) applies smart filtering
                rules to classify alerts as Critical, Important, or FYI, (3) routes
                Critical alerts to Slack immediately, (4) batches Important and FYI
                alerts into a daily digest email, (5) logs everything to a Notion
                database for audit trail.
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
        headingText="Want to unify your alerts?"
        subText="Request a Demo"
      />

      <Footer />
    </main>
  );
}