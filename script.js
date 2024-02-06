// Parent class Car
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    return `${this.make} ${this.model} is driving.`;
  }
}

// Child class Motorbike
class Motorbike extends Car {
  constructor(make, model, numberOfWheels) {
    super(make, model);
    this.numberOfWheels = numberOfWheels;
  }

  display() {
    return `This ${this.make} ${this.model} has ${this.numberOfWheels} wheels.`;
  }
}

// Parent class Animal
class Animal {
  constructor(species) {
    this.species = species;
  }

  sound() {
    return `${this.species} makes a sound.`;
  }
}

// Child class Fish
class Fish extends Animal {
  constructor(species, waterType) {
    super(species);
    this.waterType = waterType;
  }

  habitat() {
    return `${this.species} lives in ${this.waterType} water.`;
  }
}

// Parent class Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

// Child class Profession
class Profession extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }

  introduce() {
    return `I am ${this.name}, ${this.age} years old, working as a ${this.position}.`;
  }
}

// Creating objects
const motorbike1 = new Motorbike("Honda", "CBR500R", 2);
const motorbike2 = new Motorbike("Yamaha", "MT-07", 2);
const motorbike3 = new Motorbike("Kawasaki", "Ninja 650", 2);

const fish1 = new Fish("Goldfish", "fresh");
const fish2 = new Fish("Salmon", "salt");
const fish3 = new Fish("Clownfish", "salt");

const person1 = new Profession("John", 30, "software engineer");
const person2 = new Profession("Alice", 25, "teacher");
const person3 = new Profession("Bob", 40, "doctor");

// Displaying results in the browser
document.body.innerHTML = `
<h2>Motorbikes:</h2>
<p>${motorbike1.drive()}</p>
<p>${motorbike1.display()}</p>
<p>${motorbike2.drive()}</p>
<p>${motorbike2.display()}</p>
<p>${motorbike3.drive()}</p>
<p>${motorbike3.display()}</p>

<h2>Fish:</h2>
<p>${fish1.sound()}</p>
<p>${fish1.habitat()}</p>
<p>${fish2.sound()}</p>
<p>${fish2.habitat()}</p>
<p>${fish3.sound()}</p>
<p>${fish3.habitat()}</p>

<h2>People:</h2>
<p>${person1.greet()}</p>
<p>${person1.introduce()}</p>
<p>${person2.greet()}</p>
<p>${person2.introduce()}</p>
<p>${person3.greet()}</p>
<p>${person3.introduce()}</p>
`;