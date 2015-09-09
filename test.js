'use strict'

var test = require('tape')
var sum = require('./')

test(function (t) {
  t.equal(sum('2', 1), 3)
  t.equal(sum(['2', 1]), 3)
  t.equal(sum(['2', 1, 4]), 7)
  t.equal(sum(2, 1, 4), 7)
  t.equal(sum(2, -4), -2)
  t.end()
})
