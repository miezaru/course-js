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
f() // not attached to owner
