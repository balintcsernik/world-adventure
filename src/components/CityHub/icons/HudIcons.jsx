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

/** Dress/outfit icon — shows a small dress silhouette in the given color */
export function DressIcon({ size = 30, color = '#ef4444' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="14" fill="#fff" stroke="#e5e7eb" strokeWidth="1.2"/>
      {/* Dress body */}
      <path d="M11 9L13 8H17L19 9L20 14L22 22H8L10 14Z"
        fill={color} stroke={color === '#fff' ? '#d1d5db' : 'none'} strokeWidth=".5"/>
      {/* Collar */}
      <path d="M13 8Q15 10 17 8" fill="none" stroke={color} strokeWidth="1" opacity=".6"/>
      {/* Waist */}
      <path d="M10 14Q15 16 20 14" fill="none" stroke="rgba(0,0,0,.15)" strokeWidth=".6"/>
      {/* Sleeves */}
      <path d="M11 9L8 13" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M19 9L22 13" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      {/* Highlight */}
      <path d="M13 14L12 20" stroke="rgba(255,255,255,.35)" strokeWidth="1" strokeLinecap="round"/>
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
  return <CharacterMapPin size={size} fillColor="#ef4444" gradientId="pinGrad" />;
}

/* ─── Hex color helpers ─── */
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
}
function lightenHex(hex, amount = 0.3) {
  const [r, g, b] = hexToRgb(hex);
  return rgbToHex(r + (255 - r) * amount, g + (255 - g) * amount, b + (255 - b) * amount);
}
function darkenHex(hex, amount = 0.25) {
  const [r, g, b] = hexToRgb(hex);
  return rgbToHex(r * (1 - amount), g * (1 - amount), b * (1 - amount));
}

/**
 * CharacterMapPin — Google Maps pin shape with configurable color.
 * The inner white circle is sized for a character face overlay.
 *
 * Props:
 *   size        - SVG width/height (default 38)
 *   fillColor   - pin body color (default '#ef4444')
 *   gradientId  - unique gradient ID to avoid collisions (required when multiple on screen)
 *   innerR      - radius of the inner circle (default 5.5)
 */
export function CharacterMapPin({ size = 38, fillColor = '#ef4444', gradientId = 'cmpGrad', innerR = 5.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ display: 'block' }}>
      <defs>
        <radialGradient id={gradientId} cx=".45" cy=".3" r=".65">
          <stop offset="0%" stopColor={lightenHex(fillColor, 0.35)} />
          <stop offset="100%" stopColor={fillColor} />
        </radialGradient>
      </defs>
      <path d="M16 2C11 2 7 6 7 11c0 7 9 18 9 18s9-11 9-18c0-5-4-9-9-9z"
        fill={`url(#${gradientId})`}
        stroke={darkenHex(fillColor, 0.3)}
        strokeWidth="1.5"
      />
      <circle cx="16" cy="11" r={innerR} fill="#fff" />
    </svg>
  );
}

/**
 * MultiColorMapPin — Google Maps pin with a gradient of multiple outfit colors + count.
 */
export function MultiColorMapPin({ size = 38, colors = [], count = 0, gradientId = 'mcpGrad' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          {colors.map((c, i) => (
            <stop key={i} offset={`${(i / Math.max(colors.length - 1, 1)) * 100}%`} stopColor={c} />
          ))}
        </linearGradient>
      </defs>
      <path d="M16 2C11 2 7 6 7 11c0 7 9 18 9 18s9-11 9-18c0-5-4-9-9-9z"
        fill={`url(#${gradientId})`}
        stroke="rgba(0,0,0,0.3)"
        strokeWidth="1.5"
      />
      <circle cx="16" cy="11" r="5.5" fill="#fff" />
      <text x="16" y="13.5" textAnchor="middle" fontSize="8" fontWeight="900"
        fill="#374151" fontFamily="Nunito, sans-serif">
        {count}
      </text>
    </svg>
  );
}
