import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Cpu, HardHat } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "operations" | "quality" | "facilities";
}

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "operations" | "quality" | "facilities">("all");

  const faqs: FAQItem[] = [
    {
      category: "operations",
      question: "What is MetFin's size range for bright steel bars?",
      answer: "Our size ranges are optimized per process: Black Bar Straightening accommodates 20mm to 55mm; Centerless Peeling handles 28mm to 63mm; Reeling (polishing and micro-straightening) works with 25mm to 65mm; and Centerless Grinding processes 25mm to 63mm. For specialized vertical dimensions, our Hydraulic Band Saw cuts diameters up to 205mm."
    },
    {
      category: "quality",
      question: "Are your steel processing facilities certified?",
      answer: "Yes, MetFin India Steel is an ISO 9001:2015 certified company. Our quality assurance workflow adheres to strict international standards. Every batch goes through 100% Magnetic Particle Inspection (MPI) to detect sub-surface cracks, combined with micro-tolerance auditing via highly calibrated digital micrometers."
    },
    {
      category: "facilities",
      question: "Where is the MetFin India Steel manufacturing plant located?",
      answer: "Our main manufacturing plant is situated in Chennai's prime industrial hub at: Plot No. 8, Survey No. 34/1, Vanagaram – Ambattur Road, Ayanambakkam, Chennai – 600 095, Tamil Nadu, India. The plant is equipped with a 97 KVA connected energy feed and twin 5-Tonne EOT overhead cranes."
    },
    {
      category: "operations",
      question: "What is your monthly manufacturing capacity and limits?",
      answer: "We currently process 300 Tonnes of steel bars per month across our straightening, peeling, reeling, and grinding lines. Our plant layout includes dedicated expansion bays to scale output to 500 Tonnes per month, backed by a storage capacity of up to 450 Tonnes (and up to 600 Tonnes maximum storage limit)."
    },
    {
      category: "quality",
      question: "What grades of carbon and alloy steels do you process?",
      answer: "We process a comprehensive range of steels, including low/medium carbon steels, free-cutting steel grades (like EN1A, EN1A L), and alloy steels (including EN8, EN9, EN19, EN24, EN31) depending on customer engineering specifications and mechanical tension requirements."
    },
    {
      category: "quality",
      question: "How do you achieve micron-level precision and prevent lobing?",
      answer: "We utilize advanced Riat-RG3 Centerless Precision Grinding wheels. This centerless grinding stage represents our premium finish where specialized three-point lobing micrometers are used to ensure near-perfect roundness and micro-tolerance adherence, yielding a brilliant silver-mirror surface."
    },
    {
      category: "operations",
      question: "Do you supply raw materials or only perform job-work processing?",
      answer: "We offer both! We cater to full-scale material supply where we source quality tested black bars, process them to finished bright bars, and deliver them with QC certified tags. Additionally, we support conversion or custom job-work processing on client-supplied black bars."
    }
  ];

  const filteredFaqs = selectedCategory === "all" 
    ? faqs 
    : faqs.filter(f => f.category === selectedCategory);

  const toggleAccordion = (index: number) => {
    setActiveId(activeId === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden min-h-screen pt-32">
      {/* Dynamic ambient backdrop light */}
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-brand-yellow tracking-[0.3em] uppercase mb-3 flex items-center gap-1.5">
            <HelpCircle size={14} className="text-brand-yellow" /> METFIN KNOWLEDGE BASE
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">
            FREQUENTLY ASKED <span className="text-brand-purple">QUESTIONS</span>
          </h2>
          <p className="text-brand-silver/60 text-xs md:text-sm mt-4 max-w-2xl font-sans uppercase tracking-wider">
            Explore detailed specifications, operational capabilities, plant constraints, and quality standards for MetFin's bright steel operations.
          </p>
          <div className="w-20 h-1 bg-brand-purple mt-6" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Questions", icon: null },
            { id: "operations", label: "Operations & Capacities", icon: <Cpu size={12} /> },
            { id: "quality", label: "Quality & Tolerance", icon: <ShieldCheck size={12} /> },
            { id: "facilities", label: "Plant & Facilities", icon: <HardHat size={12} /> }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id as any);
                setActiveId(null);
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-[0.7rem] uppercase tracking-wider border transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-brand-purple text-black font-bold border-brand-purple shadow-[0_0_15px_rgba(155,114,207,0.3)]"
                  : "bg-brand-card text-brand-silver/70 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = activeId === idx;
            return (
              <div
                key={idx}
                className={`bg-brand-card border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "border-brand-purple/40 shadow-[0_0_20px_rgba(155,114,207,0.1)]" 
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 transition-colors hover:bg-white/[0.01]"
                >
                  <span className="font-display font-bold text-sm md:text-base text-white uppercase tracking-wider leading-relaxed">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded bg-white/5 border border-white/10 text-brand-silver flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-purple border-brand-purple/20" : ""}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 md:px-6 pb-6 pt-1 border-t border-white/5 bg-black/20">
                        <p className="text-xs md:text-sm text-brand-silver/80 leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="font-mono text-[0.6rem] text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded border border-brand-purple/20 uppercase font-semibold">
                            Cat: {faq.category}
                          </span>
                          <span className="font-mono text-[0.55rem] text-brand-silver/30 uppercase">
                            // VERIFIED TECHNICAL RESPONSE
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Call to action at bottom */}
        <div className="mt-16 p-6 bg-brand-card border border-white/5 rounded-xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none" />
          <h4 className="font-display font-bold text-sm text-white uppercase tracking-widest mb-2">
            Have custom dimensional or mechanical specifications?
          </h4>
          <p className="text-xs text-brand-silver/50 max-w-lg mx-auto font-sans mb-4">
            Contact our engineering partner directly to discuss custom tolerances, special steel grades, or bulk contract pricing.
          </p>
          <a
            href="/contact"
            className="inline-flex font-mono text-[0.65rem] uppercase tracking-widest font-bold text-brand-yellow hover:text-white border-b border-brand-yellow hover:border-white transition-colors pb-0.5"
          >
            Go to Contact Hub →
          </a>
        </div>

      </div>
    </section>
  );
}
