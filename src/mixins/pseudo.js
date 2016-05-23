/** @module Pseudo */

import {animate} from './animations';
import {darken} from './color';

/**
 * @description Returns an object that makes the element interactive on click, hover, etc.
 * @param {String} color
 * @param {String | boolean} [darkenColor]
 * @param {boolean} [useBackgroundColor]
 * @param {boolean | String} [animation]
 * @param {boolean | String} [active]
 */
export const hoverAndClick = (color, darkenColor = darken(color, 0.7), useBackgroundColor = false, animation, active) => {

  const property = useBackgroundColor === true ? 'backgroundColor' : 'color';

  return {
    cursor: 'pointer',
    ...animation === true ? animate() : (animation === undefined || animation === false ? {} : {transition: animation}),
    ...color !== undefined && {[property]: color},
    ':hover': {[property]: darkenColor},
    ...active !== undefined && {
      ':active': {
        [property]: active === true ? darken((darkenColor), 0.8) : active
      }
    }
  }
};

/**
 * @description Resets the backgroundColor when default, hovered and active
 * @param {String | *} [color]
 * @param {String | *} [property]
 */
export const resetPseudoProperties = (color = '#000000', property = 'backgroundColor') => ({
  [property]: color,
  ':hover': {
    [property]: color,
  },
  ':active': {
    [property]: color,
  },
  cursor: 'default'
});