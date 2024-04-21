"use strict";

import createPerson from "./person.mjs";

const danny = createPerson("Danny Gauthier", 40);
const maude = createPerson("Maude Desroches", 38);
danny.introduce(); // Hello, my name is Danny Gauthier and I am 40 years old.
maude.listenToSomeone(danny); // Listening to Danny Gauthier
