/* CHALLENGE 6 - Arrow Functions
Use arrow functions instead of functions
where possible.
*/

'use strict';

const mult = (a, b) => a * b;

setTimeout(() => {
  console.log(mult(5, 10));
}, 1000);
// 50