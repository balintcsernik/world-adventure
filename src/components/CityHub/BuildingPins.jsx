import React, { useRef, useEffect } from 'react';
import { CharacterMapPin, MultiColorMapPin } from './icons/HudIcons';
import { drawCharFace } from '../../engine/gameEngine';

/**
 * BuildingPins — Renders character pin(s) above a city building.
 *
 * Display rules:
 *   0 chars → nothing
 *   1 char  → single pin with character face close-up
 *   2 chars → two smaller pins side by side
 *   3+ chars → gradient pin with count number
 */
export default function BuildingPins({ characters, buildingIdx }) {
  if (!characters || characters.length === 0) return null;

  if (characters.length === 1) {
    return (
      <div style={pinContainerStyle}>
        <SingleCharPin char={characters[0]} pinId={`bpin-${buildingIdx}-0`} size={50} />
      </div>
    );
  }

  if (characters.length === 2) {
    return (
      <div style={{ ...pinContainerStyle, flexDirection: 'row', gap: 2 }}>
        <SingleCharPin char={characters[0]} pinId={`bpin-${buildingIdx}-0`} size={38} />
        <SingleCharPin char={characters[1]} pinId={`bpin-${buildingIdx}-1`} size={38} />
      </div>
    );
  }

  // 3+ characters — gradient pin with count
  const colors = characters.map(c => c.outfit);
  return (
    <div style={pinContainerStyle}>
      <MultiColorMapPin
        size={50}
        colors={colors}
        count={characters.length}
        gradientId={`bpin-${buildingIdx}-m`}
      />
    </div>
  );
}

/**
 * SingleCharPin — A Google Maps pin with a character face canvas overlay.
 * Uses drawCharFace for a close-up head portrait inside the pin circle.
 */
function SingleCharPin({ char, pinId, size = 50 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && char) {
      drawCharFace(canvasRef.current, char);
    }
  }, [char]);

  // The SVG viewBox is 32x32. The inner circle center is at (16, 11) with r=8.
  // Position the canvas to overlap that circle in the rendered size.
  const scale = size / 32;
  const circleR = 8 * scale;
  const circleCX = 16 * scale;
  const circleCY = 11 * scale;
  const canvasSize = circleR * 2;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <CharacterMapPin
        size={size}
        fillColor={char.outfit}
        gradientId={pinId}
        innerR={8}
      />
      {/* Canvas overlay positioned over the white circle */}
      <canvas
        ref={canvasRef}
        width={80}
        height={80}
        style={{
          position: 'absolute',
          left: circleCX - circleR,
          top: circleCY - circleR,
          width: canvasSize,
          height: canvasSize,
          borderRadius: '50%',
          pointerEvents: 'none',
          clipPath: 'circle(50%)',
        }}
      />
    </div>
  );
}

const pinContainerStyle = {
  position: 'absolute',
  bottom: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  pointerEvents: 'none',
  zIndex: 25,
  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.35))',
  animation: 'mapPinFloat 1.2s ease-in-out infinite',
};
