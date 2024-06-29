'use strict'

//~ HOW JAVASCRIPT WORKS BEHIND THE SCENES
//_ JavaScipt is a high-level, object-oriented, multi-paradigm programming language
// _JavaScipt is a high-level, prototype-based object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.
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
// everything in a javascript is an object, except for primitive values (numbers, strings etc.)

const arr = [1, 2, 3]
arr.push(4) // arr.prototype.push(4)
console.log(arr) // [1, 2, 3, 4, 5]

// our arrays inherits methods from the prototype

//~ FIRST-CLASS FUNCTIONS
// in language with first-class functions, functions are simply treated as variables. We can pass them into other functions, and return them from functions

//~ DYNAMIC
// dynamic language means dynamicly typed language:
// no data type definitions. Types becomes known at runtime
let x = 23
let y = 19
// data type of variable is automatically changed
x = 'Artem'
console.log(x)

//~ SINGLE-THREATED
//~ NON-BLOCKING EVENT LOOP CONCURENCY MODEL
//_ Concurency model - how the JavaScript engine handles multiple tasks happening at the same time

// why do we need that?
//_ JavaScript runs in one single thread, so it can only do one thing at a time
//_ Thread is where our code is actually executed in a machines processor

// so what about long-running tasks?
//_ Sounds like it would block the single thread. However, we want non-blocking behavior

// how do we achieve that?
//_ By using an event loop - takes long running tasks, executes them in the "background", and pust them back in the main thread once they are finished

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
- soruce code
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
