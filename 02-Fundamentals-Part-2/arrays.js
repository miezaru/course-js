//~ INTRODUCTION TO ARRAYS START

const friend1 = 'Nika'
const friend2 = 'Anna'
const friend3 = 'Eva'

// array is a data structure that stores multiple values in a single variable
const friends = ['Nika', 'Anna', 'Eva']
console.log(friends)

// second way to create an array
// const years = new Array(1991, 1984, 2020, 2012)

// accessing elements in an array
console.log(friends[0])
console.log(friends[2])

// array length property gives us the number of elements in the array
console.log(friends.length)

// last element in an array | expression: friends.length - 1
console.log(friends[friends.length - 1])

// only primitive data types cannot be changed in const variables
// data types that are immutable: number, string, boolean, null, undefined

// change/mutate an element in an array
friends[2] = 'Emma'
console.log(friends)

// illegal operation (because erray is const variable)
// friends = ['Olga', 'Olivia', 'Sophia']

// all items in an array is expressions
const artem = ['Artem', 'Usatyi', 2024 - 1997, 'programmer', friends]
console.log(artem, `length: ${artem.length}`)

// exercise
const calcAge = function (birthYear) {
  return 2024 - birthYear
}

const years = [1990, 1964, 2010, 2016]
console.log(years)

console.log(calcAge(years)) // NaN (Not a Number) because calcAge expects a number, not an array

const age1 = calcAge(years[1])
const age2 = calcAge(years[2])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)

const ages = [calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])]
console.log(ages)

//~ INTRODUCTION TO ARRAYS END

//~ BASIC ARRAY OPERATIONS (METHODS) START

// ADD ELEMENTS TO AN ARRAY

// push method | adds a new element to the end of an array
// push method | returns the new length of the array
let newLenght = friends.push('Mia')
console.log(friends)
console.log(newLenght)

// unshift method | adds a new element to the beginning of an array
// unshift method | returns the new length of the array
newLength = friends.unshift('Kate')
console.log(friends)
console.log(newLength)

// REMOVE ELEMENTS FROM AN ARRAY

// pop method | removes the last element from an array and returns it
const lastElement = friends.pop()
console.log(friends)
console.log(lastElement)

// shift method | removes the first element from an array and returns it
const firstElement = friends.shift()
console.log(friends)
console.log(firstElement)

// OTHER METHODS

// indexOf method | returns the first index at which a given element can be found in the array
console.log(friends.indexOf('Emma'))
console.log(friends.indexOf('Bob')) // -1 if the element is not found

// include method | returns true if all elements in the array pass the test implemented by the provided function
console.log(friends.includes('Nika'))
console.log(friends.includes('Bob')) // false if the element is not found

friends.push(23)
console.log(friends.includes('23')) // false because '23' is a string, not a number, this method checks for strict equality

if (friends.includes('Bob')) {
  console.log('You have a friend named Peter')
} else if (friends.includes('Nika')) {
  console.log('You have a friend named Nika')
}

//~ BASIC ARRAY OPERATIONS (METHODS) END
