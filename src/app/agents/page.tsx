"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Brain, MessageSquare, Rocket, MessageCircle, Globe, HelpCircle, ShoppingCart } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const useCases = [
  {
    icon: "instagram",
    title: "Instagram DM Lead Qualifier",
    description: "Automatically engage followers, qualify leads, and route them to your CRM",
  },
  {
    icon: Globe,
    title: "Website Chatbot",
    description: "Interactive chatbot that books discovery calls directly from your website",
  },
  {
    icon: HelpCircle,
    title: "FAQ Bot",
    description: "Instant answers to customer support questions 24/7",
  },
  {
    icon: ShoppingCart,
    title: "Product Recommender",
    description: "AI agent that recommends products based on customer preferences",
  },
];

const steps = [
  {
    icon: Brain,
    title: "We Train",
    description: "We train the agent on your services, FAQs, and tone",
  },
  {
    icon: MessageSquare,
    title: "We Integrate",
    description: "We integrate it into your chosen channels",
  },
  {
    icon: Rocket,
    title: "It Goes Live",
    description: "It handles conversations autonomously",
  },
];

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      <section className="py-24 dot-grid">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero & Description */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#FFD700]/10 text-[#FFD700] mb-6">
              AI Agents & Chatbots
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-syne)]">
              Your best salesperson works 24/7 and never misses a message
            </h2>
            <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto mb-8">
              Deploy intelligent agents that respond, qualify, and convert leads — 24/7.
            </p>

            {/* Problem */}
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 max-w-2xl mx-auto mb-8">
              <p className="text-white">
                <span className="text-red-400 font-semibold">Problem:</span> Leads are asking questions on Instagram, your website, WhatsApp — and by the time someone replies, they've moved on.
              </p>
            </div>

            {/* What We Do */}
            <p className="text-lg text-white max-w-2xl mx-auto">
              <span className="text-[#FFD700] font-semibold">What we do:</span> We build AI agents trained on your business that respond instantly, qualify leads with smart questions, and either book a call or hand off to your team.
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
              title="What Our AI Agents Can Do"
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
                    {typeof useCase.icon === "string" ? (
                      useCase.icon === "instagram" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-[#FFD700] mb-4">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      ) : null
                    ) : (
                      <useCase.icon className="w-10 h-10 text-[#FFD700] mb-4" />
                    )}
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
              See what an agent built for your business looks like — Request a demo
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