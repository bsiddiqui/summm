'use strict'

var isNumeric = require('is-numeric')

module.exports = function summm (value1, value2) {
  if (!isNumeric(value1) || !isNumeric(value2)) {
    throw new Error('value1 and value2 must be a number')
  }

  return +value1 + +value2
}
