"use strict";

function add(a, b) {
  return a + b;
}

var assignedAdd = function (a, b) {
  return a + b;
};

const anonymousArrowAdd = (a, b) => a + b; // return is implicit

console.log(`Using add(1, 2) gives: ${add(1, 2)}`); // 3
console.log('typeof add:', typeof add); // function
