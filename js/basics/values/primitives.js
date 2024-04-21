"use strict";

var one = 1;
var string = "Hello, World!";
var primNull = null;
var primUndefined = undefined;
var boolean = true;

console.log('Primitive values and their types:');
console.log(`value: ${one} -- type: ${typeof one}`);
console.log(`value: ${string} -- type: ${typeof string}`);
console.log(`value: ${primNull} -- type: ${typeof primNull} // This is a bug !` );
console.log(`value: ${primUndefined} -- type: ${typeof primUndefined}`);
console.log(`value: ${boolean} -- type: ${typeof boolean}`);
