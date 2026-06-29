import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Capacity from "./components/Capacity";
import Machines from "./components/Machines";
import Quality from "./components/Quality";
import Strengths from "./components/Strengths";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

// Automatically handles window scroll resets on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Dynamically updates individual document header titles for SEO and tab display
function PageTitleHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/":
        document.title = "MetFin India Steel | High-Precision Bright Steel Bars";
        break;
      case "/product-quality":
        document.title = "Product Quality & Metrology | MetFin India Steel";
        break;
      case "/services":
        document.title = "Manufacturing Services & Capacities | MetFin India Steel";
        break;
      case "/about":
        document.title = "About Our Plant & Facilities | MetFin India Steel";
        break;
      case "/contact":
        document.title = "Contact Hub & Plant Coordinates | MetFin India Steel";
        break;
      case "/faq":
        document.title = "Frequently Asked Questions | MetFin India Steel";
        break;
      default:
        document.title = "MetFin India Steel";
    }
  }, [pathname]);

  return null;
}

// Fully custom, high-fidelity homepage layout featuring quick navigation portals to dedicated pages
function HomePage() {
  return (
    <>
      {/* Hero Showcase with Interactive 3D Steel Bar */}
      <Hero />

      {/* Infinite Scrolling Industries Marquee */}
      <Industries />

      {/* Quick Navigation Portal Section */}
      <section className="py-20 bg-brand-bg relative border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-mono text-xs text-brand-yellow tracking-[0.3em] uppercase mb-3">
              PRECISION WORKFLOWS
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
              EXPLORE OUR <span className="text-brand-purple">CORE CAPABILITIES</span>
            </h2>
            <p className="text-brand-silver/50 text-xs mt-3 uppercase tracking-widest max-w-xl">
              MetFin India Steel provides absolute mechanical control across multiple specialized stages.
            </p>
            <div className="w-16 h-1 bg-brand-purple mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* About portal */}
            <div className="bg-brand-card border border-white/10 hover:border-brand-purple/40 p-6 rounded-xl transition-all duration-300 group flex flex-col justify-between shadow-xl">
              <div>
                <span className="font-mono text-[0.65rem] text-brand-purple/80 uppercase tracking-widest block mb-2">
                  // PLANT Blueprints
                </span>
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-3 group-hover:text-brand-purple transition-colors">
                  Corporate Story
                </h3>
                <p className="text-xs text-brand-silver/60 leading-relaxed font-sans mb-6">
                  Examine our modern 8,333 Sq Ft Chennai facility operating with a 97 KVA power feed, twin overhead EOT cranes, and active dispatch snapshot records.
                </p>
              </div>
              <Link 
                to="/about" 
                className="font-mono text-xs font-bold text-brand-yellow hover:text-white transition-colors uppercase tracking-widest flex items-center gap-1"
              >
                Read About Us →
              </Link>
            </div>

            {/* Services portal */}
            <div className="bg-brand-card border border-white/10 hover:border-brand-yellow/40 p-6 rounded-xl transition-all duration-300 group flex flex-col justify-between shadow-xl">
              <div>
                <span className="font-mono text-[0.65rem] text-brand-yellow/80 uppercase tracking-widest block mb-2">
                  // MACHINE SPECS
                </span>
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-3 group-hover:text-brand-yellow transition-colors">
                  Manufacturing Services
                </h3>
                <p className="text-xs text-brand-silver/60 leading-relaxed font-sans mb-6">
                  Review our complete Bright Bar transformation process. See specific machine make records, size limits, and our growth target of 500 T / Month.
                </p>
              </div>
              <Link 
                to="/services" 
                className="font-mono text-xs font-bold text-brand-yellow hover:text-white transition-colors uppercase tracking-widest flex items-center gap-1"
              >
                Explore Services →
              </Link>
            </div>

            {/* Quality portal */}
            <div className="bg-brand-card border border-white/10 hover:border-brand-blue/40 p-6 rounded-xl transition-all duration-300 group flex flex-col justify-between shadow-xl">
              <div>
                <span className="font-mono text-[0.65rem] text-brand-blue/80 uppercase tracking-widest block mb-2">
                  // QMS TOLERANCE
                </span>
                <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-3 group-hover:text-brand-blue transition-colors">
                  Product Quality
                </h3>
                <p className="text-xs text-brand-silver/60 leading-relaxed font-sans mb-6">
                  Audited precision metrics including 100% Magnetic Particle Inspection (MPI) testing, surface lobing mitigation, and our active certified gauge logs.
                </p>
              </div>
              <Link 
                to="/product-quality" 
                className="font-mono text-xs font-bold text-brand-yellow hover:text-white transition-colors uppercase tracking-widest flex items-center gap-1"
              >
                View Quality Page →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Operational Strengths & QCDD Value Props */}
      <Strengths />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Scroll and Document Title handlers on URL route switch */}
      <ScrollToTop />
      <PageTitleHandler />

      <div className="min-h-screen bg-brand-bg text-[#e8e8e8] font-sans antialiased overflow-x-hidden selection:bg-brand-purple selection:text-black flex flex-col">
        {/* Sticky Navigation Header visible on every page */}
        <Header />

        {/* Dynamic Route Switching Container */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<><Process /><Capacity /><Machines /></>} />
            <Route path="/product-quality" element={<Quality />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Corporate footer visible on every page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
