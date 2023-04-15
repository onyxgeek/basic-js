const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options = {}) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  let finalString = '';

  for (let i = 0; i < repeatTimes; i++) {
    let additionString = '';
    for (let j = 0; j < additionRepeatTimes; j++) {
      additionString += addition;
      if (j < additionRepeatTimes - 1) {
        additionString += additionSeparator;
      }
    }

    finalString += str + additionString;
    if (i < repeatTimes - 1) {
      finalString += separator;
    }
  }

  return finalString;
}


module.exports = {
  repeater
};
