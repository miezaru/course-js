'use strict';

{
  //_ Split
  console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']
  console.log('Artem Usatyi'.split(' '));

  const [firstName, lastName] = 'Artem Usatyi'.split(' ');
  console.log(firstName, lastName);

  //_ Join

  const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
  const newNameSym = ['Mr.', firstName, lastName.toUpperCase()].join('----');
  console.log(newName);
  console.log(newNameSym);

  const passanger = 'jessaca ann smith davis';

  const capitalizedName = function (name) {
    return name
      .toLowerCase()
      .split(' ')
      .map(name => name[0].toUpperCase() + name.slice(1))
      .join(' ');
  };

  console.log(capitalizedName(passanger));
  console.log(capitalizedName('artem usatyi'));

  //_ Padding
  const message = 'Go to gate 23';
  console.log(message.padStart(25, '+'));
  console.log('Artem'.padStart(25, '+').padEnd(35, '+'));

  const maskCreaditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
  };

  console.log(maskCreaditCard(4336845672362833));
  console.log(maskCreaditCard(4336833));
  console.log(maskCreaditCard('8473748574091384'));

  //_ Repeat
  const message2 = 'Bad weather... All Departues Delayed...';
  console.log(message2.repeat(5));

  const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
  };

  planesInLine(5);
  planesInLine(12);
  planesInLine(3);

  // for testing purposes
  console.log('Artem'.split('').reverse().join(''));

  //~ Assignments

  const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: ['J.K.Rowling', 'John Depp'],
      keywords: ['fantasy', 'paranormal'],
    },
    {
      title: 'Jurassic Park',
      author: ['Stephen King'],
      keywords: ['science-fiction', 'horror', 'paranormal'],
      publisher: { amazon: 'amazon', goodreads: 'goodreads' },
    },
  ];

  // Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

  // Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).

  const bookCategories =
    'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

  const logBookCategories = function (categories) {
    console.log(categories.split(';').forEach(e => console.log(e)));
    // return console.log(categories.replaceAll(';', ' '));
  };

  logBookCategories(bookCategories);

  // Now, the opposite. Each book from the books array has the keywords property.

  // Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.

  const getKeywordsAsString = function (booksArr) {
    const keywords = [];
    booksArr.forEach(book => keywords.push(...book.keywords));
    return [...new Set(keywords)].join(';');
  };

  console.log(getKeywordsAsString(books));

  const logBookChapters = function (chapters) {
    for (const [chapter, pages] of chapters) {
      console.log(`${chapter.padEnd(20, '_')}${pages}`);
    }
  };

  const bookChapters = [
    ['The Basics', 14],
    ['Sorting', 254],
    ['Searching', 372],
    ['Graphs', 526],
    ['Strings', 706],
  ];
  logBookChapters(bookChapters);
}
