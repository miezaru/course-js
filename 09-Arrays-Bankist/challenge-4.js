'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
const calcRecommendedPortion = dogs => {
  return dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
  // operator ~~ more faster then Math.trunc
};

calcRecommendedPortion(dogs);
console.log(dogs);

// 2
const sarahDogResult = dogs => {
  const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

  console.log(`Sarah dog eating too ${sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'}`);
};

sarahDogResult(dogs);

// 3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);

// 4
console.log(`
${ownersEatTooMuch.join(' and ')}'s dogs eat too much!
${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5
const okayPortion = dogs => {
  dogs.some(dog =>
    // 6
    console.log(
      `${dog.owners.join(' and ')}'s dog eating ${dog.curFood === dog.recFood ? '' : 'not'} exactly recommended amount of food`
    )
  );
};

okayPortion(dogs);

const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7
console.log(dogs.filter(checkEatingOkay));

// 8
const dogsCopy = [...dogs];

dogsCopy.sort((dog1, dog2) => {
  if (dog1.recFood > dog2.recFood) {
    return 1;
  }
  if (dog1.recFood < dog2.recFood) {
    return -1;
  }
});
console.log(dogsCopy);

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
