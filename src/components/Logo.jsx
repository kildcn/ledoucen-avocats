// src/components/Logo.jsx
import React from 'react';

function Logo({ className = '', color = '#C8102E', size = 'default' }) {
  // Define the size variations
  const sizes = {
    small: { width: 32, height: 32 },
    default: { width: 48, height: 48 },
    large: { width: 64, height: 64 },
    custom: className.includes('w-') || className.includes('h-') ? {} : { width: 48, height: 48 }
  };

  const sizeProps = sizes[size] || sizes.custom;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      style={{ ...sizeProps }}
      role="img"
      aria-label="LE DOUCEN AVOCATS Logo"
    >
      <g fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Elegant Lady Justice silhouette */}
        <circle cx="50" cy="15" r="4" fill={color} stroke="none" />

        {/* Central column */}
        <line x1="50" y1="19" x2="50" y2="80" strokeWidth="1.8" />

        {/* Balance beam */}
        <line x1="18" y1="26" x2="82" y2="26" strokeWidth="2" />

        {/* Left scale dish - hexagonal shape, hanging lower */}
        <path d="M14,65 L20,69 L34,69 L40,65 L34,61 L20,61 Z" fill="none" />

        {/* Left chains - longer with slight curve */}
        <path d="M18,26 C16,36 15,46 14,65" strokeWidth="1.5" />
        <path d="M18,26 C20,36 23,46 27,65" strokeWidth="1.5" />
        <path d="M18,26 C25,36 30,46 40,65" strokeWidth="1.5" />

        {/* Right scale dish - hexagonal shape, hanging lower */}
        <path d="M60,65 L66,69 L80,69 L86,65 L80,61 L66,61 Z" fill="none" />

        {/* Right chains - longer with slight curve */}
        <path d="M82,26 C84,36 85,46 86,65" strokeWidth="1.5" />
        <path d="M82,26 C80,36 77,46 73,65" strokeWidth="1.5" />
        <path d="M82,26 C75,36 70,46 60,65" strokeWidth="1.5" />

        {/* Base */}
        <path d="M40,80 L60,80 L57,90 L43,90 Z" fill={color} stroke="none" />
        <line x1="40" y1="80" x2="60" y2="80" />
        <line x1="43" y1="90" x2="57" y2="90" />
        <line x1="40" y1="80" x2="43" y2="90" />
        <line x1="60" y1="80" x2="57" y2="90" />
      </g>
    </svg>
  );
}

export default Logo;
