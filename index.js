'use strict'

module.exports = function summm (value1, value2) {
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('value1 and value2 must be a number')
  }

  return +value1 + +value2
}
