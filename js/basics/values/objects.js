"use strict";

var numberArray = [1, 2, 3, 4, 5];
var stringArray = ["Hello", "World"];
var objectArray = [{ key: "value" }, { key: "value" }];
var mixedArray = [1, "Hello", { key: "value" }];

var object = { hello: "hello", world: "world" };
var nestedObject = { key: { key: { key: "value" } } };
var mixedObject = { key: "value", key2: 2, key3: { key: "value" } };

console.log("Object values and their types:");
console.log(`array: ${numberArray} -- type: ${typeof numberArray}`);
console.log(`object: ${object} -- type: ${typeof object}`);
