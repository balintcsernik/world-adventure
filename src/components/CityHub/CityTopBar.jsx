import React from 'react';
import { useGame } from '../../contexts/GameContext';
import {
  CoinIcon, GlobeIcon, BellIcon, ClipboardIcon,
  MusicIcon, BackpackIcon, SettingsIcon, CloseIcon,
} from './icons/HudIcons';

/* ─── Enamel-Pin Token ─── */
function Token({ children, label, wide, onClick, title }) {
  return (
    <button
      className="city-token"
      onClick={onClick}
      title={title}
      style={{
        display: 'flex', alignItems: 'center', gap: wide ? 8 : 0,
        background: '#fff', borderRadius: 16,
        padding: wide ? '5px 14px 5px 6px' : '5px 8px',
        boxShadow: '0px 6px 0px #e0e0e0, 0px 8px 15px rgba(0,0,0,0.1)',
        border: '2.5px solid #f5f5f5',
        fontSize: 15, fontWeight: 800, fontFamily: 'Nunito, sans-serif',
        cursor: 'pointer', userSelect: 'none',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        flexShrink: 0, lineHeight: 1,
        /* no native button chrome */
        outline: 'none', color: 'inherit',
      }}
    >
      {children}
      {label != null && (
        <span style={{ fontSize: 14, fontWeight: 800, whiteSpace: 'nowrap' }}>{label}</span>
      )}
    </button>
  );
}

const OUTFIT_COLORS = ['#ef4444', '#3b82f6', '#22c55e', '#f59e0b', '#8b5cf6'];

export default function CityTopBar() {
  const { coins, activeMissions } = useGame();
  const missionCount = Object.keys(activeMissions || {}).length;

  return (
    <div id="city-top-bar">
      {/* Currency */}
      <Token wide label={<span style={{ color: '#d97706' }}>{coins}</span>} title="Coins">
        <CoinIcon size={28} />
      </Token>

      {/* Globe / Places */}
      <Token wide label={<span style={{ color: '#6b7280', fontSize: 11 }}>8 Places</span>} title="World Map">
        <GlobeIcon size={28} />
      </Token>

      {/* Notifications / Missions */}
      <Token wide label={<span style={{ color: '#d97706' }}>{missionCount}</span>} title="Missions">
        <BellIcon size={28} />
      </Token>

      {/* Clipboard */}
      <Token title="Clipboard">
        <ClipboardIcon size={28} />
      </Token>

      {/* Music */}
      <Token title="Music">
        <MusicIcon size={28} />
      </Token>

      {/* Outfits — color dot cluster */}
      <Token wide title="Outfits">
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {OUTFIT_COLORS.map((color, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="7" fill={color} stroke="rgba(255,255,255,0.85)" strokeWidth="1.5"/>
              <circle cx="6" cy="6" r="2.5" fill="rgba(255,255,255,0.25)"/>
            </svg>
          ))}
        </div>
      </Token>

      {/* Backpack */}
      <Token title="Backpack">
        <BackpackIcon size={28} />
      </Token>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Settings */}
      <Token title="Settings" onClick={() => {}}>
        <SettingsIcon size={28} />
      </Token>

      {/* Close */}
      <Token title="Back to Room" onClick={() => {
        document.getElementById('city-hub')?.classList.remove('show');
      }}>
        <CloseIcon size={28} />
      </Token>
    </div>
  );
}
