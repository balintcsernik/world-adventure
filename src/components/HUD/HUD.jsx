import React from 'react';
import { useGame } from '../../contexts/GameContext';
import { CFG } from '../../constants';

export default function HUD() {
  const { coins, currentRoom } = useGame();
  const roomName = CFG.ROOM_NAMES[CFG.WORLD_ROOMS[currentRoom]] || 'Classroom';

  return (
    <div id="hud" className="ui-overlay">
      <div id="coin-display">
        <div className="coin-icon">&#9733;</div>
        <span id="coin-count">{coins}</span>
      </div>
      <div id="room-label">{roomName}</div>
      <div id="btn-row">
        <button className="hud-btn" id="btn-map" style={{background:'linear-gradient(135deg,#06b6d4,#0891b2)',color:'#fff'}} title="Map">&#128506;</button>
        <button className="hud-btn" id="btn-dismiss" title="Bell">&#128276;</button>
        <button className="hud-btn" id="btn-tasks" title="Tasks">&#128203;</button>
        <button className="hud-btn" id="btn-music" title="Music">&#127925;</button>
        <button className="hud-btn" id="btn-equipment" title="Equipment">&#128090;</button>
        <button className="hud-btn" id="btn-inventory" title="Backpack">&#127890;</button>
        <button className="hud-btn" id="btn-restart" style={{background:'linear-gradient(135deg,#ef4444,#dc2626)',color:'#fff',fontSize:14}} title="Restart">&#128260;</button>
      </div>
    </div>
  );
}
