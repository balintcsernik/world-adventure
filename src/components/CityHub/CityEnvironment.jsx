import React from 'react';

/**
 * CityEnvironment — Full-width illustrated SVG landscape background.
 *
 * Layer 1 of the City Hub.  Contains sky, clouds, hills, roads,
 * and distinct biomes (grass, desert, snow) baked into a single
 * responsive SVG so we avoid CSS-shape primitives entirely.
 */
export default function CityEnvironment() {
  return (
    <div id="city-env-bg" style={{
      position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden',
    }}>
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        {/* ─── Sky ─── */}
        <rect width="1200" height="600" fill="url(#skyGrad)" />

        {/* ─── Sun ─── */}
        <circle cx="950" cy="80" r="50" fill="#fde68a" opacity=".7" />
        <circle cx="950" cy="80" r="60" fill="none" stroke="#fde68a" strokeWidth="3" opacity=".2" />
        <circle cx="950" cy="80" r="75" fill="none" stroke="#fde68a" strokeWidth="2" opacity=".1" />

        {/* ─── Clouds ─── */}
        <g opacity=".65">
          <ellipse cx="180" cy="80" rx="70" ry="24" fill="#fff" />
          <ellipse cx="220" cy="68" rx="50" ry="20" fill="#fff" />
          <ellipse cx="140" cy="74" rx="40" ry="16" fill="#fff" />
        </g>
        <g opacity=".5">
          <ellipse cx="650" cy="55" rx="55" ry="18" fill="#fff" />
          <ellipse cx="690" cy="46" rx="40" ry="15" fill="#fff" />
          <ellipse cx="610" cy="50" rx="35" ry="13" fill="#fff" />
        </g>
        <g opacity=".4">
          <ellipse cx="1050" cy="100" rx="60" ry="20" fill="#fff" />
          <ellipse cx="1090" cy="90" rx="45" ry="16" fill="#fff" />
        </g>

        {/* ─── Distant mountain range ─── */}
        <path d="M0 260 L100 180 L200 220 L320 150 L420 200 L500 160 L600 210 L700 140 L800 190 L900 170 L1000 200 L1100 155 L1200 210 L1200 300 L0 300Z"
          fill="url(#mountainGrad)" opacity=".4" />

        {/* ─── Rolling green hills ─── */}
        <path d="M0 320 Q150 260 300 310 Q450 280 600 300 Q750 270 900 310 Q1050 280 1200 300 L1200 420 L0 420Z"
          fill="url(#hillGrad1)" />
        <path d="M0 360 Q200 310 400 350 Q600 320 800 340 Q1000 310 1200 350 L1200 440 L0 440Z"
          fill="url(#hillGrad2)" />

        {/* ─── Grass biome (center) ─── */}
        <path d="M200 420 Q400 400 600 410 Q800 400 1000 420 L1000 500 L200 500Z"
          fill="url(#grassGrad)" />

        {/* ─── Desert biome (left) ─── */}
        <path d="M0 410 Q100 390 200 410 Q250 400 300 420 L300 540 L0 540Z"
          fill="url(#desertGrad)" />
        {/* Sand dunes */}
        <ellipse cx="80" cy="480" rx="60" ry="12" fill="#e8d5a3" opacity=".5" />
        <ellipse cx="220" cy="490" rx="45" ry="8" fill="#dcc89e" opacity=".4" />

        {/* ─── Snow biome (right) ─── */}
        <path d="M900 410 Q1000 390 1100 405 Q1150 400 1200 410 L1200 540 L900 540Z"
          fill="url(#snowBiomeGrad)" />
        {/* Snow caps */}
        <ellipse cx="1000" cy="425" rx="50" ry="8" fill="#f0f9ff" opacity=".5" />
        <ellipse cx="1120" cy="430" rx="40" ry="6" fill="#f0f9ff" opacity=".4" />

        {/* ─── Roads ─── */}
        {/* Main horizontal road */}
        <path d="M0 450 Q300 440 600 445 Q900 440 1200 450"
          fill="none" stroke="#9ca3af" strokeWidth="18" strokeLinecap="round" opacity=".35" />
        {/* Road dashes */}
        <path d="M0 450 Q300 440 600 445 Q900 440 1200 450"
          fill="none" stroke="#d4d4d8" strokeWidth="2" strokeDasharray="12 10" opacity=".4" />
        {/* Vertical connector road */}
        <path d="M600 350 Q590 400 600 445"
          fill="none" stroke="#9ca3af" strokeWidth="14" strokeLinecap="round" opacity=".3" />

        {/* ─── Trees (grass biome) ─── */}
        <g opacity=".7">
          {/* Tree cluster left */}
          <TreeSvg x={340} y={400} s={1} />
          <TreeSvg x={370} y={410} s={0.8} />
          <TreeSvg x={420} y={395} s={1.1} />
          {/* Tree cluster right */}
          <TreeSvg x={750} y={405} s={0.9} />
          <TreeSvg x={790} y={395} s={1.05} />
          <TreeSvg x={830} y={410} s={0.75} />
          {/* Scattered */}
          <TreeSvg x={500} y={385} s={0.7} />
          <TreeSvg x={680} y={415} s={0.85} />
        </g>

        {/* ─── Cacti (desert biome) ─── */}
        <CactusSvg x={60} y={455} s={0.8} />
        <CactusSvg x={160} y={448} s={1} />
        <CactusSvg x={250} y={462} s={0.7} />

        {/* ─── Snowy pines (snow biome) ─── */}
        <SnowPineSvg x={940} y={418} s={0.9} />
        <SnowPineSvg x={1010} y={412} s={1.1} />
        <SnowPineSvg x={1080} y={420} s={0.8} />
        <SnowPineSvg x={1150} y={415} s={0.95} />

        {/* ─── Ground line ─── */}
        <rect x="0" y="530" width="1200" height="70" fill="url(#groundGrad)" />

        <defs>
          {/* Sky */}
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="35%" stopColor="#93c5fd" />
            <stop offset="60%" stopColor="#bfdbfe" />
            <stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>
          {/* Mountains */}
          <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
          {/* Hills */}
          <linearGradient id="hillGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
          <linearGradient id="hillGrad2" x1="0" y1="0" x2="0" y2="1">
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
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          {/* Snow */}
          <linearGradient id="snowBiomeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
          {/* Ground */}
          <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a3e635" />
            <stop offset="100%" stopColor="#65a30d" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ─── Small helper SVG sub-components for environment detail ─── */

function TreeSvg({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <rect x="-3" y="0" width="6" height="18" rx="2" fill="#92400e" />
      <ellipse cx="0" cy="-6" rx="14" ry="18" fill="#22c55e" />
      <ellipse cx="0" cy="-12" rx="10" ry="12" fill="#4ade80" />
      <ellipse cx="0" cy="-2" rx="12" ry="14" fill="#16a34a" opacity=".6" />
    </g>
  );
}

function CactusSvg({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <rect x="-3" y="-30" width="6" height="30" rx="3" fill="#16a34a" stroke="#15803d" strokeWidth=".8" />
      <rect x="-12" y="-24" width="6" height="14" rx="3" fill="#16a34a" stroke="#15803d" strokeWidth=".6" />
      <rect x="6" y="-20" width="5" height="12" rx="2.5" fill="#16a34a" stroke="#15803d" strokeWidth=".6" />
    </g>
  );
}

function SnowPineSvg({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <rect x="-2" y="0" width="4" height="14" rx="1.5" fill="#78716c" />
      <path d="M-12 0L0 -22L12 0Z" fill="#f0fdf4" stroke="#d1fae5" strokeWidth=".5" />
      <path d="M-9 -6L0 -28L9 -6Z" fill="#ecfdf5" stroke="#d1fae5" strokeWidth=".4" />
      <path d="M-6 -12L0 -32L6 -12Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth=".3" />
    </g>
  );
}
