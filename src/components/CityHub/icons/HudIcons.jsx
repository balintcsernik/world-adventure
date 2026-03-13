import React from 'react';

/* ─── Premium SVG icons for the Top HUD enamel-pin tokens ─── */

export function CoinIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="13" fill="url(#coinGrad)" stroke="#b45309" strokeWidth="1.5"/>
      <circle cx="14" cy="14" r="10" fill="none" stroke="#fde68a" strokeWidth="1" opacity=".5"/>
      <text x="14" y="18.5" textAnchor="middle" fontFamily="Nunito,sans-serif"
        fontSize="14" fontWeight="900" fill="#92400e">C</text>
      <defs>
        <radialGradient id="coinGrad" cx=".4" cy=".35" r=".6">
          <stop offset="0%" stopColor="#fde68a"/>
          <stop offset="100%" stopColor="#f59e0b"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export function GlobeIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12.5" fill="url(#globeGrad)" stroke="#1d4ed8" strokeWidth="1.2"/>
      <ellipse cx="14" cy="14" rx="5.5" ry="12" fill="none" stroke="#93c5fd" strokeWidth=".8"/>
      <line x1="2" y1="14" x2="26" y2="14" stroke="#93c5fd" strokeWidth=".8"/>
      <line x1="14" y1="2" x2="14" y2="26" stroke="#93c5fd" strokeWidth=".8" opacity=".4"/>
      <path d="M6 8Q14 6 22 8" fill="none" stroke="#bfdbfe" strokeWidth=".6"/>
      <path d="M6 20Q14 22 22 20" fill="none" stroke="#bfdbfe" strokeWidth=".6"/>
      <defs>
        <radialGradient id="globeGrad" cx=".4" cy=".35" r=".6">
          <stop offset="0%" stopColor="#93c5fd"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export function BellIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12.5" fill="url(#bellGrad)" stroke="#b45309" strokeWidth="1.2"/>
      <path d="M10 18h8M14 6v1M9.5 12.5a4.5 4.5 0 019 0v3.5l1 2H8.5l1-2v-3.5z"
        fill="#92400e" fillOpacity=".2" stroke="#92400e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="20" r="1.2" fill="#92400e"/>
      <defs>
        <radialGradient id="bellGrad" cx=".4" cy=".35" r=".6">
          <stop offset="0%" stopColor="#fde68a"/>
          <stop offset="100%" stopColor="#fbbf24"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export function ClipboardIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12.5" fill="url(#clipGrad)" stroke="#047857" strokeWidth="1.2"/>
      <rect x="9" y="7" width="10" height="14" rx="1.5" fill="#064e3b" fillOpacity=".15"
        stroke="#064e3b" strokeWidth="1.1"/>
      <rect x="11.5" y="5.5" width="5" height="3" rx="1" fill="#a7f3d0" stroke="#064e3b" strokeWidth=".8"/>
      <line x1="11.5" y1="13" x2="16.5" y2="13" stroke="#064e3b" strokeWidth=".9" strokeLinecap="round"/>
      <line x1="11.5" y1="15.5" x2="15" y2="15.5" stroke="#064e3b" strokeWidth=".9" strokeLinecap="round"/>
      <line x1="11.5" y1="18" x2="16.5" y2="18" stroke="#064e3b" strokeWidth=".9" strokeLinecap="round"/>
      <defs>
        <radialGradient id="clipGrad" cx=".4" cy=".35" r=".6">
          <stop offset="0%" stopColor="#a7f3d0"/>
          <stop offset="100%" stopColor="#34d399"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export function MusicIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12.5" fill="url(#musicGrad)" stroke="#5b21b6" strokeWidth="1.2"/>
      <path d="M11 19V10l8-2v9" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="11" cy="19" r="2.2" fill="#fff" fillOpacity=".3" stroke="#fff" strokeWidth="1"/>
      <circle cx="19" cy="17" r="2.2" fill="#fff" fillOpacity=".3" stroke="#fff" strokeWidth="1"/>
      <defs>
        <radialGradient id="musicGrad" cx=".4" cy=".35" r=".6">
          <stop offset="0%" stopColor="#c4b5fd"/>
          <stop offset="100%" stopColor="#8b5cf6"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export function BackpackIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12.5" fill="url(#bpGrad)" stroke="#9a3412" strokeWidth="1.2"/>
      <rect x="9" y="10" width="10" height="12" rx="2.5" fill="#fff" fillOpacity=".2"
        stroke="#fff" strokeWidth="1.1"/>
      <path d="M11 10V8.5A3 3 0 0117 8.5V10" fill="none" stroke="#fff" strokeWidth="1.1" strokeLinecap="round"/>
      <rect x="11.5" y="14" width="5" height="3.5" rx="1" fill="#fff" fillOpacity=".25" stroke="#fff" strokeWidth=".7"/>
      <defs>
        <radialGradient id="bpGrad" cx=".4" cy=".35" r=".6">
          <stop offset="0%" stopColor="#fdba74"/>
          <stop offset="100%" stopColor="#f97316"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export function SettingsIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12.5" fill="url(#setGrad)" stroke="#4b5563" strokeWidth="1.2"/>
      <circle cx="14" cy="14" r="3.5" fill="none" stroke="#374151" strokeWidth="1.3"/>
      <g stroke="#374151" strokeWidth="1.2" strokeLinecap="round">
        <line x1="14" y1="4" x2="14" y2="8"/><line x1="14" y1="20" x2="14" y2="24"/>
        <line x1="4" y1="14" x2="8" y2="14"/><line x1="20" y1="14" x2="24" y2="14"/>
        <line x1="7" y1="7" x2="9.8" y2="9.8"/><line x1="18.2" y1="18.2" x2="21" y2="21"/>
        <line x1="21" y1="7" x2="18.2" y2="9.8"/><line x1="9.8" y1="18.2" x2="7" y2="21"/>
      </g>
      <defs>
        <radialGradient id="setGrad" cx=".4" cy=".35" r=".6">
          <stop offset="0%" stopColor="#e5e7eb"/>
          <stop offset="100%" stopColor="#9ca3af"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export function CloseIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12.5" fill="url(#closeGrad)" stroke="#b91c1c" strokeWidth="1.2"/>
      <line x1="10" y1="10" x2="18" y2="18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <line x1="18" y1="10" x2="10" y2="18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      <defs>
        <radialGradient id="closeGrad" cx=".4" cy=".35" r=".6">
          <stop offset="0%" stopColor="#fca5a5"/>
          <stop offset="100%" stopColor="#ef4444"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export function MapPinIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 2C11 2 7 6 7 11c0 7 9 18 9 18s9-11 9-18c0-5-4-9-9-9z"
        fill="url(#pinGrad)" stroke="#b91c1c" strokeWidth="1.5"/>
      <circle cx="16" cy="11" r="3.5" fill="#fff"/>
      <defs>
        <radialGradient id="pinGrad" cx=".45" cy=".3" r=".65">
          <stop offset="0%" stopColor="#fca5a5"/>
          <stop offset="100%" stopColor="#ef4444"/>
        </radialGradient>
      </defs>
    </svg>
  );
}
