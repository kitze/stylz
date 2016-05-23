/** @module Color */

import Color from 'color';

/**
 * @description Returns a random hex color
 */
export const randomColor = () => '#' + ('00000' + (Math.random() * (1 << 24) | 0).toString(16)).slice(-6)

/**
 * @description Convert a string into a Color object, blacken it by an amount and return it as a hex string
 * @param {String} color
 * @param {number} amount
 * @return {String}
 */
export const darken = (color, amount) => Color(color).blacken(amount).hexString();

/**
 * @description Convert a string into a Color object, opacify it by an amount and return it as a hex string
 * @param {String} color
 * @param {number} alpha
 * @return {String}
 */
export const opacify = (color, alpha) => Color(color).alpha(alpha).rgbString();