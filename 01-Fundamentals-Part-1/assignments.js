console.log('assignments starts')

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
console.log('Ukraine population is greater the Finland?:', population > 6)
console.log(
  'Average population is 33 million. Ukraine have less people than the average country?:',
  population < 33
)

const description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language +
  '.'
console.log(description)

console.log('assignments end')
