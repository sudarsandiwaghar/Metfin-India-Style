import React from "react";
import { motion } from "motion/react";
import ThreeSteelBar from "./ThreeSteelBar";
import { ArrowRight, Flame, ShieldCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 md:pt-36 pb-16 flex items-center overflow-hidden bg-brand-bg">
      {/* Dynamic Background Glow Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft atmospheric gradient blur */}
        <div className="absolute top-1/4 right-0 w-[45vw] h-[45vw] rounded-full bg-brand-purple/10 blur-[130px]" />
        <div className="absolute bottom-1/4 left-10 w-[30vw] h-[30vw] rounded-full bg-brand-blue/5 blur-[100px]" />
        {/* Futuristic grid overlay lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #9B72CF 1px, transparent 1.5px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Side: Brand Text & Metrics */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Tag Box - ISO 9001:2015 Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
            <span className="font-mono text-[0.65rem] md:text-xs font-semibold text-brand-yellow tracking-widest uppercase">
              ISO 9001:2015 CERTIFIED ≋
            </span>
          </motion.div>

          {/* Hero H1 Main Display */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-5 uppercase"
          >
            BRIGHT STEEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-silver to-brand-blue drop-shadow-sm text-3xl sm:text-4xl md:text-5xl">
              PRECISION PEELED AND GROUND BARS
            </span>
          </motion.h1>

          {/* Subheading Stated Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-brand-silver/80 font-sans text-sm md:text-base max-w-xl leading-relaxed mb-8"
          >
            Chennai's premier MSME manufacturer of high-tolerance bright steel bars. 
            <strong className="text-brand-yellow font-semibold font-display tracking-wider block mt-2 text-base md:text-lg">
              "Right Quality. Right Price. Right Time."
            </strong>
            Every batch crafted to absolute dimensional perfection under rigid QMS standards.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12"
          >
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple/95 text-black font-display font-semibold tracking-widest uppercase py-3.5 px-7 rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.25)] hover:shadow-[0_0_35px_rgba(197,160,89,0.4)] w-full sm:w-auto"
            >
              Request Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-center border border-white/20 hover:border-brand-blue bg-white/5 hover:bg-brand-blue/10 text-white font-display font-semibold tracking-widest uppercase py-3.5 px-7 rounded-md transition-all duration-300 w-full sm:w-auto"
            >
              View Machines
            </Link>
          </motion.div>

          {/* Stats Bar Component */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-white/10"
          >
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl md:text-3xl text-brand-purple">
                300T
              </span>
              <span className="font-mono text-[0.6rem] text-brand-silver/50 uppercase tracking-wider mt-1">
                Monthly Output
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl md:text-3xl text-brand-yellow">
                ISO 9001
              </span>
              <span className="font-mono text-[0.6rem] text-brand-silver/50 uppercase tracking-wider mt-1">
                24DQME63 QMS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl md:text-3xl text-brand-blue">
                25+ Yrs
              </span>
              <span className="font-mono text-[0.6rem] text-brand-silver/50 uppercase tracking-wider mt-1">
                Partner Exp
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl md:text-3xl text-brand-silver">
                48 Hours
              </span>
              <span className="font-mono text-[0.6rem] text-brand-silver/50 uppercase tracking-wider mt-1">
                RFQ Turnaround
              </span>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Interactive 3D Bright Bar Canvas Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="lg:col-span-5 w-full flex justify-center items-center relative"
        >
          {/* Animated decorative ring overlays behind the canvas */}
          <div className="absolute w-[80%] h-[80%] rounded-full border border-brand-purple/10 animate-pulse-subtle pointer-events-none" />
          
          {/* Actual WebGL 3D Interactive Canvas Component */}
          <div className="w-full max-w-[450px] md:max-w-none relative">
            <ThreeSteelBar />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
