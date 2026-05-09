"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, GitBranch, Rocket } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";

const useCases = [
  {
    icon: "📋",
    title: "Auto-assign leads",
    description: "Automatically route leads from forms to your CRM with custom rules",
  },
  {
    icon: "💬",
    title: "Slack Deal Alerts",
    description: "Send instant Slack notifications when a deal moves to the next stage",
  },
  {
    icon: "🔄",
    title: "Data Sync",
    description: "Keep Google Sheets, Notion, and your tools in perfect sync",
  },
  {
    icon: "📄",
    title: "Auto-Invoices",
    description: "Generate invoices automatically when a project is marked complete",
  },
];

const steps = [
  {
    icon: CheckCircle,
    title: "We Audit",
    description: "We analyze your current manual processes",
  },
  {
    icon: GitBranch,
    title: "We Design",
    description: "We build the automation in n8n",
  },
  {
    icon: Rocket,
    title: "We Deploy",
    description: "We test and hand it over — fully working",
  },
];

export default function N8nAutomation() {
  return (
    <section id="n8n" className="py-24 bg-[#0A0A0A] dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero & Description */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#FFD700]/10 text-[#FFD700] mb-6">
            n8n Workflow Automation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-syne)]">
            Stop doing manually what a machine can do better
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto mb-8">
            Connect any app, trigger any action. We design visual workflows that eliminate manual work.
          </p>

          {/* Problem */}
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <p className="text-white">
              <span className="text-red-400 font-semibold">Problem:</span> Your team is wasting hours on copy-paste tasks, data entry, and app-switching that could be fully automated.
            </p>
          </div>

          {/* What We Do */}
          <p className="text-lg text-white max-w-2xl mx-auto">
            <span className="text-[#FFD700] font-semibold">What we do:</span> We design and deploy custom n8n workflows that connect your apps, trigger actions automatically, and eliminate repetitive work — no code required on your end.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 font-[family-name:var(--font-syne)]">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h4 className="text-xl font-bold mb-2 font-[family-name:var(--font-syne)]">
                  {step.title}
                </h4>
                <p className="text-[#A0A0A0]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-12">
          <SectionHeading
            label="USE CASES"
            title="What Our Workflows Can Do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full gold-border-hover">
                  <span className="text-3xl mb-4 block">{useCase.icon}</span>
                  <h4 className="text-lg font-bold mb-2 font-[family-name:var(--font-syne)]">
                    {useCase.title}
                  </h4>
                  <p className="text-[#A0A0A0] text-sm">{useCase.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/919908134946?text=Hey!!%20Want%20to%20see%20the%20demo!!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFD700] text-black font-semibold hover:bg-[#FFD700]/90 transition-colors"
          >
            Want to see this running live? Request a demo
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-[#A0A0A0] text-sm mt-4">
            Click to chat with us on WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}