/**
 * Demonstrates a Queue (FIFO - First In First Out) using an array.
 * Common operations: enqueue, dequeue, front, isEmpty, size.
 */
class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue (add to end) - O(1)
  enqueue(item) {
    this.items.push(item);
  }

  // Dequeue (remove from front) - O(n)
  dequeue() {
    return this.items.shift(); // shifting requires re-indexing
  }

  // Front (view first item) - O(1)
  front() {
    return this.items[0];
  }

  // isEmpty - O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // Size - O(1)
  size() {
    return this.items.length;
  }

  // Clear - O(1)
  clear() {
    this.items = [];
  }

  // Print items - O(n)
  print() {
    console.log(this.items.join(" ← "));
  }
}
