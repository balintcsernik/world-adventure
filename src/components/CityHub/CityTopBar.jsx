import React from 'react';
import { useGame } from '../../contexts/GameContext';

const tokenStyle = {
  display: 'flex', alignItems: 'center', gap: 6,
  background: '#fff', borderRadius: 16, padding: '6px 14px 6px 8px',
  boxShadow: '0px 6px 0px #e0e0e0, 0px 8px 15px rgba(0,0,0,0.1)',
  border: '2px solid #f5f5f5', fontSize: 15, fontWeight: 800,
  cursor: 'pointer', userSelect: 'none',
  transition: 'transform 0.15s ease',
  flexShrink: 0,
};

const iconBaseStyle = {
  width: 28, height: 28, borderRadius: '50%',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: 14, boxShadow: '0 3px 0 rgba(0,0,0,.15), inset 0 2px 0 rgba(255,255,255,.4)',
  flexShrink: 0,
};

const squareTokenStyle = {
  ...tokenStyle,
  padding: '6px 10px',
  borderRadius: 16,
  width: 42, height: 42,
  justifyContent: 'center',
  gap: 0,
};

const OUTFIT_COLORS = ['#ef4444', '#3b82f6', '#22c55e', '#f59e0b', '#8b5cf6'];

export default function CityTopBar() {
  const { coins, activeMissions } = useGame();
  const missionCount = Object.keys(activeMissions || {}).length;

  return (
    <div id="city-top-bar">
      {/* Currency Token */}
      <div className="city-token" style={tokenStyle}>
        <div style={{
          ...iconBaseStyle,
          background: 'radial-gradient(circle at 40% 35%, #fde68a, #f59e0b)',
          border: '2.5px solid #d97706', color: '#92400e', fontWeight: 900,
        }}>C</div>
        <span style={{ color: '#f59e0b', fontSize: 15 }}>{coins}</span>
      </div>

      {/* Globe Token */}
      <div className="city-token" style={tokenStyle}>
        <div style={{
          ...iconBaseStyle,
          background: 'radial-gradient(circle at 40% 35%, #93c5fd, #3b82f6)',
          border: '2.5px solid #2563eb', color: '#fff',
        }}>&#127758;</div>
        <span style={{ color: '#6b7280', fontSize: 11, fontWeight: 700 }}>8 Places</span>
      </div>

      {/* Bell / Notifications Token */}
      <div className="city-token" style={tokenStyle}>
        <div style={{
          ...iconBaseStyle,
          background: 'radial-gradient(circle at 40% 35%, #fde68a, #fbbf24)',
          border: '2.5px solid #d97706', color: '#92400e',
        }}>&#128276;</div>
        <span style={{ color: '#f59e0b', fontSize: 15 }}>{missionCount}</span>
      </div>

      {/* Clipboard Token */}
      <div className="city-token" style={squareTokenStyle} title="Clipboard">
        <div style={{
          ...iconBaseStyle,
          background: 'radial-gradient(circle at 40% 35%, #a7f3d0, #34d399)',
          border: '2.5px solid #059669', color: '#064e3b',
        }}>&#128203;</div>
      </div>

      {/* Music Token */}
      <div className="city-token" style={squareTokenStyle} title="Music">
        <div style={{
          ...iconBaseStyle,
          background: 'radial-gradient(circle at 40% 35%, #c4b5fd, #8b5cf6)',
          border: '2.5px solid #6d28d9', color: '#fff',
        }}>&#127925;</div>
      </div>

      {/* Outfits Token — color circles */}
      <div className="city-token" style={{ ...tokenStyle, padding: '6px 12px', gap: 4 }} title="Outfits">
        {OUTFIT_COLORS.map((color, i) => (
          <div key={i} style={{
            width: 16, height: 16, borderRadius: '50%',
            background: color,
            border: '2px solid rgba(255,255,255,0.8)',
            boxShadow: `0 2px 0 ${color}44`,
          }} />
        ))}
      </div>

      {/* Backpack Token */}
      <div className="city-token" style={squareTokenStyle} title="Backpack">
        <div style={{
          ...iconBaseStyle,
          background: 'radial-gradient(circle at 40% 35%, #fdba74, #f97316)',
          border: '2.5px solid #c2410c', color: '#fff',
        }}>&#127890;</div>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Settings Token */}
      <div className="city-token" style={squareTokenStyle} id="city-settings-btn" title="Settings">
        <div style={{
          ...iconBaseStyle,
          background: 'radial-gradient(circle at 40% 35%, #e5e7eb, #9ca3af)',
          border: '2.5px solid #6b7280', color: '#374151',
        }}>&#9881;</div>
      </div>

      {/* Close / Back */}
      <div className="city-token" style={squareTokenStyle} id="city-close-btn" title="Back to Room">
        <div style={{
          ...iconBaseStyle,
          background: 'radial-gradient(circle at 40% 35%, #fca5a5, #ef4444)',
          border: '2.5px solid #dc2626', color: '#fff', fontWeight: 900,
        }}>&#10005;</div>
      </div>
    </div>
  );
}
