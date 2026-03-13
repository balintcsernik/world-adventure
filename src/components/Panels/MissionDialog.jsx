import React from 'react';

export default function MissionDialog() {
  return (
    <div id="mission-dialog">
      <div className="mission-box">
        <h2 id="mission-title"></h2>
        <p id="mission-desc"></p>
        <p className="reward-text" id="mission-reward"></p>
        <button className="mission-btn accept" id="accept-mission">Accept! &#10004;&#65039;</button>
        <button className="mission-btn decline" id="decline-mission">Not now</button>
      </div>
    </div>
  );
}
