/* CHALLENGE 5 - Ternary Operator

Change contents of the isNumber function
using ternary operator.
*/

"use strict";

function isNumber(a) {
  return typeof a === "number" ? "That's number" : "That's not a number";
}

console.log(isNumber(10));
// That's number

console.log(isNumber("Hey there"));
// That's not a number

console.log(isNumber(true));
// That's not a number
