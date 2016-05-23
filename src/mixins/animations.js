/** @module Animations */

/**
 * Mixin for the transition property with some default animation values
 * @param {number} time
 * @param {String} property
 * @param {String} animation
 * @returns {{transition: string}}
 */
export const animate = (time = 250, property = "all", animation = "linear") => {
  return {
    transition: `${time}ms ${property} ${animation}`
  }
};