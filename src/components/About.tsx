import React, { useState } from "react";
import { motion } from "motion/react";
import { Shield, Building, Award, Landmark, UserCheck } from "lucide-react";

export default function About() {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const factoryZones = [
    {
      id: "storage",
      name: "Raw Material Area",
      spec: "600 T capacity allocated",
      desc: "Dedicated section for keeping input hot-rolled black bars of various steel grades prior to processing.",
      color: "border-brand-purple text-brand-purple"
    },
    {
      id: "cranes",
      name: "Double EOT Cranes",
      spec: "2 x 5T Cranes",
      desc: "Fitted with high-grade electrical overhead travel systems for safe material shifting and loading/unloading.",
      color: "border-brand-yellow text-brand-yellow"
    },
    {
      id: "processing",
      name: "Machinery Line",
      spec: "97 KVA Power (130 HP)",
      desc: "Inline Straightening, Peeling, Reeling, Grinding, and Saw Cutting setups for seamless steel conversion.",
      color: "border-brand-blue text-brand-blue"
    },
    {
      id: "inspection",
      name: "Testing & NDT Station",
      spec: "MPI + 9 Precision Gauges",
      desc: "Rigorous quality check node where finished bars are analyzed for microcracks, diameter tolerances, and surface lobing.",
      color: "border-brand-silver text-brand-silver"
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden border-t border-white/5">
      {/* Visual Accent Light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-14">
          <span className="font-mono text-xs text-brand-yellow tracking-[0.3em] uppercase mb-3">
            WHO WE ARE
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none uppercase">
            BUILT ON EXPERTISE.<br />
            <span className="text-brand-purple">DRIVEN BY PRECISION.</span>
          </h2>
          <div className="w-20 h-1 bg-brand-purple mt-5" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Descriptive Content & Credentials */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-brand-silver/80 font-sans text-base leading-relaxed">
              MetFin India Steel (M/S METFIN INDIA STEEL) is a state-of-the-art startup in Chennai's bright steel bar manufacturing domain. Incorporated in <strong>March 2024</strong> (commencing production on <strong>18/02/2024</strong>), the company was established by highly enthusiastic partners with a singular vision: to translate extensive professional engineering and supply chain experience into manufacturing excellence.
            </p>
            
            <p className="text-brand-silver/80 font-sans text-base leading-relaxed">
              Our partners, <strong>C. Diwaghar</strong>, <strong>K. S. Ramachandran</strong>, and <strong>S. Irudayaraj</strong>, hold deep, combined expertise across steel metallurgy, operations, and machine tool optimization. Their combined synergy drives MFIS's relentless focus on the <strong>QCDD principles: Quality, Cost, Delivery, and Development</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-start gap-3 bg-brand-card border border-white/10 p-4 rounded-lg hover:border-brand-purple/35 transition-all">
                <UserCheck className="text-brand-purple flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-display font-bold text-white tracking-wider text-sm uppercase">C. DIWAGHAR</h4>
                  <p className="text-xs text-brand-silver/60 mt-1">Partner & Engineering Lead</p>
                  <p className="text-xs font-mono text-brand-purple/90 mt-1 font-semibold">Mob: 98400 46236</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-brand-card border border-white/10 p-4 rounded-lg hover:border-brand-yellow/35 transition-all">
                <UserCheck className="text-brand-yellow flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-display font-bold text-white tracking-wider text-sm uppercase">K. S. RAMACHANDRAN</h4>
                  <p className="text-xs text-brand-silver/60 mt-1">Partner & Management Lead</p>
                  <p className="text-xs font-mono text-brand-yellow/90 mt-1 font-semibold">Mob: 98419 13510</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-brand-card border border-white/10 p-4 rounded-lg hover:border-brand-blue/35 transition-all">
                <UserCheck className="text-brand-blue flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-display font-bold text-white tracking-wider text-sm uppercase">S. IRUDAYARAJ</h4>
                  <p className="text-xs text-brand-silver/60 mt-1">Partner & Supply Chain Lead</p>
                  <p className="text-xs font-mono text-brand-blue/90 mt-1 font-semibold">Mob: 99007 91913</p>
                </div>
              </div>
            </div>

            {/* Credential Badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex-1 min-w-[200px] bg-brand-card border border-white/5 hover:border-brand-purple/30 p-4 rounded-lg transition-all">
                <Award className="text-brand-yellow mb-2" size={24} />
                <span className="font-display font-bold text-white block text-sm tracking-widest">ISO 9001:2015</span>
                <span className="font-mono text-[0.65rem] text-brand-silver/50 block mt-1">Cert: 24DQME63</span>
              </div>
              <div className="flex-1 min-w-[200px] bg-brand-card border border-white/5 hover:border-brand-purple/30 p-4 rounded-lg transition-all">
                <Building className="text-brand-purple mb-2" size={24} />
                <span className="font-display font-bold text-white block text-sm tracking-widest">MSME REGISTRATION</span>
                <span className="font-mono text-[0.65rem] text-brand-silver/50 block mt-1">UDYAM-TN-02-0281610</span>
              </div>
              <div className="flex-1 min-w-[200px] bg-brand-card border border-white/5 hover:border-brand-purple/30 p-4 rounded-lg transition-all">
                <Landmark className="text-brand-blue mb-2" size={24} />
                <span className="font-display font-bold text-white block text-sm tracking-widest">GSTIN REGISTERED</span>
                <span className="font-mono text-[0.65rem] text-brand-silver/50 block mt-1">33ABZFM8082C1ZU</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 2D Blueprint Schematic of Chennai Facility */}
          <div className="lg:col-span-5 bg-brand-card border border-white/10 p-6 rounded-xl flex flex-col gap-6">
            <div className="flex flex-col">
              <h3 className="font-display font-bold text-lg text-white tracking-widest uppercase">
                AYANAMBAKKAM FACILITY
              </h3>
              <p className="font-mono text-xs text-brand-purple mt-1 uppercase">
                8,333 SQ FT plant blueprint
              </p>
            </div>

            {/* Interactive Blueprint Schematic Board */}
            <div className="grid grid-cols-2 gap-3 p-3 bg-black border border-white/5 rounded-lg relative overflow-hidden">
              
              {/* Overlay grid lines for draft style */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(to right, #9B72CF 1px, transparent 1px), linear-gradient(to bottom, #9B72CF 1px, transparent 1px)",
                  backgroundSize: "16px 16px"
                }}
              />

              {factoryZones.map((zone) => (
                <button
                  key={zone.id}
                  onMouseEnter={() => setActiveZone(zone.id)}
                  onMouseLeave={() => setActiveZone(null)}
                  className={`relative p-4 rounded-lg border text-left flex flex-col justify-between h-32 transition-all duration-300 group ${
                    activeZone === zone.id 
                      ? "bg-white/5 border-white/30 scale-[1.02] shadow-2xl z-10" 
                      : "bg-[#090909]/80 border-white/10 hover:border-white/20"
                  }`}
                >
                  <span className="font-mono text-[0.6rem] text-brand-silver/40 tracking-widest">
                    MFIS_ZONE_{zone.id.toUpperCase()}
                  </span>
                  <div>
                    <h5 className="font-display font-bold text-sm text-white tracking-wider group-hover:text-brand-yellow transition-colors mt-2">
                      {zone.name}
                    </h5>
                    <p className="font-mono text-[0.65rem] text-brand-purple mt-1">
                      {zone.spec}
                    </p>
                  </div>
                  
                  {/* Subtle directional indicator dot */}
                  <span className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full ${
                    zone.id === "storage" ? "bg-brand-purple" :
                    zone.id === "cranes" ? "bg-brand-yellow" :
                    zone.id === "processing" ? "bg-brand-blue" : "bg-brand-silver"
                  }`} />
                </button>
              ))}
            </div>

            {/* Informational overlay drawer based on active/hovered zone */}
            <div className="bg-[#050505] border border-white/10 rounded-lg p-4 min-h-[105px] flex flex-col justify-center transition-all duration-300">
              {activeZone ? (
                (() => {
                  const current = factoryZones.find((z) => z.id === activeZone);
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-left"
                    >
                      <h4 className="font-display font-bold text-xs text-brand-yellow tracking-widest uppercase">
                        {current?.name}
                      </h4>
                      <p className="font-mono text-[0.65rem] text-brand-silver/50 mt-1">
                        SPECIFICATION: {current?.spec}
                      </p>
                      <p className="text-xs text-brand-silver/80 mt-2 leading-relaxed">
                        {current?.desc}
                      </p>
                    </motion.div>
                  );
                })()
              ) : (
                <div className="text-center text-brand-silver/40">
                  <p className="text-xs font-mono">HOVER OVER BLUEPRINT SECTIONS TO ENLARGE SPECS</p>
                  <p className="text-[0.65rem] mt-1.5 text-brand-purple/60">Factory fitted with Double 5T EOT Cranes & 600T Storage allocation</p>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Real Plant walkthrough and despatch photos */}
        <div className="mt-16 pt-16 border-t border-white/5">
          <div className="flex flex-col mb-10">
            <span className="font-mono text-xs text-brand-yellow tracking-[0.3em] uppercase mb-2">
              REAL PLANT VISUALS
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight uppercase">
              ACTUAL WAREHOUSE & DISPATCH GALLERY
            </h3>
            <p className="text-brand-silver/50 font-sans text-xs mt-2 uppercase tracking-widest">
              Live snapshots of our Ayanambakkam manufacturing floor and packed, color-coded finished bars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative bg-brand-card border border-white/10 p-4 rounded-xl overflow-hidden hover:border-brand-purple/40 transition-all shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-black">
                <img
                  src="/images/factory_floor_view_1782739058997.jpg"
                  alt="MetFin India Steel Factory Floor"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm">
                    Ayanambakkam Manufacturing Floor
                  </h4>
                  <p className="text-xs text-brand-silver/60 mt-1 font-sans">
                    Panoramic overview showing our active machinery line, support frames, and high-safety steel truss channels.
                  </p>
                </div>
                <span className="font-mono text-[0.65rem] text-brand-purple bg-brand-purple/10 px-2.5 py-1 rounded border border-brand-purple/20 flex-shrink-0 uppercase font-bold">
                  97 KVA Capacity
                </span>
              </div>
            </div>

            <div className="group relative bg-brand-card border border-white/10 p-4 rounded-xl overflow-hidden hover:border-brand-blue/40 transition-all shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-black">
                <img
                  src="/images/ready_despatch_steel_1782739073119.jpg"
                  alt="MetFin India Steel Finished Bundles"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm">
                    Ready for Despatch Bundles
                  </h4>
                  <p className="text-xs text-brand-silver/60 mt-1 font-sans">
                    Finished bright centerless-ground bars meticulously packed, plastic-shrink wrapped, and purple end color-coded.
                  </p>
                </div>
                <span className="font-mono text-[0.65rem] text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded border border-brand-blue/20 flex-shrink-0 uppercase font-bold">
                  QC Passed Tags
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
