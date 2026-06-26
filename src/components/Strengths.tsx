import React from "react";
import { motion } from "motion/react";
import { Clock, Briefcase, Cpu, Link, ShieldCheck, MapPin } from "lucide-react";

export default function Strengths() {
  const strengthsList = [
    {
      title: "QUICK RESPONSE TIMELINES",
      icon: <Clock size={24} className="text-brand-purple" />,
      desc: "All RFQs processed and quoted within 48 hours. Any general engineering inquiry receives immediate response from our executive partners.",
      metric: "48h response limit"
    },
    {
      title: "25+ YRS CORE EXPERIENCE",
      icon: <Briefcase size={24} className="text-brand-yellow" />,
      desc: "Our managing partners bring profound domain knowledge in high-precision steel drafting, supply chains, operations, and manufacturing optimization.",
      metric: "Knowledge-first flow"
    },
    {
      title: "HEAVY STURDY MACHINERY",
      icon: <Cpu size={24} className="text-brand-blue" />,
      desc: "An arsenal of robust Alankar Udyog and Riat-RG3 machinery lines delivers consistent roundness, extreme straightness, and mirror finishes.",
      metric: "Zero-defect operation"
    },
    {
      title: "RAW MILL TIE-UPS",
      icon: <Link size={24} className="text-brand-silver" />,
      desc: "Direct, long-standing channels to premier smelting mills and secondary producers secure steady raw bar inflows, insulating clients from market shocks.",
      metric: "Consistent supply line"
    },
    {
      title: "ISO QUALITY FRAMEWORK",
      icon: <ShieldCheck size={24} className="text-brand-purple" />,
      desc: "ISO 9001:2015 QMS system controls all parameters from input chemistry verification to final magnetic particle testing prior to dispatch.",
      metric: "Full traceability"
    },
    {
      title: "STRATEGIC CORRIDOR NODE",
      icon: <MapPin size={24} className="text-brand-yellow" />,
      desc: "Located in Ayanambakkam, Chennai, adjacent to the Ambattur industrial zone, ensuring ultra-fast transport access to key buyers across South India.",
      metric: "Chennai Hub Advantage"
    }
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden border-t border-white/5">
      {/* Light Blur Elements */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-brand-yellow/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs text-brand-yellow tracking-[0.3em] uppercase mb-3">
            COMPETITIVE ADVANTAGE
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none uppercase">
            WHY INDUSTRIAL LEADING BRANDS<br />
            <span className="text-brand-purple">PARTNER WITH METFIN</span>
          </h2>
          <div className="w-20 h-1 bg-brand-purple mt-5" />
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengthsList.map((str, idx) => (
            <motion.div
              key={str.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-card border border-white/10 p-6 rounded-xl hover:bg-[#0f0f0f] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group h-64 shadow-2xl relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:scale-105 transition-transform">
                    {str.icon}
                  </div>
                  <span className="font-mono text-[0.6rem] text-brand-silver/30 uppercase tracking-widest">
                    {str.metric}
                  </span>
                </div>

                <h4 className="font-display font-bold text-sm tracking-wider text-white uppercase group-hover:text-brand-yellow transition-colors mb-2">
                  {str.title}
                </h4>

                <p className="text-xs text-brand-silver/70 leading-relaxed font-sans">
                  {str.desc}
                </p>
              </div>

              {/* Technical sub-indicator code */}
              <div className="border-t border-white/5 pt-3 mt-4">
                <span className="font-mono text-[0.6rem] text-brand-silver/30 uppercase">
                  CORE_STRENGTH_NODE_0{idx + 1} // MFIS_QCDD
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
