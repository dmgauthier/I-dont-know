"use strict";

import createHuman from "./human.mjs";

export default function createPerson(name, age) {
  const human = createHuman();

  function introduce() {
    human.talk();
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  }
  
  function listenToSomeone(person) {
    human.hear();
    console.log(`${name} is listening to`, person.name);
  }

  return {
    ...human,
    name,
    age,
    introduce,
    listenToSomeone,
  };
}
