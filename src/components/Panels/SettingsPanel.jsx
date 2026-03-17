import React from 'react';

export default function SettingsPanel() {
  return (
    <div id="settings-panel">
      <div className="panel-header">
        <h2>&#9881; Settings</h2>
        <button className="close-btn" id="close-settings">&times;</button>
      </div>
      <div className="panel-body">
        <div id="settings-list"></div>
      </div>
    </div>
  );
}
