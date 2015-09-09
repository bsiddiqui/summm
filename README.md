# summm
[![Build Status](https://travis-ci.org/bsiddiqui/summm.svg?branch=master)](https://travis-ci.org/bsiddiqui/summm) [![Code Climate](https://codeclimate.com/github/bsiddiqui/summm/badges/gpa.svg)](https://codeclimate.com/github/bsiddiqui/summm) [![Version](https://badge.fury.io/js/summm.svg)](http://badge.fury.io/js/summm) [![Downloads](http://img.shields.io/npm/dm/summm.svg)](https://www.npmjs.com/package/summm)

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
