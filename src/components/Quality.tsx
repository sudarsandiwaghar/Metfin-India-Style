import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ShieldAlert, Award, Sliders, TableProperties, HelpCircle } from "lucide-react";

export default function Quality() {
  const [hoveredGauge, setHoveredGauge] = useState<string | null>(null);

  const gauges = [
    { no: "MFIS-MM-01", desc: "Micrometer", range: "0 - 25 mm" },
    { no: "MFIS-MM-05", desc: "Micrometer", range: "0 - 25 mm" },
    { no: "MFIS-MM-02", desc: "Micrometer", range: "25 - 50 mm" },
    { no: "MFIS-MM-06", desc: "Micrometer", range: "25 - 50 mm" },
    { no: "MFIS-MM-07", desc: "Micrometer", range: "25 - 50 mm" },
    { no: "MFIS-MM-03", desc: "Micrometer", range: "50 - 75 mm" },
    { no: "MFIS-MM-08", desc: "Micrometer", range: "50 - 75 mm" },
    { no: "MFIS-MM-09", desc: "Micrometer", range: "50 - 75 mm" },
    { no: "MFIS-LMM-04", desc: "Lobing Micrometer", range: "25 - 40 mm", special: true }
  ];

  return (
    <section id="quality" className="py-24 bg-brand-bg relative overflow-hidden border-t border-white/5">
      {/* Dynamic glow effect */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-purple/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs text-brand-yellow tracking-[0.3em] uppercase mb-3">
            QUALITY ASSURANCE
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none uppercase">
            INSPECTION METRIC NODES & <br />
            <span className="text-brand-purple">STATUTORY STANDARDS</span>
          </h2>
          <div className="w-20 h-1 bg-brand-purple mt-5" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: ISO Certificate + Quality Policy */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            <div className="bg-brand-card border border-white/10 p-6 rounded-xl relative overflow-hidden shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand-purple/10 text-brand-purple rounded-lg">
                  <Award size={28} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                    ISO 9001:2015 CERTIFIED
                  </h3>
                  <p className="font-mono text-xs text-brand-silver/50 uppercase mt-0.5">
                    CERTIFICATE NO: 24DQME63
                  </p>
                </div>
              </div>
              
              <p className="text-xs text-brand-silver/80 leading-relaxed font-sans mb-4">
                M/S METFIN INDIA STEEL is certified by <strong>ROHS Certification Pvt. Ltd.</strong> (accredited by IAF/EIAC) with a registered scope for the <strong>"Manufacture and Supply of Bright Steel Bars"</strong>. Our systems strictly conform to the highest global Quality Management guidelines.
              </p>

              <div className="border-t border-white/5 pt-4 flex flex-wrap gap-4 justify-between">
                <div>
                  <span className="text-[0.6rem] font-mono text-brand-silver/40 block">INITIAL REGISTRATION</span>
                  <span className="text-xs font-mono text-white font-semibold">09 / 04 / 2024</span>
                </div>
                <div>
                  <span className="text-[0.6rem] font-mono text-brand-silver/40 block">CURRENT EXPIRY</span>
                  <span className="text-xs font-mono text-white font-semibold">08 / 04 / 2027</span>
                </div>
              </div>
            </div>

            {/* Quality Policy Panel */}
            <div className="bg-brand-card border border-l-4 border-brand-purple border-y-white/10 border-r-white/10 p-6 rounded-r-xl shadow-2xl">
              <h4 className="font-display font-bold text-xs text-brand-yellow uppercase tracking-[0.2em] mb-4">
                CORPORATE QUALITY POLICY
              </h4>
              <p className="text-xs text-brand-silver/90 italic leading-relaxed font-sans mb-4">
                "We at Metfin India steel are committed to supply Quality Steel Bars in Bright and Enhanced Surface condition at Right time and Right cost with the fullest satisfaction of Customers, complying to all applicable Statutory and Regulatory requirements. We will achieve this by proper planning and implementation of effective Quality Management system, focusing on Continual Improvement in the areas of QCDD (Quality, Cost, Delivery and Development)."
              </p>
              
              {/* QCDD breakdown badges */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/5 text-center">
                <div className="bg-black/50 p-2 rounded">
                  <span className="font-display font-bold text-xs text-brand-purple block">Q</span>
                  <span className="text-[0.55rem] font-mono text-brand-silver/50 block">QUALITY</span>
                </div>
                <div className="bg-black/50 p-2 rounded">
                  <span className="font-display font-bold text-xs text-brand-yellow block">C</span>
                  <span className="text-[0.55rem] font-mono text-brand-silver/50 block">COST</span>
                </div>
                <div className="bg-black/50 p-2 rounded">
                  <span className="font-display font-bold text-xs text-brand-blue block">D</span>
                  <span className="text-[0.55rem] font-mono text-brand-silver/50 block">DELIVERY</span>
                </div>
                <div className="bg-black/50 p-2 rounded">
                  <span className="font-display font-bold text-xs text-brand-silver block">D</span>
                  <span className="text-[0.55rem] font-mono text-brand-silver/50 block">DEV</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Panel: Magnetic Particle Inspection & Precision Gauges Tray */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* MPI station card */}
            <div className="bg-brand-card border border-white/10 p-6 rounded-xl relative overflow-hidden shadow-2xl hover:border-brand-blue/30 transition-all">
              <div className="absolute top-4 right-4 animate-pulse">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue font-mono text-[0.6rem] font-bold">
                  NDT TESTING ACTIVE
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-brand-blue tracking-wider uppercase mb-5">
                MAGNETIC PARTICLE INSPECTION (MPI)
              </h3>

              <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-4 mb-4">
                <div>
                  <span className="text-[0.6rem] font-mono text-brand-silver/40 block">MANUFACTURER</span>
                  <span className="text-sm font-display font-bold text-white uppercase mt-0.5">Vibrant NDT</span>
                </div>
                <div>
                  <span className="text-[0.6rem] font-mono text-brand-silver/40 block">COIL TESTING CAPACITY</span>
                  <span className="text-sm font-display font-bold text-brand-yellow uppercase mt-0.5">Upto 70 mm</span>
                </div>
                <div>
                  <span className="text-[0.6rem] font-mono text-brand-silver/40 block">CRACK DETECTOR CAPACITY</span>
                  <span className="text-sm font-display font-bold text-white uppercase mt-0.5">3000 Amps</span>
                </div>
                <div>
                  <span className="text-[0.6rem] font-mono text-brand-silver/40 block">INSTRUMENT REF / CODE</span>
                  <span className="text-sm font-mono text-brand-purple font-semibold mt-0.5">VNSPL/MCD/140</span>
                </div>
              </div>

              <p className="text-xs text-brand-silver/70 leading-relaxed font-sans">
                Every ground bright bar batch undergoes magnetic particle analysis to rule out internal microstructural surface fractures and sub-surface cracks.
              </p>
            </div>

            {/* Precision Gauges Instrument Tray */}
            <div className="bg-brand-card border border-white/10 p-6 rounded-xl shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest flex items-center gap-2">
                  <Sliders size={16} className="text-brand-purple animate-spin-slow" /> METROLOGY INSTRUMENT TRAY
                </h4>
                <span className="font-mono text-[0.65rem] text-brand-silver/40 uppercase">
                  9 calibrated units
                </span>
              </div>

              <p className="text-xs text-brand-silver/60 mb-5 font-sans">
                We maintain absolute dimensional control with nine high-precision digital micrometers and specialized three-point gauges to identify surface lobing.
              </p>

              {/* Grid of Gauges */}
              <div className="grid grid-cols-3 gap-2">
                {gauges.map((g) => (
                  <div
                    key={g.no}
                    onMouseEnter={() => setHoveredGauge(g.no)}
                    onMouseLeave={() => setHoveredGauge(null)}
                    className={`p-3 rounded border text-left flex flex-col justify-between h-20 transition-all duration-300 relative ${
                      g.special 
                        ? "border-brand-yellow/40 bg-brand-yellow/5 hover:bg-brand-yellow/10" 
                        : "border-white/5 bg-black/40 hover:border-brand-purple/30"
                    } ${hoveredGauge === g.no ? "scale-105 shadow-xl border-white/20 z-10" : ""}`}
                  >
                    <span className="font-mono text-[0.55rem] text-brand-silver/30 block uppercase tracking-wider truncate">
                      {g.no}
                    </span>
                    <div className="mt-1">
                      <span className={`font-display font-bold text-[0.7rem] block tracking-wider ${g.special ? "text-brand-yellow" : "text-white"}`}>
                        {g.desc.toUpperCase()}
                      </span>
                      <span className="font-mono text-[0.65rem] text-brand-purple font-bold block mt-0.5">
                        {g.range}
                      </span>
                    </div>

                    {g.special && (
                      <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brand-yellow animate-ping" />
                    )}
                  </div>
                ))}
              </div>

              {/* Live Status Description */}
              <div className="mt-4 p-3 bg-black/40 border border-white/5 rounded text-left">
                {hoveredGauge ? (
                  <p className="font-mono text-[0.65rem] text-brand-yellow uppercase tracking-wider">
                    HOVERED INSTRUMENT: {hoveredGauge} // CALIBRATION: <span className="text-white">VERIFIED / PASS</span>
                  </p>
                ) : (
                  <p className="font-mono text-[0.65rem] text-brand-silver/40 uppercase tracking-wider text-center">
                    SELECT A GAUGE TO AUDIT SYSTEM CODE
                  </p>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
