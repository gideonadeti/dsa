/** Demonstration of Object operations with minimal notes (Breaking Bad themed). */
const object = {
  heisenberg: "Walter White",
  jesse: "Jesse Pinkman",
  saul: "Saul Goodman",
  count: 99,
  isDanger: true,
  crew: ["Walt", "Jesse", "Mike"],
  meta: { city: "Albuquerque", state: "NM" },
  cookedOn: new Date("2008-01-20"),
  nullable: null,
  undef: undefined,
  "famous saying": "Say my name",
  speak: (name) => `I am ${name}.`,
  greet() {
    return "Yeah Science!";
  },
};

// Access — O(1)
const lawyer = object.saul;
const phrase = object["famous saying"];

// Insert — O(1)
object.gus = "Gus Fring";

// Update — O(1)
object.heisenberg = "WW";

// Function access — O(1)
const line = object.speak("Heisenberg");
const hype = object.greet();

// Existence — O(1)
const hasMike = object.hasOwnProperty("mike");
const hasGus = "gus" in object;

// Delete — O(1)
delete object.count;

// Traverse — O(n)
for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}

// Other operations and their complexities - all O(n)
// - Object.keys(object)
// - Object.values(object)
// - Object.entries(object)
