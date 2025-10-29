/**
 * Demonstration of array operations and their complexities (Breaking Bad themed).
 */
const array = [
  "Walter White",
  "Jesse Pinkman",
  "Skyler White",
  "Saul Goodman",
  "Gus Fring",
];

// Accessing by index — O(1)
const thirdCharacter = array[2]; // "Skyler White"

// Updating by index — O(1)
array[0] = "Heisenberg"; // replace Walter's alias

// Inserting at the end (push) — O(1) amortized
array.push("Mike Ehrmantraut");

// Removing from the end (pop) — O(1)
const removedLast = array.pop(); // removes "Mike Ehrmantraut"

// Inserting in the middle (splice) — O(n)
array.splice(2, 0, "Hank Schrader");

// Removing from the middle (splice) — O(n)
const removedMiddle = array.splice(3, 1); // removes one element after insertion

// Inserting at the beginning (unshift) — O(n)
array.unshift("Tuco Salamanca"); // inserts "Tuco Salamanca" at the beginning

// Removing from the beginning (shift) — O(n)
const removedFirst = array.shift(); // removes "Walter White"

// Searching (linear) — O(n)
const indexOfGus = array.indexOf("Gus Fring");
const hasSaul = array.includes("Saul Goodman");

// Traversal (iteration) — O(n)
for (const name of array) {
  console.log(name);
}

// Other operations and their complexities:
// - array.sort() — O(n log n)
// - array.concat() — O(n)
// - array.slice() — O(n)
// - array.reverse() — O(n)
// - array.reduce() — O(n)
// - array.filter() — O(n)
// - array.map() — O(n)
// - array.forEach() — O(n)
// - array.find() — O(n)
// - array.findIndex() — O(n)
// - array.includes() — O(n)
// - array.indexOf() — O(n)
// - array.lastIndexOf() — O(n)
// - array.join() — O(n)
// - array.toString() — O(n)
