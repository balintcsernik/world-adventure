import React from 'react';

export default function TradeDialog() {
  return (
    <div id="trade-dialog">
      <div className="trade-box">
        <h2>&#128722; School Shop</h2>
        <p className="npc-msg">Welcome! Trade Star Coins for cool stuff!</p>
        <div id="trade-items"></div>
        <button className="trade-close" id="close-trade">Leave Shop</button>
      </div>
    </div>
  );
}
