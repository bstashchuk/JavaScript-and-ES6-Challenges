/* CHALLENGE 8 - Check presence of the function parameters
Throw Error when function square() is called
without arguments.

Create new function and use it as default parameter.
*/

'use strict';

function square(a = missingArg()) {
  console.log(a * a);
}

function missingArg() {
	throw new Error('No argumnents passed to square function');
}

square(10);
// 100

square();
// BEFORE: NaN
// AFTER: Uncaught Error: Function square requires
// an argument!