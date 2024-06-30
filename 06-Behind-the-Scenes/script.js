'use strict'

//~ HOW JAVASCRIPT WORKS BEHIND THE SCENES
//_ JavaScipt is a high-level, object-oriented, multi-paradigm programming language
//_ JavaScipt is a high-level, prototype-based object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.
/*
- high-level
- prototype-based object-oriented
- multi-paradigm
- interpreted or just in time compiled
- dynamic
- single-threaded
- garbage-collected
- first-class functions
- event loop concurrency model
*/

//~ HIGH LEVEL
// any computer needs resources
// low level language C (ask computer for give him memory) - developer has to manage resources manually
// high level language Pyhon or JavaScript - developer does NOT have to worry, everything happens automatically

//~ GARBAGE-COLLECTED
// remove old/unused objects from the computer memory
// cleaning the memory so we don`t have to

//~ INTERPRETED OR JUST-IN-TIME COMPILED
// computer processor only understands 0 and 1 (machine code)
// compiling (convert to machine code) happens automatically inside the JavaScript engine

//~ MULTI-PARADIGM
//_ Paradigm - an approach and mindset of structuring code, which will direct your coding style and technique.

/*
most popular paradigms
1) procedural programming
2) object-oriented programming
3) functional programming
*/

//_ Procedal programming - is a programming paradigm built around the idea that programs are sequences of instructions to be executed

//_ Object-oriented programming (OOP) - is a style of programming characterized by the identification of classes of objects closely linked with the methods (functions) with which they are associated. It also includes ideas of inheritance of attributes and methods.

//_ Functional programming - is a declarative programming paradigm style where one applies pure functions in sequence to solve complex problems. Functions take an input value and produce an output value without being affected by the program

// paradigms is impertaive or declarative

//~ PROTOTYPE-BASED OBJECT-ORIENTED
// everything in a JavaScript is an object, except for primitive values (numbers, strings etc.)

const arr = [1, 2, 3]
arr.push(4) // arr.prototype.push(4)
console.log(arr) // [1, 2, 3, 4, 5]

// our array inherits methods from the prototype

//~ FIRST-CLASS FUNCTIONS
// in language with first-class functions, functions are simply treated as variables. We can pass them into other functions, and return them from functions

//~ DYNAMIC
// dynamic language means dynamicly typed language:
// no data type definitions. Types becomes known at runtime
let x = 23
let y = 19
// data type of variable is automatically changed
x = 'Artem'

//~ SINGLE-THREATED
//~ NON-BLOCKING EVENT LOOP CONCURENCY MODEL
//_ Concurency model - how the JavaScript engine handles multiple tasks happening at the same time

// why do we need that?
//_ JavaScript runs in one single thread, so it can only do one thing at a time
//_ Thread is where our code is actually executed in a machines processor

// so what about long-running tasks?
//_ Sounds like it would block the single thread. However, we want non-blocking behavior

// how do we achieve that?
//_ By using an event loop - takes long running tasks, executes them in the "background", and put them back in the main thread once they are finished

//~ JAVASCRIPT ENGINE
//_ JS Engine - program that executes JavaScript code

// V8 most popular JavaScript engine used in Chrome, Opera, Edge and nodejs
// Every JavaScript engine has call stack and heap
// Call stack - is where our code is executed using execution context
// Heap - is where objects are stored

//~ HOW IS IT COMPILED?
//~ COMPILATION VS INTERPRETATION
//_ Compilation - entire code is converted into machine code at once, and written to a binary file that can be executed by a computer
// 3 steps:
/*
- source code
---- compilation            | step 1
- portable file: machine code
---- execution              | step 2 (can happen way after compilation)
- program running
*/

//_ Interpretation - interpreter runs through the source code and executes it line by line
// we have no this 2 steps as before
/*
- source code
---- execution line by line | step 1 (code still need to be converted to machine code)
- program running
*/

// code still need to be converted to machine code, but it simply happens right before it executed and not ahead of time

// JavaScript its purely interpreted language
// interpreted languages is much, much slower than compiled languages

//_ Modern JavaScript using a mix between compilation and interpretation
//_ Just-in-time (JIT) compilation - entire code is converted into machine code at once, then executed immediately
/*
- source code
---- compilation            | step 1
- machine code                       (NOT a portable file)
---- execution              | step 2 (happens immediately)
- program running
*/

//~ HOW ENGINE PROCESSED SCRIPTS

//~ 1) Parse the code
//_ Parsing in data structure called AST (Abstract Syntax Tree), this works by first splitting up each line of code into pieces that are meaningful to the language (const, function) and saving all this pieces into the tree in a structured way. This step also checks if there are any SyntaxError-s.

//_ Resulting tree later be used to generate the machine code

// (AST Example)

//~ 2) COMPILATION
//_ Takes AST and compiles it into machine code

//~ 3) EXECUTION
//_ Executes right away (because modern JavaScript use JIT (Just-In-Type) compilation)
// happens in call stack

// modern JavaScript engines has some pretty clawer optimization strategies
// create unoptimized version of machine code at the beginning just so that can start executing as soon as possible
// then in a background this code is being optimized and recompiled during the already running program execution, and this can be done multiple times (that makes modern engines such as V8 so fast)
// all this parsing, compilation and optimization happens in some special threads inside the engine that we can not access from our code, completely separate from our main thread, that is basically runnning in a call stack executing our own code

// different engines implement this in slightly different ways

//~ WHAT IS JAVASCRIPT RUNTIME IS? (IN BROWSER)
//_ JavaScript runtime in browsers - container including all the things that we need to use JavaScript (in this case in the browser)

/*
- JavaScript engine
- Web APIs (DOM, Timers, Fetch API)
- Callback queue (click, timer, data, etc)
*/

//_ Web APIs - functionalities provided to the engine, accessible on window object
//_ Calback queue example - callback function from DOM event listener
//_ Event Loop - takes functions from the callback queue and puts them into call stack (if its empty) so they can be executed
//_ Event Loop - essential for non-blocking concurrency model

// in nodejs we have no access to WEB APIs, but instead we have C++ Bindings & Thread Pool

//~ EXECUTION CONTEXT AND THE CALL STACK
//_ 1) Global execution context is created for top-level code (code not inside any function(they only executed when we call them))

//_ Execution context - (abstract concept) enviroment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed
//_ Exactly ONE global execution context (EC) - default context, created for code that is not inside any function (top level)

//_ 2) Execution of top-level code (inside global EC)

//_ 3) Execution of functions and waiting for callbacks (click event is a callback)

//_ One execution context per function - for each function call, a new execution context is created

// all these EC-s make the call stack

//~ WHAT INSIDE EXECUTION CONTEXT?

//_ 1) Variable enviroment - all our variables and functions declarations are stored
/*
- let, const and var declarations
- functions
- arguments object
*/
//_ 2) Scope chain - basically consists of references to variables that located outside of the current function
// to keep truck of the scope chain it is stored in each executon context

//_ 3) This keyword - each EC has a special variable this.
// EC belonging to arrow functions do not get their own arguments object and this keyword, instead they can use the arguments object and their this keyword from their closest regular function parent

// all of these generated during "creation phase", right before execution

//~ CALL STACK
//_ Call stack - "place" where execution contexts get stacked on top of each other, to keep track of where we are in the execution

//_ Global execution context pop off from the stack when we close the tab or browser

//~ SCOPE AND THE SCOPE CHAIN
//_ Scoping - controls how our programs variables are organized and accesed by the JavaScript engine
// Scoping asking question: where our variables live, where we can access a certain variable and where not

//_ Lexical scoping - means that the way variables organized and accessed is entirely controls by the placement of functions and of blocks in the program scope
// Lexical scoping: scoping is controlled by placement of functions and blocks in the code
// For example a function that is written inside another function has access to the variables of the parent function.

//_ Scope - space of enviroment in which a certain variable is declared (variable enviroment in case of functions). There is global scope, function scope and block scope.
// Scope chain and varible enviroment in the case of functions it`s basically the same

//_ Scope of variable - region of our code where a certain variable can be accessed

//~ THE 3 TYPES OF SCOPE
//_ 1) Global scope
// - outside of any function block
// - variables declared in global scope are accessible everywhere

//_ 2) Function scope
// - variables are accessible only inside function, NOT outside
// - also called local scope

//_ 3) Block scope (ES6)
// - variablles are accessible only inside blocks (block scoped)
// - HOWEVER, this only applies to let and const variables
// - functions are also block scoped (only in strict mode)

// var, let, const - function scope
// let, const - block scope

// Scope has access to variables from all outer scopes
// Outer scope has no access to inner scope variables

//~ SCOPE CHAIN VS CALL STACK

const a = 'Artem'
first()

function first() {
  const b = 'Hello'
  second()

  function second() {
    const c = 'World'
    third()

    // function third() {
    //   console.log(a + b + c)
    // }
  }
}

function third() {
  const d = 'Hey'
  // console.log(d + c + b + a) // Refference error
}

//_ Scope chain - order in which functions are written
// has nothing to do with order in which functions were called

//~ SUMMARY
/*
- scoping asks the question "Where do variables live?" or "Where can we access a certain variable, and where not?"
- there are 3 types of scope in JavaScript:
  - global scope
  - scopes defined by functions
  - scopes defined by blocks (ES6)
- only let and const variables are block-scoped. Variables declared with var end up in the closest function scope
- in JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks written
- every scope always has access to all the variables from all its outer scopes. This is the scope chain!
- when a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it`s looking for. This is called variable lookup
- the scope chain is a one-way street - a scope will never, ever have access to the variables of an inner scope
- the scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!
*/

//~ VARIABLE ENVIROMENT: HOISTING AND THE TDZ

//~ HOISTING IN JAVASCRIPT
//_ Hoisting - makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope"
// --- behind the scenes
//_ Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable enviroment object

// hoisting does not works the same for all variable types
/*
|                                |     HOISTED?    |    INITIAL VALUE     |    SCOPE      |
|--------------------------------|-----------------|----------------------|---------------|
| function declarations          |       YES       |   Actual function    |    Block      |
|--------------------------------|-----------------|----------------------|---------------|
| var variables                  |       YES       |      undefined       |   Function    |
|--------------------------------|-----------------|----------------------|---------------|
| let and const variables        |        NO       | <uninitialized>, TDZ |    Block      |
|--------------------------------|-----------------|----------------------|---------------|
| function expressions and arrows|            Depends if using var or let/const           |
|--------------------------------|-----------------|----------------------|---------------|
*/

// function declaration scope - block in strict mode, otherwise function
// let and const variables - hoisting no, but technically yes. But not in practice.
//_ TDZ (ES6) - Temporal Dead Zone - each and every let and const variable has their own temporal dead zone that starts at the beginning of the scope untile the line where it is defined, and a varible only safe to use after the TDZ
// How to avoid the issues the TDZ causes
// Relatively simply, always make sure you define your lets and consts at the top of your scope.

//~ WHY TDZ?
// makes it easier to avoid and catch errors - accessing variables before declaration is bad practice and should be avoided
// makes const variabes actually work

//~ WHY HOISTING?
// using functions before actual declaration (need for some programming techniques such as mutual recursion)
// var hoisting is just a byproduct

//~ THE THIS KEYWORD
//~ HOW THE THIS KEYWORD WORKS
//_ this keyword/variable - special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used.
// this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called

// different function call types
/*
- simple function call - this = undefined ('strict mode'), otherwise window (in the browser)
- method call - this = <Object that is calling the method>
- arrow function (don't get own this) - this = <this of surrounding function (lexical this))>
- event listener - this = <DOM element that the handler is attached to>
- new, apply, call, bind - later...
*/

//_ Method example
const person = {
  name: 'Johan',
  year: 1984,
  calcAge: function () {
    const arrowCalcAge = () => console.log(new Date().getFullYear() - this.year) // 40
    arrowCalcAge()

    return console.log(new Date().getFullYear() - this.year)
  },

  arrowCalcAge: () => console.log(new Date().getFullYear() - this.year), // NaN
}

person.calcAge()
person.arrowCalcAge()

// for testing purposes
document.querySelector('body').addEventListener('click', function () {
  console.log(this)
  this.style.background = 'red'
})

//_ this does NOT point to the function itself, and also NOT the its variable environment

//~ PRIMITIVES VS. OBJECTES (PRIMITIVE VS. REFERENCE TYPES)
let age = 30
let oldAge = age
age = 31

console.log(age)
console.log(oldAge)

const me = {
  name: 'Artem',
  age: 27,
}

const friend = me
friend.age = 30

// source of confusion
console.log(friend)
console.log(me)

//~ REVIEW: PRIMITIVES, OBJECTTS AND THE JAVASCRIPT ENGINE
//_ Primitives: Number, String, Boolean, undefined, null, symbol, bigInt - primitive types
//_ Objects: Object literal, Array, Function, many more.. - reference types

// Primitives are stored in the JavaScript engine call stack (primitive types are stored in the execution contexts in which they are declared)
// When we create a primitive variable, it hase an identifier, address and value
// identifier looks on address not a value

// Objects are strored in the JavaScript engine heap
