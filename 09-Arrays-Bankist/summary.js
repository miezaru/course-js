'use strict';

//~ Summary: Which array method to use?

/*
----------------------------------------------------------------
1. Array.prototype.push() - adds an element to the end of an array.
2. Array.prototype.unshift() - adds an element to the beginning of an array.
3. Array.prototype.splice() - adds/removes elements from an array.
4. Array.prototype.concat() - creates a new array by merging two or more arrays.
5. Array.prototype.slice() - creates a shallow copy of a portion of an array.
6. Array.prototype.map() - creates a new array with the results of calling a provided function on every element in the array.
7. Array.prototype.filter() - creates a new array with all elements that pass the test implemented by the provided function.
8. Array.prototype.reduce() - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.
9. Array.prototype.forEach() - calls a provided function once for each element in an array.
10. Array.prototype.find() - returns the value of the first element in the array that satisfies the provided testing function.
11. Array.prototype.findIndex() - returns the index of the first element in the array that satisfies the provided testing function.
12. Array.prototype.includes() - determines whether an array includes a certain value among its entries.
13. Array.prototype.every() - tests whether all elements in the array pass the test implemented by the provided function.
14. Array.prototype.some() - tests whether at least one element in the array passes the test implemented by the provided function.
15. Array.prototype.sort() - sorts the elements of an array in place and returns the array.
16. Array.prototype.reverse() - reverses the order of the elements in an array in place.
17. Array.prototype.flat() - returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
18. Array.prototype.flatMap() - returns a new array with the results of calling a provided function on every element in the array and then flattening the result.
19. Array.from() - creates a new Array instance from an array-like or iterable object.
20. Array.prototype.fill() - fills all the elements of an array with a static value.
21. Array.prototype.entries() - returns a new Array Iterator object that contains the key-value pairs for each index in the array.
22. Array.prototype.keys() - returns a new Array Iterator object that contains the keys for each index in the array.
23. Array.prototype.values() - returns a new Array Iterator object that contains the values for each index in the array.
---------------------------------------------------------------- */

//_ To mutate original array
/*
_ Add to original:
  .push() - end
  .unshift() - start

_ Remove from original:
  .pop() - end
  .shift() - start
  .splice() - any

_ Others:
  .reverse()
  .sort()
  .fill()
*/

//~ A new array
/*
_ Computed from original:
  .map()

_ Filtered using condition:
  .filter()

_ Portion of original:
  .slice()

_ Adding original to other:
  .concat()

_ Flattering the original:
  .flat()
  .flatMap()
*/

//~ An array index
/*
_ Based on value:
  .indexOf()

_ Based on test condition:
  .findIndex()
*/

//~ An array element
/*
_ Based on test condition:
  .find()
*/

//~ Know if array includes
/*
_ Based on value:
  .includes()

_ Based on test condition:
  .some()
  .every()
*/

//~ A new string
/*
_ Based on separator string:
  .join()
*/

//~ To transform to value
/*
_ Based on accumulator:
  .reduce() - (Boil down array to single value of any type: number, string, boolean, or even new array or object)
*/

//~ To just loop array
/*
_ Based on callback:
  .forEach() - (Does not create a new array, just loops over it)
*/
