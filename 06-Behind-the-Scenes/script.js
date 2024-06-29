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
