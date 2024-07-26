'use strict';

// 1
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate(increase) {
    this.speed += increase;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  brake(decrease) {
    this.speed -= decrease;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford);

console.log(ford.speedUS);

ford.accelerate(10);
ford.brake(20);

ford.speedUS = 50;
console.log(ford);
