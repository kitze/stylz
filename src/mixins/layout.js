/**
 * @description Returns an object with a flex property and a flex basis of 100 divided by the number of columns
 * @param cols
 * @returns {{flex: string}}
 */
export const flexGrid = (cols = 1) => ({
  flex: `0 0 ${100 / cols}%`,
});