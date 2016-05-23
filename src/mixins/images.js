/** @module Images */

/** @description Retruns an object with a backgroundImage and backgroundSize property
 * @param {String} url
 * @param {String} cover
 * @return {{backgroundImage: string}}
 */
export const backgroundImg = (url, cover) => ({
  backgroundImage: `url("${url}")`,
  ... cover === true && {backgroundSize: 'cover'}
});