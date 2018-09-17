/* CHALLENGE 20 - Sum positive and negative numbers

Create a function sumPlusMinus() that takes array
and sums separately positive and negative numbers.

It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers
}
*/

"use strict";

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

function sumPlusMinus(arr) {
  let obj = {};
  nums.forEach(el => {
    if (el > 0) obj.plus = (obj.plus || 0) + el;
    else if (el < 0) obj.minus = (obj.minus || 0) + el;
  });
  return obj;
}

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}
