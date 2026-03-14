import React from 'react';
import { useGame } from '../../contexts/GameContext';
import { closeCityHub } from '../../engine/gameEngine';

/**
 * CityTopBar — Simplified top bar with just a back button on the left.
 */
export default function CityTopBar() {
  const { syncFromEngine } = useGame();

  const handleBack = () => {
    closeCityHub();
    syncFromEngine();
  };

  return (
    <div id="city-top-bar">
      {/* Back button — returns user to previous screen */}
      <button
        className="hud-btn city-back-btn"
        title="Back"
        onClick={handleBack}
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(241,245,249,0.95))',
          color: '#475569',
          fontSize: 16,
          fontWeight: 900,
          border: '2px solid rgba(100,116,139,0.25)',
          boxShadow: '0 4px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: 14,
          cursor: 'pointer',
          fontFamily: 'Nunito, sans-serif',
        }}
      >
        &#8592;
      </button>

      <div style={{ flex: 1 }} />
    </div>
  );
}
