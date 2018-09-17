/* CHALLENGE 19 - Iterate over Object

Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/

"use strict";

var nums = {
  a: 10,
  b: 20,
  c: "string",
  d: 12
};

// Write code here
function sumObjectValues(obj) {
  let total = 0;
  for (let k in obj) {
    if (
      typeof obj[k] === "number" &&
      obj.hasOwnProperty(k)
    )
      total += obj[k];
  }
  return total;
}

console.log(sumObjectValues(nums));
//42
