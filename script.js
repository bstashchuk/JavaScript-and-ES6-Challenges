/* CHALLENGE 7 - Default parameters

Answer following question:
1. Why on the line 14 we can't simply use following statement:
mult = mult || 2;

Set default value of the mult parameter
in the multiplyBy() function.
*/

"use strict";

function multiplyBy(a, mult) {
  mult = mult !== undefined ? mult : 2;
  console.log(a * mult);
}

multiplyBy(2);
// 4

multiplyBy(2, undefined);
// 4

multiplyBy(2, 0);
// 0

multiplyBy(5, 10);
// 50
