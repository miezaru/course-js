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
