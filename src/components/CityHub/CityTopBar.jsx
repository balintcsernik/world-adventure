import React from 'react';

export default function CityTopBar() {
  return (
    <div id="city-top-bar">
      <div className="city-token" id="city-coins">
        <div className="token-icon coin-token">&#9733;</div>
        <span className="token-count" id="city-coin-count">0</span>
      </div>
      <div className="city-token" id="city-globe">
        <div className="token-icon globe-token">&#127758;</div>
        <span className="token-label">8 Places</span>
      </div>
      <div className="city-token" id="city-missions">
        <div className="token-icon bell-token">&#128276;</div>
        <span className="token-count" id="city-mission-count">0</span>
      </div>
      <div id="city-settings-btn" title="Settings">&#9881;</div>
      <div id="city-close-btn" title="Back to Room">&#10005;</div>
    </div>
  );
}
