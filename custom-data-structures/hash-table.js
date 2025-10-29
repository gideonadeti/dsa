/**
 * Demonstrates a Hash Table (Hash Map) data structure.
 * Uses an array of buckets where each bucket stores key-value pairs.
 * Handles collisions using separate chaining (linked list of pairs).
 * Common operations: set, get, remove, hasKey, keys, values, entries, size, clear, print.
 */
class HashTable {
  constructor(size = 16) {
    this.buckets = new Array(size);
    this.sizeCount = 0;
  }

  // Basic hash function (converts key into a numeric index)
  _hash(key) {
    let hash = 0;
    const stringKey = String(key);

    for (let i = 0; i < stringKey.length; i++) {
      hash = (hash + stringKey.charCodeAt(i) * i) % this.buckets.length;
    }

    return hash;
  }

  // Set (insert or update key-value pair) - O(1) average
  set(key, value) {
    const index = this._hash(key);

    if (!this.buckets[index]) this.buckets[index] = [];

    // Check if key already exists → update value
    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        pair[1] = value;

        return;
      }
    }

    // Otherwise insert new key-value pair
    this.buckets[index].push([key, value]);
    this.sizeCount++;
  }

  // Get value by key - O(1) average
  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return undefined;

    for (let pair of bucket) {
      if (pair[0] === key) return pair[1];
    }

    return undefined;
  }

  // Remove key-value pair - O(1) average
  remove(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.sizeCount--;

        if (bucket.length === 0) this.buckets[index] = undefined;

        return true;
      }
    }

    return false;
  }

  // Check if key exists - O(1) average
  hasKey(key) {
    return this.get(key) !== undefined;
  }

  // Return all keys - O(n)
  keys() {
    const keysArray = [];

    for (let bucket of this.buckets) {
      if (bucket) {
        for (let pair of bucket) {
          keysArray.push(pair[0]);
        }
      }
    }

    return keysArray;
  }

  // Return all values - O(n)
  values() {
    const valuesArray = [];

    for (let bucket of this.buckets) {
      if (bucket) {
        for (let pair of bucket) {
          valuesArray.push(pair[1]);
        }
      }
    }

    return valuesArray;
  }

  // Return all key-value pairs as [key, value] arrays - O(n)
  entries() {
    const entriesArray = [];

    for (let bucket of this.buckets) {
      if (bucket) {
        for (let pair of bucket) {
          entriesArray.push(pair);
        }
      }
    }

    return entriesArray;
  }

  // Get number of key-value pairs - O(1)
  size() {
    return this.sizeCount;
  }

  // Remove all items - O(1)
  clear() {
    this.buckets = new Array(this.buckets.length);
    this.sizeCount = 0;
  }

  // Print all key-value pairs - O(n)
  print() {
    const pairs = [];

    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];

      if (bucket) {
        for (let [key, value] of bucket) {
          pairs.push(`${key}: ${value}`);
        }
      }
    }

    console.log(pairs.join(" | "));
  }
}
