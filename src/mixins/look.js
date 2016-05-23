/** @module Look */

import colors from '../colors';
import {toPx} from '../utils';

/**
 * @description Adds an inside border of 1px
 * @param {number} size
 * @param {String} color
 */
export const bottomInsideBorder = (size, color) => ({
  boxShadow: `inset 0px -${size}px 0px ${color}`
});

/**
 * @description Makes the element look as a circle
 * @param {number} size
 * */
export const circle = (size) => ({
  borderRadius: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  ... size && {
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    lineHeight: toPx(size)
  }
});

/**
 * @description Makes the element look like a link
 * @param {String} color
 * @param {boolean} underline
 */
export const customLink = (color, underline = false) => ({
  color,
  cursor: 'pointer',
  paddingBottom: 3,
  borderBottom: `1px solid ${colors.transparent}`,
  ... underline === true && {
    ':hover': {
      borderBottom: `1px solid ${color}`
    }
  }
});

/**
 * @description Adds a solid border
 * @param {String} color
 * @param {number} size
 */
export const border = (color, size = 1) => ({
  border: `${size}px solid ${color}`
});

/**
 * @description Shows or hides the element depending on the value
 * @param val
 */
export const show = val => ({
  display: val === true ? 'inline-block' : 'none'
});