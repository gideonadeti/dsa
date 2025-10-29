/**
 * Demonstrates a Queue (FIFO - First In, First Out) using an object.
 * Both enqueue and dequeue are O(1).
 * Common operations: enqueue, dequeue, peek, isEmpty, size, clear, print.
 */
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // Enqueue (add to end) - O(1)
  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }

  // Dequeue (remove from front) - O(1)
  dequeue() {
    if (this.isEmpty()) return null;

    const value = this.items[this.front];

    delete this.items[this.front];

    this.front++;

    return value;
  }

  // Front (view first element) - O(1)
  front() {
    if (this.isEmpty()) return null;

    return this.items[this.front];
  }

  // isEmpty - O(1)
  isEmpty() {
    return this.rear === this.front;
  }

  // Size - O(1)
  size() {
    return this.rear - this.front;
  }

  // Clear - O(1)
  clear() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // Print elements - O(n)
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");

      return;
    }
    const result = [];

    for (let i = this.front; i < this.rear; i++) {
      result.push(this.items[i]);
    }

    console.log(result.join(" ← "));
  }
}
