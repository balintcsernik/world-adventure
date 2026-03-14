import React from 'react';

/**
 * CityEnvironment — Full-screen illustrated world-map background.
 *
 * Three biomes: desert (left), green countryside (center), snowy mountains (right).
 * Winding road, meandering river, scattered trees, farms, and a wooden frame border.
 */
export default function CityEnvironment() {
  return (
    <div id="city-env-bg" style={{
      position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden',
    }}>
      <svg
        width="100%" height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <defs>
          {/* Sky gradient — warm peach-left to cool blue-right */}
          <linearGradient id="skyGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fde8c8"/>
            <stop offset="35%" stopColor="#d4ecf7"/>
            <stop offset="100%" stopColor="#c0dff0"/>
          </linearGradient>
          {/* Desert sand */}
          <linearGradient id="sandGrad" x1="0" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#e8c968"/>
            <stop offset="100%" stopColor="#d4a84b"/>
          </linearGradient>
          {/* Green grass */}
          <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7cc850"/>
            <stop offset="100%" stopColor="#5aaa30"/>
          </linearGradient>
          {/* Snow */}
          <linearGradient id="snowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0f4f8"/>
            <stop offset="100%" stopColor="#dce8f0"/>
          </linearGradient>
          {/* Mountain rock */}
          <linearGradient id="rockGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8a8a8a"/>
            <stop offset="100%" stopColor="#6a6a6a"/>
          </linearGradient>
          {/* River */}
          <linearGradient id="riverGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5bb8d8"/>
            <stop offset="100%" stopColor="#4aa0c0"/>
          </linearGradient>
          {/* Road */}
          <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8a8a8a"/>
            <stop offset="100%" stopColor="#7a7a7a"/>
          </linearGradient>
          {/* Wood frame */}
          <linearGradient id="woodFrame" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9e6b3a"/>
            <stop offset="50%" stopColor="#7a4e28"/>
            <stop offset="100%" stopColor="#5c3818"/>
          </linearGradient>
          {/* Oasis water */}
          <radialGradient id="oasisWater" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#5ec8e0"/>
            <stop offset="100%" stopColor="#3aa0c0"/>
          </radialGradient>
          {/* Mountain snow cap */}
          <linearGradient id="snowCap" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff"/>
            <stop offset="100%" stopColor="#e8f0f8"/>
          </linearGradient>
          {/* Bush */}
          <radialGradient id="bushG" cx="0.4" cy="0.4" r="0.6">
            <stop offset="0%" stopColor="#6dd06d"/>
            <stop offset="100%" stopColor="#3a8a3a"/>
          </radialGradient>
          {/* Frozen lake */}
          <radialGradient id="frozenLake" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#c0e8f8"/>
            <stop offset="100%" stopColor="#90c8e0"/>
          </radialGradient>
        </defs>

        {/* ═══════════════ SKY ═══════════════ */}
        <rect width="1920" height="1080" fill="url(#skyGrad)"/>

        {/* Sun (top-left, desert side) */}
        <circle cx="180" cy="120" r="50" fill="#f8e060" opacity="0.9"/>
        <circle cx="180" cy="120" r="40" fill="#fce878"/>

        {/* Clouds */}
        <g opacity="0.85">
          <ellipse cx="500" cy="100" rx="60" ry="22" fill="#fff"/>
          <ellipse cx="530" cy="90" rx="45" ry="18" fill="#fff"/>
          <ellipse cx="470" cy="95" rx="40" ry="16" fill="#f8f8f8"/>
        </g>
        <g opacity="0.7">
          <ellipse cx="1100" cy="80" rx="55" ry="20" fill="#fff"/>
          <ellipse cx="1130" cy="72" rx="40" ry="16" fill="#fff"/>
        </g>
        <g opacity="0.6">
          <ellipse cx="1500" cy="110" rx="50" ry="18" fill="#f0f4f8"/>
          <ellipse cx="1530" cy="100" rx="38" ry="15" fill="#fff"/>
        </g>
        <g opacity="0.5">
          <ellipse cx="800" cy="140" rx="45" ry="16" fill="#fff"/>
          <ellipse cx="825" cy="132" rx="35" ry="14" fill="#f8f8f8"/>
        </g>

        {/* ═══════════════ BACKGROUND HILLS / MOUNTAINS ═══════════════ */}

        {/* Desert dunes (background, far) */}
        <path d="M0 350 Q80 280 200 320 Q350 260 480 340 Q560 300 640 360 L640 1080 L0 1080Z"
          fill="#dbb854" opacity="0.5"/>

        {/* Green rolling hills (background, center) */}
        <path d="M500 320 Q650 250 800 300 Q950 240 1100 290 Q1200 260 1350 310 L1350 1080 L500 1080Z"
          fill="#6ab840" opacity="0.4"/>

        {/* Snowy mountains (background) */}
        {/* Main tall peak */}
        <path d="M1400 360 L1520 120 L1640 360Z" fill="#7a7a7a"/>
        <path d="M1520 120 L1460 240 L1580 240Z" fill="url(#snowCap)"/>
        {/* Second peak */}
        <path d="M1550 380 L1680 160 L1810 380Z" fill="#8a8a8a"/>
        <path d="M1680 160 L1620 270 L1740 270Z" fill="url(#snowCap)"/>
        {/* Third peak */}
        <path d="M1700 400 L1820 200 L1920 380 L1920 400Z" fill="#6a6a6a"/>
        <path d="M1820 200 L1770 290 L1870 290Z" fill="url(#snowCap)"/>
        {/* Smaller far peak */}
        <path d="M1350 400 L1430 220 L1510 400Z" fill="#9a9a9a" opacity="0.6"/>
        <path d="M1430 220 L1390 300 L1470 300Z" fill="#e8f0f8" opacity="0.6"/>

        {/* ═══════════════ TERRAIN ZONES ═══════════════ */}

        {/* Desert ground (left third) */}
        <path d="M0 420 Q100 380 250 430 Q400 390 550 440 Q620 420 680 460
                 Q700 500 680 560 Q640 600 600 650 Q560 720 580 800 Q600 900 550 1080
                 L0 1080Z"
          fill="url(#sandGrad)"/>
        {/* Desert dune highlights */}
        <path d="M0 500 Q80 460 180 490 Q280 450 380 500 Q440 480 500 510 L480 560 Q400 530 300 550 Q180 530 80 560 L0 560Z"
          fill="#e8d070" opacity="0.5"/>
        <path d="M0 650 Q100 620 200 660 Q300 630 380 670 L360 720 Q260 690 160 720 Q80 700 0 720Z"
          fill="#dbb854" opacity="0.4"/>

        {/* Green countryside (center) — blended edges */}
        <path d="M550 440 Q650 400 780 430 Q900 390 1050 420 Q1150 400 1280 430
                 Q1350 450 1380 480 Q1400 520 1380 580 Q1350 650 1380 750
                 Q1400 850 1380 1080 L550 1080
                 Q580 900 560 800 Q540 700 570 620 Q600 560 620 500 Q630 460 600 440Z"
          fill="url(#grassGrad)"/>
        {/* Grass texture patches */}
        <ellipse cx="750" cy="650" rx="120" ry="40" fill="#80d058" opacity="0.4"/>
        <ellipse cx="1000" cy="550" rx="100" ry="35" fill="#70c048" opacity="0.3"/>
        <ellipse cx="900" cy="800" rx="140" ry="45" fill="#88d460" opacity="0.35"/>
        <ellipse cx="1150" cy="700" rx="110" ry="38" fill="#78c850" opacity="0.3"/>

        {/* Snow ground (right side) */}
        <path d="M1380 480 Q1420 440 1500 460 Q1600 430 1700 450 Q1800 440 1920 460
                 L1920 1080 L1380 1080 Q1400 850 1380 750 Q1350 650 1380 580Z"
          fill="url(#snowGrad)"/>
        {/* Snow patches */}
        <ellipse cx="1550" cy="600" rx="80" ry="25" fill="#fff" opacity="0.4"/>
        <ellipse cx="1700" cy="700" rx="90" ry="30" fill="#fff" opacity="0.3"/>
        <ellipse cx="1800" cy="550" rx="70" ry="22" fill="#f0f8ff" opacity="0.35"/>

        {/* ═══════════════ BIOME TRANSITION BLENDING ═══════════════ */}
        {/* Desert→Green soft blend */}
        <path d="M550 440 Q600 500 580 600 Q560 720 580 850 Q590 950 570 1080
                 L620 1080 Q640 950 630 850 Q610 720 640 600 Q660 500 620 440Z"
          fill="#a0b848" opacity="0.35"/>
        {/* Green→Snow soft blend */}
        <path d="M1350 480 Q1380 550 1370 650 Q1360 750 1380 850 Q1390 950 1380 1080
                 L1420 1080 Q1410 950 1420 850 Q1440 750 1420 650 Q1400 550 1420 480Z"
          fill="#a8d8b8" opacity="0.3"/>

        {/* ═══════════════ WINDING ROAD ═══════════════ */}
        <path d="M300 1080 Q320 950 350 880 Q400 780 500 720 Q620 650 750 580
                 Q850 530 950 540 Q1050 550 1120 600 Q1200 660 1250 720
                 Q1300 780 1320 860 Q1340 940 1350 1080"
          fill="none" stroke="#888" strokeWidth="38" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Road center dashes */}
        <path d="M300 1080 Q320 950 350 880 Q400 780 500 720 Q620 650 750 580
                 Q850 530 950 540 Q1050 550 1120 600 Q1200 660 1250 720
                 Q1300 780 1320 860 Q1340 940 1350 1080"
          fill="none" stroke="#ddd" strokeWidth="3" strokeDasharray="18 14" strokeLinecap="round"/>

        {/* Road branch to desert */}
        <path d="M500 720 Q420 740 350 720 Q280 700 200 730 Q120 760 50 780"
          fill="none" stroke="#888" strokeWidth="28" strokeLinecap="round"/>
        <path d="M500 720 Q420 740 350 720 Q280 700 200 730 Q120 760 50 780"
          fill="none" stroke="#ddd" strokeWidth="2.5" strokeDasharray="14 12" strokeLinecap="round"/>

        {/* Road branch to snow */}
        <path d="M1120 600 Q1200 580 1300 560 Q1400 540 1500 560 Q1600 580 1700 560"
          fill="none" stroke="#888" strokeWidth="28" strokeLinecap="round"/>
        <path d="M1120 600 Q1200 580 1300 560 Q1400 540 1500 560 Q1600 580 1700 560"
          fill="none" stroke="#ddd" strokeWidth="2.5" strokeDasharray="14 12" strokeLinecap="round"/>

        {/* ═══════════════ RIVER ═══════════════ */}
        <path d="M1050 260 Q1040 320 1060 380 Q1080 430 1060 480 Q1040 530 1060 580
                 Q1080 630 1060 700 Q1040 770 1060 840 Q1080 900 1060 980 Q1050 1040 1060 1080"
          fill="none" stroke="#5bb8d8" strokeWidth="24" strokeLinecap="round" opacity="0.8"/>
        {/* River lighter center */}
        <path d="M1050 260 Q1040 320 1060 380 Q1080 430 1060 480 Q1040 530 1060 580
                 Q1080 630 1060 700 Q1040 770 1060 840 Q1080 900 1060 980 Q1050 1040 1060 1080"
          fill="none" stroke="#78d0e8" strokeWidth="12" strokeLinecap="round" opacity="0.6"/>

        {/* Small bridge over river */}
        <path d="M1030 750 Q1060 730 1090 750" fill="none" stroke="#9e7040" strokeWidth="8" strokeLinecap="round"/>
        <rect x="1025" y="744" width="8" height="14" rx="2" fill="#8a6030"/>
        <rect x="1087" y="744" width="8" height="14" rx="2" fill="#8a6030"/>

        {/* ═══════════════ DESERT DETAILS ═══════════════ */}

        {/* Oasis pond */}
        <ellipse cx="180" cy="620" rx="55" ry="25" fill="url(#oasisWater)"/>
        <ellipse cx="180" cy="615" rx="40" ry="15" fill="#70d8f0" opacity="0.5"/>

        {/* Palm trees */}
        {[[140,580],[220,590],[80,550],[350,510],[420,560],[60,780],[160,850]].map(([x,y],i) => (
          <g key={`palm${i}`}>
            <rect x={x-3} y={y} width="6" height="40" rx="2" fill="#8a6530"/>
            <ellipse cx={x-14} cy={y-2} rx="18" ry="6" fill="#4a9e2a" transform={`rotate(-20 ${x-14} ${y-2})`}/>
            <ellipse cx={x+14} cy={y-2} rx="18" ry="6" fill="#3a8e22" transform={`rotate(20 ${x+14} ${y-2})`}/>
            <ellipse cx={x} cy={y-6} rx="16" ry="5" fill="#52a830" transform={`rotate(-5 ${x} ${y-6})`}/>
          </g>
        ))}

        {/* Cacti */}
        {[[30,750],[100,720],[450,650],[480,820],[40,880]].map(([x,y],i) => (
          <g key={`cactus${i}`}>
            <rect x={x-4} y={y} width="8" height="30" rx="4" fill="#5a9a40"/>
            <rect x={x-14} y={y+8} width="10" height="6" rx="3" fill="#5a9a40"/>
            <rect x={x-14} y={y+4} width="6" height="10" rx="3" fill="#4a8a30"/>
            <rect x={x+6} y={y+12} width="10" height="6" rx="3" fill="#5a9a40"/>
            <rect x={x+10} y={y+6} width="6" height="12" rx="3" fill="#4a8a30"/>
          </g>
        ))}

        {/* Desert adobe/sandstone buildings cluster */}
        <g>
          <rect x="100" y="810" width="40" height="35" rx="2" fill="#d4b878" stroke="#b89858" strokeWidth="1"/>
          <rect x="145" y="800" width="35" height="45" rx="2" fill="#c8a868" stroke="#a88848" strokeWidth="1"/>
          <rect x="180" y="815" width="30" height="30" rx="2" fill="#d4b878" stroke="#b89858" strokeWidth="1"/>
          <rect x="108" y="826" width="8" height="10" rx="1" fill="#8a6530"/>
          <rect x="125" y="822" width="6" height="8" rx="1" fill="#7ac0d8" opacity="0.6"/>
          <rect x="153" y="818" width="7" height="9" rx="1" fill="#8a6530"/>
          <rect x="165" y="812" width="5" height="7" rx="1" fill="#7ac0d8" opacity="0.6"/>
          <rect x="188" y="828" width="7" height="9" rx="1" fill="#8a6530"/>
        </g>

        {/* Mesa / rock formation */}
        <path d="M320 420 L340 350 L380 340 L420 350 L440 420Z" fill="#c4a060" stroke="#a88848" strokeWidth="1"/>
        <path d="M340 350 L350 360 L390 355 L410 360 L420 350" fill="#d4b070" opacity="0.5"/>

        {/* Camels */}
        {[[250,780],[380,870],[300,900]].map(([x,y],i) => (
          <g key={`camel${i}`} transform={`translate(${x},${y})`}>
            <ellipse cx="0" cy="0" rx="14" ry="8" fill="#c8a060"/>
            <ellipse cx="-10" cy="-4" rx="5" ry="6" fill="#c8a060"/>
            <circle cx="-14" cy="-10" r="4" fill="#c8a060"/>
            <circle cx="-15" cy="-12" r="1" fill="#333"/>
            <line x1="-7" y1="6" x2="-7" y2="16" stroke="#a88040" strokeWidth="2"/>
            <line x1="7" y1="6" x2="7" y2="16" stroke="#a88040" strokeWidth="2"/>
          </g>
        ))}

        {/* ═══════════════ GREEN AREA DETAILS ═══════════════ */}

        {/* Scattered trees (round bushy) */}
        {[[650,500],[700,560],[820,480],[880,600],[760,680],[680,780],[820,740],
          [940,650],[1000,480],[1150,550],[1200,650],[900,850],[1100,820],
          [750,900],[850,920],[1000,900],[660,620],[1250,600],[1180,480]].map(([x,y],i) => (
          <g key={`tree${i}`}>
            <rect x={x-2} y={y} width="4" height="16" rx="1.5" fill="#6a4a2a"/>
            <circle cx={x} cy={y-6} r={10 + (i % 3) * 2} fill={i % 3 === 0 ? '#4a9e3a' : i % 3 === 1 ? '#5aae4a' : '#3a8e2a'}/>
            <circle cx={x-5} cy={y-3} r={7 + (i % 2) * 2} fill={i % 2 === 0 ? '#58b848' : '#48a838'} opacity="0.7"/>
          </g>
        ))}

        {/* Pine/conifer trees near snow transition */}
        {[[1300,500],[1340,530],[1280,560],[1320,480],[1360,570]].map(([x,y],i) => (
          <g key={`pine${i}`}>
            <rect x={x-2} y={y} width="4" height="12" rx="1" fill="#5a3a1a"/>
            <path d={`M${x} ${y-18} L${x-10} ${y} L${x+10} ${y}Z`} fill="#2a7a2a"/>
            <path d={`M${x} ${y-24} L${x-8} ${y-10} L${x+8} ${y-10}Z`} fill="#3a8a3a"/>
          </g>
        ))}

        {/* Pink cherry blossom trees */}
        {[[780,520],[1100,580],[920,780],[1180,700]].map(([x,y],i) => (
          <g key={`cherry${i}`}>
            <rect x={x-2} y={y} width="4" height="14" rx="1.5" fill="#6a4a2a"/>
            <circle cx={x} cy={y-6} r="12" fill="#f0a0b8" opacity="0.8"/>
            <circle cx={x-6} cy={y-2} r="8" fill="#e890a8" opacity="0.6"/>
            <circle cx={x+6} cy={y-4} r="9" fill="#f0a0b8" opacity="0.7"/>
          </g>
        ))}

        {/* Farm patches */}
        <g opacity="0.7">
          <rect x="720" y="720" width="50" height="40" rx="2" fill="#8a7a40" opacity="0.3"/>
          {[0,1,2,3,4].map(r => (
            <line key={`fr1${r}`} x1="725" y1={725 + r*8} x2="765" y2={725 + r*8} stroke="#5a9a30" strokeWidth="2"/>
          ))}
        </g>
        <g opacity="0.7">
          <rect x="880" y="850" width="45" height="35" rx="2" fill="#8a7a40" opacity="0.3"/>
          {[0,1,2,3].map(r => (
            <line key={`fr2${r}`} x1="885" y1={855 + r*8} x2="920" y2={855 + r*8} stroke="#5a9a30" strokeWidth="2"/>
          ))}
        </g>

        {/* Sheep on green */}
        {[[810,660],[830,670],[850,655],[920,710],[940,720],[780,750],[800,760]].map(([x,y],i) => (
          <g key={`sheep${i}`}>
            <ellipse cx={x} cy={y} rx="6" ry="4" fill="#f0f0f0"/>
            <circle cx={x-5} cy={y-2} r="3" fill="#e8e8e8"/>
            <circle cx={x-6} cy={y-3} r="1" fill="#333"/>
          </g>
        ))}

        {/* Playground swings */}
        <g transform="translate(1140,630)">
          <rect x="-20" y="-30" width="40" height="4" rx="1" fill="#c8a060"/>
          <line x1="-18" y1="-26" x2="-18" y2="0" stroke="#888" strokeWidth="1.5"/>
          <line x1="-10" y1="-26" x2="-12" y2="0" stroke="#888" strokeWidth="1.5"/>
          <rect x="-16" y="-2" width="8" height="3" rx="1" fill="#e06040"/>
          <line x1="10" y1="-26" x2="10" y2="0" stroke="#888" strokeWidth="1.5"/>
          <line x1="18" y1="-26" x2="16" y2="0" stroke="#888" strokeWidth="1.5"/>
          <rect x="8" y="-2" width="8" height="3" rx="1" fill="#4080e0"/>
          <line x1="-20" y1="-30" x2="-20" y2="0" stroke="#8a6530" strokeWidth="2"/>
          <line x1="20" y1="-30" x2="20" y2="0" stroke="#8a6530" strokeWidth="2"/>
        </g>

        {/* ═══════════════ SNOW AREA DETAILS ═══════════════ */}

        {/* Snowy pine trees */}
        {[[1420,520],[1480,560],[1550,500],[1620,540],[1700,510],[1760,550],
          [1840,520],[1450,620],[1520,650],[1600,620],[1680,660],[1750,630],
          [1830,600],[1880,650],[1500,750],[1580,730],[1660,760],[1780,740],
          [1860,720],[1920,700]].map(([x,y],i) => (
          <g key={`sptree${i}`}>
            <rect x={x-2} y={y} width="4" height="14" rx="1" fill="#5a3a1a"/>
            <path d={`M${x} ${y-20} L${x-10} ${y+2} L${x+10} ${y+2}Z`} fill="#2a6a2a"/>
            <path d={`M${x} ${y-28} L${x-8} ${y-12} L${x+8} ${y-12}Z`} fill="#3a7a3a"/>
            {/* Snow on tips */}
            <path d={`M${x} ${y-28} L${x-4} ${y-22} L${x+4} ${y-22}Z`} fill="#f0f8ff" opacity="0.7"/>
          </g>
        ))}

        {/* Frozen lake */}
        <ellipse cx="1700" cy="820" rx="70" ry="35" fill="url(#frozenLake)" opacity="0.7"/>
        <ellipse cx="1700" cy="815" rx="50" ry="22" fill="#d0e8f0" opacity="0.4"/>

        {/* Log cabins in snow */}
        <g transform="translate(1580,820)">
          <rect x="-18" y="-20" width="36" height="22" rx="2" fill="#8a5a2a" stroke="#6a4020" strokeWidth="1"/>
          <path d="M-22 -18 L0 -32 L22 -18Z" fill="#c47433" stroke="#9e5520" strokeWidth="0.8"/>
          <rect x="-6" y="-12" width="12" height="14" rx="1" fill="#6a4020"/>
          {/* Snow on roof */}
          <path d="M-22 -18 L-18 -22 L0 -34 L18 -22 L22 -18Z" fill="#fff" opacity="0.5"/>
        </g>
        <g transform="translate(1800,860)">
          <rect x="-15" y="-18" width="30" height="20" rx="2" fill="#7a4a22" stroke="#5a3018" strokeWidth="1"/>
          <path d="M-19 -16 L0 -28 L19 -16Z" fill="#b06428" stroke="#8e4a18" strokeWidth="0.8"/>
          <rect x="-5" y="-10" width="10" height="12" rx="1" fill="#5a3018"/>
          <path d="M-19 -16 L-15 -20 L0 -30 L15 -20 L19 -16Z" fill="#fff" opacity="0.5"/>
        </g>

        {/* Cable car line */}
        <line x1="1450" y1="340" x2="1750" y2="480" stroke="#555" strokeWidth="2"/>
        {/* Cable car cabin */}
        <g transform="translate(1580,400)">
          <rect x="-12" y="0" width="24" height="18" rx="3" fill="#e05040" stroke="#b03020" strokeWidth="1"/>
          <rect x="-8" y="3" width="16" height="8" rx="1" fill="#a0d8f0" opacity="0.7"/>
          <line x1="0" y1="-8" x2="0" y2="0" stroke="#555" strokeWidth="2"/>
        </g>

        {/* Snowman */}
        <g transform="translate(1650,680)">
          <circle cx="0" cy="0" r="10" fill="#f8f8f8" stroke="#ddd" strokeWidth="0.5"/>
          <circle cx="0" cy="-14" r="7" fill="#fff" stroke="#ddd" strokeWidth="0.5"/>
          <circle cx="-2" cy="-16" r="1" fill="#333"/>
          <circle cx="3" cy="-16" r="1" fill="#333"/>
          <path d="M0 -14 L5 -13" stroke="#e07020" strokeWidth="2" strokeLinecap="round"/>
        </g>

        {/* ═══════════════ SMALL CHARACTERS (people) ═══════════════ */}
        {/* Tiny figures scattered around to add life */}
        {[[200,830,'#4a90d0'],[700,640,'#e06040'],[900,560,'#50a050'],[1150,610,'#d080c0'],
          [1000,720,'#e0a040'],[850,480,'#6080d0'],[1250,550,'#d05050']].map(([x,y,c],i) => (
          <g key={`person${i}`}>
            <circle cx={x} cy={y-8} r="3" fill="#f0c8a0"/>
            <rect x={x-3} y={y-5} width="6" height="8" rx="2" fill={c}/>
            <line x1={x-2} y1={y+3} x2={x-3} y2={y+10} stroke={c} strokeWidth="1.5"/>
            <line x1={x+2} y1={y+3} x2={x+3} y2={y+10} stroke={c} strokeWidth="1.5"/>
          </g>
        ))}

        {/* ═══════════════ WOODEN FRAME BORDER ═══════════════ */}
        {/* Top */}
        <rect x="0" y="0" width="1920" height="28" fill="url(#woodFrame)"/>
        <rect x="0" y="0" width="1920" height="4" fill="#b07840" opacity="0.5"/>
        {/* Bottom */}
        <rect x="0" y="1052" width="1920" height="28" fill="url(#woodFrame)"/>
        <rect x="0" y="1076" width="1920" height="4" fill="#5c3818" opacity="0.5"/>
        {/* Left */}
        <rect x="0" y="0" width="28" height="1080" fill="url(#woodFrame)"/>
        <rect x="0" y="0" width="4" height="1080" fill="#b07840" opacity="0.5"/>
        {/* Right */}
        <rect x="1892" y="0" width="28" height="1080" fill="url(#woodFrame)"/>
        <rect x="1916" y="0" width="4" height="1080" fill="#5c3818" opacity="0.5"/>

        {/* Inner cream border (parchment feel) */}
        <rect x="28" y="28" width="1864" height="1024" rx="6" fill="none" stroke="#e8dcc0" strokeWidth="4"/>

        {/* Corner decorations — colored tabs */}
        <rect x="0" y="0" width="40" height="40" rx="6" fill="#7ab8d0" opacity="0.7"/>
        <rect x="1880" y="0" width="40" height="40" rx="6" fill="#e8a0b0" opacity="0.7"/>
        <rect x="0" y="1040" width="40" height="40" rx="6" fill="#a0d870" opacity="0.7"/>
        <rect x="1880" y="1040" width="40" height="40" rx="6" fill="#e8c070" opacity="0.7"/>

        {/* Wood grain lines (subtle) */}
        <line x1="60" y1="14" x2="1860" y2="14" stroke="#6a3e1a" strokeWidth="0.5" opacity="0.3"/>
        <line x1="60" y1="1066" x2="1860" y2="1066" stroke="#6a3e1a" strokeWidth="0.5" opacity="0.3"/>
        <line x1="14" y1="60" x2="14" y2="1020" stroke="#6a3e1a" strokeWidth="0.5" opacity="0.3"/>
        <line x1="1906" y1="60" x2="1906" y2="1020" stroke="#6a3e1a" strokeWidth="0.5" opacity="0.3"/>

      </svg>
    </div>
  );
}
