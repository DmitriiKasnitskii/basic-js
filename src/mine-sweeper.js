const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j += 1) {
      const cur = matrix[i][j];

      if (cur) {
        result[i][j] = 1;
        continue;
      }

      const up = matrix[i-1] && matrix[i-1][j] ? 1 : 0;
      const down = matrix[i+1] && matrix[i+1][j] ? 1 : 0;
      const left = matrix[i][j-1] ? 1 : 0;
      const right = matrix[i][j+1] ? 1 : 0;

      const dUpLeft = matrix[i-1] && matrix[i-1][j-1] ? 1 : 0;
      const dUpRight = matrix[i-1] && matrix[i-1][j+1] ? 1 : 0;
      const dDownLeft = matrix[i+1] && matrix[i+1][j-1] ? 1 : 0;
      const dDownRight = matrix[i+1] && matrix[i+1][j+1] ? 1 : 0;

      result[i][j] = up + down + left + right + dUpLeft + dUpRight + dDownLeft + dDownRight;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
