const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let result = [];
  let discardNext = false;
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      discardNext = true;
      i++;
    } else if (arr[i] === '--discard-prev') {
      if (result.length > 0 && !discardNext) {
        result.pop();
      }
      discardNext = false;
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        result.push(arr[i+1]);
        result.push(arr[i+1]);
      }
      discardNext = false;
      i++;
    } else if (arr[i] === '--double-prev') {
      if (i > 0 && !discardNext) {
        result.push(arr[i-1]);
      }
      discardNext = false;
    } else {
      result.push(arr[i]);
      discardNext = false;
    }
  }

  return result;
}

let a = [1, 2, 3, '--double-next', 4, 5];
console.log(transform(a));
module.exports = {
  transform
};
