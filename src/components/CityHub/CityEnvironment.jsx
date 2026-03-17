import React from 'react';
import cityHubBg from '../../assets/city/city-hub-bg.png';

/**
 * CityEnvironment — Full-screen illustrated world-map background.
 *
 * Uses an AI-generated illustration showing three biomes:
 * desert (left), green countryside (center), snowy mountains (right).
 */
export default function CityEnvironment() {
  return (
    <div id="city-env-bg" style={{
      position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden',
    }}>
      <img
        src={cityHubBg}
        alt="World Adventure Map"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          display: 'block',
        }}
        draggable={false}
      />
    </div>
  );
}
