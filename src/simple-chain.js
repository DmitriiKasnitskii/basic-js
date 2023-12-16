const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof this.chain[position - 1] === 'undefined') {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';

    for (let i = 0; i < this.chain.length; i += 1) {
      str += (`( ${this.chain[i]} )`) + (i === this.getLength() - 1 ? '' : '~~')
    }

    this.chain = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
