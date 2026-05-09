"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, MessageSquare, Link2, MessageCircle, BarChart3, Workflow } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";

const services = [
  {
    slug: "n8n",
    icon: Workflow,
    title: "n8n Workflow Automation",
    description:
      "Connect any app, trigger any action. We design visual workflows that eliminate manual work.",
  },
  {
    slug: "ai-agents",
    icon: Bot,
    title: "AI Agents & Chatbots",
    description:
      "Deploy intelligent agents that respond, qualify, and convert leads — 24/7.",
  },
  {
    slug: "whatsapp",
    icon: MessageSquare,
    title: "WhatsApp Lead Automation",
    description:
      "WATI-powered pipelines that capture and nurture leads directly from WhatsApp.",
  },
  {
    slug: "integrations",
    icon: Link2,
    title: "API & App Integrations",
    description:
      "Seamlessly connect your CRM, ERP, and tools into one unified automated system.",
  },
  {
    slug: "discord",
    icon: MessageCircle,
    title: "Discord & Community Bots",
    description:
      "Custom bots that manage your community, onboard users, and handle support.",
  },
  {
    slug: "reporting",
    icon: BarChart3,
    title: "AI-Powered Reporting",
    description:
      "Automated dashboards that surface insights without you lifting a finger.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0A0A0A] dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="WHAT WE DO"
          title="Automation That Scales With You"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Link href={`/services/${service.slug}`} className="block h-full">
                <GlassCard className="h-full group cursor-pointer">
                  <service.icon className="w-12 h-12 text-[#FFD700] mb-4" />
                  <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-syne)] group-hover:text-[#FFD700] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#A0A0A0] mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-[#FFD700] text-sm group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}