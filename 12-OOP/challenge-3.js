'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function (increase) {
  this.speed += increase;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

// 1
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

// 2
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3
EV.prototype.accelerate = function () {
  this.charge--;
  this.speed += 20;
  console.log(`${this.make} going at ${this.speed} km/h, with charge of ${this.charge}%`);
};

// 4
const tesla = new EV('Tesla', 120, 23);

tesla.accelerate();
tesla.brake();

tesla.chargeBattery(90);

tesla.accelerate();
tesla.brake();

console.log(tesla);
