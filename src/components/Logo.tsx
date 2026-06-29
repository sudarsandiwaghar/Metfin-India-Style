import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = "", size = 48, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-fidelity corporate SVG representing the exact logo from the business card */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_12px_rgba(155,114,207,0.25)]"
      >
        {/* Fine vertical centerline draft line from business card */}
        <line x1="100" y1="0" x2="100" y2="200" stroke="#3A3742" strokeWidth="0.75" />

        {/* Outer Hexagon (pointed-top) with lavender-purple fill and dark border */}
        <polygon
          points="100,12 176,56 176,144 100,188 24,144 24,56"
          fill="#AC9ECA"
          stroke="#111111"
          strokeWidth="3.5"
        />
        
        {/* Inner offset hexagon line for a clean double-bordered look */}
        <polygon
          points="100,18 171,59 171,141 100,182 29,141 29,59"
          stroke="#111111"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />

        {/* Thick purple/violet circular ring */}
        <circle
          cx="100"
          cy="100"
          r="60"
          stroke="#613E8D"
          strokeWidth="14"
          fill="none"
        />

        {/* 3D Crescent Shadow Overlay (Top-Left) */}
        <path
          d="M 57.6 142.4 A 60 60 0 0 1 142.4 57.6"
          stroke="#181522"
          strokeWidth="14.5"
          fill="none"
          strokeLinecap="butt"
          opacity="0.9"
        />

        {/* 3D Crescent Highlight Overlay (Bottom-Right) */}
        <path
          d="M 142.4 57.6 A 60 60 0 0 1 57.6 142.4"
          stroke="#FFFFFF"
          strokeWidth="14"
          fill="none"
          strokeLinecap="butt"
          opacity="0.9"
        />

        {/* Inner Gold-Yellow disk */}
        <circle
          cx="100"
          cy="100"
          r="44"
          fill="#ECC415"
          stroke="#111111"
          strokeWidth="2.5"
        />

        {/* Concentric Rounded Black Square with Gold-Yellow Border */}
        <rect
          x="72"
          y="72"
          width="56"
          height="56"
          rx="6"
          fill="#0D0D11"
          stroke="#ECC415"
          strokeWidth="3.5"
        />

        {/* Outer stylized cyan-blue nested coil (heart shape) */}
        <path
          d="M 85 101 C 85 91, 91 85, 100 85 C 109 85, 115 91, 115 101 C 115 112, 100 123, 100 123 C 100 123, 85 112, 85 101 Z"
          fill="none"
          stroke="#00D8FF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Inner stylized cyan-blue nested coil */}
        <path
          d="M 90 101 C 90 94, 94 89, 100 89 C 106 89, 110 94, 110 101 C 110 109, 100 117, 100 117 C 100 117, 90 109, 90 101 Z"
          fill="none"
          stroke="#00A0FF"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Center cyan core droplet */}
        <path
          d="M 95 101 C 95 98, 97 95, 100 95 C 103 95, 105 98, 105 101 C 105 105, 100 109, 100 109 C 100 109, 95 105, 95 101 Z"
          fill="#00D8FF"
          stroke="none"
        />

        {/* High-fidelity light reflection arc on the blue coils */}
        <path
          d="M 88 95 C 91 91, 96 89, 100 89"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-bold text-xl md:text-2xl tracking-[0.25em] text-white leading-none">
            MetFin
          </span>
          <span className="font-mono text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.38em] text-brand-purple font-bold">
            INDIA STEEL
          </span>
        </div>
      )}
    </div>
  );
}
