"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import GlassCard from "@/components/ui/GlassCard";

const steps = [
  {
    title: "We Audit",
    description: "We identify your key metrics and where that data lives",
  },
  {
    title: "We Design",
    description: "We build the data pipeline and dashboard layout",
  },
  {
    title: "We Deploy",
    description: "We automate the delivery schedule and alerts",
  },
];

const useCases = [
  {
    emoji: "📊",
    title: "Sales Dashboard",
    description: "Live revenue, pipeline, and conversion data updated automatically every hour",
  },
  {
    emoji: "📬",
    title: "Daily Digest",
    description: "Get a morning summary of yesterday's performance delivered to your inbox",
  },
  {
    emoji: "⚠️",
    title: "Anomaly Alerts",
    description: "Get notified instantly when a metric drops below your threshold",
  },
  {
    emoji: "📈",
    title: "Growth Reports",
    description: "Weekly AI-generated analysis of what's working and what needs attention",
  },
];

export default function ReportingPage() {
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
              <BarChart3 className="w-4 h-4" />
              Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] mb-6">
              AI-Powered{" "}
              <span className="gradient-text">Reporting</span>
            </h1>
            <p className="text-xl text-[#FFD700] mb-4">
              Data that tells you what to do next
            </p>
            <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">
              Automated dashboards that surface insights without you lifting a
              finger.
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
                You&apos;re making decisions based on gut feeling because pulling and
                analyzing data from multiple sources takes too long and requires
                technical skills you don&apos;t have time for.
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
                We build automated reporting pipelines that pull data from all your
                platforms, process it with AI, and deliver clean dashboards and
                daily digests directly to your inbox or Slack - automatically.
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
        headingText="Want automated reporting for your business?"
        subText="Request a Demo"
      />

      <Footer />
    </main>
  );
}
