'use strict'

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

//~ ADD ITEMS TO AN ARRAY

//_ .push() | adds a new element to the end of an array
//_ push(element1, element2)
//_ returns the new length of the array

let newLength = friends.push('Mia')
console.log(friends)
console.log(newLength)

//_ .unshift() | adds a new element to the beginning of an array
//_ unshift(element1, element2)
//_ returns the new length of the array
newLength = friends.unshift('Kate')
console.log(friends)
console.log(newLength)

// REMOVE ELEMENTS FROM AN ARRAY

//_ .pop() | removes the last element from an array and returns it
//_ pop()
//_ returns the removed element

const lastElement = friends.pop()
console.log(friends)
console.log(lastElement) // Emma

//_ .shift() | removes the first element from an array and returns it
//_ shift()
//_ returns the removed element
const firstElement = friends.shift()
console.log(friends)
console.log(firstElement) // Kate

//_ .fill() | fills the elements of an array with a static value
//_ fill(value) | fill(value, start) | fill(value, start, end (not icluded))
//_ returns the modified array

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Fill with 0 from position 2 until position 4, because like in copyWithin, end is not included
console.log(array1.fill(0, 2, 4)) // [1, 2, 0, 0]

//~ FIND INDEXES

//_ .indexOf()
//_ indexOf(searchElement), indexOf(searchElement, fromIndex)
//_ returns the first index at which a given element can be found in the array, or -1 if not found

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
console.log(beasts.indexOf('bison')) // 1
console.log(beasts.indexOf('bison', 2)) // 4
console.log(beasts.indexOf('lion')) // -1;

//_ .lastIndexOf()
//_ lastIndexOf(searchElement), lastIndexOf(searchElement, fromIndex)
//_ returns the last index at which a given element can be found in the array, or -1 if not found

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo']

console.log(animals.lastIndexOf('Dodo')) // 3

//_ .findIndex()
//_ callback function (element, index, array), findIndex(callbackFn, thisArg)
//_ returns the index of the FIRST element in the array that satisfies the provided testing function

const array4 = [5, 12, 8, 130, 44]
const isLargeNumber = element => element > 11
console.log(array4.findIndex(isLargeNumber)) // 1

//_ .findLastIndex()
//_ callback function (element, index, array), findLastIndex(callbackFn, thisArg)
//_ returns the index of the LAST element in the array that satisfies the provided testing function

const array5 = [5, 12, 8, 130, 44]
const isLargeNumber1 = element => element > 11
console.log(array4.findLastIndex(isLargeNumber1)) // 4

//_ .keys()
//_ keys()
//_ returns a new Array Iterator object that contains the keys of an array
const array10 = ['a', 'b', 'c']
console.log(array10.keys()) // Array Iterator

for (const key of array10.keys()) {
  console.log(key) // 0, 1, 2
}

const myKeys = [...array10.keys()] // convert iterator to array
console.log(myKeys)

//_ .entries()
//_ entries()
//_ returns a new Iterator object that contains the keys/[index, value] for each element

let homies = ['Nika', 'Anna', 'Eva', 'Mia']

console.log(homies.entries()) // array Iterator

const myHomiesEntries = [...homies.entries()] // convert iterator to array
console.log(myHomiesEntries)

for (const [index, value] of myHomiesEntries) {
  console.log(index, value)
}

for (const element of homies.entries()) {
  console.log(element)
}

//~ FIND VALUES

//_ .values()
//_ values()
//_ returns a new Iterator object that contains the values for each index in the array

const array22 = ['a', 'b', 'c']
const iterator = array22.values()
console.log(iterator.next().value) // 'a'
console.log(iterator.next().value) // 'b'
console.log(iterator.next().value) // 'c'
console.log(iterator.next().value) // undefined
console.log(iterator.next().done) // true

const iterator2 = array22.values()
for (const value of iterator2) {
  console.log(value)
}

//_ .[@iterator()] | needs to be used with a for...of loop or .next().value()
//_ array[Symbol.iterator]()
//_ returns a new Iterator object that contains the keys for each element

for (const homie of homies) {
  console.log(`array iterator with for...of loop ${homies.indexOf(homie)}`, homie)
}

const letters = ['a', 'b', 'c', 'd', 'e']
const iterator1 = letters[Symbol.iterator]()
for (const letter of letters) {
  console.log(letter)
}
for (const letter of iterator1) {
  console.log(letter)
}

//_ .at()
//_ at(index)
//_ returns the element at the specified index in the array

console.log(`homies.at(1)`, homies.at(1)) // Anna;
console.log(`homies.at(-1)`, homies.at(-1)) // Mia;

//_ a.includes() | determines whether an array includes a certain element
//_ includes(searchElement), includes(searchElement, fromIndex)
//_ returns true if the array contains the element, false otherwise

const array9 = [1, 2, 3, 4, 5]
console.log(array9.includes(3)) // true
console.log(array9.includes(6)) // false
console.log(array9.includes(3, 3)) // false

//_ .find()
//_ callback function (element, index, array), find(callbackFn, thisArg)
//_ returns the value of the FIRST element in the array that satisfies the provided testing function

const array2 = [5, 12, 8, 130, 44]
const found = array2.find(element => element > 10)
console.log(found) // 12

//_ .findLast()
//_ callback function (element, index, array), findLast(callbackFn, thisArg)
//_ returns the value of the LAST element in the array that satisfies the provided testing function

const array3 = [5, 12, 8, 130, 44]
const found2 = array3.findLast(element => element > 45) // 130
const found3 = array3.findLast(element => element > 10) // 44
console.log(found2, found3) // 12

//~ TRAVERSE ARRAYS

//_ .forEach() | executes a provided function once for each array element
//_ callback function (element, index, array), forEach(callbackFn, thisArg)
//_ returns undefined

const array8 = ['a', 'b', 'c']
array8.forEach(element => console.log(element))

const items = ['item1', 'item2', 'item3']

// before
const copyItems = []
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i])
}
console.log(copyItems)

// after
const copyItems2 = []
items.forEach(item => {
  copyItems2.push(item)
})
console.log(copyItems2)

//_ .map() | applies a given function to each element of an array
//_ map(callbackFn), map(callbackFn, thisArg)
//_ returns a new array with the results of calling a provided function on every element in the array

const array11 = [1, 4, 9, 16]
// Pass a function to map
const map1 = array11.map(x => x * 2)

// map different from forEach because it returns a new array
console.log(map1) // [2, 8, 18, 32]

//_ .flatMap() | applies a given function to each element of an array
//_ callback function (element, index, array), flatMap(callbackFn, thisArg)
//_ returns a new array with the results of calling a provided function on every element in the array and flattens the result into a single array

const array7 = [1, 2, 1, 34, 2, 45]
const result1 = array7.flatMap(num => (num === 2 ? [2, 2] : 1))
console.log(result1)

//_ .filter() | creates a new array with all elements that pass the test implemented by the provided function
//_ callback function (element, index, array), filter(callbackFn, thisArg)
//_ returns a new array with all elements that pass the test

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present']
const result = words.filter(word => word.length > 6)
console.log(result) // ['exuberant', 'destruction', 'present']

//_ .reduce() | applies a function against an accumulator and each element in the array (from left to right or from right to left)
//_ .reduceRight()
//_ reduce(accumulator(накопитель), currentValue, currentIndex, array), reduce(callbackFn, initialValue)
//_ returns the accumulated value after running the reduce function on each element in the array

const array12 = [1, 2, 3, 4]
const initialValue = 3
const sumWithInitial = array12.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
) // 3 + 1 + 2 + 3 + 4 = 13
console.log(sumWithInitial) // 13

const arr = ['o', 'r', 'l', 'd']
console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 'w')) // 'world'

const array13 = [
  [0, 1],
  [2, 3],
  [4, 5],
]
const result2 = array13.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue)) // [4, 5, 2, 3, 0, 1]
console.log(result2)

//_ .every() | tests whether all elements in the array pass the test implemented by the provided function
//_ callback function (element, index, array), every(callbackFn, thisArg)
//_ returns true if all elements pass the test, false otherwise

const numbers = [1, 2, 3, 4, 5]
const isEven = num => num % 2 === 0
const biggerThenZero = num => num > 0
console.log(numbers.every(isEven)) // false
console.log(numbers.every(biggerThenZero)) // true

const isSubset = (array1, array2) => array2.every(element => array1.includes(element))
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])) // true

//_ .some() | tests whether at least one element in the array passes the test implemented by the provided function
//_ some(callbackFn), some(callbackFn, thisArg)
//_ returns true if at least one element in the array passes the test implemented by the provided function

const array15 = [1, 2, 3, 4, 5]

// Checks whether an element is even
const even = element => element % 2 === 0
console.log(array15.some(even)) // true

//_ .sort() | sorts the elements of an array in place
//_ sort(), sort(compareFunction)
//_ returns the array, change the original array

const array16 = [3, 1, 2, 5, 4]
console.log('array16.sort():', array16.sort()) // [1, 2, 3, 4, 5]
console.log('array16:', array16)

const array17 = ['cherry', 'apple', 'banana']
console.log('array17:', array17)
console.log('array17.sort():', array17.sort()) // ['apple', 'banana', 'cherry']

//_ array.toSorted() | sorts the elements of an array in place
//_ toSorted(), toSorted(compareFunction)
//_ returns the array, not chnaging the original array

const array20 = [3, 1, 2, 5, 4]
console.log('array20.sort():', array20.toSorted()) // [1, 2, 3, 4, 5]
console.log('array20:', array20)

//~ OTHER ARRAY METHODS

//_ .concat()
//_ concat(), concat(value1), concat(value1, value2)
//_ returns a new array that is the result of concatenating all the arrays in the arguments

console.log(`homies.concat(['Ben', 'Tailor'])`, homies.concat(['Ben', 'Tailor']))
homies = homies.concat(['Ben', 'Tailor'])

//_ .flat()
//_ flat(), flat(depth), flat(Infinity)
//_ returns a new array with all sub-array elements concatenated into it

const array6 = [0, 1, [2, [3, [4, 5]]]]
console.log(array6.flat()) // [0, 1, 2, Array(2)]
console.log(array6.flat(2)) // [0, 1, 2, Array(2)]
console.log(array6.flat(Infinity)) // [0, 1, 2, 3, 4, 5]

//_ .copyWithin() | replaces elements of an array with other array elements or values
//_ copyWithin(target, start), copyWithin(target, start, end (not icluded))
//_ returns the modified array, mutate original array

const myArr = ['q', 'w', 'e', 'r', 't', 'y']
console.log(`myArr.copyWithin(0, 3)`, myArr.copyWithin(0, 3)) // ['r', 't', 'y', 'r', 't', 'y']

console.log(`myArr.copyWithin(0, 2, 5)`, myArr.copyWithin(0, 2, 5)) // ['y', 'r', 't', 'r', 't', 'y']

// negative indices count from the end of the array
console.log(`myArr.copyWithin(0, 1, -1)`, myArr.copyWithin(0, 1, -1))

// first value is target (where start), second value is what element to put in target, third value is where to end copying (not included)
// this method does not mutate the original array, because it starts at 3 and ends at 3 (what not included)
console.log(homies.copyWithin(0, 3, 3))

//_ .slice() | extracts a section of an array and returns a new array
//_ slice(beginIndex), slice(beginIndex, endIndex(not included))
//_ returns a new array containing a shallow copy of a portion of the array

const animals1 = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals1.slice(2)) // ['camel', 'duck', 'elephant']
console.log(animals1.slice(2, 4)) // ['camel', 'duck']
console.log(animals1.slice(-2)) // ['duck', 'elephant']
console.log(animals1.slice()) // ['ant', 'bison', 'camel', 'duck', 'elephant']

//_ .splice() | changes the contents of an array by removing existing elements and/or adding new elements
//_ .toSpliced()
//_ splice(startIndex), splice(startIndex, deleteCount), splice(startIndex, deleteCount, item1, item2, ...)
//_ toSpliced(startIndex), toSpliced(startIndex, deleteCount), toSpliced(startIndex, deleteCount, item1, item2,...)
//_ returns a new array containing the deleted elements, .splice() changing the original array and .toSpliced not changing the original array

const months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, 'Feb') // inserts at index 1
console.log(months) // changed to ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May') // replaces 1 element at index 4
console.log(months) // changed to ["Jan", "Feb", "March", "April", "May"]

const months1 = ['Jan', 'March', 'April', 'June']
console.log(months1.toSpliced(1, 0, 'Feb')) // inserts at index 1
console.log(months1) // not changed

//_ .with() | creates a shallow copy of an array
//_ with(...items), arrayInstance.width(index, value)
//_ returns a shallow copy of an array with the provided items appended to it
const array23 = [1, 2, 3, 4, 5]
console.log(array23.with(2, 6)) // [1, 2, 6, 4, 5]
console.log(array23) // [1, 2, 3, 4, 5]

//_ .reverse() | creates a new array with the elements of this array in reverse order
//_ .toReversed()
//_ reverse(), toReversed()
//_ returns the array with its elements in reverse order, .reverse() changing the original array and .toReversed() not changing the original array

const array14 = ['one', 'two', 'three']
console.log('array14:', array14)
console.log('array14.reverse():', array14.reverse())

const array19 = [1, 2, 3, 4, 5]
console.log('array19:', array19)
console.log('array19.toReversed():', array19.toReversed()) // [5, 4, 3, 2, 1]
console.log(array19) // [1, 2, 3, 4, 5];
console.log(array19.reverse())
console.log(array19)

//_ .join() | joins all elements of an array into a string
//_ join(), join(separator)
//_ returns a string containing all the elements of the array, separated by commas and/or a specified separator

const elements = ['Fire', 'Air', 'Water']
console.log(elements.join()) // Fire,Air,Water
console.log(elements.join('-')) // Fire-Air-Water
console.log(elements.join(' ').toLowerCase()) // fire air water

//_ .toString()
//_ toString()
//_ returns a string representation of the array

const array21 = [1, 'a', 23, [1, 2, 3], { name: 'John' }]
console.log('array21:', array21)
console.log('array21.toString():', array21.toString()) // "1,a,23,1,2,3,[object Object]"

//_ .toLocaleString()
//_ toLocaleString(), toLocaleString(locales[, options])
//_ returns a string representing the elements of the array
const array18 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')]
const localeString = array18.toLocaleString('en', { timeZone: 'UTC' })
console.log(localeString) // "1, a, 12/21/1997, 2:12:00 PM"
