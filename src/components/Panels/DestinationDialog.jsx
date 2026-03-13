import React from 'react';

export default function DestinationDialog() {
  return (
    <div id="destination-dialog">
      <div className="trade-box">
        <h2>&#9992;&#65039; Departure Board</h2>
        <p className="npc-msg">Choose your destination!</p>
        <div id="destination-list"></div>
        <button className="trade-close" id="close-destination">Stay at Airport</button>
      </div>
    </div>
  );
}
