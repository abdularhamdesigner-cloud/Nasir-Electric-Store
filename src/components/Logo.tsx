import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 52 }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer shadow / glow */}
      <circle cx="250" cy="250" r="240" fill="#040D1A" />
      
      {/* Outer Gold Ring */}
      <circle cx="250" cy="250" r="236" stroke="#D4AF37" strokeWidth="6" />
      {/* Inner thin Gold Ring */}
      <circle cx="250" cy="250" r="226" stroke="#D4AF37" strokeWidth="2" opacity="0.8" />
      
      {/* Dark face */}
      <circle cx="250" cy="250" r="225" fill="#06152B" />

      {/* Top right sun rays */}
      <g transform="translate(360, 100)">
        <circle cx="0" cy="0" r="16" fill="#F1C40F" />
        {/* Rays */}
        {Array.from({ length: 9 }).map((_, i) => {
          const angle = (i * 40 - 20) * (Math.PI / 180);
          const x1 = Math.cos(angle) * 20;
          const y1 = Math.sin(angle) * 20;
          const x2 = Math.cos(angle) * 45;
          const y2 = Math.sin(angle) * 45;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#F1C40F"
              strokeWidth="5"
              strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* Golden arching ribbon swooping from top-right sun over "MES" */}
      <path 
        d="M 360 100 C 270 40, 100 130, 210 210" 
        stroke="#F1C40F" 
        strokeWidth="4.5" 
        fill="none" 
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* NES Styled Graphic */}
      <g transform="translate(100, 115)">
        {/* 'N' with slashing lightning bolt */}
        <path d="M 0 85 L 0 15 H 18 L 54 62 L 54 15 H 74 L 74 85 H 56 L 20 38 L 20 85 Z" fill="#FFFFFF" />
        
        {/* Lightning Bolt slashing across N */}
        <path 
          d="M 68 -5 L 18 65 L 45 65 L 22 120 L 98 40 L 60 40 Z" 
          fill="#F1C40F" 
          stroke="#06152B" 
          strokeWidth="3.5" 
        />

        {/* 'E' with angled horizontal cuts */}
        <g transform="translate(95, 12)">
          <path d="M 0 5 H 70 L 65 21 H 14 V 31 H 55 L 50 47 H 14 V 58 H 72 L 67 74 H 0 Z" fill="#FFFFFF" />
        </g>

        {/* 'S' with blue solar board Cap */}
        <g transform="translate(178, 12)">
          {/* Base bottom curve of S */}
          <path d="M 5 62 C 5 72, 60 78, 65 65 C 70 52, 10 52, 5 36 C 0 20, 55 10, 68 25 C 65 29, 60 38, 56 36 C 50 24, 15 24, 15 34 C 15 44, 65 42, 68 56 C 72 75, 10 82, 0 66 Z" fill="#FFFFFF" />
          {/* Solar Panel blue trapezoid cap representing upper sector */}
          <path 
            d="M 5 21 L 62 21 L 52 5 L 15 5 Z" 
            fill="#2980B9" 
            stroke="#FFFFFF" 
            strokeWidth="2" 
          />
          {/* Grid lines in solar panel */}
          <line x1="28" y1="5" x2="21" y2="21" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="40" y1="5" x2="45" y2="21" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="10" y1="13" x2="57" y2="13" stroke="#FFFFFF" strokeWidth="1.5" />
        </g>
      </g>

      {/* Section Divider / Middle Block */}
      {/* "NASIR" */}
      <text 
        x="250" 
        y="262" 
        fontFamily="'Space Grotesk', sans-serif" 
        fontWeight="800" 
        fontSize="34" 
        fill="#FFFFFF" 
        textAnchor="middle" 
        letterSpacing="8"
      >
        NASIR
      </text>

      {/* "ELECTRIC" in gold/yellow bold */}
      <text 
        x="250" 
        y="312" 
        fontFamily="'Space Grotesk', sans-serif" 
        fontWeight="900" 
        fontSize="44" 
        fill="#F1C40F" 
        textAnchor="middle" 
        letterSpacing="2.5"
      >
        ELECTRIC
      </text>

      {/* "STORE" centered with elegant decorative side wings */}
      <g>
        {/* Left Line */}
        <line x1="100" y1="340" x2="165" y2="340" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
        {/* Right Line */}
        <line x1="335" y1="340" x2="400" y2="340" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
        
        <text 
          x="250" 
          y="350" 
          fontFamily="'Space Grotesk', sans-serif" 
          fontWeight="800" 
          fontSize="30" 
          fill="#FFFFFF" 
          textAnchor="middle" 
          letterSpacing="6"
        >
          STORE
        </text>
      </g>

      {/* "58 YEARS OF TRUST" & "SINCE 1968" */}
      <line x1="120" y1="375" x2="380" y2="375" stroke="#F1C40F" strokeWidth="1.5" opacity="0.6" />
      <text 
        x="250" 
        y="392" 
        fontFamily="'Inter', sans-serif" 
        fontWeight="800" 
        fontSize="17" 
        fill="#FFFFFF" 
        textAnchor="middle" 
        letterSpacing="3"
      >
        58 YEARS OF TRUST
      </text>
      <text 
        x="250" 
        y="414" 
        fontFamily="'Inter', sans-serif" 
        fontWeight="bold" 
        fontSize="15" 
        fill="#F1C40F" 
        textAnchor="middle" 
        letterSpacing="4"
      >
        AND SINCE 1968
      </text>
      <line x1="120" y1="425" x2="380" y2="425" stroke="#F1C40F" strokeWidth="1.5" opacity="0.6" />

      {/* Bottom curved golden crescent with Location details */}
      <path 
        d="M 110 440 Q 250 488 390 440 L 370 478 L 130 478 Z" 
        fill="#F1C40F" 
      />
      <text 
        x="250" 
        y="463" 
        fontFamily="'Inter', sans-serif" 
        fontWeight="900" 
        fontSize="13" 
        fill="#051124" 
        textAnchor="middle" 
        letterSpacing="1"
      >
        MITRU ROAD, MAILSI
      </text>
    </svg>
  );
}
