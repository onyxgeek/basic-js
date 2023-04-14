const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('@');
  let arrResult = arr[arr.length - 1];
  return arrResult;
}
let email = 'alololo@email.com';
let arr = email.split('@');
let arrResult = arr.slice(-1).join('');
console.log(arrResult)
module.exports = {
  getEmailDomain
};
