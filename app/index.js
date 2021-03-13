const plus = require('@heyfirst/plus');
const minus = require('@heyfirst/minus');
const multiply = require('@heyfirst/multiply');
const divide = require('@heyfirst/divide');

console.log(plus.apply(1, 2));
console.log(plus.apply2(1, 2));
console.log(minus.apply(1, 2));
console.log(multiply.apply(1, 2));
console.log(divide.apply(1, 2));
