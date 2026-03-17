import React from 'react';

export default function InventoryPanel() {
  return (
    <div id="inventory-panel">
      <div className="panel-header">
        <h2>&#127890; Backpack</h2>
        <button className="close-btn" id="close-inv">&times;</button>
      </div>
      <div className="panel-body">
        <div className="bp-section-label">Equipment</div>
        <div className="equip-slots" id="equip-slots-merged"></div>
        <div className="bp-section-label" style={{marginTop:'12px'}}>Items</div>
        <div className="inv-grid" id="inv-grid"></div>
      </div>
    </div>
  );
}
