import React, { useEffect, useRef } from 'react';
import { useGame } from '../../contexts/GameContext';
import CityTopBar from './CityTopBar';
import CityDock from './CityDock';
import CityBuildingsLayer from './CityBuildingsLayer';
import CityEnvironment from './CityEnvironment';
import './CityHub.css';

export default function CityHub() {
  const { syncFromEngine } = useGame();
  const hubRef = useRef(null);

  // Auto-sync React state from engine whenever the City Hub becomes visible
  useEffect(() => {
    const hub = hubRef.current;
    if (!hub) return;
    const observer = new MutationObserver(() => {
      if (hub.classList.contains('show')) {
        syncFromEngine();
      }
    });
    observer.observe(hub, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, [syncFromEngine]);

  return (
    <div id="city-hub" ref={hubRef}>
      {/* Layer 1: Full illustrated environment background (SVG) */}
      <CityEnvironment />

      {/* Layer 2: Interactive Map Nodes (SVG buildings) */}
      <CityBuildingsLayer />

      {/* Mascot character — orange buddy floating above city center */}
      <div id="city-mascot">
        <svg width="80" height="90" viewBox="0 0 80 90" fill="none">
          {/* Body */}
          <ellipse cx="40" cy="55" rx="26" ry="30" fill="url(#mascotBody)"/>
          {/* Head */}
          <circle cx="40" cy="26" r="22" fill="url(#mascotHead)"/>
          {/* Hair tuft */}
          <ellipse cx="40" cy="6" rx="8" ry="6" fill="#ea580c"/>
          <ellipse cx="34" cy="8" rx="5" ry="4" fill="#f97316"/>
          <ellipse cx="46" cy="8" rx="5" ry="4" fill="#f97316"/>
          {/* Eyes */}
          <circle cx="32" cy="24" r="5" fill="#fff"/>
          <circle cx="48" cy="24" r="5" fill="#fff"/>
          <circle cx="33" cy="24" r="2.5" fill="#1e293b"/>
          <circle cx="49" cy="24" r="2.5" fill="#1e293b"/>
          {/* Eye highlight */}
          <circle cx="34" cy="22.5" r="1" fill="#fff"/>
          <circle cx="50" cy="22.5" r="1" fill="#fff"/>
          {/* Mouth — happy smile */}
          <path d="M34 32Q40 38 46 32" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round"/>
          {/* Cheeks */}
          <circle cx="26" cy="30" r="3.5" fill="#fbbf24" opacity=".4"/>
          <circle cx="54" cy="30" r="3.5" fill="#fbbf24" opacity=".4"/>
          {/* Arms */}
          <path d="M16 50Q8 45 6 38" stroke="#fb923c" strokeWidth="6" strokeLinecap="round" fill="none"/>
          <path d="M64 50Q72 45 74 38" stroke="#fb923c" strokeWidth="6" strokeLinecap="round" fill="none"/>
          {/* Hands */}
          <circle cx="6" cy="37" r="4" fill="#fbbf24"/>
          <circle cx="74" cy="37" r="4" fill="#fbbf24"/>
          {/* Feet */}
          <ellipse cx="30" cy="84" rx="10" ry="5" fill="#ea580c"/>
          <ellipse cx="50" cy="84" rx="10" ry="5" fill="#ea580c"/>
          <defs>
            <radialGradient id="mascotBody" cx=".45" cy=".35" r=".65">
              <stop offset="0%" stopColor="#fdba74"/>
              <stop offset="100%" stopColor="#fb923c"/>
            </radialGradient>
            <radialGradient id="mascotHead" cx=".45" cy=".35" r=".6">
              <stop offset="0%" stopColor="#fdba74"/>
              <stop offset="100%" stopColor="#f97316"/>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Legacy container kept for engine compat */}
      <div id="city-buildings" style={{ display: 'none' }} />

      {/* Layer 3: Persistent HUD */}
      <CityTopBar />

      <div id="city-welcome">
        <h2>WELCOME TO THE CITY!</h2>
        <p>TAP TO VISIT YOUR WORLD.</p>
      </div>

      {/* Dock prompt text */}
      <div id="city-dock-prompt">
        <span>READY TO EXPLORE THE CITY?</span>
        <span>PICK A CHARACTER AND VISIT A LOCATION!</span>
      </div>

      <CityDock />
    </div>
  );
}
