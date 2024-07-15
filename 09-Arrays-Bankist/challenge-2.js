'use strict';

const calcAverageHumanAge = ages => {
  // 1
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));

  // 2
  const adults = humanAges.filter(age => age > 18);

  // 3
  const averageHumanAge = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  // 2 3. (2 + 3)/ 2 == 2.5 === 2/2 + 3/2 = 2.5

  return averageHumanAge;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
