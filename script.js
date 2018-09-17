/* CHALLENGE 18 - Classes

Rewrite code below using ES6 Classes
*/

"use strict";

var Fruit = function(title, price) {
  this.title = title;
  this.price = price;
};

Fruit.prototype.priceInfo = function() {
  return `Price of one ${this.title} is \
${this.price}$`;
};

var apple = new Fruit("Apple", 2);
console.log(apple.priceInfo());
// Price of one Apple is 2$

var orange = new Fruit("Orange", 3);
console.log(orange.priceInfo());
// Price of one Orange is 3$
