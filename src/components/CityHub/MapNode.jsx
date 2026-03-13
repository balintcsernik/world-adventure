import React, { useState, useCallback } from 'react';

/**
 * MapNode — An interactive city map node with:
 * - Physical grounding via drop-shadow
 * - Squash-and-stretch animation on tap
 * - Animated floating Map Pin above selected node
 *
 * Props:
 *   position: { x: number, y: number } — percentage-based placement
 *   label: string — display name
 *   icon: string — emoji or icon
 *   isSelected: boolean — whether this is the current/active node
 *   onTap: () => void — click handler
 *   glowColor: string — color for hover glow
 *   children: ReactNode — building component to render inside
 */
export default function MapNode({ position, label, isSelected, onTap, glowColor, children }) {
  const [isTapped, setIsTapped] = useState(false);

  const handleClick = useCallback(() => {
    setIsTapped(true);
    setTimeout(() => setIsTapped(false), 300);
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
      {/* Hover glow */}
      <div
        className="map-node__glow"
        style={{
          background: `radial-gradient(circle, ${glowColor || '#fbbf24'}55 0%, transparent 70%)`,
        }}
      />

      {/* Building content with grounding shadow */}
      <div className="map-node__content">
        {children}
      </div>

      {/* Chunky wooden sign */}
      <div className="map-node__sign">
        <div className="map-node__sign-post" />
        <div className="map-node__sign-board">{label}</div>
      </div>

      {/* Animated floating pin — visible when selected */}
      {isSelected && (
        <div className="map-node__pin">&#128205;</div>
      )}
    </div>
  );
}
