/** @module Position */

/**
 * @description Returns an object with properties: position absolute and top,right, bottom, left, depending of the value
 * @param {number} top
 * @param {number} right
 * @param {number} left
 * @param {number} bottom
 */
export const absolute = (top = 0, right = 0, bottom = 0, left = 0) => ({
  position: 'absolute',
  top,
  right,
  bottom,
  left
});

/**
 * @description Returns an object with position properties depending on the side that's provided
 * @param {number} offsetPx
 * @param {number} side
 */
export const cornerOffset = (offsetPx = 0, side = 1) => ({
  ...side === 1 && {
    top: offsetPx,
    left: offsetPx
  },
  ...side === 2 && {
    top: offsetPx,
    right: offsetPx
  },
  ...side === 3 && {
    bottom: offsetPx,
    left: offsetPx
  },
  ...side === 4 && {
    bottom: offsetPx,
    right: offsetPx
  }
});