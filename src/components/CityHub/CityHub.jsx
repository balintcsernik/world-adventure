import React from 'react';
import CityTopBar from './CityTopBar';
import CityDock from './CityDock';
import CityBuildingsLayer from './CityBuildingsLayer';
import './CityHub.css';

export default function CityHub() {
  return (
    <div id="city-hub">
      {/* Layer 1: Environment background — gradient landscape with biomes */}
      <div id="city-env-bg" />

      {/* Layer 2: Interactive Map Nodes (buildings) */}
      <CityBuildingsLayer />

      {/* Legacy container kept for engine compat */}
      <div id="city-buildings" style={{ display: 'none' }} />

      {/* Layer 3: HUD / Floating UI */}
      <CityTopBar />

      <div id="city-welcome">
        <h2>Welcome to the City!</h2>
        <p>Tap a building to explore your world.</p>
      </div>

      <CityDock />
    </div>
  );
}
