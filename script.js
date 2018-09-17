/* CHALLENGE 17 - IIFE (Immediately Invoked Function Expression)

Complete IIFE that will expose following methods:
  greet() - It will take one argument and return greeting string
  changeGreeting() - It will change greeting string

Initial greeting string "Hey, that's" must be defined inside IIFE.
*/

"use strict";

var greeting = (() => {
  var greetingString = "Hey, that's";

  function greet(name) {
    return `${greetingString} ${name}`;
  }

  function changeGreeting(newGreeting) {
    greetingString = newGreeting;
  }

  return {
    greet,
    changeGreeting
  };
})();

console.log(greeting.greet("Bob"));
// Hey, that's Bob

console.log(
  greeting.changeGreeting("Good Morning from")
);
// undefined

console.log(greeting.greet("Emily"));
// Good Morning from Emily
