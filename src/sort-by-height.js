const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
// extract all numbers from the input array
const nums = arr.filter(num => num !== -1).sort((a, b) => a - b);

// replace non-negative integers with next smallest number from sorted array
return arr.map(num => num === -1 ? -1 : nums.shift());
}

module.exports = {
  sortByHeight
};
