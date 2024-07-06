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
}
