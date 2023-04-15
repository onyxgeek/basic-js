const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {//Here I did declare the function
  let num = n.toString().split('');//Here I turned number into array
  let sum = 0;//Here I initialized the variabile for the sum with 0
  for (let i = 0; i < num.length; i++) { //Here run through array
    sum += +num[i];//Here I sum each element
  }
  if (sum > 9) { //Here I am going to the last element if the sum > 9 with recursion
    return getSumOfDigits(sum);
  }
  return sum;
}




console.log(getSumOfDigits(91))
module.exports = {
  getSumOfDigits
};
