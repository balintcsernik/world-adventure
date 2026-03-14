import React from 'react';

/* ─── High-fidelity SVG building assets for the City Map ─── */

/* ── School: Cartoon red-brick school with clock tower ── */
export function SchoolSvg({ w = 150, h = 140 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 150 140" fill="none">
      {/* Main building body */}
      <rect x="10" y="44" width="130" height="86" rx="4" fill="url(#schWall)" stroke="#92400e" strokeWidth="1.2"/>
      {/* 3D side edge */}
      <path d="M140 48L148 40V126L140 134Z" fill="#b45309" opacity=".2"/>

      {/* Clock tower */}
      <rect x="52" y="10" width="46" height="38" rx="3" fill="url(#schTower)" stroke="#92400e" strokeWidth="1"/>
      {/* Tower roof — triangular */}
      <path d="M48 10L75 -4L102 10Z" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
      {/* Flag pole */}
      <line x1="75" y1="-4" x2="75" y2="-16" stroke="#6b7280" strokeWidth="1.5"/>
      <path d="M75 -16L86 -12L75 -8Z" fill="#ef4444"/>
      {/* Clock face */}
      <circle cx="75" cy="28" r="10" fill="#fef9c3" stroke="#92400e" strokeWidth="1"/>
      <circle cx="75" cy="28" r="8" fill="#fff" stroke="#d4a24e" strokeWidth=".5"/>
      <line x1="75" y1="28" x2="75" y2="22" stroke="#1e293b" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="75" y1="28" x2="80" y2="28" stroke="#1e293b" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="75" cy="28" r="1.2" fill="#1e293b"/>
      {/* Hour markers */}
      {[0,1,2,3].map(i => (
        <circle key={i} cx={75 + Math.sin(i * Math.PI/2) * 7} cy={28 - Math.cos(i * Math.PI/2) * 7} r=".8" fill="#92400e"/>
      ))}

      {/* Windows — top row (6 windows) */}
      {[0,1,2].map(i => (
        <React.Fragment key={`wt${i}`}>
          <rect x={18 + i * 16} y="52" width="12" height="16" rx="2" fill="#bae6fd" stroke="#92400e" strokeWidth=".6"/>
          <line x1={24 + i * 16} y1="52" x2={24 + i * 16} y2="68" stroke="#92400e" strokeWidth=".3"/>
          <line x1={18 + i * 16} y1="60" x2={30 + i * 16} y2="60" stroke="#92400e" strokeWidth=".3"/>
        </React.Fragment>
      ))}
      {[0,1,2].map(i => (
        <React.Fragment key={`wt2${i}`}>
          <rect x={88 + i * 16} y="52" width="12" height="16" rx="2" fill="#bae6fd" stroke="#92400e" strokeWidth=".6"/>
          <line x1={94 + i * 16} y1="52" x2={94 + i * 16} y2="68" stroke="#92400e" strokeWidth=".3"/>
          <line x1={88 + i * 16} y1="60" x2={100 + i * 16} y2="60" stroke="#92400e" strokeWidth=".3"/>
        </React.Fragment>
      ))}

      {/* Windows — bottom row (6 windows) */}
      {[0,1,2].map(i => (
        <React.Fragment key={`wb${i}`}>
          <rect x={18 + i * 16} y="78" width="12" height="16" rx="2" fill="#bae6fd" stroke="#92400e" strokeWidth=".6"/>
          <line x1={24 + i * 16} y1="78" x2={24 + i * 16} y2="94" stroke="#92400e" strokeWidth=".3"/>
          <line x1={18 + i * 16} y1="86" x2={30 + i * 16} y2="86" stroke="#92400e" strokeWidth=".3"/>
        </React.Fragment>
      ))}
      {[0,1,2].map(i => (
        <React.Fragment key={`wb2${i}`}>
          <rect x={88 + i * 16} y="78" width="12" height="16" rx="2" fill="#bae6fd" stroke="#92400e" strokeWidth=".6"/>
          <line x1={94 + i * 16} y1="78" x2={94 + i * 16} y2="94" stroke="#92400e" strokeWidth=".3"/>
          <line x1={88 + i * 16} y1="86" x2={100 + i * 16} y2="86" stroke="#92400e" strokeWidth=".3"/>
        </React.Fragment>
      ))}

      {/* Front door — green arched */}
      <rect x="62" y="98" width="26" height="32" rx="13 13 2 2" fill="#15803d" stroke="#166534" strokeWidth="1"/>
      <rect x="65" y="100" width="20" height="24" rx="10 10 1 1" fill="#22c55e" opacity=".3"/>
      <circle cx="82" cy="116" r="2" fill="#fbbf24"/>
      {/* Door window */}
      <rect x="68" y="102" width="14" height="10" rx="7 7 1 1" fill="#bae6fd" stroke="#166534" strokeWidth=".5"/>

      {/* SCHOOL text above door */}
      <rect x="56" y="88" width="38" height="9" rx="2" fill="#1e293b"/>
      <text x="75" y="95" textAnchor="middle" fontSize="7" fontWeight="900" fill="#fef9c3"
        fontFamily="Nunito,sans-serif">SCHOOL</text>

      {/* Left chimney */}
      <rect x="22" y="34" width="8" height="14" rx="1" fill="#78716c" stroke="#57534e" strokeWidth=".6"/>
      <rect x="20" y="32" width="12" height="4" rx="1.5" fill="#57534e"/>

      {/* Right chimney */}
      <rect x="120" y="34" width="8" height="14" rx="1" fill="#78716c" stroke="#57534e" strokeWidth=".6"/>
      <rect x="118" y="32" width="12" height="4" rx="1.5" fill="#57534e"/>

      {/* Steps */}
      <rect x="56" y="128" width="38" height="5" rx="1" fill="#d6d3d1"/>
      <rect x="52" y="132" width="46" height="5" rx="1" fill="#e7e5e4"/>

      {/* Bushes */}
      <circle cx="22" cy="126" r="8" fill="#22c55e" opacity=".7"/>
      <circle cx="16" cy="128" r="6" fill="#16a34a" opacity=".6"/>
      <circle cx="128" cy="126" r="8" fill="#22c55e" opacity=".7"/>
      <circle cx="134" cy="128" r="6" fill="#16a34a" opacity=".6"/>

      {/* Bell on tower */}
      <path d="M71 40Q75 36 79 40" fill="#fbbf24" stroke="#d97706" strokeWidth=".6"/>
      <circle cx="75" cy="41" r="1.5" fill="#d97706"/>

      {/* Ground shadow */}
      <ellipse cx="75" cy="138" rx="68" ry="3" fill="rgba(0,0,0,.06)"/>

      <defs>
        <linearGradient id="schWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fca5a5"/><stop offset="100%" stopColor="#ef4444"/>
        </linearGradient>
        <linearGradient id="schTower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fca5a5"/><stop offset="100%" stopColor="#f87171"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── City: Cluster of multiple colorful buildings ── */
export function CitySvg({ w = 120, h = 140 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 120 140" fill="none">
      {/* Back-left tall building (purple) */}
      <rect x="2" y="20" width="30" height="110" rx="3" fill="url(#cBldg1)" stroke="#6d28d9" strokeWidth="1"/>
      <rect x="0" y="16" width="34" height="6" rx="2" fill="#7c3aed"/>
      {[0,1,2,3,4,5].map(i => (
        <rect key={`b1w${i}`} x="7" y={28 + i * 16} width="8" height="10" rx="1.5"
          fill="#c4b5fd" stroke="#7c3aed" strokeWidth=".4"/>
      ))}
      {[0,1,2,3,4,5].map(i => (
        <rect key={`b1w2${i}`} x="20" y={28 + i * 16} width="8" height="10" rx="1.5"
          fill="#c4b5fd" stroke="#7c3aed" strokeWidth=".4"/>
      ))}

      {/* Back-right tall building (blue) */}
      <rect x="82" y="14" width="32" height="116" rx="3" fill="url(#cBldg2)" stroke="#1d4ed8" strokeWidth="1"/>
      <rect x="80" y="10" width="36" height="6" rx="2" fill="#2563eb"/>
      {/* Antenna */}
      <rect x="96" y="2" width="2" height="10" rx="1" fill="#2563eb"/>
      <circle cx="97" cy="2" r="2" fill="#ef4444" opacity=".8"/>
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={`b2w${i}`} x="87" y={22 + i * 14} width="8" height="8" rx="1.5"
          fill="#93c5fd" stroke="#1d4ed8" strokeWidth=".4"/>
      ))}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={`b2w2${i}`} x="100" y={22 + i * 14} width="8" height="8" rx="1.5"
          fill="#93c5fd" stroke="#1d4ed8" strokeWidth=".4"/>
      ))}

      {/* Mid-left building (green) */}
      <rect x="24" y="44" width="28" height="86" rx="3" fill="url(#cBldg3)" stroke="#15803d" strokeWidth="1"/>
      <rect x="22" y="40" width="32" height="6" rx="2" fill="#16a34a"/>
      {[0,1,2,3].map(i => (
        <rect key={`b3w${i}`} x="29" y={52 + i * 18} width="9" height="12" rx="1.5"
          fill="#86efac" stroke="#15803d" strokeWidth=".4"/>
      ))}
      {[0,1,2,3].map(i => (
        <rect key={`b3w2${i}`} x="42" y={52 + i * 18} width="6" height="12" rx="1.5"
          fill="#86efac" stroke="#15803d" strokeWidth=".4"/>
      ))}

      {/* Center building (cream/gold — main civic) */}
      <rect x="36" y="52" width="42" height="78" rx="3" fill="url(#cBldg4)" stroke="#b45309" strokeWidth="1.2"/>
      {/* Pediment */}
      <path d="M34 52L57 36L80 52Z" fill="#fde68a" stroke="#b45309" strokeWidth=".8"/>
      {/* Dome */}
      <path d="M48 36Q57 24 66 36" fill="#d97706" stroke="#b45309" strokeWidth=".8"/>
      {/* Columns */}
      <rect x="42" y="68" width="3" height="44" rx="1" fill="#fef9c3" stroke="#b45309" strokeWidth=".3"/>
      <rect x="69" y="68" width="3" height="44" rx="1" fill="#fef9c3" stroke="#b45309" strokeWidth=".3"/>
      {/* Windows */}
      {[0,1].map(r => [0,1].map(c => (
        <rect key={`cw${r}${c}`} x={48 + c * 15} y={58 + r * 20} width="11" height="14" rx="2"
          fill="#bae6fd" stroke="#b45309" strokeWidth=".5"/>
      )))}
      {/* Door */}
      <rect x="49" y="110" width="16" height="20" rx="8 8 2 2" fill="#78350f" stroke="#451a03" strokeWidth=".8"/>
      <circle cx="61" cy="120" r="1.5" fill="#fbbf24"/>

      {/* Right-mid building (pink/magenta) */}
      <rect x="66" y="50" width="24" height="80" rx="3" fill="url(#cBldg5)" stroke="#be185d" strokeWidth="1"/>
      <rect x="64" y="46" width="28" height="6" rx="2" fill="#ec4899"/>
      {[0,1,2,3,4].map(i => (
        <rect key={`b5w${i}`} x="71" y={56 + i * 14} width="7" height="8" rx="1.5"
          fill="#fbcfe8" stroke="#be185d" strokeWidth=".4"/>
      ))}
      {[0,1,2,3,4].map(i => (
        <rect key={`b5w2${i}`} x="82" y={56 + i * 14} width="4" height="8" rx="1"
          fill="#fbcfe8" stroke="#be185d" strokeWidth=".3"/>
      ))}

      {/* Cinema sign on pink building */}
      <rect x="67" y="48" width="22" height="8" rx="1.5" fill="#1e293b" stroke="#be185d" strokeWidth=".3"/>
      <text x="78" y="54.5" textAnchor="middle" fontSize="5" fontWeight="900" fill="#fbbf24"
        fontFamily="Nunito,sans-serif">CINEMA</text>

      {/* Awning/shop at street level */}
      <path d="M36 122Q57 126 78 122" fill="#f59e0b" stroke="#d97706" strokeWidth=".5"/>

      {/* Street lamp */}
      <rect x="55" y="125" width="2" height="12" rx=".5" fill="#6b7280"/>
      <circle cx="56" cy="123" r="3" fill="#fef3c7" opacity=".5"/>

      <defs>
        <linearGradient id="cBldg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ede9fe"/><stop offset="100%" stopColor="#ddd6fe"/>
        </linearGradient>
        <linearGradient id="cBldg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe"/><stop offset="100%" stopColor="#bfdbfe"/>
        </linearGradient>
        <linearGradient id="cBldg3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dcfce7"/><stop offset="100%" stopColor="#bbf7d0"/>
        </linearGradient>
        <linearGradient id="cBldg4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef9c3"/><stop offset="100%" stopColor="#fde68a"/>
        </linearGradient>
        <linearGradient id="cBldg5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fce7f3"/><stop offset="100%" stopColor="#fbcfe8"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── Fun Zone: Theater / Entertainment center with clapperboard ── */
export function FunZoneSvg({ w = 90, h = 100 }) {
  const lights = ['#ef4444','#fbbf24','#22c55e','#3b82f6','#ec4899','#f59e0b','#8b5cf6'];
  return (
    <svg width={w} height={h} viewBox="0 0 90 100" fill="none">
      {/* Building body */}
      <rect x="6" y="24" width="72" height="70" rx="4" fill="url(#funWall)" stroke="#9d174d" strokeWidth="1.2"/>
      <path d="M78 28L84 22V90L78 96Z" fill="#ec4899" opacity=".2"/>
      {/* Marquee roof with lights */}
      <rect x="2" y="16" width="80" height="12" rx="3" fill="#ec4899" stroke="#9d174d" strokeWidth="1"/>
      {lights.map((c, i) => (
        <circle key={i} cx={10 + i * 11} cy="22" r="3" fill={c} opacity=".85">
          <animate attributeName="opacity" values=".4;1;.4" dur={`${0.7 + i * 0.12}s`} repeatCount="indefinite"/>
        </circle>
      ))}
      {/* Clapperboard icon */}
      <g transform="translate(28,32)">
        <rect width="30" height="22" rx="2" fill="#1e293b" stroke="#475569" strokeWidth=".8"/>
        <rect y="0" width="30" height="7" rx="1" fill="#334155"/>
        <line x1="6" y1="0" x2="3" y2="7" stroke="#f8fafc" strokeWidth=".6"/>
        <line x1="12" y1="0" x2="9" y2="7" stroke="#f8fafc" strokeWidth=".6"/>
        <line x1="18" y1="0" x2="15" y2="7" stroke="#f8fafc" strokeWidth=".6"/>
        <line x1="24" y1="0" x2="21" y2="7" stroke="#f8fafc" strokeWidth=".6"/>
        <circle cx="15" cy="15" r="4" fill="#475569"/>
        <circle cx="15" cy="15" r="1.5" fill="#64748b"/>
      </g>
      {/* Door */}
      <rect x="30" y="72" width="22" height="22" rx="3" fill="#831843" stroke="#6b1a3a" strokeWidth="1"/>
      <rect x="33" y="74" width="16" height="7" rx="1.5" fill="#fce7f3" opacity=".3"/>
      <text x="41" y="90" textAnchor="middle" fontSize="7" fontWeight="800" fill="#fce7f3"
        fontFamily="Nunito,sans-serif">ENTER</text>
      {/* Stars */}
      <text x="14" y="40" fontSize="12" fill="#fbbf24" opacity=".6">&#x2B50;</text>
      <text x="68" y="44" fontSize="9" fill="#fbbf24" opacity=".5">&#x2B50;</text>
      <defs>
        <linearGradient id="funWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fce7f3"/><stop offset="100%" stopColor="#fbcfe8"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── Airport: Wide terminal with control tower & plane ── */
export function AirportSvg({ w = 110, h = 90 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 110 90" fill="none">
      {/* Control tower */}
      <rect x="86" y="8" width="14" height="54" rx="2" fill="url(#towerGrad)" stroke="#334155" strokeWidth="1"/>
      <rect x="82" y="2" width="22" height="12" rx="2" fill="#bae6fd" stroke="#334155" strokeWidth="1"/>
      {[0,1,2,3].map(i => (
        <line key={i} x1={86 + i * 5} y1="2" x2={86 + i * 5} y2="14" stroke="#334155" strokeWidth=".4"/>
      ))}
      <line x1="93" y1="0" x2="93" y2="4" stroke="#475569" strokeWidth="1.2"/>
      <circle cx="93" cy="0" r="2.5" fill="#ef4444" opacity=".8"/>
      {/* Radio waves */}
      <path d="M88 -2Q93 -6 98 -2" fill="none" stroke="#94a3b8" strokeWidth=".5" opacity=".5"/>
      {/* Terminal roof — curved */}
      <path d="M2 38Q55 22 100 38" fill="#475569" stroke="#334155" strokeWidth="1"/>
      {/* Terminal body */}
      <rect x="4" y="38" width="96" height="44" rx="3" fill="url(#termWall)" stroke="#64748b" strokeWidth="1"/>
      <path d="M100 42L106 36V78L100 84Z" fill="#94a3b8" opacity=".25"/>
      {/* Glass windows */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={10 + i * 11} y="44" width="8" height="14" rx="1.5"
          fill="#bae6fd" stroke="#64748b" strokeWidth=".5"/>
      ))}
      {/* Departure board */}
      <rect x="26" y="62" width="46" height="6" rx="1.5" fill="#1e293b"/>
      <rect x="30" y="64" width="38" height="2" rx="1" fill="#22d3ee" opacity=".8"/>
      {/* Door */}
      <rect x="40" y="70" width="20" height="12" rx="2" fill="#1e293b" stroke="#0f172a" strokeWidth=".8"/>
      <line x1="50" y1="70" x2="50" y2="82" stroke="rgba(255,255,255,.2)" strokeWidth=".5"/>
      {/* Plane */}
      <g transform="translate(8,8) rotate(-12)">
        <path d="M0 6L10 3L18 0L20 5L12 6L17 12L15 13L10 8L3 9Z" fill="#94a3b8" stroke="#64748b" strokeWidth=".5"/>
      </g>
      {/* Plane speech bubble */}
      <rect x="56" y="4" width="22" height="18" rx="6" fill="#fff" stroke="#e5e7eb" strokeWidth=".8"/>
      <text x="67" y="16" textAnchor="middle" fontSize="12">&#9992;&#65039;</text>
      <path d="M64 22L60 28L68 22Z" fill="#fff" stroke="#e5e7eb" strokeWidth=".5"/>
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

/* ── France: Detailed Eiffel Tower ── */
export function FranceSvg({ w = 65, h = 130 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 65 130" fill="none">
      <line x1="32" y1="0" x2="32" y2="16" stroke="#78716c" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="32" cy="0" r="3" fill="#fbbf24"/>
      <path d="M28 16L32 8L36 16Z" fill="url(#ef1)" stroke="#57534e" strokeWidth=".8"/>
      <path d="M26 16H38L36 30H28Z" fill="url(#ef1)" stroke="#57534e" strokeWidth=".6"/>
      <rect x="23" y="30" width="20" height="5" rx="1.5" fill="#78716c" stroke="#57534e" strokeWidth=".6"/>
      <path d="M24 35H42L44 64H22Z" fill="url(#ef2)" stroke="#57534e" strokeWidth=".6"/>
      {[0,1,2,3].map(i => (
        <line key={i} x1={24 + i * .5} y1={39 + i * 7} x2={42 - i * .5} y2={39 + i * 7}
          stroke="rgba(255,255,255,.25)" strokeWidth=".6"/>
      ))}
      <line x1="26" y1="35" x2="38" y2="64" stroke="rgba(255,255,255,.12)" strokeWidth=".4"/>
      <line x1="38" y1="35" x2="26" y2="64" stroke="rgba(255,255,255,.12)" strokeWidth=".4"/>
      <rect x="19" y="64" width="28" height="5" rx="1.5" fill="#57534e" stroke="#44403c" strokeWidth=".6"/>
      <path d="M20 69H46L54 118H12Z" fill="url(#ef3)" stroke="#44403c" strokeWidth=".8"/>
      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1={19 + i * .7} y1={74 + i * 8} x2={47 - i * .7} y2={74 + i * 8}
          stroke="rgba(255,255,255,.18)" strokeWidth=".5"/>
      ))}
      <line x1="22" y1="69" x2="44" y2="118" stroke="rgba(255,255,255,.08)" strokeWidth=".4"/>
      <line x1="44" y1="69" x2="22" y2="118" stroke="rgba(255,255,255,.08)" strokeWidth=".4"/>
      <path d="M16 118Q32 104 50 118" fill="none" stroke="#44403c" strokeWidth="1.5"/>
      <rect x="12" y="118" width="42" height="7" rx="2" fill="#44403c" stroke="#292524" strokeWidth=".6"/>
      <ellipse cx="32" cy="127" rx="30" ry="3" fill="rgba(0,0,0,.08)"/>
      {/* French flag */}
      <g transform="translate(44,24)">
        <rect width="5" height="10" fill="#2563eb" rx=".5"/>
        <rect x="5" width="5" height="10" fill="#fff"/>
        <rect x="10" width="5" height="10" fill="#dc2626" rx=".5"/>
      </g>
      <defs>
        <linearGradient id="ef1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a8a29e"/><stop offset="100%" stopColor="#78716c"/>
        </linearGradient>
        <linearGradient id="ef2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#78716c"/><stop offset="100%" stopColor="#57534e"/>
        </linearGradient>
        <linearGradient id="ef3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#57534e"/><stop offset="100%" stopColor="#44403c"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── North Pole: Igloo with snow mountains, aurora ── */
export function PoleSvg({ w = 95, h = 95 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 95 95" fill="none">
      {/* Background mini-mountains */}
      <path d="M5 55L20 28L35 48L50 22L65 42L80 18L95 45L95 70L0 70Z" fill="#cbd5e1" opacity=".5"/>
      <path d="M20 28L15 38L25 38Z" fill="#f0f9ff" opacity=".6"/>
      <path d="M50 22L44 34L56 34Z" fill="#fff" opacity=".7"/>
      <path d="M80 18L74 32L86 32Z" fill="#f0f9ff" opacity=".7"/>
      {/* Aurora */}
      <path d="M10 12Q30 2 55 8Q75 2 90 12" fill="none" stroke="#22d3ee" strokeWidth="2.5" opacity=".35">
        <animate attributeName="d" values="M10 12Q30 2 55 8Q75 2 90 12;M10 10Q30 6 55 4Q75 8 90 10;M10 12Q30 2 55 8Q75 2 90 12" dur="4s" repeatCount="indefinite"/>
      </path>
      <path d="M15 16Q40 6 60 14Q80 8 92 16" fill="none" stroke="#a78bfa" strokeWidth="1.5" opacity=".25">
        <animate attributeName="d" values="M15 16Q40 6 60 14Q80 8 92 16;M15 14Q40 10 60 8Q80 12 92 14;M15 16Q40 6 60 14Q80 8 92 16" dur="5s" repeatCount="indefinite"/>
      </path>
      {/* Snow ground */}
      <ellipse cx="48" cy="80" rx="46" ry="14" fill="url(#snowGrd)"/>
      {/* Igloo */}
      <path d="M20 76Q20 38 48 38Q76 38 76 76Z" fill="url(#iglGrad)" stroke="#cbd5e1" strokeWidth="1.2"/>
      {[0,1,2].map(i => (
        <path key={i} d={`M${24 + i * 2} ${50 + i * 10}H${72 - i * 2}`} stroke="#cbd5e1" strokeWidth=".6" opacity=".5"/>
      ))}
      {/* Vertical bricks */}
      <line x1="36" y1="50" x2="36" y2="60" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      <line x1="48" y1="50" x2="48" y2="60" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      <line x1="60" y1="50" x2="60" y2="60" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      <line x1="30" y1="60" x2="30" y2="70" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      <line x1="42" y1="60" x2="42" y2="70" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      <line x1="54" y1="60" x2="54" y2="70" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      <line x1="66" y1="60" x2="66" y2="70" stroke="#cbd5e1" strokeWidth=".4" opacity=".4"/>
      {/* Door */}
      <path d="M40 76Q40 62 48 62Q56 62 56 76Z" fill="#475569" stroke="#334155" strokeWidth=".8"/>
      {/* Snowflake */}
      <text x="48" y="50" textAnchor="middle" fontSize="12" fill="#93c5fd" opacity=".6">&#10052;</text>
      {/* Penguin */}
      <g transform="translate(8,64)">
        <ellipse cx="7" cy="9" rx="6" ry="8" fill="#1e293b"/>
        <ellipse cx="7" cy="9" rx="4" ry="6" fill="#f8fafc"/>
        <circle cx="5" cy="6" r="1" fill="#1e293b"/>
        <circle cx="9" cy="6" r="1" fill="#1e293b"/>
        <path d="M6 8L7 9.5L8 8" fill="#f59e0b" stroke="#d97706" strokeWidth=".4"/>
      </g>
      {/* Snow particles */}
      <circle cx="22" cy="24" r="1.5" fill="#fff" opacity=".5">
        <animate attributeName="cy" values="24;75" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values=".5;0" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="68" cy="18" r="1" fill="#fff" opacity=".4">
        <animate attributeName="cy" values="18;70" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values=".4;0" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="45" cy="28" r="1.2" fill="#fff" opacity=".45">
        <animate attributeName="cy" values="28;72" dur="3.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values=".45;0" dur="3.5s" repeatCount="indefinite"/>
      </circle>
      <defs>
        <linearGradient id="iglGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc"/><stop offset="100%" stopColor="#e2e8f0"/>
        </linearGradient>
        <radialGradient id="snowGrd" cx=".5" cy=".5" r=".5">
          <stop offset="0%" stopColor="#f1f5f9"/><stop offset="80%" stopColor="#e2e8f0" stopOpacity=".6"/>
          <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ── Hungary: Parliament with dome, towers, arched windows ── */
export function HungarySvg({ w = 105, h = 110 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 105 110" fill="none">
      {/* Left tower */}
      <rect x="4" y="28" width="16" height="74" rx="2" fill="url(#hTwr)" stroke="#15803d" strokeWidth="1"/>
      <path d="M4 28L12 14L20 28Z" fill="#16a34a" stroke="#15803d" strokeWidth=".8"/>
      <circle cx="12" cy="18" r="2" fill="#fbbf24" opacity=".7"/>
      {/* Right tower */}
      <rect x="85" y="28" width="16" height="74" rx="2" fill="url(#hTwr)" stroke="#15803d" strokeWidth="1"/>
      <path d="M85 28L93 14L101 28Z" fill="#16a34a" stroke="#15803d" strokeWidth=".8"/>
      <circle cx="93" cy="18" r="2" fill="#fbbf24" opacity=".7"/>
      {/* Tower windows */}
      {[0,1,2,3].map(i => (
        <React.Fragment key={i}>
          <rect x="7" y={36 + i * 16} width="10" height="9" rx="2" fill="#bae6fd" stroke="#15803d" strokeWidth=".5"/>
          <rect x="88" y={36 + i * 16} width="10" height="9" rx="2" fill="#bae6fd" stroke="#15803d" strokeWidth=".5"/>
        </React.Fragment>
      ))}
      {/* Central dome */}
      <path d="M35 38Q52 12 70 38" fill="url(#hDome)" stroke="#b91c1c" strokeWidth="1.2"/>
      <circle cx="52" cy="20" r="5" fill="#991b1b" stroke="#7f1d1d" strokeWidth=".6"/>
      <line x1="52" y1="15" x2="52" y2="10" stroke="#7f1d1d" strokeWidth="1.2"/>
      <circle cx="52" cy="9" r="2" fill="#fbbf24"/>
      {/* Main body */}
      <rect x="20" y="38" width="65" height="64" rx="3" fill="url(#hWall)" stroke="#b45309" strokeWidth="1.2"/>
      <path d="M85 42L92 36V98L85 104Z" fill="#fde68a" opacity=".35"/>
      {/* Arched windows — 2 rows */}
      {[0,1].map(r => [0,1,2,3].map(c => (
        <rect key={`hw${r}${c}`} x={28 + c * 14} y={46 + r * 22} width="10" height="14" rx="5 5 1.5 1.5"
          fill="#bae6fd" stroke="#b45309" strokeWidth=".5"/>
      )))}
      {/* Central door */}
      <rect x="42" y="84" width="20" height="18" rx="10 10 2 2" fill="url(#hDoor)" stroke="#78350f" strokeWidth="1"/>
      <circle cx="56" cy="94" r="1.5" fill="#fbbf24"/>
      {/* Steps */}
      <rect x="36" y="100" width="32" height="5" rx="1" fill="#d6d3d1"/>
      {/* Hungarian flag */}
      <g transform="translate(72,44)">
        <rect width="14" height="3.5" fill="#dc2626" rx=".5"/>
        <rect y="3.5" width="14" height="3.5" fill="#fff"/>
        <rect y="7" width="14" height="3.5" fill="#16a34a" rx=".5"/>
      </g>
      <defs>
        <linearGradient id="hTwr" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e"/><stop offset="100%" stopColor="#16a34a"/>
        </linearGradient>
        <linearGradient id="hDome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ef4444"/><stop offset="100%" stopColor="#dc2626"/>
        </linearGradient>
        <linearGradient id="hWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef9c3"/><stop offset="100%" stopColor="#fde68a"/>
        </linearGradient>
        <linearGradient id="hDoor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a16207"/><stop offset="100%" stopColor="#78350f"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── Egypt: Pyramids with palm tree, camel, sand ── */
export function EgyptSvg({ w = 110, h = 120 }) {
  return (
    <svg width={w} height={h} viewBox="0 0 110 120" fill="none">
      {/* Sand base */}
      <ellipse cx="55" cy="110" rx="54" ry="8" fill="url(#eSand)"/>
      {/* Background small pyramid */}
      <path d="M70 106L88 62L106 106Z" fill="url(#ePyrSm)" opacity=".45"/>
      {/* Main pyramid */}
      <path d="M10 106L55 14L100 106Z" fill="url(#ePyrMain)" stroke="#b45309" strokeWidth="1"/>
      <path d="M55 14L10 106" stroke="rgba(255,255,255,.12)" strokeWidth="1"/>
      {/* Brick lines */}
      {[0,1,2,3,4,5,6].map(i => {
        const y = 28 + i * 12;
        const ratio = (y - 14) / (106 - 14);
        const x1 = 55 - ratio * 45;
        const x2 = 55 + ratio * 45;
        return <line key={i} x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(120,53,15,.12)" strokeWidth=".6"/>;
      })}
      {/* Eye of Horus */}
      <circle cx="55" cy="58" r="7" fill="rgba(0,0,0,.08)" stroke="#92400e" strokeWidth=".8"/>
      <circle cx="55" cy="58" r="3" fill="#92400e" opacity=".5"/>
      <path d="M48 58Q51 53 55 58" fill="none" stroke="#92400e" strokeWidth=".5"/>
      {/* Door */}
      <rect x="48" y="86" width="14" height="20" rx="7 7 1 1" fill="#78350f" stroke="#451a03" strokeWidth=".8"/>
      <rect x="50" y="88" width="10" height="12" rx="5" fill="#451a03" opacity=".4"/>
      {/* Palm trees */}
      <g transform="translate(4,68)">
        <rect x="5" y="14" width="4" height="28" rx="1.5" fill="#92400e"/>
        <path d="M-3 16Q7 4 16 16" fill="#16a34a" stroke="#15803d" strokeWidth=".6"/>
        <path d="M0 14Q7 0 14 14" fill="#22c55e" stroke="#16a34a" strokeWidth=".5"/>
        <path d="M-5 18Q7 10 18 18" fill="#15803d" stroke="#166534" strokeWidth=".5"/>
      </g>
      <g transform="translate(88,74)">
        <rect x="3" y="10" width="3" height="22" rx="1" fill="#92400e"/>
        <path d="M-2 12Q5 2 12 12" fill="#16a34a" stroke="#15803d" strokeWidth=".5"/>
        <path d="M0 10Q5 -2 10 10" fill="#22c55e" stroke="#16a34a" strokeWidth=".4"/>
        <path d="M-4 14Q5 6 14 14" fill="#15803d" stroke="#166534" strokeWidth=".4"/>
      </g>
      {/* Camel */}
      <g transform="translate(76,90)">
        <ellipse cx="10" cy="5" rx="9" ry="5" fill="#d4a24e"/>
        <path d="M5 5Q6.5 0 8 5" fill="#c49870" stroke="#a16207" strokeWidth=".3"/>
        <rect x="3" y="8" width="2.5" height="10" rx=".5" fill="#c49870"/>
        <rect x="15" y="8" width="2.5" height="10" rx=".5" fill="#c49870"/>
        <circle cx="18" cy="1" r="2.5" fill="#d4a24e"/>
        <circle cx="19" cy="0" r=".8" fill="#1e293b"/>
      </g>
      {/* Sun */}
      <circle cx="96" cy="10" r="8" fill="#fbbf24" opacity=".5"/>
      <circle cx="96" cy="10" r="11" fill="none" stroke="#fbbf24" strokeWidth=".5" opacity=".25"/>
      <defs>
        <linearGradient id="ePyrMain" x1=".3" y1="0" x2=".7" y2="1">
          <stop offset="0%" stopColor="#fbbf24"/><stop offset="50%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
        <linearGradient id="ePyrSm" x1=".3" y1="0" x2=".7" y2="1">
          <stop offset="0%" stopColor="#d4a24e"/><stop offset="100%" stopColor="#b45309"/>
        </linearGradient>
        <radialGradient id="eSand" cx=".5" cy=".5" r=".5">
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
