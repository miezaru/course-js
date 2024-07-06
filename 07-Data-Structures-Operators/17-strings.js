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
}
