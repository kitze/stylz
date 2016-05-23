/** @module Fonts */

import {toPx} from '../utils';

/**
 * @description It returns an object with fontSize and lineHeight properties with the same size
 * @param value
 * @returns {{fontSize: *, lineHeight: *}}
 */
export const sizeHeight = value => {
  return {
    fontSize: value,
    lineHeight: toPx(value)
  }
};

/**
 * @description Returns an object with font-size, font-weight, and line-height
 * @param {number} fontSize
 * @param {number} fontWeight
 * @param {number} lineHeight
 */
export const sizeWeightHeight = (fontSize, fontWeight = 300, lineHeight = fontSize) => ({
  fontSize,
  fontWeight,
  lineHeight: toPx(lineHeight)
});
