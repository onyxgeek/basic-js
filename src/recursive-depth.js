const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1; // initialize count to 1 to account for the current array
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        const nestedDepth = this.calculateDepth(arr[i]); // recursively calculate depth of nested array
        count = Math.max(count, nestedDepth + 1); // update count to the maximum depth
      }
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};
