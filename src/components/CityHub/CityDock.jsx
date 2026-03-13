import React from 'react';
import { useGame } from '../../contexts/GameContext';
import { CHARACTERS } from '../../constants';

function CharPortrait({ char, isActive, onSelect }) {
  const portraitStyle = {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    cursor: 'pointer', padding: 6, borderRadius: 16,
    border: `3px solid ${isActive ? '#fbbf24' : 'transparent'}`,
    background: isActive ? 'rgba(251,191,36,0.1)' : 'transparent',
    boxShadow: isActive
      ? '0 0 16px rgba(251,191,36,0.35), 0 4px 12px rgba(251,191,36,0.2)'
      : 'none',
    transform: isActive ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.25s cubic-bezier(.34,1.56,.64,1), border-color 0.2s ease, background 0.2s ease, box-shadow 0.3s ease',
    minWidth: 56,
  };

  const avatarStyle = {
    width: 44, height: 44, borderRadius: 12,
    background: `linear-gradient(135deg, ${char.outfit}22, ${char.outfit}44)`,
    border: `2.5px solid ${isActive ? '#fbbf24' : char.outfit + '33'}`,
    boxShadow: isActive
      ? `0 0 10px rgba(251,191,36,0.25), inset 0 0 8px ${char.outfit}22`
      : `0 2px 6px rgba(0,0,0,0.08)`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 22,
    transition: 'border-color 0.2s ease, box-shadow 0.3s ease',
  };

  const nameStyle = {
    fontSize: 9, fontWeight: 800, color: isActive ? '#92400e' : '#374151',
    marginTop: 3, letterSpacing: '0.02em',
    transition: 'color 0.2s ease',
  };

  return (
    <div style={portraitStyle} onClick={() => onSelect(char.id)}>
      <div style={avatarStyle}>
        {char.icon}
      </div>
      <span style={nameStyle}>{char.name}</span>
    </div>
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
