/** Demonstration of Set operations with minimal notes (Breaking Bad themed). */
const set = new Set(["Walter", "Jesse", "Saul"]);

// Add — O(1)
set.add("Gus");
set.add("Walter"); // ignored, duplicates are not allowed

// Has — O(1)
const hasSaul = set.has("Saul");

// Delete — O(1)
set.delete("Jesse");

// Size — O(1)
const count = set.size;

// Iterate — O(n)
for (const name of set) {
  console.log(name);
}

// Clear — O(n)
set.clear();
