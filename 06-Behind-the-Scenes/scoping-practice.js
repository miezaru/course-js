'use strict'

function calcAge(birthYear) {
  const age = new Date().getFullYear() - birthYear
  console.log(firstName)

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`
    console.log(output)

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true
      // creating NEW variable with same name as outer scope`s variable
      const firstName = 'Andrew'

      // reassigning outer scope`s variable
      output = 'NEW OUTPUT'

      const str = `Oh, and you're a millenial, ${firstName}`
      console.log(str)

      function add(a, b) {
        return a + b
      }
    }

    console.log(millenial)
    // console.log(str)
    // add(2, 3) // works w/o 'strict mode', but with 'strict mode' functions are block scoped
    console.log(output)
  }

  printAge()
  return age
}

const firstName = 'Johan'
console.log(calcAge(1991))

// console.log(age)
// console.log(printAge())
