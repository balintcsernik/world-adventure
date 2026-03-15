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

      {/* Legacy container kept for engine compat */}
      <div id="city-buildings" style={{ display: 'none' }} />

      {/* Layer 3: Persistent HUD */}
      <CityTopBar />

      <div id="city-welcome">
        <h2>WORLD ADVENTURE</h2>
        <p>TAP A PLACE TO EXPLORE!</p>
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
