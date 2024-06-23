console.log('---------- ASSIGNMENTS START ----------`)')

const country = 'Ukraine'
const continent = 'Europe'
let population = 38

console.log(country)
console.log(continent)
console.log(population)

const isIsland = false
const language = 'Ukrainian'

console.log(typeof isIsland, typeof country, typeof population, typeof language)

console.log('County population split in 2:', population / 2)
console.log('Country population increased by 1:', population + 1)
console.log('Ukraine population is greater then Finland?:', population > 6)
console.log(
  'Average population is 33 million. Ukraine have less people than the average country?:',
  population < 33
)

let description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language +
  '.'
console.log(description)

descriptione = `${country} is in ${continent}, and its ${population} million people speak ${language}.`
console.log(description)

population = 13
if (population > 33) {
  console.log(`${country} population is ${population - 33} million above average.`)
} else {
  console.log(`${country} population is ${33 - population} million below average.`)
}

console.log('9' - '5') // -> 4
console.log('19' - '13' + '17') // -> '617'
console.log('19' - '13' + 17) // -> 23
console.log('123' < 57) // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2) // -> 1143

console.log('---------- ASSIGNMENTS END ----------')
