/* Task 1: Unveiling the Coordinates */
const coordinates = { x: 34, y: 42, z: 67 };
// TODO: Destructo has found a map with coordinates marked on it. Use object destructuring to extract the `x` and `y` coordinates from the given `coordinates` object. Print the coordinates.
console.log(`Task 1: Unveiling the Coordinates`);
const { x, y } = coordinates;
console.log(`Identified Coordinates: x = ${x}, y = ${y}.\n`);

/* Task 2: The Map of Secrets */
const locations = {
  first: "Cave of Wonders",
  second: "Lake of Mystery",
  third: "Mount of Ages",
  fourth: "Desert of Shadows",
};
// TODO: The map reveals several locations, but only the first two are significant for the quest. Use object destructuring with the rest parameter to isolate the `first` and `second` locations from the `locations` object, capturing the rest in a variable called `remaining`. Print the key locations.
console.log(`Task 2: The Map of Secrets`);
const { first, second, ...remaining } = locations;
console.log(`Key locations: ${first}, and ${second}.`);
console.log(`Remaining locations: `, remaining, `.\n`); // when using the rest operator to collect the remaining object parameters, they are stored in a new object with the given name (e.g. remaining)

/* Task 3: The Mysterious Door */
const doorCode = {
  upper: "Alpha",
  lower: "Omega",
};
// TODO: To open the Mysterious Door, a sequence is required, which might be incomplete. Use object destructuring to assign default values to ensure the door opens even if part of the code is missing. Make sure the `middle` defaults to one of the values from the `remaining` variable above if not provided. Print the door code sequence.
console.log(`Task 3: The Mysterious Door`);
const { upper, middle = remaining.fourth, lower } = doorCode;
console.log(`Door code sequence: ${upper}, ${middle}, ${lower}.\n`);

/* Task 4: The Guardian's Riddle */
const riddle = {
  ancientWord: "Sphinx",
  modernWord: "Cat",
};
// TODO: The guardian of an ancient library speaks in riddles. Use object destructuring to rename `ancientWord` to `translation` in the `riddle` object. Print the translation of the riddle.
console.log(`Task 4: The Guardian's Riddle`);
const { ancientWord: translation } = riddle;
console.log(`The guardian said: "${translation}".\n`);

/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];
// TODO: Inside the library, Destructo discovers an array that represents the elements needed to decipher the next clue. Use array destructuring to extract the first two elements. Print the essential elements.
console.log(`Task 5: The Array of Elements`);
const [firstElement, secondElement] = elements;
console.log(
  `The essential elements are: ${firstElement} and ${secondElement}.\n`
);

/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];
// TODO: Crossing the River of Reflections requires skipping certain stones. Use array destructuring to extract only the first and the sixth stones. Print the extracted stones.
console.log(`Task 6: Skipping Stones`);
const [firstStone, , , , , sixthStone] = stones; // array destructuring method - WARNING: difficult due to counting commas and readability issues
console.log(`You extracted the stones: ${firstStone} and ${sixthStone}.\n`);
/* PERSONAL NOTE TO SELF (TASK 6):
 * If not limited to array destructuring, it would have been easier to do...
 * const firstStone = stones[0];
 * const sixthStone = stones[5];
 */

/* Task 7: The Array of Shadows */
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];
// TODO: The Cave of Shadows hides more than it reveals. Use array destructuring with the rest parameter to separate the visible shadow (which is the first) from the hidden ones. Print the visible shadow and the hidden shadows.
console.log(`Task 7: The Array of Shadows`);
const [visibleShadow, ...hiddenShadows] = shadows;
console.log(
  `The visible shadow is: ${visibleShadow}.  The hidden shadows are: ${hiddenShadows.join(
    ", "
  )}.\n`
);

/* Task 8: The Wise Function */
// TODO: Destructo needs to decode ancient directions to continue his quest. Help him by writing a function `revealPath` that decodes and prints the direction and distance to travel. The function takes an object with `direction` and `distance` as parameters.
console.log(`Task 8: The Wise Function`);
function revealPath({ direction, distance }) {
  console.log(`Move ${distance} meters toward ${direction}.\n`);
}
revealPath({ direction: "West", distance: 80 });

/* Task 9: The Scroll of Defaults */
// TODO: Destructo finds an ancient scroll with a potion recipe, but some ingredients are missing. Write a function `mixPotion` that uses defaults "Water" and "Fireflower" for `ingredient1` and `ingredient2` if they are not specified and print those mixings. The function takes an object with these optional properties.
console.log(`Task 9: The Scroll of Defaults`);
function mixPotion({ ingredient1 = "Water", ingredient2 = "Fireflower" } = {}) {
  console.log(
    `To create a potion, I will mix some ${ingredient1} and ${ingredient2} for you!\n`
  );
}
mixPotion();
/* KEY NOTE TO SELF (TASK 9):
 * setting the "= {}" in the function parameters is essential!
 * It is so the parameter defaults to {} (empty object), and then the destructured properties use their own defaults ("Water", "Fireflower").
 *
 * Without the "= {}", you will receive a TypeError: Cannot destructure property 'ingredient1' of 'undefined', because
 * JavaScript tries to destructure from undefined (when no object is passed in), and that fails.
 */

/* Task 10: The Array Spell */
// TODO: At the gates of an ancient library, Destructo must cast a spell with the first two ingredients from a list given to him by a wise owl. Create a function `castSpell` that uses array destructuring to access these ingredients from an array and print the spell casting.
console.log(`Task 10: The Array Spell`);
function castSpell([
  firstIngredient,
  secondIngredient,
  ...remainingIngredients
]) {
  console.log(
    `Destructo cast a spell using the ingredients: ${firstIngredient} and ${secondIngredient}.`
  );
  console.log(
    `He stored the remaining ingredients back into his bag: ${remainingIngredients.join(
      ", "
    )}.\n`
  );
}
castSpell([
  "Blessed Rose Petals",
  "Amethyst",
  "Obsidian",
  "Rosemary",
  "Lavender",
  "Clear Quartz",
]);

/* Task 11: The Nested Secret */
const nestedSecret = { outer: { inner: "The Final Key" } };
// TODO: Behind the final door lies a nested artifact containing the ultimate clue. Use nested destructuring to extract `The Final Key`. Print the unveiled secret.
console.log(`Task 11: The Nested Secret`);
const {
  outer: { inner },
} = nestedSecret;
console.log(`The final door swung open, revealing "${inner}".\n`);
/*
 * Remember, the nested object destructuring reads it as follows:  "From nestedSecret, grab the outer property, then extract its inner property and assign it to a variable called inner"
 * (1) Extract the property "outer" from the "nestedSecret" object
 * (2) Destructure the property "inner" from that "outer" object
 * (3) Does NOT create a variable "outer" (so you will get a `ReferenceError: outer is not defined` if you try accessing it)
 * (4) Does create a variable called "inner"
 */
/* If you want to rename the value from "inner" to "nestedArtifact" for example, here's how you do it:
  const {
	outer: { inner: nestedArtifact },
  } = nestedSecret;
  console.log(`The final door swung open, revealing "${nestedArtifact}".\n`);
*/

/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";
// TODO: In the treasure chamber, two mystical stones control the treasure's safeguard. Use array destructuring to swap the values of `stoneA` and `stoneB`. Print the result of the swap.
console.log(`Task 12: The Swap of Fate`);
console.log(
  `In the treasure chamber lies two mystical stones.  Currently, A: ${stoneA} and B: ${stoneB}`
);
[stoneA, stoneB] = [stoneB, stoneA];
console.log(
  `The two mystical stones have been swapped!  It is now, A: ${stoneA} and B: ${stoneB}`
);
/*
 * Explanation (TASK 12)
 * You can swap two variables using Array Destructuring **instead** of using a temporary variable!
 * Syntax:  [a, b] = [b, a];
 * How to interpret this:
 *   (1) Right-hand side is evaluated first: Creates a new array [b, a] -- Example: a = 1, b = 2 so [b, a] = [2, 1]
 *   (2) The left-hand side is destructured, and we assign the value from step 1: [b, a] = [2, 1].
 *       (so this reads as [a, b] = [2, 1] for assignment).  Hence, swap is completed by setting [a, b] = [2, 1], so a = 2, b = 1 now.
 * This way, the two variables swap values -- all in one line, and no temporary variable needed!
 */
/* Swapping using Temporary Variables (requires multiple lines and a temporary variable!) 
 * 
let a = 1;
let b = 2;

let temp = a; // Save original value of a
a = b;        // Set a to value of b
b = temp;     // Set b to saved value of a

console.log(a); // 2
console.log(b); // 1
*/
