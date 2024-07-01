'use strict'

//~ INTRODUCTION TO OBJECTS

// arrays have no names for elements, only accessed by their index
const artemArray = ['Artem', 'Usatyi', 2024 - 1997, 'programmer', ['Nika', 'Anna', 'Eva']]

// objects literal syntax creates objects with properties and values
// order not matter in objects
const artem = {
  firstName: 'Artem',
  lastName: 'Usatyi',
  age: 2024 - 1997,
  job: 'programmer',
  friends: ['Nika', 'Anna', 'Eva'],
}

// use arrays for non structured data
// use objects for structured data

console.log(artem)

//~ DOT VS. BRACKET NOTATION

console.log(artem.firstName) // 'Artem'
console.log(artem.lastName) // 'Usatyi'

// in bracket notation we can use variables or expressions as property names
console.log(artem['age']) // 27

const nameKey = 'Name'
console.log(artem[`first${nameKey}`])
console.log(artem[`last${nameKey}`])

// with dot notation we can't use variables or expressions as property names
// console.log(artem.`last ${nameKey}`)

// const interestedIn = prompt(
//   'What do you want to know about Artem? Choose between firstName, lastName, age, job, or friends'
// )
const interestedIn = 'job'

console.log(artem.interestedIn) // undefined because 'interestedIn' has no interestedIn property in artem object

if (artem[interestedIn]) {
  console.log(artem[interestedIn])
} else {
  console.log(
    'No such property in the object. Choose between firstName, lastName, age, job, or friends'
  )
}

artem.location = 'Ukraine'
artem['github'] = '@miezaru'
console.log(artem)

console.log(
  `${artem.firstName} has ${artem.friends.length} friends, and his best friend is ${artem.friends[0]}.`
)

//~ OBJECT METHODS

const person = {
  firstName: 'John',
  lastName: 'Doe',
  birthYear: 1994,
  job: 'developer',
  friends: ['Jane Doe', 'Mike Doe', 'Sarah Doe'],
  hasDriversLicense: true,

  calcAge1: function (birthYear) {
    return 2024 - birthYear
  },

  calcAge2: function () {
    return 2024 - this.birthYear
  },

  // better if we use this method multiple times, we can simply store it and not calling function every time
  calcAge3: function () {
    this.age = 2024 - this.birthYear
    return this.age
  },

  // arrow function does not have its own 'this' keyword, it uses the 'this' of the enclosing scope
  /*
  calcAge3: () => {
    this.age = 2024 - this.birthYear
    return this.age
  }, */

  getSummary: function () {
    return `${this.firstName} is ${this.calcAge3()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
  },
}

// object methods are functions attached to objects
console.log(person.calcAge1(1994))
console.log(person.calcAge1(person.birthYear))
console.log(person['calcAge1'](1994))
console.log(person['calcAge1'](person.birthYear))

// with this
console.log(person.calcAge2())
console.log(person)

console.log(person.calcAge3())
console.log(person)

// summary method
console.log(person.getSummary())
