// ---- ASSET MANAGER ----
// Preloads and caches all image assets before the game starts.
// Supports both static images and sprite sheets (for animations).

const cache = new Map();   // key → HTMLImageElement
const sheets = new Map();  // key → { img, frameW, frameH, cols, rows }

let totalAssets = 0;
let loadedAssets = 0;
let onProgress = null;

function loadImage(key, url) {
  totalAssets++;
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      cache.set(key, img);
      loadedAssets++;
      if (onProgress) onProgress(loadedAssets, totalAssets);
      resolve(img);
    };
    img.onerror = () => {
      // Don't block the game — just skip missing assets
      console.warn(`[AssetManager] Failed to load: ${key} (${url})`);
      loadedAssets++;
      if (onProgress) onProgress(loadedAssets, totalAssets);
      resolve(null);
    };
    img.src = url;
  });
}

function loadSpriteSheet(key, url, frameW, frameH) {
  totalAssets++;
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const cols = Math.floor(img.width / frameW);
      const rows = Math.floor(img.height / frameH);
      const entry = { img, frameW, frameH, cols, rows };
      sheets.set(key, entry);
      cache.set(key, img);
      loadedAssets++;
      if (onProgress) onProgress(loadedAssets, totalAssets);
      resolve(entry);
    };
    img.onerror = () => {
      console.warn(`[AssetManager] Failed to load sheet: ${key} (${url})`);
      loadedAssets++;
      if (onProgress) onProgress(loadedAssets, totalAssets);
      resolve(null);
    };
    img.src = url;
  });
}

/** Get a cached image by key. Returns null if not loaded. */
function getImage(key) {
  return cache.get(key) || null;
}

/** Get a cached sprite sheet by key. Returns null if not loaded. */
function getSheet(key) {
  return sheets.get(key) || null;
}

/** Check if all queued assets have finished loading. */
function isReady() {
  return totalAssets === 0 || loadedAssets >= totalAssets;
}

/** Returns loading progress as 0-1. */
function getProgress() {
  return totalAssets === 0 ? 1 : loadedAssets / totalAssets;
}

/**
 * Load all assets defined in the manifest.
 * Call this once during init(), before the game loop starts.
 * @param {Function} progressCb - Called with (loaded, total) on each asset load
 */
async function loadAll(progressCb) {
  onProgress = progressCb || null;

  // Dynamic import so the manifest can use import.meta.url for Vite asset resolution
  let manifest;
  try {
    manifest = await import('../assets/manifest.js');
  } catch (e) {
    console.warn('[AssetManager] No manifest found — running without sprites');
    return;
  }

  const promises = [];

  if (manifest.IMAGES) {
    for (const entry of manifest.IMAGES) {
      promises.push(loadImage(entry.key, entry.url));
    }
  }

  if (manifest.SPRITE_SHEETS) {
    for (const entry of manifest.SPRITE_SHEETS) {
      promises.push(loadSpriteSheet(entry.key, entry.url, entry.frameW, entry.frameH));
    }
  }

  await Promise.all(promises);
}

export { loadAll, getImage, getSheet, isReady, getProgress };
