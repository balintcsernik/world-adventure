import React from 'react';
import { useGame } from '../../contexts/GameContext';
import { state, initAudio, startBgm, saveGame, openCityHub, setGameStarted } from '../../engine/gameEngine';

export default function SplashScreen() {
  const { gameScreen, setGameScreen, syncFromEngine } = useGame();

  if (gameScreen !== 'splash') return null;

  const handleStart = () => {
    if (state.character) {
      // Returning player
      initAudio();
      setGameStarted(true);
      if (state.musicOn) startBgm();
      saveGame();
      setGameScreen('playing');
      syncFromEngine();
      openCityHub();
    } else {
      // New player
      setGameScreen('charSelect');
    }
  };

  return (
    <div id="splash">
      <div id="splash-deco" aria-hidden="true"></div>
      <h1>Miu's World Adventure</h1>
      <p>Explore Miu's World!</p>
      <button id="start-btn" onClick={handleStart}>Play!</button>
      <div id="hc-brand">
        brought to you by<br />
        <span id="hc-logo">HC Studios</span>
      </div>
    </div>
  );
}
