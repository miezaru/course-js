'use strict'

//~ Assignment 1
const describeCountry = (country, capital, population) =>
  `${country} has ${population} million people and its capital is ${capital}`

console.log(describeCountry('United States', 'Washington D.C.', 331))

//~ Assignment 2

function percentageOfWorld1(population) {
  const worldPopulation = 7900
  return (population / worldPopulation) * 100
}

console.log(percentageOfWorld1(1441))

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100
}

console.log(percentageOfWorld2(1441))
const chinaPercentageOfPopulation = percentageOfWorld2(1441)
console.log(
  `China's population is ${chinaPercentageOfPopulation.toFixed(2)}% of the world's population`
)

//~ Assignment 3

const percentageOfWorld3 = population => (population / 7900) * 100
const ukrainePercentageOfPopulation = percentageOfWorld3(45.5)
console.log(
  `Ukraine's population is ${ukrainePercentageOfPopulation.toFixed(2)}% of the world's population`
)

//~ Assignment 4

const describePopulation = (country, population) =>
  `${country} hase ${population} million people, witch ${percentageOfWorld1(population).toFixed(2)}% of the world's population`

console.log(describePopulation('United States', 331))

//~ Assignment 5

const populations = [331, 1441, 45.5, 273.5]

console.log(populations.length === 4)

const percentages = [
  percentageOfWorld1(populations[0]).toFixed(2),
  percentageOfWorld1(populations[1]).toFixed(2),
  percentageOfWorld3(populations[2]).toFixed(2),
  percentageOfWorld3(populations[3]).toFixed(2),
]

console.log(percentages)

//~ Assignment 6

const neighbours = ['belarus', 'russia', 'poland', 'slovakia', 'hungary', 'romania', 'moldova']

console.log(neighbours.push('utopia'))
console.log(neighbours)
console.log(neighbours.pop())
console.log(neighbours)

console.log(
  !neighbours.includes('germany')
    ? `Probably not a central European country`
    : `Gonna be a central European country`
)

const changeCountry = (country, newCountry) => {
  const index = neighbours.indexOf(country)
  return (neighbours[index] = newCountry)
}

changeCountry('belarus', 'belgium')
console.log(neighbours)

//~ Assignment 7

const myCountry = {
  country: 'Ukraine',
  capital: 'Kyiv',
  language: 'ukrainian',
  population: 44,
  neighbours: ['Belarus', 'Russia', 'Poland', 'Slovakia', 'Hungary', 'Romania', 'Moldova'],

  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speking people`)
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false
  },
}

//~ Assignment 8

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
)

myCountry.population += 2
console.log(myCountry)

myCountry['population'] -= 2
console.log(myCountry)

//~ Assignment 9

myCountry.describe()
myCountry.checkIsland()
console.log(myCountry.isIsland)

//~ Assignment 10

for (let vot = 1; vot <= 50; vot++) {
  console.log(`Voter number ${vot} is currently voting`)
}

//~ Assignment 11

const percentages2 = []
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]).toFixed(2))
}

console.log(percentages2)

//~ Assignment 12

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]

for (let arr = 0; arr < listOfNeighbours.length; arr++) {
  for (let i = 0; i < listOfNeighbours[arr].length; i++) {
    console.log(`Neighbour: ${listOfNeighbours[arr][i]}`)
  }
}

//~ Assignment 13

const percentages3 = []

let i = 0
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]).toFixed(2))
  i++
}

console.log(percentages3)
