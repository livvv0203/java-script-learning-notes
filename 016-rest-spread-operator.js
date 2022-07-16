/* Spread is on right hand side */
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Pass the numbers into array
// Doing the opposite of the spread operator
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // Spreading numbers of x here

// Short circuiting
console.log(3 || "Olivia"); // 3
console.log("" || "Olivia"); // Olivia
console.log(true || 0); // True
console.log(undefined || null); // null

console.log(undefined || 0 || "" || "Hello" || 23 || null); // f, f, f, 'Hello'

console.log("Hello" && 23 && null && "jona"); // null

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

rest1.numGuest = rest1.numGuests || 10;
rest2.numGuest = rest1.numGuests || 10; // undefined and 10

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// Challenge - Football game
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Creating 2 players
const [players1, players2] = game.players;
console.log(players1, players2);
// Destructure
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Couti", "Periscic"];

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(game.scored);

// Looping array - 'for-of loop'
const playersNew = [...players1, ...players2];
console.log(playersNew);

for (const item of playersNew) {
  console.log(item);
}

for (const [i, el] of playersNew.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Chanllenge II
console.log('-------- Chanllenge II --------');

// 1. Loop the score array, Print all players to the console, i - key, player - value
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1 }: ${player}`);
}

// 2. Calculate the average odds
const odds = Object.values(game.odds);
let average = 0;

for(const odd of odds) {
    average += odd;
}

average /= odds.length;
console.log(average);

// 3. To print the content of object
for (const [team, odd]of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ... ${teamStr} ${odd}`);
}

















