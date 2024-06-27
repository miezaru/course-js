'use strict'

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// temperature amplitude is the difference between the highest and lowest temperatures

// 1) understand the problem
// how to compute max and min temperatures
// what`s a sensor error? and what to do?

// 2) breaking up into sub-problems
// how to ignore errors
// find max and min temperatures in array
// subtract min from max (amplitude) and return the result

const calcTempAmplitude = function (t1, t2) {
  let temps = t1.concat(t2)

  // use sort method to sort the temperatures in ascending order
  temps.sort((a, b) => a - b)
  console.log(temps)

  // remove dublicates using Set and then convert back to array
  temps = [...new Set(temps)]
  console.log(temps)

  let min = temps[0]
  let max = temps[0]

  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i]

    if (typeof currentTemp !== 'number') continue
    if (currentTemp > max) max = currentTemp
    if (currentTemp < min) min = currentTemp
  }

  let amplitude = 0
  if (min < 0) {
    amplitude = max - -min
  } else amplitude = max - min

  return amplitude
}

const array1 = [3, -2, -6, -1, 'error', 9]
const array2 = [13, 17, 15, 20, 9]

console.log(calcTempAmplitude(array1, array2))

// function should now recieve 2 arrays of temps

// 1) should we implement functionality twice? no. merge the arrays

// 2) merge 2 arrays

//~ CODING CHALLENGE #1

const printForecast = arr => {
  let finalString = '... '
  arr.forEach((element, index) => {
    finalString += `${element}°C in ${index + 1} days ... `
  })
  return finalString
}

console.log(printForecast([17, 21, 23]))
console.log(printForecast([12, 5, -5, 0, 4]))
