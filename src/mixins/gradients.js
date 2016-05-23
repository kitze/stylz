/** @module Gradients */

/**
 * @description Returns an object with a background property with a top to bottom gradient
 * @param {String} fromColor
 * @param {String} toColor
 * @returns {{background: string}}
 */
export const topToBottom = (fromColor, toColor) => ({
  background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`
});