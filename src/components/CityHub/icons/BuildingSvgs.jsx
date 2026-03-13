import React from 'react';

/* ─── High-fidelity SVG building assets for the City Map ─── */
/* Replaces CSS-shape buildings with proper illustrated SVGs  */

export function SchoolSvg({ w = 90, h = 100 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 90 100" fill="none">
      {/* Main building body */}
      <rect x="8" y="38" width="74" height="58" rx="4" fill="url(#schoolWall)" stroke="#d97706" strokeWidth="1.5"/>
      {/* 3D side face */}
      <path d="M82 42L88 36V90L82 96Z" fill="#d4a060" opacity=".6"/>
      {/* Roof — pitched */}
      <path d="M2 40L45 8L88 40Z" fill="url(#schoolRoof)" stroke="#c0392b" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Roof highlight */}
      <path d="M45 8L2 40H20L45 18L70 40H88Z" fill="rgba(255,255,255,.12)"/>
      {/* Chimney */}
      <rect x="68" y="18" width="8" height="18" rx="1" fill="#9b2c2c" stroke="#7f1d1d" strokeWidth=".8"/>
      {/* Bell tower */}
      <rect x="38" y="12" width="14" height="10" rx="2" fill="#fef3c7" stroke="#d97706" strokeWidth=".8"/>
      <circle cx="45" cy="17" r="2.5" fill="#fbbf24" stroke="#92400e" strokeWidth=".6"/>
      {/* Windows row 1 */}
      <rect x="16" y="48" width="14" height="12" rx="2.5" fill="#bae6fd" stroke="#d97706" strokeWidth="1"/>
      <line x1="23" y1="48" x2="23" y2="60" stroke="#d97706" strokeWidth=".6"/>
      <line x1="16" y1="54" x2="30" y2="54" stroke="#d97706" strokeWidth=".6"/>
      <rect x="38" y="48" width="14" height="12" rx="2.5" fill="#bae6fd" stroke="#d97706" strokeWidth="1"/>
      <line x1="45" y1="48" x2="45" y2="60" stroke="#d97706" strokeWidth=".6"/>
      <line x1="38" y1="54" x2="52" y2="54" stroke="#d97706" strokeWidth=".6"/>
      <rect x="60" y="48" width="14" height="12" rx="2.5" fill="#bae6fd" stroke="#d97706" strokeWidth="1"/>
      <line x1="67" y1="48" x2="67" y2="60" stroke="#d97706" strokeWidth=".6"/>
      <line x1="60" y1="54" x2="74" y2="54" stroke="#d97706" strokeWidth=".6"/>
      {/* Door */}
      <rect x="34" y="70" width="22" height="26" rx="11 11 2 2" fill="url(#schoolDoor)" stroke="#78350f" strokeWidth="1.2"/>
      <circle cx="50" cy="84" r="1.5" fill="#fbbf24"/>
      {/* Door window */}
      <rect x="39" y="74" width="12" height="8" rx="6" fill="#bae6fd" stroke="#92400e" strokeWidth=".6"/>
      {/* Steps */}
      <rect x="30" y="94" width="30" height="4" rx="1" fill="#d6d3d1" stroke="#a8a29e" strokeWidth=".5"/>
      {/* Flag */}
      <line x1="45" y1="2" x2="45" y2="12" stroke="#6b7280" strokeWidth="1.2"/>
      <path d="M45 2L54 5L45 8Z" fill="#ef4444"/>
      <defs>
        <linearGradient id="schoolWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef9c3"/><stop offset="100%" stopColor="#fde68a"/>
        </linearGradient>
        <linearGradient id="schoolRoof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f87171"/><stop offset="100%" stopColor="#dc2626"/>
        </linearGradient>
        <linearGradient id="schoolDoor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a16207"/><stop offset="100%" stopColor="#78350f"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CitySvg({ w = 80, h = 110 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 80 110" fill="none">
      {/* Tall building body */}
      <rect x="6" y="14" width="60" height="92" rx="3" fill="url(#cityWall)" stroke="#4338ca" strokeWidth="1.2"/>
      {/* 3D side */}
      <path d="M66 18L74 10V98L66 106Z" fill="#6366f1" opacity=".3"/>
      {/* Roof flat + antenna */}
      <rect x="3" y="10" width="66" height="8" rx="2" fill="#6366f1" stroke="#4338ca" strokeWidth="1"/>
      <rect x="30" y="2" width="3" height="10" rx="1" fill="#6366f1"/>
      <circle cx="31.5" cy="2" r="2" fill="#ef4444" opacity=".8"/>
      {/* Windows — 4 columns x 5 rows */}
      {[0,1,2,3,4].map(row => [0,1,2,3].map(col => (
        <rect key={`${row}${col}`}
          x={14 + col * 13} y={22 + row * 14} width="9" height="10" rx="1.5"
          fill="#bfdbfe" stroke="#6366f1" strokeWidth=".6"/>
      )))}
      {/* Awning */}
      <path d="M18 88Q36 92 54 88" fill="#f59e0b" stroke="#d97706" strokeWidth=".8"/>
      {/* Door */}
      <rect x="26" y="90" width="16" height="16" rx="2" fill="#374151" stroke="#1f2937" strokeWidth="1"/>
      <rect x="30" y="92" width="8" height="8" rx="1" fill="#bfdbfe" opacity=".5"/>
      <circle cx="39" cy="99" r="1.2" fill="#fbbf24"/>
      {/* Entrance steps */}
      <rect x="22" y="104" width="24" height="4" rx="1" fill="#c7d2fe" stroke="#a5b4fc" strokeWidth=".4"/>
      <defs>
        <linearGradient id="cityWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ede9fe"/><stop offset="100%" stopColor="#ddd6fe"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FunZoneSvg({ w = 85, h = 95 }) {
  const lights = ['#ef4444','#fbbf24','#22c55e','#3b82f6','#ec4899','#f59e0b'];
  return (
    <svg width={w} height={h} viewBox="0 0 85 95" fill="none">
      {/* Building body */}
      <rect x="6" y="22" width="68" height="68" rx="4" fill="url(#funWall)" stroke="#9d174d" strokeWidth="1.2"/>
      {/* 3D side */}
      <path d="M74 26L80 20V86L74 92Z" fill="#ec4899" opacity=".25"/>
      {/* Marquee roof */}
      <rect x="2" y="14" width="76" height="12" rx="3" fill="#ec4899" stroke="#9d174d" strokeWidth="1"/>
      {/* Marquee bulbs */}
      {lights.map((c, i) => (
        <circle key={i} cx={12 + i * 12} cy="20" r="3" fill={c} opacity=".9">
          <animate attributeName="opacity" values=".5;1;.5" dur={`${0.8 + i * 0.15}s`} repeatCount="indefinite"/>
        </circle>
      ))}
      {/* Movie screen */}
      <rect x="18" y="34" width="40" height="26" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
      <rect x="21" y="37" width="34" height="20" rx="1.5" fill="#0f172a"/>
      {/* Film reel icon */}
      <circle cx="38" cy="47" r="6" fill="none" stroke="#64748b" strokeWidth=".8"/>
      <circle cx="38" cy="47" r="2" fill="#64748b"/>
      <line x1="38" y1="41" x2="38" y2="43" stroke="#64748b" strokeWidth=".6"/>
      <line x1="38" y1="51" x2="38" y2="53" stroke="#64748b" strokeWidth=".6"/>
      <line x1="32" y1="47" x2="34" y2="47" stroke="#64748b" strokeWidth=".6"/>
      <line x1="42" y1="47" x2="44" y2="47" stroke="#64748b" strokeWidth=".6"/>
      {/* Ticket booth / Door */}
      <rect x="28" y="68" width="20" height="22" rx="3" fill="#831843" stroke="#6b1a3a" strokeWidth="1"/>
      <rect x="31" y="70" width="14" height="6" rx="1.5" fill="#fce7f3" opacity=".4"/>
      <text x="38" y="87" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fce7f3" fontFamily="Nunito,sans-serif">ENTER</text>
      {/* Stars */}
      <text x="14" y="38" fontSize="10" fill="#fbbf24" opacity=".7">&#x2B50;</text>
      <text x="62" y="42" fontSize="8" fill="#fbbf24" opacity=".6">&#x2B50;</text>
      <defs>
        <linearGradient id="funWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fce7f3"/><stop offset="100%" stopColor="#fbcfe8"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AirportSvg({ w = 100, h = 90 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 100 90" fill="none">
      {/* Control tower */}
      <rect x="76" y="8" width="12" height="50" rx="2" fill="url(#towerGrad)" stroke="#334155" strokeWidth="1"/>
      {/* Tower cab */}
      <rect x="72" y="2" width="20" height="12" rx="2" fill="#bae6fd" stroke="#334155" strokeWidth="1"/>
      <line x1="76" y1="2" x2="76" y2="14" stroke="#334155" strokeWidth=".5"/>
      <line x1="80" y1="2" x2="80" y2="14" stroke="#334155" strokeWidth=".5"/>
      <line x1="84" y1="2" x2="84" y2="14" stroke="#334155" strokeWidth=".5"/>
      <line x1="88" y1="2" x2="88" y2="14" stroke="#334155" strokeWidth=".5"/>
      {/* Antenna */}
      <line x1="82" y1="0" x2="82" y2="4" stroke="#475569" strokeWidth="1.2"/>
      <circle cx="82" cy="0" r="2" fill="#ef4444" opacity=".8"/>
      {/* Terminal roof — curved */}
      <path d="M2 36Q50 22 90 36" fill="#475569" stroke="#334155" strokeWidth="1"/>
      {/* Terminal body */}
      <rect x="4" y="36" width="86" height="46" rx="3" fill="url(#termWall)" stroke="#64748b" strokeWidth="1"/>
      {/* 3D side */}
      <path d="M90 40L96 34V78L90 84Z" fill="#94a3b8" opacity=".3"/>
      {/* Glass windows strip */}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={10 + i * 11} y="42" width="8" height="16" rx="1.5"
          fill="#bae6fd" stroke="#64748b" strokeWidth=".6"/>
      ))}
      {/* Departure board */}
      <rect x="24" y="62" width="42" height="6" rx="1.5" fill="#1e293b"/>
      <rect x="28" y="64" width="34" height="2" rx="1" fill="#22d3ee" opacity=".8"/>
      {/* Door */}
      <rect x="36" y="70" width="18" height="12" rx="2" fill="#1e293b" stroke="#0f172a" strokeWidth=".8"/>
      <line x1="45" y1="70" x2="45" y2="82" stroke="rgba(255,255,255,.2)" strokeWidth=".6"/>
      {/* Plane */}
      <g transform="translate(10,10) rotate(-15)">
        <path d="M0 5L8 3L14 0L16 4L10 5L14 10L12 11L8 7L2 8Z" fill="#94a3b8" stroke="#64748b" strokeWidth=".5"/>
      </g>
      <defs>
        <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94a3b8"/><stop offset="100%" stopColor="#64748b"/>
        </linearGradient>
        <linearGradient id="termWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f1f5f9"/><stop offset="100%" stopColor="#e2e8f0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FranceSvg({ w = 60, h = 120 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 60 120" fill="none">
      {/* Spire / Antenna */}
      <line x1="30" y1="0" x2="30" y2="16" stroke="#78716c" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="30" cy="0" r="2.5" fill="#fbbf24"/>
      {/* Top section (narrow) */}
      <path d="M26 16L30 8L34 16Z" fill="url(#eifel1)" stroke="#57534e" strokeWidth=".8"/>
      <path d="M24 16H36L34 28H26Z" fill="url(#eifel1)" stroke="#57534e" strokeWidth=".6"/>
      {/* Platform 1 */}
      <rect x="21" y="28" width="18" height="4" rx="1" fill="#78716c" stroke="#57534e" strokeWidth=".6"/>
      {/* Middle section */}
      <path d="M22 32H38L40 58H20Z" fill="url(#eifel2)" stroke="#57534e" strokeWidth=".6"/>
      {/* Lattice lines */}
      {[0,1,2,3].map(i => (
        <line key={i} x1={22 + i * 0.4} y1={36 + i * 6} x2={38 - i * 0.4} y2={36 + i * 6}
          stroke="rgba(255,255,255,.3)" strokeWidth=".6"/>
      ))}
      {/* Cross braces */}
      <line x1="24" y1="32" x2="36" y2="58" stroke="rgba(255,255,255,.15)" strokeWidth=".4"/>
      <line x1="36" y1="32" x2="24" y2="58" stroke="rgba(255,255,255,.15)" strokeWidth=".4"/>
      {/* Platform 2 */}
      <rect x="17" y="58" width="26" height="5" rx="1.5" fill="#57534e" stroke="#44403c" strokeWidth=".6"/>
      {/* Base section (wide legs) */}
      <path d="M18 63H42L50 108H10Z" fill="url(#eifel3)" stroke="#44403c" strokeWidth=".8"/>
      {/* Lattice lines base */}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1={17 + i * 0.6} y1={68 + i * 8} x2={43 - i * 0.6} y2={68 + i * 8}
          stroke="rgba(255,255,255,.2)" strokeWidth=".5"/>
      ))}
      {/* Cross braces base */}
      <line x1="20" y1="63" x2="40" y2="108" stroke="rgba(255,255,255,.1)" strokeWidth=".4"/>
      <line x1="40" y1="63" x2="20" y2="108" stroke="rgba(255,255,255,.1)" strokeWidth=".4"/>
      {/* Ground arch */}
      <path d="M14 108Q30 94 46 108" fill="none" stroke="#44403c" strokeWidth="1.5"/>
      <rect x="10" y="108" width="40" height="6" rx="2" fill="#44403c" stroke="#292524" strokeWidth=".6"/>
      {/* Ground */}
      <ellipse cx="30" cy="116" rx="28" ry="4" fill="rgba(0,0,0,.1)"/>
      {/* French flag */}
      <g transform="translate(40,22)">
        <rect width="4" height="8" fill="#2563eb" rx=".5"/>
        <rect x="4" width="4" height="8" fill="#fff"/>
        <rect x="8" width="4" height="8" fill="#dc2626" rx=".5"/>
      </g>
      <defs>
        <linearGradient id="eifel1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a8a29e"/><stop offset="100%" stopColor="#78716c"/>
        </linearGradient>
        <linearGradient id="eifel2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#78716c"/><stop offset="100%" stopColor="#57534e"/>
        </linearGradient>
        <linearGradient id="eifel3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#57534e"/><stop offset="100%" stopColor="#44403c"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PoleSvg({ w = 85, h = 85 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 85 85" fill="none">
      {/* Aurora sky effect */}
      <path d="M10 8Q30 0 50 6Q65 2 75 10" fill="none" stroke="#22d3ee" strokeWidth="2" opacity=".4">
        <animate attributeName="d" values="M10 8Q30 0 50 6Q65 2 75 10;M10 6Q30 4 50 2Q65 6 75 8;M10 8Q30 0 50 6Q65 2 75 10" dur="4s" repeatCount="indefinite"/>
      </path>
      <path d="M15 12Q35 4 55 10Q70 6 80 14" fill="none" stroke="#a78bfa" strokeWidth="1.5" opacity=".3">
        <animate attributeName="d" values="M15 12Q35 4 55 10Q70 6 80 14;M15 10Q35 8 55 6Q70 10 80 12;M15 12Q35 4 55 10Q70 6 80 14" dur="5s" repeatCount="indefinite"/>
      </path>
      {/* Snow ground */}
      <ellipse cx="42" cy="74" rx="40" ry="10" fill="url(#snowGround)"/>
      {/* Igloo dome */}
      <path d="M18 68Q18 34 42 34Q66 34 66 68Z" fill="url(#iglooGrad)" stroke="#cbd5e1" strokeWidth="1.2"/>
      {/* Ice brick lines */}
      <path d="M22 52H62" stroke="#cbd5e1" strokeWidth=".6" opacity=".5"/>
      <path d="M24 60H60" stroke="#cbd5e1" strokeWidth=".6" opacity=".5"/>
      <path d="M28 44H56" stroke="#cbd5e1" strokeWidth=".6" opacity=".5"/>
      {/* Vertical brick offsets */}
      <line x1="32" y1="44" x2="32" y2="52" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      <line x1="42" y1="44" x2="42" y2="52" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      <line x1="52" y1="44" x2="52" y2="52" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      <line x1="28" y1="52" x2="28" y2="60" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      <line x1="38" y1="52" x2="38" y2="60" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      <line x1="48" y1="52" x2="48" y2="60" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      <line x1="58" y1="52" x2="58" y2="60" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      {/* Door */}
      <path d="M36 68Q36 56 42 56Q48 56 48 68Z" fill="#475569" stroke="#334155" strokeWidth=".8"/>
      {/* Snowflake */}
      <text x="42" y="44" textAnchor="middle" fontSize="10" fill="#93c5fd" opacity=".7">&#10052;</text>
      {/* Penguin */}
      <g transform="translate(8,58)">
        <ellipse cx="6" cy="8" rx="5" ry="7" fill="#1e293b"/>
        <ellipse cx="6" cy="8" rx="3" ry="5" fill="#f8fafc"/>
        <circle cx="4.5" cy="5" r=".8" fill="#1e293b"/>
        <circle cx="7.5" cy="5" r=".8" fill="#1e293b"/>
        <path d="M5 7L6 8.5L7 7" fill="#f59e0b" stroke="#d97706" strokeWidth=".4"/>
      </g>
      {/* Snow particles */}
      <circle cx="20" cy="20" r="1.5" fill="#fff" opacity=".6">
        <animate attributeName="cy" values="20;70" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values=".6;0" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="60" cy="15" r="1" fill="#fff" opacity=".5">
        <animate attributeName="cy" values="15;65" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values=".5;0" dur="4s" repeatCount="indefinite"/>
      </circle>
      <defs>
        <linearGradient id="iglooGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc"/><stop offset="100%" stopColor="#e2e8f0"/>
        </linearGradient>
        <radialGradient id="snowGround" cx=".5" cy=".5" r=".5">
          <stop offset="0%" stopColor="#f1f5f9"/><stop offset="80%" stopColor="#e2e8f0" stopOpacity=".6"/>
          <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

export function HungarySvg({ w = 90, h = 95 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 90 95" fill="none">
      {/* Left tower */}
      <rect x="4" y="24" width="14" height="62" rx="2" fill="url(#hunTower)" stroke="#15803d" strokeWidth="1"/>
      <path d="M4 24L11 12L18 24Z" fill="#16a34a" stroke="#15803d" strokeWidth=".8"/>
      {/* Right tower */}
      <rect x="72" y="24" width="14" height="62" rx="2" fill="url(#hunTower)" stroke="#15803d" strokeWidth="1"/>
      <path d="M72 24L79 12L86 24Z" fill="#16a34a" stroke="#15803d" strokeWidth=".8"/>
      {/* Tower windows */}
      {[0,1,2].map(i => (
        <React.Fragment key={i}>
          <rect x="7" y={32 + i * 16} width="8" height="8" rx="1.5" fill="#bae6fd" stroke="#15803d" strokeWidth=".5"/>
          <rect x="75" y={32 + i * 16} width="8" height="8" rx="1.5" fill="#bae6fd" stroke="#15803d" strokeWidth=".5"/>
        </React.Fragment>
      ))}
      {/* Central dome */}
      <path d="M30 32Q45 10 60 32" fill="url(#hunDome)" stroke="#b91c1c" strokeWidth="1.2"/>
      <circle cx="45" cy="18" r="4" fill="#991b1b" stroke="#7f1d1d" strokeWidth=".6"/>
      <line x1="45" y1="14" x2="45" y2="10" stroke="#7f1d1d" strokeWidth="1"/>
      <circle cx="45" cy="9" r="1.5" fill="#fbbf24"/>
      {/* Main body */}
      <rect x="18" y="32" width="54" height="54" rx="3" fill="url(#hunWall)" stroke="#b45309" strokeWidth="1.2"/>
      {/* 3D side */}
      <path d="M72 36L78 30V82L72 88Z" fill="#fde68a" opacity=".4"/>
      {/* Windows — 3x2 grid */}
      {[0,1].map(row => [0,1,2].map(col => (
        <rect key={`${row}${col}`}
          x={26 + col * 15} y={40 + row * 18} width="10" height="12" rx="1.5"
          fill="#bae6fd" stroke="#b45309" strokeWidth=".6"/>
      )))}
      {/* Central door */}
      <rect x="37" y="72" width="16" height="14" rx="8 8 2 2" fill="url(#hunDoor)" stroke="#78350f" strokeWidth="1"/>
      <circle cx="49" cy="80" r="1.2" fill="#fbbf24"/>
      {/* Hungarian flag */}
      <g transform="translate(62,38)">
        <rect width="12" height="3" fill="#dc2626" rx=".5"/>
        <rect y="3" width="12" height="3" fill="#fff"/>
        <rect y="6" width="12" height="3" fill="#16a34a" rx=".5"/>
      </g>
      <defs>
        <linearGradient id="hunTower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e"/><stop offset="100%" stopColor="#16a34a"/>
        </linearGradient>
        <linearGradient id="hunDome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ef4444"/><stop offset="100%" stopColor="#dc2626"/>
        </linearGradient>
        <linearGradient id="hunWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef9c3"/><stop offset="100%" stopColor="#fde68a"/>
        </linearGradient>
        <linearGradient id="hunDoor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a16207"/><stop offset="100%" stopColor="#78350f"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function EgyptSvg({ w = 90, h = 105 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 90 105" fill="none">
      {/* Sand base */}
      <ellipse cx="45" cy="98" rx="44" ry="6" fill="url(#sandGrad)"/>
      {/* Small background pyramid */}
      <path d="M60 94L74 60L88 94Z" fill="url(#pyrSmall)" opacity=".5"/>
      {/* Main pyramid */}
      <path d="M8 94L45 12L82 94Z" fill="url(#pyrMain)" stroke="#b45309" strokeWidth="1"/>
      {/* Pyramid highlight edge */}
      <path d="M45 12L8 94" stroke="rgba(255,255,255,.15)" strokeWidth="1"/>
      {/* Brick lines */}
      {[0,1,2,3,4,5].map(i => {
        const y = 30 + i * 11;
        const offset = (y - 12) / (94 - 12);
        const x1 = 45 - offset * 37;
        const x2 = 45 + offset * 37;
        return <line key={i} x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(120,53,15,.15)" strokeWidth=".6"/>;
      })}
      {/* Eye of Horus */}
      <circle cx="45" cy="52" r="6" fill="rgba(0,0,0,.1)" stroke="#92400e" strokeWidth=".8"/>
      <circle cx="45" cy="52" r="2.5" fill="#92400e" opacity=".6"/>
      <path d="M39 52Q42 48 45 52" fill="none" stroke="#92400e" strokeWidth=".6"/>
      {/* Door */}
      <rect x="39" y="76" width="12" height="18" rx="6 6 1 1" fill="#78350f" stroke="#451a03" strokeWidth=".8"/>
      <rect x="41" y="78" width="8" height="10" rx="4" fill="#451a03" opacity=".5"/>
      {/* Palm tree */}
      <g transform="translate(4,60)">
        <rect x="4" y="12" width="3" height="22" rx="1" fill="#92400e"/>
        <path d="M-2 14Q5 4 12 14" fill="#16a34a" stroke="#15803d" strokeWidth=".5"/>
        <path d="M0 12Q5 0 10 12" fill="#22c55e" stroke="#16a34a" strokeWidth=".5"/>
        <path d="M-4 16Q5 8 14 16" fill="#15803d" stroke="#166534" strokeWidth=".5"/>
      </g>
      {/* Camel */}
      <g transform="translate(66,80)">
        <ellipse cx="8" cy="4" rx="7" ry="4" fill="#d4a24e"/>
        <path d="M4 4Q5 0 6 4" fill="#c49870" stroke="#a16207" strokeWidth=".3"/>
        <rect x="2" y="6" width="2" height="8" rx=".5" fill="#c49870"/>
        <rect x="12" y="6" width="2" height="8" rx=".5" fill="#c49870"/>
        <circle cx="14" cy="1" r="2" fill="#d4a24e"/>
        <circle cx="15" cy="0" r=".6" fill="#1e293b"/>
      </g>
      {/* Sun */}
      <circle cx="78" cy="8" r="6" fill="#fbbf24" opacity=".6"/>
      <circle cx="78" cy="8" r="8" fill="none" stroke="#fbbf24" strokeWidth=".5" opacity=".3"/>
      <defs>
        <linearGradient id="pyrMain" x1=".3" y1="0" x2=".7" y2="1">
          <stop offset="0%" stopColor="#fbbf24"/><stop offset="50%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
        <linearGradient id="pyrSmall" x1=".3" y1="0" x2=".7" y2="1">
          <stop offset="0%" stopColor="#d4a24e"/><stop offset="100%" stopColor="#b45309"/>
        </linearGradient>
        <radialGradient id="sandGrad" cx=".5" cy=".5" r=".5">
          <stop offset="0%" stopColor="#fef3c7"/><stop offset="100%" stopColor="#fef3c7" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

const SVG_BUILDINGS = {
  buildSchoolEl: SchoolSvg,
  buildCityEl: CitySvg,
  buildFunEl: FunZoneSvg,
  buildAirportEl: AirportSvg,
  buildFranceEl: FranceSvg,
  buildPoleEl: PoleSvg,
  buildHungaryEl: HungarySvg,
  buildEgyptEl: EgyptSvg,
};

export default SVG_BUILDINGS;
