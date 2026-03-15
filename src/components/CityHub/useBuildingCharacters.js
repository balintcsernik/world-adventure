import { useMemo } from 'react';
import { MAP_AREAS, CHARACTERS } from '../../constants';

/**
 * useBuildingCharacters — Computes which "moved" characters are at each city building.
 *
 * "Moved" = the active character (always at currentRoom) + any character
 * that has been switched to at some point (has an entry in characterPositions).
 *
 * @param {string|null} character       - Active character ID
 * @param {number}      currentRoom     - Room index of active character
 * @param {Object}      characterPositions - { charId: { room, x, y, dir } }
 * @returns {Object} { [areaIdx]: CharacterData[] }
 */
export function useBuildingCharacters(character, currentRoom, characterPositions) {
  return useMemo(() => {
    const result = {};

    function areaForRoom(room) {
      for (let i = 0; i < MAP_AREAS.length; i++) {
        if (MAP_AREAS[i].rooms.includes(room)) return i;
      }
      return -1;
    }

    function addChar(charId, room) {
      const areaIdx = areaForRoom(room);
      if (areaIdx < 0) return;
      const charData = CHARACTERS.find(c => c.id === charId);
      if (!charData) return;
      if (!result[areaIdx]) result[areaIdx] = [];
      result[areaIdx].push(charData);
    }

    // Active character lives at currentRoom
    if (character) {
      addChar(character, currentRoom);
    }

    // Every character in characterPositions has been "moved" at some point
    if (characterPositions) {
      for (const [charId, pos] of Object.entries(characterPositions)) {
        if (charId === character) continue; // already added above
        addChar(charId, pos.room);
      }
    }

    return result;
  }, [character, currentRoom, characterPositions]);
}
