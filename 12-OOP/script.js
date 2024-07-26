'use strict';

const lectures = [
  'What is Object-Oriented programming',
  'OOP in JavaScript',
  'Constructor functions and the new Operator',
  'Prototypes',
  'Prototypal inheritance and the prototype chain',
  'Prototypal inheritance on built-in objects',
  'ES6 classes',
  'Setters and getters',
  'Static methods',
  'Object.create',
  'Inheritance between "Classes": constructor functions',
  'Inheritance between "Classes": ES6 classes',
  'Inheritance between "Classes": Object.create',
  'Another class example',
  'Encapsulation: protected properties and methods',
  'Encapsulation: private class fields and methods',
  'Chaining methods',
  'ES6 classes summary',
];

const separator = val => {
  if (typeof val === 'number')
    return console.log(`\n|----------[ ${lectures[val]} ]----------|\n\n`);
  if (typeof val === 'string') return console.log(`----- ${val} -----`);
};

//~ What is Object-Oriented programming?

//_ OOP
/*
- Object-oriented programming (OOP) is a programming paradigm based on the concept of objects;
  - paradigm - style of code, "how" we write and oraganize code;
- We use objects to model (describe) real-world or abstract features;
  - real-word - e.g. user or todo list item;
  - abstract - e.g. HTML component or data structure;
- Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block;
*/

const user = {
  //_ Data:
  user: 'jonas',
  password: 'dk23s',

  //_ Behavior:
  login(password) {
    // Login logic
  },

  sendMessage(str) {
    // Sending messange logic
  },
};

/*
- In OOP, objects are self-contained pieces/blocks of code;
- Objects are building blocks of applications, and interact with one another;
- Interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object;
- OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain (avoid "spaghetti code").
*/

//_ Class - like a blueprint from which we can create new objects

//_ The 4 fundametal OOP principles

/*
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism
*/

//_ Abstraction
/*
  Abstraction: ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation.
*/

//_ Encapsulation
/*
  Encapsulation: keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface (API).
*/

//_ Inheritance
/*
  Inheritance: making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.
*/

//_ Polymorphism
/*
  Polymorphism: a child class can overwrite a method it inherited from a parent class [it's more complex than that, but enought for our purposes].
*/

//~ OOP in JavaScript

//_ "Classical OOP": Classes
/*
  Class -(instantiation)-> Instance
  - Objects (instances) are instantiated from a class, which functions like blueprint;
  - Behavior (methods) is copied from class to all instances.
*/

//_ OOP in JS: Prototypes

/*
  Prototype (contain methods) <-(prototypal inheritance delegation)- Object (can access methods)

  - Objects (instances) are created by referencing a prototype object, which is a special object that contains properties and methods;
  - Objects are linked to a prototype object;
  - Prototypal inheritance: the prototype contains methods (behavior) that are accessible to all objects linked to that prototype;
  - Behavior is delegated to the linked prototype object.
*/

//_ Example array:
const num = [1, 2, 3];
num.map(n => n * 2);

// Array.prototype.map
/*
  - Array prototype is the prototype of all array objects we create in JavaScript
  - Therefore, all arrays have access to the map method
*/

//_ "How do we actually create prototypes? And how do we link objects to prototypes? How can we create new objects, without having classes?"

//_(1) Constructor functions
/*
  - Technique to create objects from a function;
  - This is how built-in objects like Arrays, Maps, Sets are actually implemented
*/

//_(2) ES6 Classes
/*
  - Modern alternative to constuctor function syntax;
  - "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions;
  - ES6 classes do NOT behave like classes in "classical OOP"
*/

//_(3) Object.create
/*
  - The easiest and most straightforward way of linking an object to a prototype object.
*/

//~ Constructor functions and the new Operator
separator(2);

const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method in the constructor function, create methods in the prototype
  /*
 this.calcAge = function () {
    return new Date().getFullYear() - this.birthYear;
  }; */
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

/*
  1. New {} is created
  2. function is called, this = {}
  3. {} is linked to prototype (Person.prototype)
  4. {} is returned (if no return statement is given, it returns the newly created object)
*/

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

//~ Prototypes
separator(3);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype = Person.prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

//~ Prototypal inheritance on built-in objects
separator(5);

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

separator('arrays prototype');
const arr = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8]; // [] === new Array
console.log(arr);
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// bad idea to implement new methods directly in built-in array prototype (javascript update and add this method with the same name but another implementation, and if we working in a big team and every programmer name this method not the same as u)
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

//~ ES6 classes
separator(6);

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet = function () {
    console.log(`Hey ${this.fullName}`);
  };

  //_ Getter
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  //_ Setter
  // Set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //_ Static methods in classes
  // Static methods NOT added to .prototype property
  static hey() {
    console.log('Hey there 🙋‍♂️');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1997);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

/*
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
}; */
jessica.greet();

/*
  1. Classes are NOT hoisted (classes declarations too)
  2. Classes are first-class citizens
  3. Classes are executed in 'stric mode' (even if we not activated it in document, classes are always executed in 'strict mode')
*/

//_ Getter jessica
console.log(jessica.age);

//~ Setters and getters
separator(7);

const walter = new PersonCl('Walter White', 1965);

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

//_ Access getters
console.log(account.latest);

//_ Access setters
account.latest = 50;
console.log(account.movements);

//~ Static methods
separator(8);

// Array.from() and Number.parseFloat() - static methods attached to Array and Number (in their namespace)

Person.hey = function () {
  console.log('Hey there 🙋‍♂️');
  console.log(this);
};

Person.hey();
// jonas.hey(); // not in prototype

PersonCl.hey();

//~ Object.create
separator(9);

const PersonProto = {
  calcAge2() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven);
steven.calcAge2();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1984);
console.log(sarah);

//~ Inheritance between "classes": constructor functions
separator(10);
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
}; */

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//_ Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2012, 'Computer Science');

console.log(mike);
mike.introduce();

mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(mike);
