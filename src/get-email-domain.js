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
  const arr = [];
  for (let i = email.length - 1; i >= 0; i -= 1) {
    if (email[i] === '@') {
      break;
    }

    arr.push(email[i]);
  }

  return arr.reverse().join('');
}

module.exports = {
  getEmailDomain
};
