import React from 'react';
import CityTopBar from './CityHub/CityTopBar';
import CityDock from './CityHub/CityDock';

/**
 * GameLayout — Persistent shell wrapper that keeps TopHUD and CharacterDock
 * visible across all view changes. The active view content renders between them.
 */
export default function GameLayout({ children }) {
  return (
    <div className="game-layout">
      <CityTopBar />
      <div className="game-layout__content">
        {children}
      </div>
      <CityDock />
    </div>
  );
}
