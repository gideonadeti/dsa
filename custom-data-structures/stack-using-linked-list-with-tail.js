import LinkedListWithTail from "./linked-list-with-tail";

/**
 * Demonstrates a Stack (LIFO - Last In, First Out) using a LinkedListWithTail.
 * Push and pop operations are performed at the head for O(1) efficiency.
 * Common operations: push, pop, peek, isEmpty, size, clear, print.
 */
class StackUsingLinkedListWithTail {
  constructor() {
    this.list = new LinkedListWithTail();
  }

  // Push (add to top) - O(1)
  push(value) {
    this.list.prepend(value);
  }

  // Pop (remove from top) - O(1)
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");

      return null;
    }

    const topValue = this.list.head.value;

    this.list.removeAt(0);

    return topValue;
  }

  // Peek (view top element) - O(1)
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

  // Print stack from top to bottom - O(n)
  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");

      return;
    }

    let current = this.list.head;
    const result = [];

    while (current) {
      result.push(current.value);

      current = current.next;
    }

    console.log(result.join(" → ") + " (top)");
  }
}
