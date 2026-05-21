"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MessageSquare, Send, Users, Calendar, Megaphone } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const useCases = [
  {
    icon: Megaphone,
    title: "Broadcast campaigns",
    description: "Send targeted messages to segmented contact lists",
  },
  {
    icon: MessageSquare,
    title: "Auto-reply flows",
    description: "Instantly respond to new inquiries with qualification flows",
  },
  {
    icon: Send,
    title: "Drip sequences",
    description: "Nurture leads who didn't convert with automated follow-ups",
  },
  {
    icon: Calendar,
    title: "Appointment reminders",
    description: "Send automated reminders and confirmations",
  },
];

const steps = [
  {
    icon: CheckCircle,
    title: "Connect",
    description: "Connect your WhatsApp Business number via WATI",
  },
  {
    icon: Send,
    title: "Build Flows",
    description: "We build custom flows for lead capture, nurturing, and handoff",
  },
  {
    icon: Users,
    title: "Qualify & Convert",
    description: "Your team only sees warm, qualified leads",
  },
];

export default function WhatsAppLeadAutomationPage() {
  const whatsappNumber = "+919908134946";

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <section className="py-24 dot-grid">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero & Description */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#25D366]/10 text-[#25D366] mb-6">
              WhatsApp Lead Automation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-syne)]">
              Turn WhatsApp into your highest-converting sales channel
            </h2>
            <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto mb-8">
              WhatsApp has 90%+ open rates but most businesses still manage it manually - slow replies, missed follow-ups, zero tracking.
            </p>

            {/* Problem */}
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <p className="text-white">
                <span className="text-red-400 font-semibold">Problem:</span> Manual WhatsApp management leads to slow replies, missed follow-ups, and zero tracking.
              </p>
            </div>

            {/* What We Do */}
            <p className="text-lg text-white max-w-2xl mx-auto">
              <span className="text-[#25D366] font-semibold">What we do:</span> Using WATI, we build automated pipelines that capture leads, send follow-ups, qualify with interactive messages, and push hot leads to your sales team.
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
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-[#25D366]" />
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
              title="What Our WhatsApp Automation Can Do"
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
                  <GlassCard className="h-full green-border-hover">
                    <useCase.icon className="w-10 h-10 text-[#25D366] mb-4" />
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
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hey!!%20Want%20to%20see%20the%20demo!!`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-black font-semibold hover:bg-[#25D366]/90 transition-colors"
            >
              Request a demo to see a WhatsApp flow built for your industry
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-[#A0A0A0] text-sm mt-4">
              Click to chat with us on WhatsApp
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
