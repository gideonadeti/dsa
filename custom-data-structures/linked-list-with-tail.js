/**
 * Demonstrates a Singly Linked List with both head and tail pointers.
 * Provides O(1) append operation using the tail reference.
 * Common operations: append, prepend, insertAt, removeAt, removeValue, search, reverse, isEmpty, size, clear, print.
 */
class LinkedListWithTail {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Node structure
  _createNode(value) {
    return { value, next: null };
  }

  // Append (add to end) - O(1)
  append(value) {
    const newNode = this._createNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Prepend (add to beginning) - O(1)
  prepend(value) {
    const newNode = this._createNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  // Insert at index - O(n)
  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      console.log("Index out of bounds");

      return;
    }

    if (index === 0) {
      this.prepend(value);

      return;
    }

    if (index === this.length) {
      this.append(value);

      return;
    }

    const newNode = this._createNode(value);
    let previous = null;
    let current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = newNode;
    newNode.next = current;
    this.length++;
  }

  // Remove at index - O(n)
  removeAt(index) {
    if (index < 0 || index >= this.length) {
      console.log("Index out of bounds");

      return null;
    }

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;

      if (this.length === 1) this.tail = null;
    } else {
      let previous = null;
      let current = this.head;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      removedNode = current;
      previous.next = current.next;

      if (index === this.length - 1) this.tail = previous;
    }

    this.length--;

    return removedNode.value;
  }

  // Remove by value - O(n)
  removeValue(value) {
    if (this.isEmpty()) return null;
    if (this.head.value === value) {
      this.head = this.head.next;

      if (!this.head) this.tail = null;

      this.length--;

      return value;
    }

    let previous = this.head;
    let current = this.head.next;

    while (current) {
      if (current.value === value) {
        previous.next = current.next;

        if (current === this.tail) this.tail = previous;

        this.length--;

        return value;
      }

      previous = current;
      current = current.next;
    }

    console.log("Value not found");

    return null;
  }

  // Search for value - O(n)
  search(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;

      current = current.next;
      index++;
    }

    return -1; // not found
  }

  // Reverse the linked list - O(n)
  reverse() {
    if (this.isEmpty() || !this.head.next) return;

    let previous = null;
    let current = this.head;
    let next = null;
    this.tail = this.head; // old head becomes new tail

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  // isEmpty - O(1)
  isEmpty() {
    return this.length === 0;
  }

  // Size - O(1)
  size() {
    return this.length;
  }

  // Clear - O(1)
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Print all nodes - O(n)
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");

      return;
    }

    let result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result.join(" → "));
  }
}
