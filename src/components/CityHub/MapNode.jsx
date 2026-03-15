import React, { useState, useCallback } from 'react';

/**
 * MapNode — An interactive city-map node.
 *
 * Props:
 *   position  { x, y }     — 0-1 percentage placement on the map
 *   label     string        — name shown on the wooden sign
 *   imageAsset ReactNode    — SVG building component rendered inside
 *   isSelected boolean      — drives floating pin + glow
 *   onTap     () => void
 *   glowColor string
 */
export default function MapNode({ position, label, imageAsset, isSelected, onTap, glowColor, children }) {
  const [isTapped, setIsTapped] = useState(false);

  const handleClick = useCallback(() => {
    setIsTapped(true);
    setTimeout(() => setIsTapped(false), 350);
    if (onTap) onTap();
  }, [onTap]);

  return (
    <div
      className={`map-node${isSelected ? ' map-node--selected' : ''}${isTapped ? ' map-node--tapped' : ''}`}
      style={{
        position: 'absolute',
        left: `${position.x * 100}%`,
        top: `${position.y * 100}%`,
        transform: 'translate(-50%, -100%)',
        transformOrigin: 'bottom center',
        cursor: 'pointer',
        pointerEvents: 'auto',
        zIndex: isSelected ? 15 : 10,
      }}
      onClick={handleClick}
    >
      {/* Hover / selected glow */}
      <div
        className="map-node__glow"
        style={{
          background: `radial-gradient(circle, ${glowColor || '#fbbf24'}55 0%, transparent 70%)`,
        }}
      />

      {/* Building content — physical grounding via drop-shadow */}
      <div className="map-node__content" style={{ position: 'relative' }}>
        {imageAsset}
        {children}
      </div>

      {/* Chunky wooden sign post */}
      <div className="map-node__sign">
        <div className="map-node__sign-post" />
        <div className="map-node__sign-board">{label}</div>
      </div>

    </div>
  );
}
