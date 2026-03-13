import React from 'react';

export default function TaskPanel() {
  return (
    <div id="task-panel">
      <div className="panel-header">
        <h2>&#128203; Missions</h2>
        <button className="close-btn" id="close-tasks">&times;</button>
      </div>
      <div className="panel-body">
        <div id="task-list"></div>
      </div>
    </div>
  );
}
