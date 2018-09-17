/* CHALLENGE 8 - Check presence of the function parameters

Throw Error when function square() is called
without arguments.

Create new function and use it as default parameter.
*/

"use strict";

function missingArg() {
  throw new Error("Function square requires an argument!");
}

function square(a = missingArg()) {
  console.log(a * a);
}

square(10);
// 100

square();
// BEFORE: NaN
// AFTER: Uncaught Error: Function square requires
// an argument!
