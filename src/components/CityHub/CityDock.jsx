import React, { useRef, useEffect } from 'react';
import { useGame } from '../../contexts/GameContext';
import { CHARACTERS } from '../../constants';
import { drawCharPreview } from '../../engine/gameEngine';

/* ─── Character Portrait with canvas-rendered character image ─── */
function CharPortrait({ char, isActive, onSelect }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      drawCharPreview(canvasRef.current, char);
    }
  }, [char]);

  return (
    <button
      className={`char-portrait${isActive ? ' char-portrait--active' : ''}`}
      onClick={() => onSelect(char.id)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        cursor: 'pointer', padding: 4, borderRadius: 16,
        border: `3px solid ${isActive ? '#fbbf24' : 'transparent'}`,
        background: isActive ? 'rgba(251,191,36,0.12)' : 'transparent',
        boxShadow: isActive
          ? '0 0 18px rgba(251,191,36,0.4), 0 0 6px rgba(251,191,36,0.25), 0 4px 12px rgba(251,191,36,0.2)'
          : 'none',
        transform: isActive ? 'scale(1.12)' : 'scale(1)',
        transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), border-color 0.2s, background 0.2s, box-shadow 0.35s',
        minWidth: 52, outline: 'none', fontFamily: 'Nunito, sans-serif',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Canvas-rendered character preview */}
      <canvas
        ref={canvasRef}
        width={60}
        height={70}
        style={{
          width: 48, height: 56,
          borderRadius: 12,
          background: `linear-gradient(135deg, ${char.outfit}22, ${char.outfit}44)`,
          border: `2px solid ${isActive ? '#fbbf24' : char.outfit + '44'}`,
          boxShadow: isActive
            ? '0 0 12px rgba(251,191,36,0.3)'
            : '0 3px 8px rgba(0,0,0,0.1)',
          transition: 'border-color 0.2s, box-shadow 0.35s',
        }}
      />
      {/* Name label */}
      <span style={{
        fontSize: 7, fontWeight: 800,
        color: isActive ? '#92400e' : '#374151',
        marginTop: 2, letterSpacing: '0.02em',
        transition: 'color 0.2s',
      }}>
        {char.name}
      </span>
    </button>
  );
}

export default function CityDock() {
  const { character, selectCharacter } = useGame();

  return (
    <div id="city-dock">
      <div id="city-dock-inner">
        {CHARACTERS.map(char => (
          <CharPortrait
            key={char.id}
            char={char}
            isActive={character === char.id}
            onSelect={selectCharacter}
          />
        ))}
      </div>
    </div>
  );
}
