import React from 'react';
import CityTopBar from './CityTopBar';
import CityDock from './CityDock';
import './CityHub.css';

export default function CityHub() {
  return (
    <div id="city-hub">
      {/* Layer 1: Environment Canvas (placeholder gradient) */}
      <div id="city-env-bg"></div>
      {/* Layer 1: Canvas + Roads (will be replaced by asset-driven bg) */}
      <canvas id="city-canvas"></canvas>
      <svg id="city-roads" viewBox="0 0 1000 600" preserveAspectRatio="none"></svg>
      {/* Layer 2: Interactive Building Assets */}
      <div id="city-buildings"></div>
      {/* Layer 3: HUD / Floating UI (z-index: 50) */}
      <CityTopBar />
      <div id="city-welcome">
        <h2>Welcome to the City!</h2>
        <p>Tap to visit your world.</p>
      </div>
      <CityDock />
    </div>
  );
}
