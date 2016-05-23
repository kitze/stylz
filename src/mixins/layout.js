/** @module Images */

/**
 * @description Returns an object with a flex property and a flex basis of 100 divided by the number of columns
 * @param cols
 * @returns {{flex: string}}
 */
export const flexGrid = (cols = 1) => ({
  flex: `0 0 ${100 / cols}%`,
});

/**
 * @description Adds flexBasis and maxWidth to the element, depending on the number parameter
 * @param number
 * @returns {{flexBasis: string, maxWidth: string}}
 */
export const flexSize = (number = 1) => {
  const res = 100 / number;
  const percent = `${res}%`;

  return {
    flexBasis: percent,
    maxWidth: percent
  }
};