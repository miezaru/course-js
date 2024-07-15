'use strict';

const checkDogs = (dogsJulia, dogsKate) => {
  // 1
  const onlyDogsJulia = dogsJulia.slice(1, -2);

  // const dogsJuliaCorrected = dogsJulia.slice();
  // dogsJuliaCorrected.splice(0, 1);
  // dogsJuliaCorrected.splice(-2);

  // 2
  const allDogs = [...onlyDogsJulia, ...dogsKate];
  // const allDogs = dogsJuliaCorrected.concat(dogsKate);

  console.log(allDogs);

  //3
  allDogs.forEach((yearsOld, i) => {
    yearsOld >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${yearsOld} years old 🐶`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐕`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
