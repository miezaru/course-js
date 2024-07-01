'use strict'

console.log(this)

//_ Simply function
const calcAge = function (birthYear) {
  const age = new Date().getFullYear() - birthYear
  console.log(this) // with 'strict mode' = undefined, w/o 'strict mode' = window

  return age
}
calcAge(1997)

//_ Arrow function
const calcAgeArrow = birthYear => {
  const age = new Date().getFullYear() - birthYear
  console.log(this) // window because arrow function does not have own this keyword, but using lexical this keyword

  return age
}
calcAgeArrow(1997)

//_ Method function
const artem = {
  year: 1997,
  calcAge: function () {
    console.log(this) // artem object
    this.age = new Date().getFullYear() - this.year
    console.log(this.age)
  },
}

artem.calcAge() // this is points to artem object because artem object IS CALLED a method
console.log(artem)

const nina = {
  year: 2017,
}

nina.calcAge = artem.calcAge
nina.calcAge() // this is points to nina object because nina object IS CALLED a method
console.log(nina.age, nina)

const f = artem.calcAge // save function to a variable
// f() // not attached to owner

// var firstName = 'Darline'

const henry = {
  firstName: 'Henry',
  year: 1994,
  calcAge: function () {
    console.log(this)
    this.age = new Date().getFullYear() - this.year

    //_ How functions in functions using this keyword
    /* Solution 1
    const self = this // self or that
    const isMillenial = function () {
      console.log(self) // works
      console.log(self.year >= 1981 && self.year <= 1996)
      // console.log(this) // undefined
      // console.log(this.year >= 1981 && this.year <= 1996)
    }
    isMillenial() */

    // Solution 2
    const isMillenial = () => {
      console.log(this)
      console.log(this.year >= 1981 && this.year <= 1996)

      const isGood = () => {
        console.log(`${this.firstName} is good person!`)
      }
      isGood()
    }
    isMillenial()
  },

  greet: () => console.log(`Hey ${this.firstName}`),
}
// object is not a object scope, but object literal (global scope)

henry.greet() // using variable - Darline || undefined
console.log(this.firstName) // using variable - Darline || underfined
henry.calcAge()

// Not use arrow functions in objects

//_ Arguments keyword (only available in regular functions)

const addExprs = function (a, b) {
  console.log(arguments) // available in function expressions and declarations (not arrow functions)
  console.log(...arguments)
  // return a + b
  return [...arguments].reduce((acc, curr) => {
    return acc + curr
  }, 0)
}
addExprs(2, 3)
console.log(addExprs(2, 5, 8, 12, 33))

var addArrows = (a, b) => {
  // console.log(arguments) // not defined
  return a + b
}

console.log(addArrows(1, 2, 3, 3, 4))
console.log(window)
