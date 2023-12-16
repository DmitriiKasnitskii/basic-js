const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = [];
  const obj = {};

  for (let i = 0; i < names.length; i += 1) {
    const curName = names[i];

    if (arr.includes(curName) && typeof obj[curName] !== "undefined") {
      arr.push(`${curName}(${obj[curName]})`);
      obj[curName] += 1;
    } else if (arr.includes(curName) && typeof obj[curName] === "undefined") {
      arr.push(`${curName}(1)`);
      obj[curName] = 1;
    } else {
      arr.push(curName);
      obj[curName] = 1;
    }
  }

  return arr;
}

module.exports = {
  renameFiles
};
