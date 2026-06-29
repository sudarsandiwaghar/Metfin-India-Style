import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, PhoneCall } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Product Quality", to: "/product-quality" },
    { name: "FAQ", to: "/faq" },
    { name: "Contact", to: "/contact" },
  ];

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
        <Link to="/" className="flex items-center">
          <Logo size={42} showText={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.name}
                to={link.to}
                className={`font-display font-medium text-xs tracking-widest uppercase transition-colors duration-200 relative py-1 ${
                  isActive 
                    ? "text-brand-purple font-semibold" 
                    : "text-brand-silver/80 hover:text-brand-purple"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple rounded-full shadow-[0_0_8px_rgba(155,114,207,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="font-display text-xs tracking-widest uppercase border border-brand-purple bg-brand-purple/10 hover:bg-brand-purple hover:text-black font-semibold text-brand-purple py-2.5 px-5 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.15)] hover:shadow-[0_0_25px_rgba(197,160,89,0.3)]"
          >
            Request Quote
          </Link>
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
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-display font-semibold text-sm tracking-widest uppercase hover:text-brand-purple transition-colors py-1 block ${
                  isActive ? "text-brand-purple" : "text-brand-silver"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <hr className="border-white/10 my-1" />
          <div className="flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-center text-sm tracking-widest uppercase bg-brand-purple hover:bg-brand-purple/90 text-black font-bold py-3 rounded-md transition-all duration-300"
            >
              Request Quote
            </Link>
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
