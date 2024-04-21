"use strict";

export default function createHuman() {
  var brain = 1;
  var legs = 2;
  var arms = 2;
  var eyes = 2;
  var ears = 2;
  var mouth = 1;
  var nose = 1;
  var bones = 206;

  function walk() {
    console.log("Walking...", `using ${legs} legs`);
  }
  function talk() {
    console.log("Talking...", `using ${mouth} mouth`);
  }
  function see() {
    console.log("Seeing...", `using ${eyes} eyes`);
  }
  function hear() {
    console.log("Hearing...", `using ${ears} ears`);
  }
  function smell() {
    console.log("Smelling...", `using ${nose} nose`);
  }
  function eat() {
    console.log("Eating...", `using ${mouth} mouth`);
  }
  function sleep() {
    console.log("Sleeping...", `using ${eyes} eyes`);
  }
  function think() {
    console.log("Thinking...", `using ${brain} brain`);
  }
  return {
    walk,
    talk,
    see,
    hear,
    smell,
    eat,
    sleep,
    think,
  };
}
