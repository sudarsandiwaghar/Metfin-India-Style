import React from "react";
import { motion } from "motion/react";
import { TrendingUp, Award, Zap, HardHat } from "lucide-react";

export default function Capacity() {
  const metrics = [
    {
      title: "Black Bar Straightening",
      current: 300,
      target: 300,
      unit: "T / Month",
      desc: "Bend removal capacity handled by Alankar Udyog machinery setup.",
      color: "from-brand-purple to-brand-blue"
    },
    {
      title: "Peeling + Reeling + Grinding",
      current: 300,
      target: 500,
      unit: "T / Month",
      desc: "Planned expansion target to double output by April 2025, using vacant allocated floor space.",
      color: "from-brand-yellow to-brand-orange"
    },
    {
      title: "Material Storage Facility",
      current: 450,
      target: 600,
      unit: "T Stock Limit",
      desc: "Dedicated internal warehouse footprint with high-volume overhead EOT handling.",
      color: "from-brand-blue to-brand-purple"
    }
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden border-t border-white/5">
      {/* Backlighting effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-start mb-16">
          <span className="font-mono text-xs text-brand-yellow tracking-[0.3em] uppercase mb-3">
            PLANT CAPACITY
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none uppercase">
            OPERATIONAL LIMITS & <br />
            <span className="text-brand-purple">GROWTH HORIZON</span>
          </h2>
          <div className="w-20 h-1 bg-brand-purple mt-5" />
        </div>

        {/* Top summary row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          <div className="bg-brand-card border border-white/10 p-5 rounded-lg flex items-center gap-4">
            <div className="p-3 rounded bg-brand-purple/10 text-brand-purple">
              <TrendingUp size={20} />
            </div>
            <div>
              <span className="font-mono text-[0.6rem] text-brand-silver/50 uppercase block">TARGET GROWTH</span>
              <span className="font-display font-bold text-lg text-white block mt-0.5">500 T / Month</span>
              <span className="text-xs text-brand-orange font-semibold block mt-1">(By April 2025)</span>
            </div>
          </div>

          <div className="bg-brand-card border border-white/10 p-5 rounded-lg flex items-center gap-4">
            <div className="p-3 rounded bg-brand-yellow/10 text-brand-yellow">
              <HardHat size={20} />
            </div>
            <div>
              <span className="font-mono text-[0.6rem] text-brand-silver/50 uppercase block">EOT OVERHEADS</span>
              <span className="font-display font-bold text-lg text-white block mt-0.5">2 × 5T Cranes</span>
              <span className="text-xs text-brand-silver/60 block mt-1">Twin overhead crane line</span>
            </div>
          </div>

          <div className="bg-brand-card border border-white/10 p-5 rounded-lg flex items-center gap-4">
            <div className="p-3 rounded bg-brand-blue/10 text-brand-blue">
              <Zap size={20} />
            </div>
            <div>
              <span className="font-mono text-[0.6rem] text-brand-silver/50 uppercase block">CONNECTED ENERGY</span>
              <span className="font-display font-bold text-lg text-white block mt-0.5">97 KVA</span>
              <span className="text-xs text-brand-silver/60 block mt-1">(130 Horsepower)</span>
            </div>
          </div>

          <div className="bg-brand-card border border-white/10 p-5 rounded-lg flex items-center gap-4">
            <div className="p-3 rounded bg-brand-silver/10 text-brand-silver">
              <Award size={20} />
            </div>
            <div>
              <span className="font-mono text-[0.6rem] text-brand-silver/50 uppercase block">FACTORY FLOOR AREA</span>
              <span className="font-display font-bold text-lg text-white block mt-0.5">8,333 Sq Ft</span>
              <span className="text-xs text-brand-silver/60 block mt-1">Ambattur-Vanagaram Road</span>
            </div>
          </div>

        </div>

        {/* Dynamic Gauges & Dashboard Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {metrics.map((m) => {
            const pct = Math.round((m.current / m.target) * 100);

            return (
              <div
                key={m.title}
                className="bg-brand-card border border-white/10 hover:border-white/20 p-6 rounded-xl flex flex-col justify-between transition-all duration-300 shadow-2xl relative overflow-hidden"
              >
                {/* Decorative layout label */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[0.6rem] text-brand-silver/40 tracking-widest uppercase">
                    METRIC_CORE_CAP //
                  </span>
                  <span className="font-mono text-[0.65rem] text-brand-yellow font-bold uppercase tracking-widest bg-brand-yellow/10 px-2 py-0.5 rounded">
                    {pct}% OF TARGET
                  </span>
                </div>

                {/* Meter details */}
                <div className="mb-6">
                  <h4 className="font-display font-bold text-base text-white tracking-wider uppercase mb-1">
                    {m.title}
                  </h4>
                  <p className="text-xs text-brand-silver/60 leading-relaxed font-sans">
                    {m.desc}
                  </p>
                </div>

                {/* Progress bar visual */}
                <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
                  <div className="flex justify-between items-end">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-bold text-3xl text-white">
                        {m.current}
                      </span>
                      <span className="font-mono text-xs text-brand-silver/40">
                        {m.unit} (Current)
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-display font-bold text-base text-brand-purple">
                        {m.target}
                      </span>
                      <span className="font-mono text-[0.65rem] text-brand-silver/30 block">
                        Target limit
                      </span>
                    </div>
                  </div>

                  {/* Slider bar background */}
                  <div className="w-full h-2.5 bg-black rounded-full overflow-hidden relative border border-white/5">
                    {/* Active slider color fill */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${m.color}`}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
