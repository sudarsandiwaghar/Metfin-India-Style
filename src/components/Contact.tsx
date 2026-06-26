import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, Calculator, CheckCircle2, ShieldAlert } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "EN8",
    processing: "All (Full Bright Bar)",
    diameter: 25,
    length: 3,
    quantity: 1,
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone Number so our partners can contact you.");
      return;
    }
    // Generate simulated quote reference ID
    const randomId = "MFIS-RFQ-" + Math.floor(100000 + Math.random() * 900000);
    setQuoteId(randomId);
    setIsSubmitted(true);
  };

  // Metfin standard steel grades from brochure
  const steelGrades = ["EN1A", "EN1A L", "EN8", "EN9", "EN15", "EN19", "EN24", "EN31", "Mild Steel (MS)", "Other Alloy Steel"];
  const processingTypes = [
    "Full Bright Bar (Peel + Reel + Grind)",
    "Peeling + Reeling Only",
    "Centerless Grinding Only",
    "Straightening / Bend Removal Only"
  ];

  // Calculated estimated weight of bright bar
  // formula: weight (kg) = diameter(mm) * diameter(mm) * 0.00617 * length(m)
  const estUnitWeight = Math.round(formData.diameter * formData.diameter * 0.00617 * formData.length * 100) / 100;
  const estTotalWeightKg = Math.round(estUnitWeight * (formData.quantity * 1000));

  return (
    <section id="contact" className="py-24 bg-brand-bg relative overflow-hidden border-t border-white/5">
      {/* Background glow overlay */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-brand-purple/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-brand-yellow tracking-[0.3em] uppercase mb-3">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none uppercase">
            REQUEST A PRECISION QUOTE
          </h2>
          <p className="text-brand-silver/50 font-sans text-xs md:text-sm max-w-lg mt-4 uppercase tracking-wider">
            Send us your grade, size, and tonnage — S. Irudayaraj & C. Diwaghar will respond within 48 hours.
          </p>
          <div className="w-20 h-1 bg-brand-purple mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & stylized vector blueprint Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <h3 className="font-display font-bold text-xl text-white tracking-widest uppercase mb-2">
              DIRECT PARTNER CHANNELS
            </h3>

            {/* C. Diwaghar card */}
            <a
              href="tel:9840046236"
              className="bg-brand-card border border-white/10 hover:border-brand-purple/40 p-5 rounded-lg flex items-center gap-4 group transition-all shadow-2xl"
            >
              <div className="p-3.5 bg-brand-purple/10 text-brand-purple group-hover:scale-110 transition-transform rounded-lg">
                <Phone size={20} />
              </div>
              <div>
                <span className="font-mono text-[0.6rem] text-brand-yellow uppercase tracking-widest block">
                  PARTNER — ENGINEERING & RFQs
                </span>
                <span className="font-display font-bold text-base text-white block mt-0.5">
                  C. Diwaghar
                </span>
                <span className="font-mono text-sm text-brand-purple block mt-1 font-semibold">
                  +91 98400 46236
                </span>
              </div>
            </a>

            {/* K. S. Ramachandran card */}
            <a
              href="tel:9841913510"
              className="bg-brand-card border border-white/10 hover:border-brand-yellow/40 p-5 rounded-lg flex items-center gap-4 group transition-all shadow-2xl"
            >
              <div className="p-3.5 bg-brand-yellow/10 text-brand-yellow group-hover:scale-110 transition-transform rounded-lg">
                <Phone size={20} />
              </div>
              <div>
                <span className="font-mono text-[0.6rem] text-brand-yellow uppercase tracking-widest block">
                  PARTNER — OPERATIONS & COMMERCIAL
                </span>
                <span className="font-display font-bold text-base text-white block mt-0.5">
                  K. S. Ramachandran
                </span>
                <span className="font-mono text-sm text-brand-yellow block mt-1 font-semibold">
                  +91 98419 13510
                </span>
              </div>
            </a>

            {/* S. Irudayaraj card */}
            <a
              href="tel:9900791913"
              className="bg-brand-card border border-white/10 hover:border-brand-blue/40 p-5 rounded-lg flex items-center gap-4 group transition-all shadow-2xl"
            >
              <div className="p-3.5 bg-brand-blue/10 text-brand-blue group-hover:scale-110 transition-transform rounded-lg">
                <Phone size={20} />
              </div>
              <div>
                <span className="font-mono text-[0.6rem] text-brand-yellow uppercase tracking-widest block">
                  PARTNER — SUPPLY CHAIN
                </span>
                <span className="font-display font-bold text-base text-white block mt-0.5">
                  S. Irudayaraj
                </span>
                <span className="font-mono text-sm text-brand-blue block mt-1 font-semibold">
                  +91 99007 91913
                </span>
              </div>
            </a>

            {/* Email card */}
            <a
              href="mailto:metfin.bright@gmail.com"
              className="bg-brand-card border border-white/10 hover:border-white/30 p-5 rounded-lg flex items-center gap-4 group transition-all shadow-2xl"
            >
              <div className="p-3.5 bg-brand-silver/10 text-brand-silver group-hover:scale-110 transition-transform rounded-lg">
                <Mail size={20} />
              </div>
              <div>
                <span className="font-mono text-[0.6rem] text-brand-silver/40 block uppercase tracking-widest">
                  GENERAL EMAIL ENQUIRIES
                </span>
                <span className="font-mono text-sm text-white block mt-1 hover:text-brand-purple transition-colors font-semibold">
                  metfin.bright@gmail.com
                </span>
              </div>
            </a>

            {/* Factory address card */}
            <div className="bg-brand-card border border-white/10 p-5 rounded-lg flex items-start gap-4 shadow-2xl">
              <div className="p-3.5 bg-brand-yellow/10 text-brand-yellow rounded-lg mt-0.5">
                <MapPin size={20} />
              </div>
              <div>
                <span className="font-mono text-[0.6rem] text-brand-yellow block uppercase tracking-widest">
                  FACTORY HEADQUARTERS
                </span>
                <span className="font-display font-bold text-sm text-white block mt-1 uppercase tracking-wide">
                  M/S METFIN INDIA STEEL
                </span>
                <p className="text-xs text-brand-silver/80 mt-1.5 leading-relaxed font-sans">
                  Plot No. 8, Survey No. 34/1, <br />
                  Vanagaram – Ambattur Road, <br />
                  Ayanambakkam, Chennai – 600 095, <br />
                  Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Stylized industrial vector blueprint Map */}
            <div className="h-44 rounded-lg bg-black border border-white/10 relative overflow-hidden flex items-center justify-center p-4">
              <div className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: "linear-gradient(to right, #9B72CF 1px, transparent 1px), linear-gradient(to bottom, #9B72CF 1px, transparent 1px)",
                  backgroundSize: "16px 16px"
                }}
              />
              
              {/* Graphic map lines */}
              <svg viewBox="0 0 400 180" className="w-full h-full text-brand-silver/10 font-mono">
                {/* Major Highways */}
                <line x1="10" y1="90" x2="390" y2="90" stroke="currentColor" strokeWidth="3" strokeDasharray="6,4" />
                <line x1="180" y1="10" x2="180" y2="170" stroke="currentColor" strokeWidth="1.5" />
                {/* Text Road labels */}
                <text x="30" y="80" fontSize="8" fill="#444" letterSpacing="1">AMBATTUR-VANAGARAM ROAD</text>
                <text x="190" y="30" fontSize="8" fill="#444" letterSpacing="1">CHENNAI BYPASS RD</text>
                
                {/* Neighbor landmarks */}
                <text x="25" y="140" fontSize="7" fill="#222">VANAGARAM</text>
                <text x="250" y="40" fontSize="7" fill="#222">AMBATTUR INDUSTRIAL AREA</text>
                
                {/* MetFin pin spot */}
                <g className="animate-pulse">
                  <circle cx="150" cy="90" r="10" fill="rgba(197,160,89,0.2)" />
                  <circle cx="150" cy="90" r="5" fill="#C5A059" />
                </g>
                <text x="145" y="70" fontSize="9" fill="#C5A059" fontWeight="bold" letterSpacing="1">MFIS PLANT 08</text>
              </svg>

              <div className="absolute bottom-2.5 right-2.5 font-mono text-[0.55rem] text-brand-silver/30">
                MAP_LOC_REF: AYANAMBAKKAM_CHENNAI
              </div>
            </div>

          </div>

          {/* Right Column: Custom RFQ Smart Form & Calculator */}
          <div className="lg:col-span-7 bg-brand-card border border-white/10 p-6 md:p-8 rounded-xl shadow-2xl relative">
            
            {/* Banner Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
              <Calculator size={18} className="text-brand-purple" />
              <h3 className="font-display font-bold text-sm text-white tracking-widest uppercase">
                RFQ SELECTOR & SPECTRA CALCULATOR
              </h3>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Grade & Processing Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-mono text-[0.65rem] text-brand-silver/50 uppercase tracking-widest">
                      Steel Grade Required:
                    </label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                      className="bg-black border border-white/10 rounded p-2.5 text-xs text-white focus:outline-none focus:border-brand-purple font-mono cursor-pointer"
                    >
                      {steelGrades.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-mono text-[0.65rem] text-brand-silver/50 uppercase tracking-widest">
                      Processing Requirement:
                    </label>
                    <select
                      name="processing"
                      value={formData.processing}
                      onChange={handleInputChange}
                      className="bg-black border border-white/10 rounded p-2.5 text-xs text-white focus:outline-none focus:border-brand-purple font-mono cursor-pointer"
                    >
                      {processingTypes.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Dimension sliders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 bg-black/40 border border-white/5 rounded-lg text-left">
                  
                  {/* Diameter Range (brochure max is 75mm) */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[0.65rem] text-brand-silver/50 uppercase">
                        Bar Diameter (mm):
                      </span>
                      <span className="font-mono text-xs text-brand-yellow font-bold">
                        {formData.diameter} mm
                      </span>
                    </div>
                    <input
                      type="range"
                      name="diameter"
                      min="20"
                      max="75"
                      value={formData.diameter}
                      onChange={handleSliderChange}
                      className="w-full accent-brand-purple h-1 bg-white/10 rounded-lg appearance-none cursor-ew-resize"
                    />
                    <div className="flex justify-between text-[0.55rem] font-mono text-brand-silver/30">
                      <span>20mm</span>
                      <span>75mm</span>
                    </div>
                  </div>

                  {/* Standard Bar Lengths */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[0.65rem] text-brand-silver/50 uppercase">
                        Bar Length (meters):
                      </span>
                      <span className="font-mono text-xs text-brand-blue font-bold">
                        {formData.length} m
                      </span>
                    </div>
                    <input
                      type="range"
                      name="length"
                      min="1"
                      max="6"
                      value={formData.length}
                      onChange={handleSliderChange}
                      className="w-full accent-brand-blue h-1 bg-white/10 rounded-lg appearance-none cursor-ew-resize"
                    />
                    <div className="flex justify-between text-[0.55rem] font-mono text-brand-silver/30">
                      <span>1 meter</span>
                      <span>6 meters</span>
                    </div>
                  </div>

                </div>

                {/* Real-time calculated properties based on selections */}
                <div className="grid grid-cols-2 gap-4 p-3 bg-brand-purple/5 border border-brand-purple/20 rounded text-left">
                  <div>
                    <span className="text-[0.55rem] font-mono text-brand-silver/40 block uppercase">
                      Est. Weight Per Bar:
                    </span>
                    <span className="font-mono text-xs text-white font-bold block mt-0.5">
                      {estUnitWeight} kg
                    </span>
                  </div>
                  <div>
                    <span className="text-[0.55rem] font-mono text-brand-silver/40 block uppercase">
                      Est. Metric Total (Tons):
                    </span>
                    <span className="font-mono text-xs text-brand-yellow font-bold block mt-0.5">
                      {formData.quantity} T
                    </span>
                  </div>
                </div>

                {/* Quantity Input & Basic Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-mono text-[0.65rem] text-brand-silver/50 uppercase tracking-widest">
                      Estimated Tonnage (Tons):
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="bg-black border border-white/10 rounded p-2.5 text-xs text-white focus:outline-none focus:border-brand-purple font-mono"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-mono text-[0.65rem] text-brand-silver/50 uppercase tracking-widest">
                      Your Phone Number:
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9840046236"
                      className="bg-black border border-white/10 rounded p-2.5 text-xs text-white focus:outline-none focus:border-brand-purple font-mono"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-mono text-[0.65rem] text-brand-silver/50 uppercase tracking-widest">
                      Contact Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Kumar"
                      className="bg-black border border-white/10 rounded p-2.5 text-xs text-white focus:outline-none focus:border-brand-purple"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-mono text-[0.65rem] text-brand-silver/50 uppercase tracking-widest">
                      Your Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. client@domain.com"
                      className="bg-black border border-white/10 rounded p-2.5 text-xs text-white focus:outline-none focus:border-brand-purple font-mono"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label className="font-mono text-[0.65rem] text-brand-silver/50 uppercase tracking-widest">
                    Specific Requirements or tolerances (e.g. h9, h11):
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="Provide specific tolerances, grade requirements or delivery locations..."
                    className="bg-black border border-white/10 rounded p-2.5 text-xs text-white focus:outline-none focus:border-brand-purple"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple/90 text-black font-display font-semibold tracking-widest uppercase py-3 rounded-md transition-all duration-300 shadow-xl"
                >
                  Submit Quote Request <Send size={14} />
                </button>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center gap-4"
              >
                <div className="p-4 bg-brand-purple/10 text-brand-purple rounded-full animate-bounce">
                  <CheckCircle2 size={44} />
                </div>
                
                <div>
                  <h4 className="font-display font-bold text-lg text-white uppercase tracking-widest">
                    QUOTE ENQUIRY REGISTERED
                  </h4>
                  <p className="font-mono text-xs text-brand-purple mt-1">
                    REFERENCE ID: {quoteId}
                  </p>
                </div>

                <div className="max-w-md bg-black/50 border border-white/5 rounded-lg p-5 text-left font-mono text-[0.7rem] leading-relaxed flex flex-col gap-2 mt-2">
                  <p className="text-brand-silver/50">// SUMMARY OF REGISTRATION DETAILS:</p>
                  <p><span className="text-brand-yellow">CLIENT:</span> {formData.name}</p>
                  <p><span className="text-brand-yellow">PHONE:</span> {formData.phone}</p>
                  <p><span className="text-brand-yellow">STEEL SPEC:</span> Grade {formData.grade} | {formData.diameter}mm diameter | {formData.length}m length</p>
                  <p><span className="text-brand-yellow">PROCESS:</span> {formData.processing}</p>
                  <p><span className="text-brand-yellow">ESTIMATED QUANTITY:</span> {formData.quantity} Tons ({estTotalWeightKg.toLocaleString()} kg total)</p>
                </div>

                <p className="text-xs text-brand-silver/80 mt-2 font-sans max-w-sm">
                  Your specifications have been routed to our managing partners. We will process this file and quote the conversion costing within <strong>48 hours</strong>.
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 border border-brand-purple/30 bg-brand-purple/10 hover:bg-brand-purple hover:text-black text-brand-purple font-display font-semibold text-xs tracking-widest uppercase py-2 px-6 rounded transition-all duration-300"
                >
                  Request another quote
                </button>
              </motion.div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
