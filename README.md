# arithmetic
[![Build Status](https://travis-ci.org/bsiddiqui/arithmetic.svg?branch=master)](https://travis-ci.org/bsiddiqui/arithmetic) [![Code Climate](https://codeclimate.com/github/bsiddiqui/arithmetic/badges/gpa.svg)](https://codeclimate.com/github/bsiddiqui/arithmetic) [![Version](https://badge.fury.io/js/arithmetic.svg)](http://badge.fury.io/js/arithmetic) [![Downloads](http://img.shields.io/npm/dm/arithmetic.svg)](https://www.npmjs.com/package/arithmetic)

Summm safely adds numbers in Javascript by ensuring the values are valid numbers and typecasting them prior to evaluation. This ensures that you actually add numbers instead of concating them.

## Install
``
$ npm install --save summm
``

## Usage
```js
var sum = require('summm')

sum(4, 2)
// => 6

sum('4', 2)
// => 6

sum([4, 2, 1])
// => 7
```

## API

#### `sum(numbers)` -> `number`

##### numbers
*Required* <br>
Type: `number` \ `array of numbers`

The numbers you'd like to get the sum of. Can be an array of numbers or each number provided as an argument.
