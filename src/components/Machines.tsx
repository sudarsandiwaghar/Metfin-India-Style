import React, { useState } from "react";
import { motion } from "motion/react";
import { Sliders, CircleDot, Scissors, RotateCcw, Target, Info } from "lucide-react";

export default function Machines() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const machines = [
    {
      id: 1,
      name: "Black Bar Straightening Machine",
      make: "Alankar Udyog",
      range: "20mm – 55mm",
      power: "Heavy Duty Rollers",
      icon: <Sliders size={28} className="text-brand-purple" />,
      purpose: "Axially aligns rough black bars by removing macro bending deflections, preparing them for precision peeling head feeds.",
      glow: "hover:shadow-[0_0_30px_rgba(197,160,89,0.15)] hover:border-brand-purple/50"
    },
    {
      id: 2,
      name: "Peeling Machine",
      make: "Alankar Udyog",
      range: "28mm – 63mm",
      power: "High-Speed Rotary Cutters",
      icon: <CircleDot size={28} className="text-brand-yellow" />,
      purpose: "Removes outer decarburized skin, steel slags, and surface imperfections to expose pristine interior steel layers.",
      glow: "hover:shadow-[0_0_30px_rgba(234,219,185,0.15)] hover:border-brand-yellow/50"
    },
    {
      id: 3,
      name: "Band Saw Cutting Machine",
      make: "MSD",
      range: "Upto 205mm",
      power: "Heavy Duty Hydraulic Saw",
      icon: <Scissors size={28} className="text-brand-blue" />,
      purpose: "Performs accurate vertical cuts to divide input steel coils or long finished ground bars into client-specified dimensions.",
      glow: "hover:shadow-[0_0_30px_rgba(168,145,99,0.15)] hover:border-brand-blue/50"
    },
    {
      id: 4,
      name: "Reeling Machine",
      make: "Alankar Udyog",
      range: "25mm – 65mm",
      power: "Calibrated Pressure Rollers",
      icon: <RotateCcw size={28} className="text-brand-silver" />,
      purpose: "Compresses peeled bars under extreme radial load to eliminate minor surface ripples and deliver near-perfect circular roundness.",
      glow: "hover:shadow-[0_0_30px_rgba(223,220,214,0.15)] hover:border-brand-silver/50"
    },
    {
      id: 5,
      name: "Grinding Machine",
      make: "Riat – RG3",
      range: "25mm – 63mm",
      power: "Centerless Precision Wheels",
      icon: <Target size={28} className="text-brand-orange" />,
      purpose: "The pinnacle finishing stage. Achieves strict micron-level diameters, removes lobing, and adds a bright silver mirror-like finish.",
      glow: "hover:shadow-[0_0_30px_rgba(158,128,75,0.15)] hover:border-brand-orange/50"
    }
  ];

  return (
    <section id="machines" className="py-24 bg-brand-bg/95 relative overflow-hidden border-t border-white/5">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/4 w-[320px] h-[320px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-brand-purple/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-brand-yellow tracking-[0.3em] uppercase mb-3">
            EQUIPMENT LISTING
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none uppercase">
            MANUFACTURING FACILITIES
          </h2>
          <p className="text-brand-silver/50 font-sans text-xs md:text-sm max-w-lg mt-4 uppercase tracking-wider">
            Sturdy, high-productivity machinery line optimized for ultimate dimension consistency.
          </p>
          <div className="w-20 h-1 bg-brand-purple mt-5" />
        </div>

        {/* Machine Datasheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredCard(m.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-brand-card border border-white/10 p-6 rounded-xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${m.glow}`}
            >
              {/* Header block */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:scale-110 transition-transform">
                    {m.icon}
                  </div>
                  <span className="font-mono text-[0.65rem] text-brand-silver/30 font-bold">
                    MACH_ID_0{m.id}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg md:text-xl text-white tracking-wider uppercase mb-4 leading-tight">
                  {m.name}
                </h3>

                <p className="text-xs text-brand-silver/60 leading-relaxed mb-6 min-h-[72px]">
                  {m.purpose}
                </p>
              </div>

              {/* Technical Specifications Panel (Brochure exact) */}
              <div className="border-t border-white/5 pt-4 flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] text-brand-silver/40 uppercase tracking-widest">
                    MAKE:
                  </span>
                  <span className="font-mono text-xs text-brand-yellow font-semibold uppercase">
                    {m.make}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] text-brand-silver/40 uppercase tracking-widest">
                    SIZE RANGE:
                  </span>
                  <span className="font-mono text-xs text-white font-bold">
                    {m.range}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] text-brand-silver/40 uppercase tracking-widest">
                    SYSTEM TYPE:
                  </span>
                  <span className="font-mono text-[0.65rem] text-brand-blue font-medium uppercase">
                    {m.power}
                  </span>
                </div>
              </div>

              {/* Interactive background shadow accents */}
              {hoveredCard === m.id && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
