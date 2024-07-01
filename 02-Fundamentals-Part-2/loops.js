'use strict'

//~ ITERATION: THE FOR LOOP
/*
console.log('Lifting weights repetition 1🏋️')
console.log('Lifting weights repetition 2🏋️')
console.log('Lifting weights repetition 3🏋️')
console.log('Lifting weights repetition 4🏋️')
console.log('Lifting weights repetition 5🏋️')
console.log('Lifting weights repetition 6🏋️')
console.log('Lifting weights repetition 7🏋️')
console.log('Lifting weights repetition 8🏋️')
console.log('Lifting weights repetition 9🏋️')
console.log('Lifting weights repetition 10🏋️')
 */

// for loop needs a starting point, an ending point, and an increment/decrement value
// for loop keeps running as long as the condition is true
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep}🏋️`)
}

//~ LOOPING ARRAYS, BREAKING AND CONTINUING

const artem = ['Artem', 'Usatyi', 2024 - 1997, 'programmer', ['Nika', 'Anna', 'Eva']]

const types = []

// console.log(artem[0])
// console.log(artem[1])
// ...
// console.log(artem[4])
// console.log(artem[5]) // undefined, does not exist so use artem.length to get the length of the array
for (let i = 0; i < artem.length; i++) {
  console.log(artem[i])

  // filling types array
  types[i] = typeof artem[i]
  // types.push(typeof artem[i])
}

console.log(types)

const years = [1997, 2000, 2003, 2020]
const ages = []

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i])
}

console.log(ages)

// continue and break statements

// continue statement skips the current iteration and moves to the next one
// only strings will be logged
for (let i = 0; i < artem.length; i++) {
  if (typeof artem[i] !== 'string') continue
  console.log(artem[i], typeof artem[i])
}

// break statement stops the loop and exits the loop immediately
for (let i = 0; i < artem.length; i++) {
  if (typeof artem[i] === 'number') break
  console.log(artem[i], typeof artem[i])
}

//~ LOOPING BACKWARDS AND LOOPS IN LOOPS

const nika = ['Nika', 'Wells', 2024 - 2004, 'dreamer', ['Artem', 'Anna', 'Eva']]

for (let i = nika.length - 1; i >= 0; i--) {
  console.log(i, nika[i])
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------ Starting exercise ${exercise}`)
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`)
  }
}

//~ THE WHILE LOOP

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}🏋️`)
}

// while loop different from for loop in that it doesn't require an increment/decrement value and it continues as long as the condition is true
let rep = 1
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}🏋️`)
  rep++
}

// when we dont know the exact number of iterations, we can use a while loop
let dice = Math.trunc(Math.random() * 6 + 1)
while (dice !== 6) {
  console.log(`You rolled a ${dice}!`)
  dice = Math.trunc(Math.random() * 6 + 1)
  if (dice === 6) console.log('Loop is about to end...')
}

// we can use const variables inside lopps beacuse they are not reassigned
