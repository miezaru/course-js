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

// 01
const [players1, players2] = game.players;
console.log(players1, players2);

// 02
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);

// 03
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 04
const players1Final = [...players1, 'Thiago', 'Couthinho', 'Perisic'];
console.log(players1Final);

// 05
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 06
const printGoals = function (...players) {
  console.log(`Total goals: ${game.scored.length}`);

  players = players.filter((player, index) => {
    return players.indexOf(player) == index;
  });

  players.forEach(player => {
    const count = game.scored.filter(x => x == player).length;

    console.log(`${player}${count ? `, goals: ${count}` : ', no goals'}`);
  });
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimnich');
printGoals(...game.scored);

// 07
team1 < team2 && console.log('Team 1 is more likely to win');
