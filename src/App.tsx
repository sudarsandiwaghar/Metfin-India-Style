import React from "react";
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

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-[#e8e8e8] font-sans antialiased overflow-x-hidden selection:bg-brand-purple selection:text-black">
      {/* Sticky Navigation Header */}
      <Header />

      {/* Hero Showcase with Interactive 3D Steel Bar */}
      <Hero />

      {/* Infinite Scrolling Industries Marquee */}
      <Industries />

      {/* Corporate Overview & Chennai Plant Blueprint Section */}
      <About />

      {/* Manufacturing Flow: Black Bar ➔ Bright Bar */}
      <Process />

      {/* Plant Capacities, Limits & April 2025 Milestones */}
      <Capacity />

      {/* Heavy-Duty Machinery Listing & Ranges */}
      <Machines />

      {/* Quality Management System (QMS), ISO Scope & Testing Labs */}
      <Quality />

      {/* Operational Strengths & QCDD Value Props */}
      <Strengths />

      {/* Contact Hub, Direct Partner Dialers & Interactive Blueprint Map */}
      <Contact />

      {/* Corporate footer containing regulatory codes (GSTIN/Udyam/ISO) */}
      <Footer />
    </div>
  );
}

