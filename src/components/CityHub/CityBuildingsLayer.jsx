import React, { useCallback } from 'react';
import { CITY_BUILDINGS, MAP_AREAS } from '../../constants';
import { handleBuildingTap } from '../../engine/gameEngine';
import { useGame } from '../../contexts/GameContext';
import SVG_BUILDINGS from './icons/BuildingSvgs';
import MapNode from './MapNode';

export default function CityBuildingsLayer() {
  const { currentRoom } = useGame();
  return (
    <div className="city-buildings-react">
      {CITY_BUILDINGS.map(bldg => (
        <CityMapNode key={bldg.idx} bldg={bldg} currentRoom={currentRoom} />
      ))}
    </div>
  );
}

function CityMapNode({ bldg, currentRoom }) {
  const area = MAP_AREAS[bldg.areaIdx];
  const isCurrent = area.rooms.includes(currentRoom);
  const SvgBuilding = SVG_BUILDINGS[bldg.buildFn];

  const handleTap = useCallback(() => {
    handleBuildingTap(bldg.areaIdx);
  }, [bldg.areaIdx]);

  return (
    <MapNode
      position={{ x: bldg.pctX, y: bldg.pctY }}
      label={bldg.name}
      isSelected={isCurrent}
      onTap={handleTap}
      glowColor={bldg.glowColor}
      imageAsset={SvgBuilding ? <SvgBuilding w={bldg.buildW} h={bldg.buildH} /> : null}
    />
  );
}
