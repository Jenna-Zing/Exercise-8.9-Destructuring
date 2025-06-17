# Exercise-8.9-Destructuring

Springboard SE Bootcamp - Exercise for Section 8.9 - Destructuring

Exercise Link: https://lessons.springboard.com/Destructuring-Exercise-a450c9fd2bf04addb12f144270a19ed7

## What I learned about Destructuring

### Object Destructuring

#### Basic Syntax

```
const user = { name: "Zara", age: 28 };

const { name, age } = user;
// name = "Zara", age = 28
```

This extracts out the properties name and age from the user object.

#### Renaming Properties

```
const user = { name: "Zara" };

const { name: username } = user;
// Creates a variable called `username`, not `name`
```

#### Default Values (objects version)

```
const user = { name: "Zara" };

const { name, age = 30 } = user;
// age defaults to 30 because it’s not defined in the object
```

#### Rest Operator

const settings = { theme: "dark", fontSize: 16, language: "en" };

const { theme, ...otherSettings } = settings;
// theme = "dark"
// otherSettings = { fontSize: 16, language: "en" }
The rest operator collects the rest of the object properties into a variable with the specified name.

#### Nested Destructuring

```
const config = { ui: { color: "blue", size: "large" } };

const {
  ui: { color }
} = config;
// color = "blue"
// `ui` is NOT created as a variable
```

#### In Function Parameters

```
function greet({ name, greeting = "Hello" }) {
  console.log(`${greeting}, ${name}!`);
}

greet({ name: "Zara" }); // "Hello, Zara!"
```

#### Safe Default Values to avoid Errors

```
function mixPotion({ ingredient1 = "Water", ingredient2 = "Fireflower" } = {}) {
  console.log(`Mixing ${ingredient1} and ${ingredient2}`);
}

mixPotion(); // Avoids TypeError by defaulting to an empty object
```

### Array Destructuring

#### Basic Syntax

```
const elements = ["Fire", "Water"];

const [first, second] = elements;
// first = "Fire", second = "Water"
```

#### Skipping Elements

```
const items = [1, 2, 3, 4];

const [first, , third] = items;
// first = 1, third = 3 (skips the second element)
```

Notice, this way you have to be good at counting and keeping track of the commas (this is not the recommended day!).

#### Rest Operator

```
const numbers = [1, 2, 3, 4];

const [first, ...rest] = numbers;
// first = 1, rest = [2, 3, 4]
```

The rest operator collects the remaining elements from the array into a new array.

#### Default Values (array version)

```
const inputs = ["onlyOne"];

const [first = "A", second = "B"] = inputs;
// first = "onlyOne", second = "B"
```

#### Swapping Values using Array (fancy oneliner, no temp variable)

```
let a = "Apple";
let b = "Banana";

[a, b] = [b, a];
// a = "Banana", b = "Apple"
```

#### In Function Parameters (arrays version)

```
function castSpell([first, second, ...rest]) {
  console.log(`Using ${first} and ${second}`);
  console.log(`Remaining ingredients: ${rest.join(", ")}`);
}

castSpell(["Eye of Newt", "Bat Wing", "Toadstool"]);
// Outputs first two, stores the rest
```

### Common Gotchas

| Case                           | Problem             | Solution                                             |
| ------------------------------ | ------------------- | ---------------------------------------------------- |
| Destructuring from `undefined` | `TypeError`         | Use a default object (`= {}`) in function parameters |
| Skipping too many items        | You get `undefined` | Use default values to fall back                      |
| Renamed property access        | `ReferenceError`    | You renamed it, so use the new name                  |

### Summary: Destructuring Patterns

Object Patterns:

```
const { a, b } = obj;
const { a: alias } = obj;
const { a = defaultVal } = obj;
const { a, ...rest } = obj;
function fn({ a, b = 2 } = {}) {}
```

Array Patterns:

```
const [a, b] = arr;
const [a, , c] = arr;
const [a = 1, b = 2] = arr;
const [a, ...rest] = arr;
[a, b] = [b, a]; // swap
function fn([a, b]) {}
```
