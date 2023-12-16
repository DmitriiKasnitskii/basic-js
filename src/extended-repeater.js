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
function repeater(str, options) {
  const { repeatTimes, separator: sep = '+', addition, additionRepeatTimes, additionSeparator: addSep = '|'} = options;

  const templateAddition = `${addition}${addSep}`.repeat(additionRepeatTimes-1) + `${typeof addition === 'undefined' ? '' : addition}`

  return `${str}${templateAddition}${sep}`.repeat(repeatTimes - 1) + `${str}${templateAddition}`;
}

module.exports = {
  repeater
};
