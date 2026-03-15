import React, { createContext, useContext, useState, useCallback, useRef, useMemo } from 'react';
import { state as engineState, saveGame, player as enginePlayer, init as engineInit } from '../engine/gameEngine';
import { CHARACTERS } from '../constants';

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [coins, setCoins] = useState(100);
  const [currentRoom, setCurrentRoom] = useState(0);
  const [character, setCharacter] = useState(null);
  const [inventory, setInventory] = useState([]);
  const [equipped, setEquipped] = useState({hat:null,cape:null,shoes:null,tool:null,accessory:null});
  const [activeMissions, setActiveMissions] = useState({});
  const [gameScreen, setGameScreen] = useState('splash');
  const [cityHubOpen, setCityHubOpen] = useState(false);
  const [characterPositions, setCharacterPositions] = useState({});
  const [activeView, setActiveView] = useState('map');
  const [selectedNodeIdx, setSelectedNodeIdx] = useState(null);
  const engineInitialized = useRef(false);

  // Derive the full selectedCharacter object from the character ID
  const selectedCharacter = useMemo(() => {
    if (!character) return null;
    return CHARACTERS.find(c => c.id === character) || null;
  }, [character]);

  const syncFromEngine = useCallback(() => {
    setCoins(engineState.coins);
    setCurrentRoom(engineState.currentRoom);
    setCharacter(engineState.character);
    setInventory([...engineState.inventory]);
    setEquipped({...engineState.equipped});
    setActiveMissions({...(engineState.activeMissions || {})});
    setCharacterPositions({...(engineState.characterPositions || {})});
  }, []);

  const updateCoins = useCallback((newCoins) => {
    engineState.coins = newCoins;
    setCoins(newCoins);
    saveGame();
  }, []);

  const selectCharacter = useCallback((charId) => {
    if (charId === engineState.character) return;
    // Save outgoing character's position (stays as idle NPC in their room)
    if (engineState.character) {
      if (!engineState.characterPositions) engineState.characterPositions = {};
      engineState.characterPositions[engineState.character] = {
        room: engineState.currentRoom,
        x: enginePlayer.x, y: enginePlayer.y, dir: enginePlayer.dir
      };
    }
    // Don't teleport to incoming character's saved room —
    // room is determined by building tap on the City Hub map.
    // Just switch who the active character is.
    engineState.character = charId;
    setCharacter(charId);
    setCharacterPositions({...(engineState.characterPositions || {})});
    saveGame();
  }, []);

  const value = {
    coins, currentRoom, character, selectedCharacter, inventory, equipped, activeMissions, characterPositions,
    gameScreen, setGameScreen,
    cityHubOpen, setCityHubOpen,
    activeView, setActiveView,
    selectedNodeIdx, setSelectedNodeIdx,
    syncFromEngine, updateCoins, selectCharacter,
    engineInitialized,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
}
