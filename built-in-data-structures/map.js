/** Demonstration of Map operations and their complexities (Breaking Bad themed). */

const map = new Map([
  ["heisenberg", "Walter White"],
  ["jesse", "Jesse Pinkman"],
  ["saul", "Saul Goodman"],
]);

// Set/Update — O(1)
map.set("gus", "Gus Fring");
map.set("heisenberg", "WW"); // update

// Support for non-string keys — O(1)
const keyObj = { crew: "cleanup" };
const keyFn = (x) => x;

map.set(keyObj, ["Mike", "Todd"]);
map.set(keyFn, "function key");

// Get — O(1)
const lawyer = map.get("saul");
const crew = map.get(keyObj);

// Has — O(1)
const hasGus = map.has("gus");

// Delete — O(1)
map.delete("jesse");

// Size — O(1)
const count = map.size;

// Iterate — O(n)
for (const [key, value] of map) {
  console.log(`${String(key)} => ${value}`);
}

// Clear — O(n)
map.clear();
