import React from 'react';

export default function InventoryPanel() {
  return (
    <div id="inventory-panel">
      <div className="panel-header">
        <h2>&#127890; Backpack</h2>
        <button className="close-btn" id="close-inv">&times;</button>
      </div>
      <div className="panel-body">
        <div className="inv-grid" id="inv-grid"></div>
      </div>
    </div>
  );
}
