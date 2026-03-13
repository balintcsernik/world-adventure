import React from 'react';

/**
 * CityEnvironment — Full-width illustrated SVG landscape.
 *
 * Isometric-style diorama with:
 *   - Warm sky gradient with soft clouds
 *   - Snow-capped mountains (right background)
 *   - Rolling green hills with depth layers
 *   - Desert biome (left) with sand dunes
 *   - Snow biome (right) with ice
 *   - Prominent winding roads with white lane dashes
 *   - Railroad tracks
 *   - Scattered trees, cacti, snowy pines
 */
export default function CityEnvironment() {
  return (
    <div id="city-env-bg" style={{
      position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden',
    }}>
      <svg
        viewBox="0 0 1600 800"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        {/* ─── Sky ─── */}
        <rect width="1600" height="800" fill="url(#skyGrad)" />

        {/* ─── Distant mountains (right side — snow-capped) ─── */}
        <path d="M1000 280L1080 140L1160 240L1240 120L1340 200L1420 100L1500 190L1600 160L1600 360L1000 360Z"
          fill="url(#mtnGrad1)" />
        <path d="M1080 140L1060 170L1100 170Z" fill="#f0f9ff" opacity=".7" />
        <path d="M1240 120L1215 155L1265 155Z" fill="#f0f9ff" opacity=".8" />
        <path d="M1420 100L1395 140L1445 140Z" fill="#fff" opacity=".7" />
        <path d="M1500 190L1480 218L1520 218Z" fill="#f0f9ff" opacity=".6" />

        {/* Distant mountains (left side — warmer) */}
        <path d="M0 300L80 200L180 260L280 180L380 240L480 190L580 250L680 210L780 270L880 230L1000 280L1000 360L0 360Z"
          fill="url(#mtnGrad2)" opacity=".5" />

        {/* ─── Clouds ─── */}
        <g opacity=".6">
          <ellipse cx="200" cy="90" rx="80" ry="26" fill="#fff" />
          <ellipse cx="250" cy="78" rx="55" ry="22" fill="#fff" />
          <ellipse cx="155" cy="84" rx="45" ry="18" fill="#fff" />
        </g>
        <g opacity=".45">
          <ellipse cx="750" cy="65" rx="65" ry="20" fill="#fff" />
          <ellipse cx="800" cy="55" rx="48" ry="17" fill="#fff" />
          <ellipse cx="700" cy="60" rx="40" ry="15" fill="#fff" />
        </g>
        <g opacity=".35">
          <ellipse cx="1300" cy="80" rx="55" ry="18" fill="#fff" />
          <ellipse cx="1340" cy="70" rx="42" ry="15" fill="#fff" />
        </g>

        {/* ─── Background hills (far) ─── */}
        <path d="M0 360Q200 300 400 340Q600 310 800 330Q1000 300 1200 340Q1400 310 1600 340L1600 440L0 440Z"
          fill="url(#hillFar)" />

        {/* ─── Mid-ground hills ─── */}
        <path d="M0 400Q150 360 350 390Q550 365 750 380Q950 360 1150 390Q1350 365 1600 385L1600 480L0 480Z"
          fill="url(#hillMid)" />

        {/* ─── Desert biome (left zone) ─── */}
        <path d="M0 380Q80 350 180 380Q240 370 320 400L320 700L0 700Z"
          fill="url(#desertGrad)" />
        {/* Sand dunes */}
        <ellipse cx="100" cy="520" rx="80" ry="16" fill="#e8d5a3" opacity=".5" />
        <ellipse cx="240" cy="540" rx="55" ry="10" fill="#dcc89e" opacity=".4" />
        <ellipse cx="60" cy="580" rx="60" ry="12" fill="#d4b896" opacity=".35" />

        {/* ─── Snow biome (right zone) ─── */}
        <path d="M1250 380Q1350 350 1450 375Q1520 365 1600 380L1600 700L1250 700Z"
          fill="url(#snowGrad)" />
        {/* Snow drifts */}
        <ellipse cx="1350" cy="450" rx="60" ry="10" fill="#f0f9ff" opacity=".6" />
        <ellipse cx="1500" cy="470" rx="50" ry="8" fill="#f0f9ff" opacity=".5" />

        {/* ─── Main grass ground ─── */}
        <path d="M280 420Q500 395 800 410Q1100 395 1300 420L1300 700L280 700Z"
          fill="url(#grassGrad)" />

        {/* ─── Foreground ground (darkest green/brown) ─── */}
        <rect x="0" y="680" width="1600" height="120" fill="url(#groundGrad)" />

        {/* ─── WINDING ROADS ─── */}
        {/* Main loop road */}
        <path d="M0 550 Q200 520 400 540 Q550 520 700 500 Q850 480 950 500 Q1100 530 1200 510 Q1350 490 1500 520 Q1550 530 1600 540"
          fill="none" stroke="#6b7280" strokeWidth="28" strokeLinecap="round" opacity=".7" />
        {/* Road edge lines */}
        <path d="M0 550 Q200 520 400 540 Q550 520 700 500 Q850 480 950 500 Q1100 530 1200 510 Q1350 490 1500 520 Q1550 530 1600 540"
          fill="none" stroke="#4b5563" strokeWidth="30" strokeLinecap="round" opacity=".15" />
        {/* Center dashes */}
        <path d="M0 550 Q200 520 400 540 Q550 520 700 500 Q850 480 950 500 Q1100 530 1200 510 Q1350 490 1500 520 Q1550 530 1600 540"
          fill="none" stroke="#fef3c7" strokeWidth="2.5" strokeDasharray="16 12" opacity=".7" />

        {/* Upper branch road (to airport area) */}
        <path d="M700 500 Q720 440 780 400 Q840 360 900 380 Q960 400 1050 380"
          fill="none" stroke="#6b7280" strokeWidth="22" strokeLinecap="round" opacity=".6" />
        <path d="M700 500 Q720 440 780 400 Q840 360 900 380 Q960 400 1050 380"
          fill="none" stroke="#fef3c7" strokeWidth="2" strokeDasharray="14 10" opacity=".6" />

        {/* Left branch (to Egypt/Hungary) */}
        <path d="M400 540 Q350 480 300 440 Q250 400 200 380 Q150 360 100 360"
          fill="none" stroke="#6b7280" strokeWidth="22" strokeLinecap="round" opacity=".6" />
        <path d="M400 540 Q350 480 300 440 Q250 400 200 380 Q150 360 100 360"
          fill="none" stroke="#fef3c7" strokeWidth="2" strokeDasharray="14 10" opacity=".6" />

        {/* Right branch (to France/Pole) */}
        <path d="M1200 510 Q1280 460 1350 430 Q1420 400 1480 380"
          fill="none" stroke="#6b7280" strokeWidth="22" strokeLinecap="round" opacity=".6" />
        <path d="M1200 510 Q1280 460 1350 430 Q1420 400 1480 380"
          fill="none" stroke="#fef3c7" strokeWidth="2" strokeDasharray="14 10" opacity=".6" />

        {/* School approach road */}
        <path d="M700 500 Q720 560 740 600 Q750 630 760 650"
          fill="none" stroke="#6b7280" strokeWidth="24" strokeLinecap="round" opacity=".65" />
        <path d="M700 500 Q720 560 740 600 Q750 630 760 650"
          fill="none" stroke="#fef3c7" strokeWidth="2" strokeDasharray="14 10" opacity=".6" />

        {/* ─── Railroad tracks (decorative) ─── */}
        <path d="M320 600 Q250 560 180 530 Q110 500 40 490"
          fill="none" stroke="#78716c" strokeWidth="4" strokeLinecap="round" opacity=".4" />
        <path d="M320 600 Q250 560 180 530 Q110 500 40 490"
          fill="none" stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="3 8" opacity=".5" />

        {/* ─── Trees (grass biome) ─── */}
        <g opacity=".8">
          <TreeSvg x={420} y={460} s={1.1} />
          <TreeSvg x={460} y={475} s={0.85} />
          <TreeSvg x={520} y={450} s={1.2} />
          <TreeSvg x={580} y={470} s={0.9} />
          <TreeSvg x={900} y={465} s={1.0} />
          <TreeSvg x={950} y={480} s={0.75} />
          <TreeSvg x={1020} y={455} s={1.1} />
          <TreeSvg x={1080} y={470} s={0.8} />
          <TreeSvg x={650} y={580} s={0.7} />
          <TreeSvg x={850} y={560} s={0.85} />
        </g>

        {/* ─── Cacti (desert biome) ─── */}
        <CactusSvg x={80} y={480} s={0.9} />
        <CactusSvg x={180} y={500} s={1.1} />
        <CactusSvg x={270} y={510} s={0.75} />
        <CactusSvg x={50} y={550} s={0.6} />

        {/* ─── Snowy pines (snow biome) ─── */}
        <SnowPineSvg x={1290} y={440} s={1.0} />
        <SnowPineSvg x={1350} y={430} s={1.2} />
        <SnowPineSvg x={1420} y={445} s={0.9} />
        <SnowPineSvg x={1500} y={435} s={1.1} />
        <SnowPineSvg x={1550} y={450} s={0.8} />

        {/* ─── Street lamps (along roads) ─── */}
        <LampSvg x={500} y={520} />
        <LampSvg x={850} y={490} />
        <LampSvg x={1100} y={515} />

        {/* ─── Grass patches / flowers ─── */}
        <g opacity=".5">
          <circle cx="480" cy="530" r="2" fill="#fbbf24" />
          <circle cx="485" cy="528" r="1.5" fill="#ec4899" />
          <circle cx="920" cy="500" r="2" fill="#f472b6" />
          <circle cx="925" cy="498" r="1.5" fill="#fbbf24" />
          <circle cx="700" cy="580" r="2" fill="#ef4444" />
          <circle cx="705" cy="578" r="1.5" fill="#fbbf24" />
        </g>

        <defs>
          {/* Sky — warm gradient */}
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="30%" stopColor="#93c5fd" />
            <stop offset="55%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>
          {/* Mountains right (blue-gray) */}
          <linearGradient id="mtnGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="40%" stopColor="#a8b4c4" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          {/* Mountains left (warm gray-green) */}
          <linearGradient id="mtnGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6b8065" />
            <stop offset="100%" stopColor="#97a892" />
          </linearGradient>
          {/* Far hills */}
          <linearGradient id="hillFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6dc98e" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
          {/* Mid hills */}
          <linearGradient id="hillMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          {/* Grass */}
          <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
          {/* Desert */}
          <linearGradient id="desertGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="60%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d4a24e" />
          </linearGradient>
          {/* Snow */}
          <linearGradient id="snowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
          {/* Ground */}
          <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#65a30d" />
            <stop offset="100%" stopColor="#4d7c0f" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ─── Helper SVG sub-components ─── */

function TreeSvg({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <rect x="-3" y="0" width="6" height="18" rx="2" fill="#78350f" />
      <ellipse cx="0" cy="-2" rx="13" ry="16" fill="#16a34a" />
      <ellipse cx="0" cy="-10" rx="10" ry="13" fill="#22c55e" />
      <ellipse cx="0" cy="-16" rx="7" ry="9" fill="#4ade80" />
      {/* Highlight */}
      <ellipse cx="-3" cy="-12" rx="4" ry="6" fill="#86efac" opacity=".4" />
    </g>
  );
}

function CactusSvg({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <rect x="-4" y="-35" width="8" height="35" rx="4" fill="#16a34a" stroke="#15803d" strokeWidth="1" />
      <rect x="-14" y="-28" width="7" height="16" rx="3.5" fill="#16a34a" stroke="#15803d" strokeWidth=".8" />
      <rect x="7" y="-22" width="6" height="14" rx="3" fill="#16a34a" stroke="#15803d" strokeWidth=".8" />
      {/* Highlight */}
      <rect x="-2" y="-32" width="2" height="25" rx="1" fill="#4ade80" opacity=".3" />
    </g>
  );
}

function SnowPineSvg({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <rect x="-2.5" y="0" width="5" height="16" rx="2" fill="#78716c" />
      <path d="M-14 2L0 -24L14 2Z" fill="#d1fae5" stroke="#a7f3d0" strokeWidth=".6" />
      <path d="M-11 -6L0 -32L11 -6Z" fill="#ecfdf5" stroke="#d1fae5" strokeWidth=".5" />
      <path d="M-8 -14L0 -38L8 -14Z" fill="#f0fdf4" stroke="#ecfdf5" strokeWidth=".4" />
      {/* Snow on tips */}
      <ellipse cx="0" cy="-38" rx="3" ry="1.5" fill="#fff" opacity=".7" />
      <ellipse cx="-12" cy="2" rx="4" ry="1.5" fill="#fff" opacity=".5" />
      <ellipse cx="12" cy="2" rx="4" ry="1.5" fill="#fff" opacity=".5" />
    </g>
  );
}

function LampSvg({ x, y }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="-1.5" y="-30" width="3" height="30" rx="1" fill="#6b7280" />
      <circle cx="0" cy="-32" r="5" fill="#fef3c7" opacity=".6" />
      <circle cx="0" cy="-32" r="3" fill="#fbbf24" opacity=".8" />
    </g>
  );
}
