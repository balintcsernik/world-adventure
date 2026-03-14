// ---- ASSET MANIFEST ----
// Registry of all image and sprite sheet assets.
// Add entries here as AI-generated art is created.
//
// URLs use import.meta.url for Vite-compatible asset resolution:
//   new URL('./path/to/image.png', import.meta.url).href
//
// IMAGES:        Static single-frame images (backgrounds, objects, equipment)
// SPRITE_SHEETS: Multi-frame animated sheets (characters, pets with animations)

export const IMAGES = [
  // -- Room backgrounds (Phase 1) --
  // { key: 'room_classroom',  url: new URL('./rooms/classroom_bg.png', import.meta.url).href },
  // { key: 'room_cafeteria',  url: new URL('./rooms/cafeteria_bg.png', import.meta.url).href },
  // ... add as rooms are generated

  // -- Object sprites (Phase 2) --
  // { key: 'obj_classroom_chalkboard', url: new URL('./objects/classroom/chalkboard.png', import.meta.url).href },
  // ... add as objects are generated

  // -- Equipment overlays (Phase 6) --
  // { key: 'equip_crown',   url: new URL('./equipment/hats/crown.png', import.meta.url).href },
  // ... add as equipment sprites are generated

  // -- City Hub (Phase 7) --
  // { key: 'city_map_bg',      url: new URL('./city/city_map_bg.png', import.meta.url).href },
  // { key: 'city_school',      url: new URL('./city/school_building.png', import.meta.url).href },
];

export const SPRITE_SHEETS = [
  // -- Player characters (Phase 5) --
  // { key: 'char_aria_idle',     url: new URL('./characters/player/aria_idle.png', import.meta.url).href,     frameW: 128, frameH: 128 },
  // { key: 'char_aria_walk',     url: new URL('./characters/player/aria_walk.png', import.meta.url).href,     frameW: 128, frameH: 128 },
  // { key: 'char_aria_interact', url: new URL('./characters/player/aria_interact.png', import.meta.url).href, frameW: 128, frameH: 128 },
  // ... repeat for all 10 characters

  // -- Teachers (Phase 3) --
  // { key: 'teacher_ms_apple', url: new URL('./characters/teachers/ms_apple.png', import.meta.url).href, frameW: 128, frameH: 128 },

  // -- Pets (Phase 4) --
  // { key: 'pet_whiskers', url: new URL('./characters/pets/whiskers.png', import.meta.url).href, frameW: 64, frameH: 64 },
];
