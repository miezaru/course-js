{
  const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

  // 1
  const events = [...new Set(gameEvents.values())];
  console.log(events);

  // 2
  gameEvents.delete(64);
  console.log(gameEvents);

  // 3
  const gameMin = [...gameEvents.keys()].pop();
  const averageEventTime = gameMin / gameEvents.size;
  console.log(`An event happened, on average, every ${averageEventTime} minutes.`);

  // 4
  for (const [min, event] of gameEvents.entries()) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
  }

  // console.log(new Set(Object.values({ a: 1, b: 1, c: 3 })));
  // console.log(gameEvents.values());
  // console.log(new Set(gameEvents.values()));
  // console.log(new Set());
}
