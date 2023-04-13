const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {//Here I used function declaration
  let searchChar = '^^';//
  let count = 0;
  for(let i = 0; i < matrix.length; i++){
      if(Array.isArray(matrix[i])){//Here I checked if the there is more level of nested arrays
        count += countCats(matrix[i], searchChar);//Here is a recursion with reclaing function by each time when there is array when not count++
      }
      else if (matrix[i] === searchChar){//Here I checked if the current element is the '^^' then count++
        count++;
      }
  }
  return count;//return the result
}

module.exports = {
  countCats
};
