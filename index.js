const _ = require('underscore');

/**
 * Deep clone an object.
 * @param {any} obj - The object to be cloned.
 * @returns {any} - The cloned object.
 */
function deepClone(obj) {
  return _.cloneDeep(obj);
}

/**
 * Capitalize the first letter of a string.
 * @param {string} str - The string to be capitalized.
 * @returns {string} - The capitalized string.
 */
function capitalize(str) {
  return _.capitalize(str);
}

/**
 * Check if a number is even.
 * @param {number} num - The number to be checked.
 * @returns {boolean} - True if the number is even, otherwise false.
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * Generate a random number within a specified range.
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (exclusive).
 * @returns {number} - The random number within the specified range.
 */
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = { deepClone, capitalize, isEven, randomInRange };
