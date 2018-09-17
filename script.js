/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";

// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) vowelsCount++;
// }

for (let s of str) {
  if (vowels.includes(s)) vowelsCount++; // ES2016 (ES7) syntax
}

console.log(vowelsCount);
// 8
