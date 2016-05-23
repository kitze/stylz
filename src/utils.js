/**
 * @description Checks if the parameter is as tring
 * @param string
 */
export const isString = string => typeof string === 'string' || string instanceof String;

/**
 * @description If the size is an integer it converts it to a string with 'px' at the end
 * @param size
 */
export const toPx = size => isString(size) ? size : `${size}px`;

/**
 * @description If the size is a string it removes the 'px' and converts it to an integer
 * @param size
 */
export const toInt = size => !isString(size) ? size : parseInt(size.split('px')[0])