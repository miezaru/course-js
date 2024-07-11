'use strict';

{
  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

  //~ MAPS: ITERATION

  const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    [4, 'Python'],
    [5, 'C++'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again...'],
  ]);

  console.log(question);

  //_ Map structure is the same as Object.entries() returns
  console.log(Object.entries(openingHours));

  //_ Convert object to map
  const hoursMap = new Map(Object.entries(openingHours));
  console.log(hoursMap);

  //_ Looping through map
  console.log(question.get('question'));
  for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  }

  const answer = Number(prompt('Your answer'));
  console.log(answer);

  // if (answer === question.get('correct')) console.log(question.get(true));
  console.log(question.get(answer === question.get('correct')));

  //_ Map to array
  console.log([...question]);

  //_ Keys, values, entries
  console.log([...question.keys()]);
  console.log([...question.values()]);
  console.log([...question.entries()]);

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
      keywords: ['science-fiction', 'horror'],
      publisher: { amazon: 'amazon', goodreads: 'goodreads' },
    },
  ];

  // Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.

  const firstBookMap = new Map(Object.entries(books[0]));
  firstBookMap.set(1, 'number key');
  console.log(firstBookMap);

  // Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.

  for (const [key, value] of firstBookMap) {
    if (typeof key === 'number') console.log(key);
  }
}
