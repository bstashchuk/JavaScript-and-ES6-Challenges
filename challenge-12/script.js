/* CHALLENGE 12 - Copy Array
Create copy of the a array.
*/

'use strict';

let a = [1, 2, 3];

let b;

b = a.slice();

b.push('newElement');

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]