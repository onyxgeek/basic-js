const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) { // Here I declare the function
  let count = 1; //Here I declare the counter of an char which is by default 1
  let result = []; // here is the final array with result

  for (let i = 0; i < str.length; i++) { //Here I do run the loop
    if (str[i] === str[i + 1]) { //Check if the current element is the same as the next one
      count++;//Increment the value
    } else {
      result.push([count, str[i]]);//Here if it is not push value into result array
      count = 1;//Here I do redeclare the value by default
    }
  }

  return result.map((row) => row.join('')).join('').replace(/1/g, '');

  //1 - map - going through each element of array because this is nested array and apply to each element which is a nested array method
  //.join()
  //2 - join('') turn the main array into string
  //3 - replace() replace all the value of 1
}



let a = 'aabbbc';
console.log(encodeLine(a));

module.exports = {
  encodeLine
};
