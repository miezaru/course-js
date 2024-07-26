'use strict';

// 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2
Car.prototype.accelerate = function (increase) {
  this.speed += increase;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

// 3
Car.prototype.brake = function (decrease) {
  this.speed -= decrease;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

// 4
const bmw = new Car('BMW', 120);
const mersedes = new Car('Mersedes', 95);

bmw.accelerate(10);
bmw.accelerate(30);
bmw.brake(10);
bmw.brake(40);
bmw.accelerate(20);
bmw.brake(20);

mersedes.brake(40);
mersedes.accelerate(10);
mersedes.accelerate(30);
mersedes.brake(10);
mersedes.accelerate(20);
mersedes.brake(20);
