const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
for (const [key, value] of game.scored.entries()) {
  console.log(`Goal ${key + 1}: ${value}`);
}

// 2
let average = 0;
// let items = 0;
for (const value of Object.values(game.odds)) {
  average += value;
  // items++;
}
average /= Object.values(game.odds).length;
console.log(average.toFixed(2));

// 3
for (const [key, value] of Object.entries(game.odds)) {
  console.log(`Odd of ${game[key] ? `victory ${game[key]}:` : `draw:`} ${value}`);
}

// 4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
