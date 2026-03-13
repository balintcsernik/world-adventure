import React from 'react';
import { useGame } from '../../contexts/GameContext';
import { CHARACTERS } from '../../constants';

/* ─── Character Portrait with glow + scale animation ─── */
function CharPortrait({ char, isActive, onSelect }) {
  return (
    <button
      className={`char-portrait${isActive ? ' char-portrait--active' : ''}`}
      onClick={() => onSelect(char.id)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        cursor: 'pointer', padding: 6, borderRadius: 16,
        border: `3px solid ${isActive ? '#fbbf24' : 'transparent'}`,
        background: isActive ? 'rgba(251,191,36,0.12)' : 'transparent',
        boxShadow: isActive
          ? '0 0 18px rgba(251,191,36,0.4), 0 0 6px rgba(251,191,36,0.25), 0 4px 12px rgba(251,191,36,0.2)'
          : 'none',
        transform: isActive ? 'scale(1.12)' : 'scale(1)',
        transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), border-color 0.2s, background 0.2s, box-shadow 0.35s',
        minWidth: 56, outline: 'none', fontFamily: 'Nunito, sans-serif',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Avatar circle */}
      <div style={{
        width: 46, height: 46, borderRadius: 14,
        background: `linear-gradient(135deg, ${char.outfit}22, ${char.outfit}55)`,
        border: `2.5px solid ${isActive ? '#fbbf24' : char.outfit + '44'}`,
        boxShadow: isActive
          ? `0 0 12px rgba(251,191,36,0.3), inset 0 0 10px ${char.outfit}22`
          : `0 3px 8px rgba(0,0,0,0.1)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 24,
        transition: 'border-color 0.2s, box-shadow 0.35s',
        position: 'relative',
      }}>
        {char.icon}
        {/* Active glow ring */}
        {isActive && (
          <div style={{
            position: 'absolute', inset: -4, borderRadius: 18,
            border: '2px solid rgba(251,191,36,0.3)',
            animation: 'charGlowPulse 2s ease-in-out infinite',
            pointerEvents: 'none',
          }} />
        )}
      </div>
      {/* Name label */}
      <span style={{
        fontSize: 9, fontWeight: 800,
        color: isActive ? '#92400e' : '#374151',
        marginTop: 4, letterSpacing: '0.02em',
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
