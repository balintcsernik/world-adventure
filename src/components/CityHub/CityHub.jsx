import React from 'react';
import CityTopBar from './CityTopBar';
import CityDock from './CityDock';
import CityBuildingsLayer from './CityBuildingsLayer';
import './CityHub.css';

export default function CityHub() {
  return (
    <div id="city-hub">
      {/* Layer 1: Environment background */}
      <div id="city-env-bg"></div>
      {/* Layer 1: Canvas landscape + SVG roads */}
      <canvas id="city-canvas"></canvas>
      <svg id="city-roads" viewBox="0 0 1000 600" preserveAspectRatio="none"></svg>
      {/* Layer 2: React-rendered buildings */}
      <CityBuildingsLayer />
      {/* Legacy container kept for engine compat */}
      <div id="city-buildings" style={{ display: 'none' }}></div>
      {/* Layer 3: HUD / Floating UI */}
      <CityTopBar />
      <div id="city-welcome">
        <h2>Welcome to the City!</h2>
        <p>Tap to visit your world.</p>
      </div>
      <CityDock />
    </div>
  );
}
