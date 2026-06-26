import React from "react";

export default function Industries() {
  const sectors = [
    "AUTOMOTIVE",
    "HYDRAULICS",
    "MACHINE TOOLS",
    "DEFENCE",
    "OIL & GAS",
    "AEROSPACE",
    "PUMP INDUSTRY",
    "FASTENERS",
    "AUTO COMPONENTS",
    "CONSTRUCTION"
  ];

  // We duplicate the list to make the loop seamless
  const marqueeItems = [...sectors, ...sectors];

  return (
    <section className="py-12 bg-black border-y border-white/10 overflow-hidden relative">
      {/* Absolute overlay fades for seamless edge gradients */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex items-center">
        {/* Continuous scrolling track */}
        <div className="flex gap-16 whitespace-nowrap animate-[marqueeScroll_30s_linear_infinite] hover:[animation-play-state:paused] cursor-help">
          {marqueeItems.map((sec, idx) => (
            <div key={`${sec}-${idx}`} className="flex items-center gap-6">
              <span className="font-mono text-xs md:text-sm font-semibold tracking-[0.3em] text-brand-silver/50 hover:text-brand-purple transition-colors duration-200 uppercase">
                {sec}
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-purple" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
