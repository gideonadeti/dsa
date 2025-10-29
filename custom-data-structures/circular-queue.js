/**
 * Demonstrates a Circular Queue (FIFO - First In First Out) using a fixed-size array.
 * Efficiently uses array space by wrapping around (circular indexing).
 * Common operations: enqueue, dequeue, front, isEmpty, isFull, size, clear, print.
 */
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
    this.currentLength = 0;
  }

  // Enqueue (add to end) - O(1)
  enqueue(item) {
    if (this.isFull()) {
      console.log("Queue is full");

      return;
    }

    this.items[this.rear] = item;
    this.rear = (this.rear + 1) % this.capacity; // wrap around
    this.currentLength++;
  }

  // Dequeue (remove from front) - O(1)
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");

      return null;
    }

    const value = this.items[this.front];
    this.items[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;

    return value;
  }

  // Peek (view first item) - O(1)
  peek() {
    if (this.isEmpty()) return null;

    return this.items[this.front];
  }

  // isEmpty - O(1)
  isEmpty() {
    return this.currentLength === 0;
  }

  // isFull - O(1)
  isFull() {
    return this.currentLength === this.capacity;
  }

  // Size - O(1)
  size() {
    return this.currentLength;
  }

  // Clear - O(1)
  clear() {
    this.items = new Array(this.capacity);
    this.front = 0;
    this.rear = 0;
    this.currentLength = 0;
  }

  // Print elements - O(n)
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");

      return;
    }

    let result = [];

    for (let i = 0; i < this.currentLength; i++) {
      result.push(this.items[(this.front + i) % this.capacity]);
    }

    console.log(result.join(" ← "));
  }
}
