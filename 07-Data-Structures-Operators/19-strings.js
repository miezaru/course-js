'use strict';
{
  // Data needed for a later exercise
  const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  //~ STRING METHODS PRACTICE

  const flightsNormalize = flightsStr => {
    const maxStrLength = 0;
    for (const flight of flightsStr.split('+')) {
      const [type, from, to, time] = flight.split(';');
      const getCode = str => str.slice(0, 3).toUpperCase();

      const normalizedType = type.replaceAll('_', ' ').trim();
      const nomalizedTime = time.replace(':', 'h');

      const output =
        `${normalizedType.startsWith('Delayed') ? '🔴 ' : ''}${normalizedType} from ${getCode(from)} to ${getCode(to)} (${nomalizedTime})`.padStart(
          50
        );

      console.log(output);
    }
  };

  flightsNormalize(flights);
}
