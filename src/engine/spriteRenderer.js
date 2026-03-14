// ---- SPRITE RENDERER ----
// Drawing helpers for rendering static sprites and sprite sheet frames.
// All functions return false if the asset is not found, enabling
// callers to fall back to procedural drawing.

import { getImage, getSheet } from './assetManager.js';

/**
 * Draw a static sprite image.
 * @returns {boolean} true if drawn, false if asset not found (use procedural fallback)
 */
function drawSprite(ctx, key, x, y, w, h, flipX = false) {
  const img = getImage(key);
  if (!img) return false;
  ctx.save();
  if (flipX) {
    ctx.translate(x + w, y);
    ctx.scale(-1, 1);
    ctx.drawImage(img, 0, 0, w, h);
  } else {
    ctx.drawImage(img, x, y, w, h);
  }
  ctx.restore();
  return true;
}

/**
 * Draw a static sprite centered at (cx, cy).
 * Matches the existing coordinate system where drawPlayer(px, py) draws around a center point.
 */
function drawSpriteCenter(ctx, key, cx, cy, w, h, flipX = false) {
  return drawSprite(ctx, key, cx - w / 2, cy - h / 2, w, h, flipX);
}

/**
 * Draw a specific frame from a sprite sheet.
 * @param {number} frameIndex - 0-based frame index (left-to-right, top-to-bottom)
 * @returns {boolean} true if drawn, false if asset not found
 */
function drawFrame(ctx, sheetKey, frameIndex, x, y, w, h, flipX = false) {
  const sheet = getSheet(sheetKey);
  if (!sheet) return false;
  const col = frameIndex % sheet.cols;
  const row = Math.floor(frameIndex / sheet.cols);
  const sx = col * sheet.frameW;
  const sy = row * sheet.frameH;
  ctx.save();
  if (flipX) {
    ctx.translate(x + w, y);
    ctx.scale(-1, 1);
    ctx.drawImage(sheet.img, sx, sy, sheet.frameW, sheet.frameH, 0, 0, w, h);
  } else {
    ctx.drawImage(sheet.img, sx, sy, sheet.frameW, sheet.frameH, x, y, w, h);
  }
  ctx.restore();
  return true;
}

/**
 * Draw a sprite sheet frame centered at (cx, cy).
 */
function drawFrameCenter(ctx, sheetKey, frameIndex, cx, cy, w, h, flipX = false) {
  return drawFrame(ctx, sheetKey, frameIndex, cx - w / 2, cy - h / 2, w, h, flipX);
}

export { drawSprite, drawSpriteCenter, drawFrame, drawFrameCenter };
