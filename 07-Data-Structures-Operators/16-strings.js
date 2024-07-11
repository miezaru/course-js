'use strict';

{
  const airline = 'TAP Air Portugal';
  const plane = 'A320';

  //_ Take elements from strings
  console.log(plane[0]); // A
  console.log(plane[1]); // B
  console.log('B737'[0]); // B

  //_ length
  console.log(airline.length); // 16
  console.log('B737 '.length); // 5

  //_ indexOf && lastIndexOf
  console.log(airline.indexOf('r')); // 6
  console.log(airline.lastIndexOf('r')); // 10
  console.log(airline.indexOf('Portugal')); // 8
  console.log(airline.indexOf('portugal')); // -1

  //_ slice(where extraction should start, end parameter)
  // slice length = end - start
  console.log(airline.slice(4)); // Air Portugal
  console.log(airline.slice(4, 7)); // Air

  console.log(airline.slice(0, airline.indexOf(' '))); // TAP
  console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

  console.log(airline.slice(-2)); // al
  console.log(airline.slice(1, -1)); // AT Air Portugal

  const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('You got the middle seat 🥲');
    else console.log('You got lucky 😎');
  };

  checkMiddleSeat('11B');
  checkMiddleSeat('23C');
  checkMiddleSeat('3E');

  //_ When we call methods on a strings, JavaScript behind the scenes converts this string into string object with the same content, and then on that object methods are called (Boxing), after calling convert back to a string
  //_ All strings returs primitives

  console.log(new String('artem'));
  console.log(typeof new String('artem')); // object
  console.log(typeof new String('artem').slice()); // string

  //~ Assignments

  const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: ['J.K.Rowling', 'Julie Sussman (Contributor)'],
      keywords: ['fantasy', 'paranormal'],
      ISBN: '9780439064866',
    },
    {
      title: 'Jurassic Park',
      author: 'Stephen King',
      keywords: ['science-fiction', 'horror'],
      ISBN: '0345538986',
    },
  ];

  // Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

  console.log(books[0].ISBN[6], books[0].ISBN[4], books[0].ISBN[9], books[0].ISBN[8]);

  // Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.

  const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';

  console.log(quote.indexOf('chess'));

  // Extract the word "boxing" from the same quote string, and log it to the console.

  console.log(quote.slice(quote.indexOf('boxing'), quote.indexOf('boxing') + 'boxing'.length));

  //

  const isContributor = author => {
    if (typeof author === 'string') {
      // return console.log(author.lastIndexOf('(Contributor)' || 'contributor') ? true : false);
      if (author.slice(-'(Contributor)'.length) === '(Contributor)') console.log(author, true);
      else console.log(author, false);
    }

    if (typeof author === 'object') {
      for (const a of author) {
        if (a.slice(-'(Contributor)'.length) === '(Contributor)') console.log(a, true);
        else console.log(a, false);
      }
    }
  };

  function isContributor2(author) {
    return console.log(author.lastIndexOf('(Contributor)') !== -1);
  }

  isContributor('Julie Sussman (Contributor)');
  isContributor(books[0].author);
  isContributor2('Julie Sussman (Contributor)');
}
