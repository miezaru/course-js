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

  //_ When we call methods on a strings, JavaScript behind the scenes converts this string into string object with the same content, and than on that object methods are called (Boxing), after calling convert back to a string
  //_ All strings returs primitives

  console.log(new String('artem'));
  console.log(typeof new String('artem')); // object
  console.log(typeof new String('artem').slice()); // string
}
