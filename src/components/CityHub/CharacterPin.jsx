import React, { useRef, useEffect } from 'react';
import { drawCharPreview } from '../../engine/gameEngine';

/**
 * CharacterPin — A Google Maps-style pin with the character's face.
 * Circle with character portrait + pointer triangle at bottom.
 */
export default function CharacterPin({ charData, size = 44 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && charData) {
      drawCharPreview(canvasRef.current, charData);
    }
  }, [charData]);

  if (!charData) return null;

  const circleR = size / 2;
  const pointerH = size * 0.3;
  const totalH = size + pointerH;
  const borderW = 3;

  return (
    <div
      className="character-pin"
      style={{
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
        animation: 'charPinFloat 2s ease-in-out infinite',
      }}
    >
      {/* Circle with character face */}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: `${borderW}px solid #fff`,
          background: `linear-gradient(135deg, ${charData.outfit}44, ${charData.outfit}88)`,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 0 0 2px ${charData.outfit}, inset 0 2px 4px rgba(0,0,0,0.1)`,
        }}
      >
        <canvas
          ref={canvasRef}
          width={60}
          height={70}
          style={{
            width: size - borderW * 2,
            height: (size - borderW * 2) * 1.15,
            marginTop: -2,
          }}
        />
      </div>
      {/* Pointer triangle */}
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: `${pointerH}px solid #fff`,
          marginTop: -1,
        }}
      />
    </div>
  );
}
