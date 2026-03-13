import React, { useEffect, useRef } from 'react';
import { init as engineInit, resize, gameLoop } from '../../engine/gameEngine';
import { useGame } from '../../contexts/GameContext';

export default function GameCanvas() {
  const canvasRef = useRef(null);
  const { engineInitialized, syncFromEngine } = useGame();

  useEffect(() => {
    if (engineInitialized.current) return;
    engineInitialized.current = true;

    // The engine init() expects a canvas#game in the DOM
    // It sets up everything: resize, input, game loop
    engineInit();
    syncFromEngine();
  }, []);

  return <canvas id="game" ref={canvasRef} />;
}
