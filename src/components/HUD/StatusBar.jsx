import React from 'react';

export default function StatusBar() {
  return (
    <>
      <div id="status-bar"><span id="sb-toast"></span><span id="sb-status"></span></div>
      <div id="npc-dialog"><span id="npc-name"></span><span id="npc-text"></span></div>
      <div id="joystick-zone"></div>
      <div id="interact-hint">
        <button className="hint-btn" id="hint-btn" style={{background:'#6366f1',color:'#fff'}}>&#128072;</button>
      </div>
      <div id="grab-hint">Tap to grab / drop</div>
    </>
  );
}
