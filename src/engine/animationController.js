// ---- ANIMATION CONTROLLER ----
// Frame-based animation state machine for sprite sheet characters.
// Tracks current animation (idle/walk/interact), advances frames at
// the configured FPS, and provides the current sheet key + frame index.

/**
 * @param {Object} config - Animation definitions
 *   Example: {
 *     idle:     { sheet: 'char_aria_idle',     frames: 4, fps: 4  },
 *     walk:     { sheet: 'char_aria_walk',     frames: 6, fps: 8  },
 *     interact: { sheet: 'char_aria_interact', frames: 4, fps: 6  },
 *   }
 */
class AnimationController {
  constructor(config) {
    this.config = config;
    this.currentAnim = 'idle';
    this.frameIndex = 0;
    this.elapsed = 0;
  }

  /**
   * Advance the animation clock.
   * @param {number} dt - Delta time in ms since last frame (~16ms at 60fps)
   * @param {boolean} isMoving - Whether the entity is currently moving
   * @param {boolean} isInteracting - Whether the entity is currently interacting
   */
  update(dt, isMoving, isInteracting = false) {
    let targetAnim = 'idle';
    if (isInteracting) targetAnim = 'interact';
    else if (isMoving) targetAnim = 'walk';

    // If this animation doesn't exist in config, stay on idle
    if (!this.config[targetAnim]) targetAnim = 'idle';

    // Reset frame on animation change
    if (targetAnim !== this.currentAnim) {
      this.currentAnim = targetAnim;
      this.frameIndex = 0;
      this.elapsed = 0;
    }

    const anim = this.config[this.currentAnim];
    if (!anim) return;

    this.elapsed += dt;
    const frameDuration = 1000 / anim.fps;
    while (this.elapsed >= frameDuration) {
      this.elapsed -= frameDuration;
      this.frameIndex = (this.frameIndex + 1) % anim.frames;
    }
  }

  /**
   * Get the current frame info for rendering.
   * @returns {{ sheetKey: string, frameIndex: number }}
   */
  getCurrentFrame() {
    const anim = this.config[this.currentAnim];
    if (!anim) return { sheetKey: null, frameIndex: 0 };
    return { sheetKey: anim.sheet, frameIndex: this.frameIndex };
  }

  /** Reset to idle frame 0. */
  reset() {
    this.currentAnim = 'idle';
    this.frameIndex = 0;
    this.elapsed = 0;
  }
}

export { AnimationController };
