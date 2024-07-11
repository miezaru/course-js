'use strict';

{
  const airline = 'TAP Air Portugal';

  console.log(airline.toLowerCase());
  console.log(airline.toUpperCase());
  console.log('artem'.toUpperCase());

  //_ Fix capitalization in name
  const passanger = 'aRtEm';
  const passangerLower = passanger.toLowerCase();
  const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1);
  console.log(passangerCorrect); // Artem

  //_ Comparing emails
  const email = 'hello@artem.io';
  const loginEmail = '  Hello@Artem.Io \n';

  const lowerEmail = loginEmail.toLowerCase();
  const trimmedEmail = lowerEmail.trim();
  console.log(trimmedEmail === email); // true

  const normalizedEmail = loginEmail.toLowerCase().trim();
  console.log(normalizedEmail);
  console.log(email === normalizedEmail); // true

  //_ Replacing
  const priceGB = '288,97£';
  const priceUS = priceGB.replace('£', '$').replace(',', '.');
  console.log(priceUS);

  const announcement = 'All passangers come to barding door 23. Boarding door 23!';
  console.log(announcement.replaceAll('door', 'gate'));

  // old method with regular expression
  console.log(announcement.replace(/door/g, 'gate'));

  //_ Methods return booleans
  // includes() startsWith, endsWith,

  const plane = 'Airbus A320neo';
  console.log(plane.includes('A320')); // true
  console.log(plane.includes('Boeing')); // false

  console.log(plane.startsWith('A320')); // false
  console.log(plane.startsWith('Airbus')); // true

  if (plane.startsWith('Airbus') && plane.endsWith('neo'))
    console.log('Part of the new airbus family');

  //_ Practice

  const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
      console.log('You are NOT allowed on board');
    } else console.log('Welcome aboard!');
  };

  checkBaggage('I have a laptop, some Food and a pocket Knife');
  checkBaggage('Socks and camera');
  checkBaggage('Got some snacks and a gun for protection');

  //~ Assignments

  const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: ['J.K.Rowling', 'Julie Sussman (Contributor)'],
      keywords: ['fantasy', 'paranormal'],
      ISBN: '9780439064866',
    },
    {
      title: 'Jurassic Programs',
      author: 'Stephen King',
      keywords: ['science-fiction', 'horror'],
      ISBN: '0345538986',
    },
  ];

  // Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

  // You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.

  const normalizeAuthorName = function (authorName) {
    const name = authorName
      .toLowerCase()
      .trim()
      .split(' ')
      .map(name => name[0].toUpperCase() + name.slice(1))
      .join(' ');

    if (name.lastIndexOf('(contributor)') === -1) {
      return name;
    } else {
      return (
        name.slice(0, name.lastIndexOf('(contributor)')) +
        name.slice(name.lastIndexOf('(contributor)') + '(contributor)'.length)
      );
    }
  };

  console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

  // Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.

  const newBookTitle = books[1].title.replace('Programs', 'Software');
  console.log(newBookTitle);

  const logBookTheme = function (title) {
    const titleLower = title.toLowerCase().trim();
    if (titleLower.startsWith('computer')) console.log('This book is about computers');
    else if (titleLower.includes('alghoritms') && titleLower.includes('structures'))
      console.log('This book is a about alghoritms and data structures');
    else if (
      (titleLower.endsWith('system') || titleLower.endsWith('systems')) &&
      !titleLower.includes('operating')
    )
      console.log('This book is about some systems, but definitely not about operating systems');
  };
}
