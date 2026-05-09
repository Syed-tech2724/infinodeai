"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";

const projects = [
  {
    slug: "wati-lead-handler",
    category: "Lead Automation",
    title: "WATI Lead Handler",
    description:
      "Automated WhatsApp lead qualification pipeline that routes prospects to the right sales rep in real-time.",
    tags: ["n8n", "WATI", "WhatsApp"],
  },
  {
    slug: "discord-bot",
    category: "Community Bot",
    title: "Discord Onboarding Bot",
    description:
      "Smart button-based workflow that automates member onboarding, role assignment, and welcome sequences.",
    tags: ["Discord", "n8n", "Webhooks"],
  },
  {
    slug: "ai-intake",
    category: "AI Integration",
    title: "AI Client Intake System",
    description:
      "GPT-powered intake form that classifies leads, generates summaries, and populates CRM automatically.",
    tags: ["OpenAI", "Airtable", "n8n"],
  },
  {
    slug: "notification-hub",
    category: "Notifications",
    title: "Multi-Channel Notification Hub",
    description:
      "Central automation hub that aggregates alerts from 10+ platforms and delivers smart digests.",
    tags: ["Slack", "Email", "n8n"],
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

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-[#0A0A0A] dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="OUR SOLUTIONS"
          title="Automation We've Built"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Link href={`/solutions/${project.slug}`} className="block h-full">
                <GlassCard className="h-full group gold-border-hover cursor-pointer">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#FFD700]/10 text-[#FFD700] mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 font-[family-name:var(--font-syne)] group-hover:text-[#FFD700] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#A0A0A0] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs rounded bg-white/5 text-white/70 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-[#FFD700] text-sm group-hover:translate-x-1 transition-transform">
                    View Workflow <ArrowRight className="ml-1 w-4 h-4" />
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