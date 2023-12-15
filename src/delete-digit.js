const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strArr = n.toString().split('');
  const digitArr = [];

  for (let i = 0; i < strArr.length; i += 1) {
    const copyArr = [...strArr];
    copyArr.splice(i, 1);
    digitArr.push(copyArr.join(''));
  }

  return digitArr.map(el => +el).sort((a,b) => b-a)[0];
}

module.exports = {
  deleteDigit
};
