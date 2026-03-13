import React from 'react';

export default function CityDock() {
  // The dock is populated dynamically by the engine's buildCityHub()
  // which draws character previews on canvas elements
  return (
    <div id="city-dock">
      <div id="city-dock-inner"></div>
    </div>
  );
}
