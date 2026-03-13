import React, { useEffect, useRef } from 'react';
import { GameProvider, useGame } from './contexts/GameContext';
import SplashScreen from './components/Screens/SplashScreen';
import CharSelect from './components/Screens/CharSelect';
import GameCanvas from './components/Game/GameCanvas';
import HUD from './components/HUD/HUD';
import CityHub from './components/CityHub/CityHub';
import InventoryPanel from './components/Panels/InventoryPanel';
import EquipPanel from './components/Panels/EquipPanel';
import TaskPanel from './components/Panels/TaskPanel';
import TradeDialog from './components/Panels/TradeDialog';
import MissionDialog from './components/Panels/MissionDialog';
import DestinationDialog from './components/Panels/DestinationDialog';
import RestartDialog from './components/Panels/RestartDialog';
import MapOverlay from './components/Panels/MapOverlay';
import StatusBar from './components/HUD/StatusBar';
import MissionTracker from './components/HUD/MissionTracker';

function GameApp() {
  const { gameScreen } = useGame();

  return (
    <>
      {gameScreen === 'splash' && <SplashScreen />}
      {gameScreen === 'charSelect' && <CharSelect />}
      <GameCanvas />
      <HUD />
      <CityHub />
      <InventoryPanel />
      <EquipPanel />
      <TaskPanel />
      <TradeDialog />
      <MissionDialog />
      <DestinationDialog />
      <RestartDialog />
      <MapOverlay />
      <StatusBar />
      <MissionTracker />
    </>
  );
}

export default function App() {
  return (
    <GameProvider>
      <GameApp />
    </GameProvider>
  );
}
