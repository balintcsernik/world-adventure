import React, { useState, useRef, useEffect } from 'react';
import { useGame } from '../../contexts/GameContext';
import { CHARACTERS } from '../../constants';
import { state, drawCharPreview, initAudio, startBgm, saveGame, openCityHub } from '../../engine/gameEngine';

export default function CharSelect() {
  const { gameScreen, setGameScreen, selectCharacter, syncFromEngine } = useGame();
  const [selectedId, setSelectedId] = useState(null);

  if (gameScreen !== 'charSelect') return null;

  const handlePlay = () => {
    if (!selectedId) return;
    selectCharacter(selectedId);
    initAudio();
    window._gameStarted = true;
    if (state.musicOn) startBgm();
    saveGame();
    setGameScreen('playing');
    syncFromEngine();
    setTimeout(() => openCityHub(), 550);
  };

  return (
    <div id="char-select" className="show">
      <h1>Choose Your Character</h1>
      <div id="char-cards">
        {CHARACTERS.map(ch => (
          <CharCard
            key={ch.id}
            char={ch}
            selected={selectedId === ch.id}
            onSelect={() => setSelectedId(ch.id)}
          />
        ))}
      </div>
      <button id="char-play-btn" onClick={handlePlay}>Start Adventure!</button>
    </div>
  );
}

function CharCard({ char: ch, selected, onSelect }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      drawCharPreview(canvasRef.current, ch);
    }
  }, [ch]);

  return (
    <div
      className={`char-card ${ch.gender} ${selected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <canvas ref={canvasRef} width={120} height={140} style={{ width: '100%', borderRadius: 12 }} />
      <div className="char-name">{ch.name}</div>
      <div className="char-title">{ch.title}</div>
      <div className="char-skill">
        <span className="skill-icon">{ch.icon}</span> {ch.skill}
      </div>
      <div className="char-desc">{ch.skillDesc}</div>
    </div>
  );
}
