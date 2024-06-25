//~ INTRODUCTION TO OBJECTS START

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

//~ INTRODUCTION TO OBJECTS END

//~ DOT VS. BRACKET NOTATION START

console.log(artem.firstName) // 'Artem'
console.log(artem.lastName) // 'Usatyi'

// in bracket notation we can use variables or expressions as property names
console.log(artem['age']) // 27

const nameKey = 'Name'
console.log(artem[`first${nameKey}`])
console.log(artem[`last${nameKey}`])

// with dot notation we can't use variables or expressions as property names
// console.log(artem.`last ${nameKey}`)

const interestedIn = prompt(
  'What do you want to know about Artem? Choose between firstName, lastName, age, job, or friends'
)

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

//~ DOT VS. BRACKET NOTATION END
