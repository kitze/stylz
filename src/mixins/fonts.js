/** @module Fonts */

import {toPx} from '../utils';

/**
 * @description It returns an object with fontSize and lineHeight properties with the same size
 * @param value
 * @returns {{fontSize: *, lineHeight: *}}
 */
export const fontSizeHeight = (size, lineHeight = size) => {
  return {
    fontSize: size,
    lineHeight: toPx(lineHeight)
  }
};

/**
 * @description Returns an object with font-size, font-weight, and line-height
 * @param {number} fontSize
 * @param {number} fontWeight
 * @param {number} lineHeight
 */
export const fontStyle = (fontSize, fontWeight = 300, lineHeight = fontSize) => ({
  fontSize,
  fontWeight,
  lineHeight: toPx(lineHeight)
});