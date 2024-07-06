{
  //~ SUMMARY: WHICH DATA STRUCTURE TO USE?
  //_ Sources of data
  /*
  1. From the program itself:
    - data written directly in source code (e.g. status messages)
    - data what will be displayed on webpage on user actions

  2. From the UI:
    - data input from the user or data written in DOM (e.g. tasks in todo app, expanses in budget app)

  3. From external sources:
    - data fetched for example from web API (Application Programming Interface) (e.g. recipe objects)
  */
  /*
  Collection data structures: array, object, set, map, weakset, weakmap
  Collection data structures that JS does not have: stacks, queues, linked lists, trees, hash tables

  1. Simple list?
    - array
    - set
  2. Key value pairs?
    - keys allow us to describe values
    - object
    - map
  */
  /*
  _ Sets vs Arrays

  _ Arrays
    - use when you need ordered list of values (might contain duplicates)
    - use when you need to manipulate data

  _ Sets
    - use when you need to work with unique values
    - use when high-performance is really important
    - use to remove duplicates from arrays
  */
  /*
  _ Objects vs Maps

  _ Objects
    - more "traditional" key/value store ("abused" objects)
    - easier to write and access values with . and []
    - use when you need to include functions (methods)
    - use when working with JSON (can convert to map)

  _ Maps
    - better performance
    - keys can have any data type
    - easy to iterate
    - easy to compute size
    - use when you simply need to map key to values
    - use when you need keys that are not strings
  */
}
