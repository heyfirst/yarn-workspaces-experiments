const plus = require('@packages/plus');
const minus = require('@packages/minus');
const multiply = require('@packages/multiply');
const divide = require('@packages/divide');

console.log(plus.apply(1, 2));
console.log(plus.apply2(1, 2));
console.log(minus.apply(1, 2));
console.log(multiply.apply(1, 2));
console.log(divide.apply(1, 2));
