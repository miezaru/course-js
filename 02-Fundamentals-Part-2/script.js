'use strict'
// strict mode is enabled by default in modern JavaScript ES5+
// strict mode prevents certain actions from being taken, such as using undeclared variables

let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log(`I can drive!`)

// reserved words cannot be used as variable names, 'strict mode' will throw an error
// const private = 'Audio'
// const interface = 'Audio'
