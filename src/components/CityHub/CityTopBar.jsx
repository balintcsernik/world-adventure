import React from 'react';
import { useGame } from '../../contexts/GameContext';
import { closeCityHub } from '../../engine/gameEngine';

/**
 * CityTopBar — Mirrors the in-game HUD style exactly.
 * Coin pill + room label on the left, round gradient buttons on the right.
 */
export default function CityTopBar() {
  const { coins, syncFromEngine } = useGame();

  const handleClose = () => {
    closeCityHub();
    syncFromEngine();
  };

  return (
    <div id="city-top-bar">
      {/* Coin counter — same pill as HUD */}
      <div id="coin-display" className="city-hud-coin">
        <div className="coin-icon">&#9733;</div>
        <span id="city-coin-count">{coins}</span>
      </div>

      {/* Room label — shows "City Hub" */}
      <div id="city-room-label">City Hub</div>

      {/* Button row — same circular style as HUD */}
      <div className="city-btn-row">
        <button className="hud-btn" title="Bell" style={{background:'linear-gradient(135deg,#fbbf24,#f59e0b)'}}>&#128276;</button>
        <button className="hud-btn" title="Tasks" style={{background:'linear-gradient(135deg,#fbbf24,#f59e0b)'}}>&#128203;</button>
        <button className="hud-btn" title="Music" style={{background:'linear-gradient(135deg,#34d399,#10b981)'}}>&#127925;</button>
        <button className="hud-btn" title="Equipment" style={{background:'linear-gradient(135deg,#f472b6,#ec4899)'}}>&#128090;</button>
        <button className="hud-btn" title="Backpack" style={{background:'linear-gradient(135deg,#a78bfa,#8b5cf6)'}}>&#127890;</button>
        <button
          id="city-settings-btn"
          className="hud-btn"
          title="Settings"
          style={{background:'linear-gradient(135deg,#94a3b8,#64748b)',color:'#fff',fontSize:14}}
        >&#9881;</button>
        <button
          id="city-close-btn"
          className="hud-btn"
          title="Close"
          style={{background:'linear-gradient(135deg,#ef4444,#dc2626)',color:'#fff',fontSize:14}}
          onClick={handleClose}
        >&#10005;</button>
      </div>
    </div>
  );
}
