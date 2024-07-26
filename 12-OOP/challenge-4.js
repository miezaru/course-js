'strict mode';

// 1
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate(increase) {
    this.speed += increase;
    console.log(`${this.make} going at ${this.speed} km/h`);

    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);

    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  // 2
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;

    return this;
  }

  accelerate() {
    this.#charge--;
    this.speed += 20;
    console.log(`${this.make} going at ${this.speed} km/h, with charge of ${this.#charge}%`);

    return this;
  }
}

const tesla = new EVCl('Tesla', 120, 23);
const rivian = new EVCl('Rivian', 100, 25);

// 3
tesla.accelerate().chargeBattery(60).accelerate().brake().chargeBattery(80).accelerate().brake();

console.log(rivian.speedUS);
rivian.accelerate().chargeBattery(33).accelerate().brake().chargeBattery(50).accelerate().brake();
console.log(rivian.speedUS);
