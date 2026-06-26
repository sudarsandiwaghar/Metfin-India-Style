import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Machines", href: "#machines" },
    { name: "Quality", href: "#quality" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-bg/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Brand Logo Signature */}
        <a href="#" className="flex items-center">
          <Logo size={42} showText={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="font-display font-medium text-sm text-brand-silver/80 hover:text-brand-purple tracking-widest uppercase transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="font-display text-xs tracking-widest uppercase border border-brand-purple bg-brand-purple/10 hover:bg-brand-purple hover:text-black font-semibold text-brand-purple py-2.5 px-5 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.15)] hover:shadow-[0_0_25px_rgba(197,160,89,0.3)]"
          >
            Request Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-brand-purple transition-colors p-1"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 w-full bg-brand-bg/98 border-b border-white/10 py-6 px-6 flex flex-col gap-5 shadow-2xl animate-fade-in z-40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="font-display font-semibold text-base text-brand-silver tracking-widest uppercase hover:text-brand-purple transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-white/10 my-1" />
          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="font-display text-center text-sm tracking-widest uppercase bg-brand-purple hover:bg-brand-purple/90 text-black font-bold py-3 rounded-md transition-all duration-300"
            >
              Request Quote
            </a>
            <a
              href="tel:9840046236"
              className="flex items-center justify-center gap-2 font-mono text-xs text-brand-yellow hover:text-brand-yellow/80 transition-colors py-2"
            >
              <PhoneCall size={14} /> Call Partner: 98400 46236
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
