import React from 'react';

/**
 * CityEnvironment — Full-screen background image layer.
 *
 * Uses a placeholder image until we drop in the real illustrated asset.
 */
export default function CityEnvironment() {
  return (
    <div id="city-env-bg" style={{
      position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden',
    }}>
      <img
        src="https://placehold.co/1920x1080/a2d149/white?text=Landscape+Illustration+Asset"
        alt="City landscape background"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  );
}
