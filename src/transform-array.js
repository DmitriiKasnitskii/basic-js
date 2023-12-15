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

const operations = [
  '--discard-next',
  '--discard-prev',
  '--double-next',
  '--double-prev',
];

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    const cur = arr[i];

    if (!operations.includes(cur)) {
      newArr.push(cur);
      continue;
    }
    if (cur === '--discard-next') {
      newArr.push(cur);
      i += 1;
    }
    if (cur === '--discard-prev') {
      const prev = newArr[newArr.length - 1];
      if (typeof prev === 'number') {
        newArr.pop();
        newArr.push(cur);
      }
    }
    if (cur === '--double-next') {
      const next = arr[i + 1];
      newArr.push(cur);
      if (typeof next === 'number') {
        newArr.push(next);
      }
    }
    if (cur === '--double-prev') {
      const prev = newArr[newArr.length - 1];
      if (typeof prev === 'number') {
        newArr.push(prev);
        newArr.push(cur);
      }
    }
  }

  return newArr.filter(el => !operations.includes(el));
}

module.exports = {
  transform
};
