import React from 'react';

export default function EquipPanel() {
  return (
    <div id="equip-panel">
      <div className="panel-header">
        <h2>&#128090; Equipment</h2>
        <button className="close-btn" id="close-equip">&times;</button>
      </div>
      <div className="panel-body">
        <div className="equip-slots" id="equip-slots"></div>
      </div>
    </div>
  );
}
