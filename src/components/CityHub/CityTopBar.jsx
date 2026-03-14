import React from 'react';
import { useGame } from '../../contexts/GameContext';
import {
  CoinIcon, GlobeIcon, BellIcon, ClipboardIcon,
  MusicIcon, DressIcon, BackpackIcon, SettingsIcon, CloseIcon,
} from './icons/HudIcons';

/* ─── Enamel-Pin Token ─── */
function Token({ children, label, wide, onClick, title, id }) {
  return (
    <button
      id={id}
      className={`city-token${wide ? ' city-token--wide' : ''}`}
      onClick={onClick}
      title={title}
      style={{
        fontFamily: 'Nunito, sans-serif',
        outline: 'none', color: 'inherit', lineHeight: 1,
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
        <CoinIcon size={30} />
      </Token>

      {/* Globe / Places */}
      <Token title="World Map">
        <GlobeIcon size={30} />
      </Token>

      {/* Notifications / Missions */}
      <Token title="Missions">
        <BellIcon size={30} />
      </Token>

      {/* Clipboard */}
      <Token title="Clipboard">
        <ClipboardIcon size={30} />
      </Token>

      {/* Music */}
      <Token title="Music">
        <MusicIcon size={30} />
      </Token>

      {/* Outfits — dress icons in various colors (matching reference) */}
      {OUTFIT_COLORS.map((color, i) => (
        <Token key={i} title="Outfits">
          <DressIcon size={30} color={color} />
        </Token>
      ))}

      {/* Backpack */}
      <Token title="Backpack">
        <BackpackIcon size={30} />
      </Token>

      {/* Settings */}
      <Token id="city-settings-btn" title="Settings" onClick={() => {}}>
        <SettingsIcon size={30} />
      </Token>

      {/* Close */}
      <Token id="city-close-btn" title="Back to Room" onClick={() => {
        document.getElementById('city-hub')?.classList.remove('show');
      }}>
        <CloseIcon size={30} />
      </Token>
    </div>
  );
}
