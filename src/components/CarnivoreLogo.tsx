import React from 'react';

interface CarnivoreLogoProps {
  className?: string;
}

export default function CarnivoreLogo({ className = "w-10 h-10" }: CarnivoreLogoProps) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SysnovaAi logo"
    >
      <defs>
        <linearGradient id="sysnova-bg" x1="18" y1="18" x2="142" y2="142" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06131A" />
          <stop offset="55%" stopColor="#0B1E2A" />
          <stop offset="100%" stopColor="#071018" />
        </linearGradient>
        <linearGradient id="sysnova-stroke" x1="34" y1="38" x2="123" y2="122" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5EEAD4" />
          <stop offset="50%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient id="sysnova-core" x1="48" y1="44" x2="114" y2="118" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="50%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>

      <rect x="8" y="8" width="144" height="144" rx="38" fill="url(#sysnova-bg)" />
      <rect x="8" y="8" width="144" height="144" rx="38" stroke="rgba(148, 163, 184, 0.22)" />

      <path
        d="M46 49C54 39 67 34 81 34C97 34 111 41 120 54"
        stroke="url(#sysnova-stroke)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M114 112C106 121 94 126 80 126C63 126 49 119 40 106"
        stroke="url(#sysnova-stroke)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M54 59L104 59C109 59 113 63 113 68C113 72 111 75 106 79L62 112"
        stroke="url(#sysnova-core)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 99L57 107L66 99"
        stroke="#D1FAE5"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="116" cy="48" r="6" fill="#5EEAD4" />
      <circle cx="42" cy="117" r="5" fill="#67E8F9" />
    </svg>
  );
}
