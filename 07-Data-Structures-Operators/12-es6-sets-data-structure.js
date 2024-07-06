'use strict';

{
  //~ SETS

  const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
  console.log(ordersSet);

  console.log(new Set('Artem')); // {'A', 'r', 't', 'e', 'm'}

  //_ Set size
  console.log(ordersSet.size); // 3

  //_ Set has
  console.log(ordersSet.has('Pizza')); // true
  console.log(ordersSet.has('Bread')); // false

  //_ Set add and remove
  ordersSet.add('Garlic Bread');
  ordersSet.add('Garlic Bread');
  ordersSet.delete('Risotto');
  console.log(ordersSet);

  //_ Set has no indexes (no way to get item from the set)
  console.log(ordersSet[0]); // undefined,

  //_ Looping like other iterables
  for (const order of ordersSet) {
    console.log(order);
  }

  ordersSet.clear();
  console.log(ordersSet);

  //_ Example
  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  const staffUnique = [...new Set(staff)];
  console.log(staffUnique);

  // how many unique positions
  console.log(new Set(staff).size); // 3
  console.log(new Set('Artem')); // 5
  console.log(new Set('Halloween')); // 7

  //~ Assignments

  const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: ['J.K.Rowling', 'John Depp'],
      keywords: ['fantasy', 'paranormal'],
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: ['J.K.Rowling', 'John Depp'],
      keywords: ['fantasy', 'history', 'drama', 'business'],
    },
  ];

  // Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

  const allKeywords = [];

  for (const book of books) {
    // book.keywords.forEach(keyword => allKeywords.push(keyword));
    allKeywords.push(...book.keywords);
  }

  // The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.

  const uniqueKeywords = new Set(allKeywords);
  console.log(uniqueKeywords);

  // Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.

  uniqueKeywords.add('coding');
  uniqueKeywords.add('science');
  console.log(uniqueKeywords);

  // Delete 'business' from the uniqueKeywords set.

  uniqueKeywords.delete('business');
  console.log(uniqueKeywords);

  // Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.

  const uniqueKeywordsArray = [...uniqueKeywords];
  console.log(uniqueKeywordsArray);

  // Delete all items from the uniqueKeywords set.
  uniqueKeywords.clear();
  console.log(uniqueKeywords);
}
