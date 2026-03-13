import React, { useCallback } from 'react';
import { CITY_BUILDINGS, MAP_AREAS } from '../../constants';
import { state, handleBuildingTap } from '../../engine/gameEngine';
import BUILDING_COMPONENTS from './Buildings';

export default function CityBuildingsLayer() {
  return (
    <div className="city-buildings-react">
      {CITY_BUILDINGS.map(bldg => (
        <CityBuildingSlot key={bldg.idx} bldg={bldg} />
      ))}
    </div>
  );
}

function CityBuildingSlot({ bldg }) {
  const area = MAP_AREAS[bldg.areaIdx];
  const isCurrent = area.rooms.includes(state.currentRoom);
  const BuildingComponent = BUILDING_COMPONENTS[bldg.buildFn];

  const handleClick = useCallback(() => {
    handleBuildingTap(bldg.areaIdx);
  }, [bldg.areaIdx]);

  return (
    <div
      className={`city-building${isCurrent ? ' current' : ''}`}
      style={{
        left: `${bldg.pctX * 100}%`,
        top: `${bldg.pctY * 100}%`,
        transform: 'translate(-50%,-100%)',
      }}
      onClick={handleClick}
    >
      {/* Glow */}
      <div
        className="building-glow"
        style={{
          background: `radial-gradient(circle, ${bldg.glowColor}55 0%, transparent 70%)`
        }}
      />
      {/* Building component */}
      {BuildingComponent && <BuildingComponent bldg={bldg} />}
      {/* Sign */}
      <div className="building-sign">
        <div className="sign-post" />
        <div className="sign-board">{bldg.name}</div>
      </div>
      {/* Pin (shown on current) */}
      <div className="building-pin">&#128205;</div>
    </div>
  );
}
