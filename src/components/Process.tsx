import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Disc, ChevronRight, Zap } from "lucide-react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "INPUT BLACK BAR",
      machine: "Mill Sourced Billets",
      size: "Bend removal up to 300 T / Month",
      desc: "Raw hot-rolled black bars enter the facility. Before processing, we perform full surface inspections and heavy bend removal to establish straightness datum.",
      science: "Removes industrial scales, macro-bends, and relieves raw internal cooling stresses.",
      color: "from-brand-purple/20 to-black border-brand-purple/40",
      indicatorColor: "bg-brand-purple"
    },
    {
      num: "02",
      title: "STRAIGHTENING",
      machine: "Alankar Udyog Straightener",
      size: "20mm – 55mm",
      desc: "Bars are processed through multi-roll cross straightening. This achieves exceptional axial alignment crucial for high-speed automated lathe feeds.",
      science: "Alters material yield strength temporarily under multi-axial bending to yield pristine straightness.",
      color: "from-brand-yellow/20 to-black border-brand-yellow/40",
      indicatorColor: "bg-brand-yellow"
    },
    {
      num: "03",
      title: "PEELING",
      machine: "Alankar Udyog Peeler",
      size: "28mm – 63mm",
      desc: "High-speed rotating cutter heads strip away the outer 'de-carburized' skin, exposing raw base metal completely free of oxide defects and surface cracks.",
      science: "Peels away surface decarbonization layers, micro-seams, and standard hot-rolled structural blemishes.",
      color: "from-brand-blue/20 to-black border-brand-blue/40",
      indicatorColor: "bg-brand-blue"
    },
    {
      num: "04",
      title: "REELING",
      machine: "Alankar Udyog Reeler",
      size: "25mm – 65mm",
      desc: "Bars pass through heavy precision pressure rollers. This burnishes the peeled surface and calibrates the cross-section to an extremely high circular tolerance.",
      science: "Provides cross-sectional roundness and applies outer skin cold-working to elevate surface hardness.",
      color: "from-brand-silver/20 to-black border-brand-silver/40",
      indicatorColor: "bg-brand-silver"
    },
    {
      num: "05",
      title: "GRINDING & FINISHING",
      machine: "Riat – RG3 Grinder",
      size: "25mm – 63mm",
      desc: "The final centerless grinding stage. This delivers mirror-like surface roughness (Ra) and strict micron-level tolerances (e.g. h9, h11) ready for high-end applications.",
      science: "Super-abrasive finishing that delivers precise dimensional tolerances and reflective finish.",
      color: "from-brand-purple/20 via-brand-blue/10 to-black border-white/30",
      indicatorColor: "bg-gradient-to-r from-brand-purple to-brand-blue"
    }
  ];

  return (
    <section id="process" className="py-24 bg-brand-bg/95 relative overflow-hidden border-t border-white/5">
      {/* Light Blur Overlay */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-brand-yellow tracking-[0.3em] uppercase mb-3">
            MANUFACTURING FLOW
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none uppercase">
            BLACK BAR <span className="text-brand-purple">➔</span> BRIGHT BAR
          </h2>
          <p className="text-brand-silver/50 font-sans text-xs md:text-sm max-w-lg mt-4 uppercase tracking-wider">
            Five precision stages. Zero compromise on surface metallurgy or dimensional microns.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-purple to-brand-blue mt-5" />
        </div>

        {/* Stepper Selection Map */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-12">
          {steps.map((step, idx) => (
            <button
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-lg border text-left flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                activeStep === idx
                  ? `bg-brand-card shadow-2xl border-white/20 scale-[1.03] z-10`
                  : "bg-black/40 hover:bg-[#0a0a0a]/60 border-white/5"
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <span className="font-mono text-xs text-brand-silver/30">STAGE_{step.num}</span>
                <span className={`w-2.5 h-2.5 rounded-full ${step.indicatorColor} ${activeStep === idx ? "scale-125 animate-pulse" : "opacity-40"}`} />
              </div>
              
              <div className="mt-8">
                <h4 className={`font-display font-bold text-sm tracking-widest ${activeStep === idx ? "text-brand-yellow" : "text-brand-silver/70"}`}>
                  {step.title}
                </h4>
                <p className="font-mono text-[0.65rem] text-brand-silver/40 mt-1 uppercase tracking-wider truncate">
                  {step.machine}
                </p>
              </div>

              {/* Step completion percentage tracker line */}
              <div className="absolute bottom-0 left-0 h-1 bg-brand-purple/40 transition-all duration-500" style={{ width: activeStep >= idx ? "100%" : "0%" }} />
            </button>
          ))}
        </div>

        {/* Focus Window displaying active step details */}
        <div className="bg-brand-card border border-white/10 rounded-xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative overflow-hidden">
          
          {/* Subtle metal dust glow background effect */}
          <div className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />

          {/* Left Column of Focus: Tech Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-brand-purple/15 text-brand-purple border border-brand-purple/20">
                  STAGE {steps[activeStep].num} OF 05
                </span>
                <span className="font-mono text-xs text-brand-silver/40 uppercase">
                  | {steps[activeStep].machine}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl md:text-3xl text-white tracking-wider uppercase mb-4">
                {steps[activeStep].title}
              </h3>

              <p className="text-brand-silver/80 text-sm leading-relaxed font-sans mb-6">
                {steps[activeStep].desc}
              </p>
            </div>

            {/* Technical Parameters Subpanel */}
            <div className="border-t border-white/5 pt-6 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono text-xs text-brand-silver/40 uppercase tracking-widest">
                  SIZE / RANGE RANGE:
                </span>
                <span className="font-mono text-sm text-brand-yellow font-bold">
                  {steps[activeStep].size}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono text-xs text-brand-silver/40 uppercase tracking-widest">
                  METALLURGICAL EFFECT:
                </span>
                <span className="font-mono text-xs text-brand-blue text-left sm:text-right font-medium">
                  {steps[activeStep].science}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column of Focus: Animated Isometric Transformation Specimen Graphic */}
          <div className="lg:col-span-5 bg-black/50 border border-white/5 p-6 rounded-lg flex flex-col items-center justify-center relative min-h-[220px]">
            
            {/* Visualizer Frame Header */}
            <div className="absolute top-4 left-4 font-mono text-[0.6rem] text-brand-silver/30 uppercase tracking-wider">
              VISUALIZER_CORE // STEEL_STATE_MAP
            </div>

            {/* Interactive animated 3D bar representation depending on selected stage */}
            <div className="relative w-full flex items-center justify-center h-44">
              
              {/* Dynamic bar cylinder rendering (changes texture based on step) */}
              <div
                className="w-full max-w-[280px] h-14 rounded-md relative shadow-2xl transition-all duration-500 flex items-center justify-center overflow-hidden"
                style={{
                  background: activeStep === 0
                    ? "linear-gradient(90deg, #1f1f1f 0%, #3a3a3a 50%, #1f1f1f 100%)" // Rough black steel
                    : activeStep === 1
                    ? "linear-gradient(90deg, #2d2d2d 0%, #5c5c5c 50%, #2d2d2d 100%)" // Aligned grey steel
                    : activeStep === 2
                    ? "linear-gradient(90deg, #444444 0%, #a3a3a3 50%, #444444 100%)" // Peeled rough silver
                    : activeStep === 3
                    ? "linear-gradient(90deg, #666666 0%, #cccccc 50%, #666666 100%)" // Reeled semi-bright
                    : "linear-gradient(90deg, #888888 0%, #ffffff 40%, #e1e1e1 60%, #888888 100%)", // Mirror Ground Bright Bar
                  boxShadow: activeStep === 4 
                    ? "0 0 35px rgba(255,255,255,0.15), inset 0 0 10px rgba(255,255,255,0.4)" 
                    : "none"
                }}
              >
                {/* Mirror reflection overlay for ground stage */}
                {activeStep === 4 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%] -translate-x-full animate-[marqueeScroll_4s_linear_infinite]" />
                )}
                {/* Scale texture overlay for rough stage */}
                {activeStep === 0 && (
                  <div className="absolute inset-0 opacity-45 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:6px_6px]" />
                )}
                
                {/* Interactive scale/label overlay inside */}
                <span className="font-mono text-[0.6rem] text-black bg-brand-yellow px-1.5 py-0.5 rounded tracking-wider font-bold shadow z-10">
                  {activeStep === 0 ? "RAW BLACK BAR" : activeStep === 4 ? "MIRROR BRIGHT BAR" : "IN-PROCESS"}
                </span>
              </div>

              {/* Moving Grinding Laser lines / cutter heads during step 2, 3, 4 */}
              {activeStep > 0 && activeStep < 4 && (
                <div className="absolute w-1.5 h-20 bg-brand-blue/80 blur-[2px] animate-[float_1.5s_ease-in-out_infinite] left-1/4" />
              )}
              {activeStep === 4 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Glowing sparks animation ring */}
                  <div className="w-16 h-16 border-2 border-dashed border-brand-purple/40 rounded-full animate-spin absolute" />
                  <div className="w-24 h-24 border border-brand-blue/20 rounded-full animate-spin-slow absolute" />
                </div>
              )}
            </div>

            <div className="w-full flex items-center justify-between border-t border-white/5 pt-4">
              <span className="font-mono text-[0.6rem] text-brand-silver/40">
                SURFACE (Ra): <span className="text-white">{activeStep === 0 ? "12.5+ μm" : activeStep === 4 ? "< 0.4 μm" : "1.6 - 6.3 μm"}</span>
              </span>
              <span className="font-mono text-[0.6rem] text-brand-silver/40">
                TOLERANCE: <span className="text-white">{activeStep === 0 ? "Commercial" : activeStep === 4 ? "h9 - h11 (Microns)" : "Standard"}</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
