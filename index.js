'use strict'

var isNumeric = require('isnumeric')
var argsToArray = require('args-to-array')

module.exports = function sum (numbers) {
  numbers = Array.isArray(numbers) ? numbers : argsToArray(arguments)
  return numbers.reduce(function (previous, next) {
    if (!isNumeric(previous) || !isNumeric(next)) {
      throw new Error('All values must be numbers')
    } else {
      return (+previous) + (+next)
    }
  })
}
