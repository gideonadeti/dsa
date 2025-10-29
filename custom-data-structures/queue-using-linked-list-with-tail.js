import LinkedListWithTail from "./linked-list-with-tail";

/**
 * Demonstrates a Queue (FIFO - First In, First Out) using a LinkedListWithTail.
 * Efficiently enqueues at the tail and dequeues from the head in O(1) time.
 * Common operations: enqueue, dequeue, peek, isEmpty, size, clear, print.
 */
class QueueUsingLinkedListWithTail {
  constructor() {
    this.list = new LinkedListWithTail();
  }

  // Enqueue (add to end) - O(1)
  enqueue(value) {
    this.list.append(value);
  }

  // Dequeue (remove from front) - O(1)
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");

      return null;
    }

    const frontValue = this.list.head.value;
    this.list.removeAt(0);

    return frontValue;
  }

  // Peek (view front element) - O(1)
  peek() {
    if (this.isEmpty()) return null;

    return this.list.head.value;
  }

  // isEmpty - O(1)
  isEmpty() {
    return this.list.isEmpty();
  }

  // Size - O(1)
  size() {
    return this.list.size();
  }

  // Clear - O(1)
  clear() {
    this.list.clear();
  }

  // Print queue from front to rear - O(n)
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");

      return;
    }

    let current = this.list.head;
    const result = [];

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" ← ") + " (front)");
  }
}
