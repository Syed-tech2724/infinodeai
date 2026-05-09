"use client";

import { motion } from "framer-motion";
import { Phone, Wrench, Rocket } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const steps = [
  {
    icon: Phone,
    title: "Discovery Call",
    description:
      "We map your current workflow and find automation opportunities",
    number: "01",
  },
  {
    icon: Wrench,
    title: "Custom Build",
    description:
      "Our team builds your n8n flows, AI agents, and integrations",
    number: "02",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "Go live, monitor, and iterate as your business grows",
    number: "03",
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="HOW IT WORKS"
          title="From Idea to Automation in 3 Steps"
        />

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Number Badge */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl font-bold text-[#FFD700]/10">
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-[#0A0A0A] border-2 border-[#FFD700] flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-[#FFD700]" />
                </div>

                <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-syne)] text-[#FFD700]">
                  {step.title}
                </h3>
                <p className="text-[#A0A0A0]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}