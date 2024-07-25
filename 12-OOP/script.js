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
