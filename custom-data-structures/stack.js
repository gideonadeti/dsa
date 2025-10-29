/** Stack (array-backed) and their complexities
 * Common operations: push, pop, peek, size, isEmpty, clear
 */
class Stack {
  constructor() {
    this.items = [];
  }

  // Push — O(1)
  push(item) {
    this.items.push(item);
  }

  // Pop — O(1)
  pop() {
    return this.items.pop();
  }

  // Peek — O(1)
  peek() {
    return this.items[this.items.length - 1];
  }

  // Size — O(1)
  size() {
    return this.items.length;
  }

  // isEmpty — O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // Clear — O(n)
  clear() {
    this.items.length = 0;
  }
}
