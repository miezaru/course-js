{
  //~ MAPS: FUNDAMENTALS

  const rest = new Map();
  rest.set('name', 'Classico Italiano');
  rest.set(1, 'Firenze, Italy');
  rest.set(2, 'Lisbon, Portugal');
  console.log(rest);

  //_ set()

  rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');
  console.log(rest);

  console.log(rest.get('name')); // Classico Italiano
  console.log(rest.get(true)); // We are open

  console.log(rest.get('1')); // undefined
  console.log(rest.get(1)); // Firenze, Italy

  const time = 8;
  console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are closed

  //_ has()

  console.log(rest.has('categories')); // true

  //_ delete()

  rest.delete(2);
  console.log(rest);

  //_ size()

  console.log(rest.size);

  //_ clear()

  // rest.clear();
  // console.log(rest);

  //_ Example

  rest.set([1, 2], 'Test');
  console.log(rest.get([1, 2])); // undefined (because it`s different array in the heap)

  const arr = [1, 2];
  rest.set(arr, 'Test2');
  console.log(rest.get(arr)); // Test2 (because it`s the same array in the heap)

  rest.set(document.querySelector('h1'), 'heading');
  console.log(rest.has(document.querySelector('h1')));
  console.log(rest);

  //~ Assignments

  // Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:

  const initialData = [
    ['title', 'Clean Code'],
    ['author', 'Robert C. Martin'],
  ];

  const bookMap = new Map(initialData);
  console.log(bookMap);

  // book.set(initialData[0][0], initialData[0][1]).set(initialData[1][0], initialData[1][1]);

  // Set a new key in bookMap called pages, and assign it with a number 464.

  bookMap.set('pages', 464);
  console.log(bookMap);

  // Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".

  console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

  // Get the size of bookMap, and log it to the console.

  console.log(bookMap.size);

  // Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.

  bookMap.has('author')
    ? console.log('The author of the book is known')
    : console.log('The author of the book is not known');
}
