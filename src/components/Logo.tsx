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
        {/* Double-line outer Hexagon Frame (flat top/bottom, pointed left/right) */}
        <polygon
          points="53,20 147,20 193,100 147,180 53,180 7,100"
          stroke="#111111"
          strokeWidth="1.5"
          fill="none"
        />
        <polygon
          points="55,22 145,22 190,100 145,178 55,178 10,100"
          fill="#D4D4EB"
          stroke="#151419"
          strokeWidth="4"
        />
        
        {/* Lavender-Purple Base Ring */}
        <circle
          cx="100"
          cy="100"
          r="62"
          stroke="#9575CD"
          strokeWidth="13"
          fill="none"
        />

        {/* Overlapping Charcoal/Black Mechanical Segment (Top-Left) */}
        <path
          d="M 45 74 A 62 62 0 0 1 131 46"
          stroke="#18181C"
          strokeWidth="13.5"
          fill="none"
          strokeLinecap="square"
        />

        {/* Overlapping White Highlight Segment (Bottom-Right) */}
        <path
          d="M 69 152 A 62 62 0 0 0 131 154"
          stroke="#FFFFFF"
          strokeWidth="13.5"
          fill="none"
          strokeLinecap="square"
        />

        {/* Yellow Concentric Ring */}
        <circle
          cx="100"
          cy="100"
          r="43"
          stroke="#C8B400"
          strokeWidth="7"
          fill="#000000"
        />

        {/* Concentric Inner Black Square with Yellow Border */}
        <rect
          x="74"
          y="74"
          width="52"
          height="52"
          rx="4"
          fill="#000000"
          stroke="#C8B400"
          strokeWidth="3"
        />

        {/* Stylized Cyan-Blue Nesting Core Shapes */}
        <path
          d="M86,108 C84,98 90,88 100,88 C110,88 116,98 114,108 C112,115 100,122 100,122 C100,122 88,115 86,108 Z"
          fill="url(#blueGrad)"
          stroke="#116fb5"
          strokeWidth="1.5"
        />
        
        <path
          d="M92,108 C91,102 94,95 100,95 C106,95 109,102 108,108 C107,112 100,116 100,116 C100,116 93,112 92,108 Z"
          fill="#000000"
          stroke="#116fb5"
          strokeWidth="1"
        />

        {/* Core highlight bar for pristine reflection */}
        <path
          d="M89,103 C89,95 94,92 100,92"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Definitions for blue gradient */}
        <defs>
          <linearGradient id="blueGrad" x1="100" y1="88" x2="100" y2="122" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#005C97" />
          </linearGradient>
        </defs>
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
