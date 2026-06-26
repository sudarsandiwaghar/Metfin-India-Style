import React from "react";
import Logo from "./Logo";
import { ArrowUp, Hammer, Shield, ChevronRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-black text-brand-silver/80 pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Decorative layout elements */}
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        {/* Left column: Brand Signature & Stated Tagline */}
        <div className="md:col-span-4 flex flex-col items-start text-left gap-4">
          <Logo size={46} showText={true} />
          <p className="text-xs text-brand-silver/50 font-sans leading-relaxed mt-2 max-w-sm">
            "Right Quality. Right Price. Right Time." — MetFin India Steel is Chennai's ISO 9001:2015 certified partner for high-tolerance centerless-ground and peeled bright steel bars.
          </p>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-purple/10 border border-brand-purple/20 text-brand-purple font-mono text-[0.65rem] font-semibold mt-1">
            <Shield size={12} /> MSME MICRO ENTERPRISE
          </span>
        </div>

        {/* Center column: Factory coordinates */}
        <div className="md:col-span-5 flex flex-col items-start text-left gap-3">
          <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest">
            PLANT COORDINATES
          </h4>
          <p className="text-xs text-brand-silver/70 font-sans leading-relaxed uppercase tracking-wider">
            PLOT NO. 8, SURVEY NO. 34/1,<br />
            VANAGARAM – AMBATTUR ROAD,<br />
            AYANAMBAKKAM, CHENNAI – 600 095,<br />
            TAMIL NADU, INDIA
          </p>
          <div className="flex flex-col gap-1 mt-2">
            <span className="text-[0.6rem] font-mono text-brand-silver/40 uppercase">DIRECT EMAIL LINE:</span>
            <a href="mailto:metfin.bright@gmail.com" className="font-mono text-xs text-brand-purple hover:underline">
              metfin.bright@gmail.com
            </a>
          </div>
        </div>

        {/* Right column: Regulatory IDs */}
        <div className="md:col-span-3 flex flex-col items-start text-left gap-3">
          <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest">
            STATUTORY DATA
          </h4>
          <div className="flex flex-col gap-2.5 w-full">
            <div className="bg-[#090909] border border-white/5 p-2.5 rounded flex flex-col gap-0.5">
              <span className="text-[0.55rem] font-mono text-brand-silver/40 block">GSTIN REGISTRATION:</span>
              <span className="text-xs font-mono text-brand-yellow font-bold">33ABZFM8082C1ZU</span>
            </div>
            <div className="bg-[#090909] border border-white/5 p-2.5 rounded flex flex-col gap-0.5">
              <span className="text-[0.55rem] font-mono text-brand-silver/40 block">UDYAM REGISTRATION:</span>
              <span className="text-xs font-mono text-white font-bold">UDYAM-TN-02-0281610</span>
            </div>
          </div>
        </div>

      </div>

      {/* Lower Copyright section */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[0.65rem] text-brand-silver/30 text-center sm:text-left">
          © 2026 METFIN INDIA STEEL. ALL RIGHTS RESERVED | CHENNAI, INDIA.
        </p>

        <div className="flex items-center gap-6">
          <span className="font-mono text-[0.6rem] text-brand-silver/30 uppercase tracking-widest hidden md:inline">
            // DESIGNED FOR PRECISION
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-white/5 border border-white/10 text-brand-silver hover:text-brand-purple hover:border-brand-purple/40 rounded transition-all shadow-xl"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
