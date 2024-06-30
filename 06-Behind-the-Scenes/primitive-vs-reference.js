'use strict'

//_ Primitive types
let lastName = 'Kone'
let oldLastName = lastName
lastName = 'Sein'

console.log(lastName, oldLastName)

//_ Refference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Kone',
  age: 27,
}

// we can change values in the heap and const has nothing to do about it
const marriedJessica = jessica
marriedJessica.lastName = 'Sein'

console.log('Before marriage:', jessica.lastName, 'After the marriage:', marriedJessica.lastName)

// marriedJessica = {} // error, we can not change the value to a new memory (heap) address

//_ Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Kone',
  age: 27,
  family: ['Nina', 'Johan'],
}
// only works on the first level
const marriedJessica2 = Object.assign({}, jessica2, { lastName: 'Sein' })
console.log('Before marriage:', jessica2.lastName, 'After the marriage:', marriedJessica2.lastName)
marriedJessica2.family.push('Mary')
marriedJessica2.family.push('David')

// family objects is deeply nested object (not on the first level)
console.log(jessica2)
console.log(marriedJessica2)

// lodash for deep clonning
