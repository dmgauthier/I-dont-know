class Human {
  constructor() {
    this.brain = 1;
    this.legs = 2;
    this.arms = 2;
    this.eyes = 2;
    this.ears = 2;
    this.mouth = 1;
    this.nose = 1;
    this.bones = 206;
  }
  walk() {
    console.log("Walking...", `using ${this.legs} legs`);
  }
  talk() {
    console.log("Talking...", `using ${this.mouth} mouth`);
  }
  see() {
    console.log("Seeing...", `using ${this.eyes} eyes`);
  }
  hear() {
    console.log("Hearing...", `using ${this.ears} ears`);
  }
  smell() {
    console.log("Smelling...", `using ${this.nose} nose`);
  }
  eat() {
    console.log("Eating...", `using ${this.mouth} mouth`);
  }
  sleep() {
    console.log("Sleeping...", `using ${this.eyes} eyes`);
  }
  think() {
    console.log("Thinking...", `using ${this.brain} brain`);
  }
}

class Person extends Human {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
  introduce() {
    super.talk();
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
  listenToSomeone(person) {
    super.hear();
    console.log(`${this.name} is listening to`, person.name);
  }
}

const danny = new Person("Danny Gauthier", 40);
const maude = new Person("Maude Desroches", 38);
danny.introduce(); // Hello, my name is Danny Gauthier and I am 40 years old.
maude.listenToSomeone(danny); // Listening to Danny Gauthier
