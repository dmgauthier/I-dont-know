"use strict";

/**
 * Assignments and references
 * Go check the functions.js, primitives.js and objects.js files first.
 */

// Primitives are assigned by value
var one = 1;
var helloWorld = "Hello, World!";
var primNull = null;
var primUndefined = undefined;
var boolean = true;

console.log(one === 1); // true
console.log(helloWorld === "Hello, World!"); // true
console.log(primNull === null); // true
console.log(primUndefined === undefined); // true
console.log(boolean === true); // true

// Objects are assigned by reference
var numberArray = [1, 2, 3, 4, 5];
var stringArray = ["Hello", "World"];
var objectArray = [{ key: "value" }, { key: "value" }];
var mixedArray = [1, "Hello", { key: "value" }];
var object = { hello: "hello", world: "world" };
var functionObject = function () {
  return "Hello, World!";
};

console.log(numberArray === [1, 2, 3, 4, 5]); // false
console.log(stringArray === ["Hello", "World"]); // false
console.log(objectArray === [{ key: "value" }, { key: "value" }]); // false
console.log(mixedArray === [1, "Hello", { key: "value" }]); // false
console.log(object === { hello: "hello", world: "world" }); // false
console.log(
  functionObject ===
    function () {
      return "Hello, World!";
    }
); // false

var numberArrayReference = numberArray;
console.log(numberArrayReference === numberArray); // true
