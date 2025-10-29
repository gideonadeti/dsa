/**
 * Demonstrates a Doubly Linked List data structure.
 * Each node has pointers to both next and previous nodes.
 * Supports efficient O(1) insertion/removal at both ends.
 * Common operations: append, prepend, insertAt, removeAt, removeValue, search, reverse, isEmpty, size, clear, printForward, printBackward.
 */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Node structure
  _createNode(value) {
    return { value, next: null, prev: null };
  }

  // Append (add to end) - O(1)
  append(value) {
    const newNode = this._createNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
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
      this.head.prev = newNode;
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
    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;
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

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null; // list became empty
      }
    } else if (index === this.length - 1) {
      removedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let current = this.head;
      let count = 0;

      while (count < index) {
        current = current.next;
        count++;
      }

      removedNode = current;
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.length--;

    return removedNode.value;
  }

  // Remove by value - O(n)
  removeValue(value) {
    if (this.isEmpty()) return null;

    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = current.next;

          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null;
          }
        } else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        this.length--;

        return value;
      }

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

    let current = this.head;
    let temp = null;

    // Swap next and prev for each node
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    // Swap head and tail
    if (temp) this.head = temp.prev;
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

  // Print all nodes from head to tail - O(n)
  printForward() {
    if (this.isEmpty()) {
      console.log("List is empty");

      return;
    }

    let current = this.head;
    const result = [];

    while (current) {
      result.push(current.value);

      current = current.next;
    }

    console.log(result.join(" → "));
  }

  // Print all nodes from tail to head - O(n)
  printBackward() {
    if (this.isEmpty()) {
      console.log("List is empty");

      return;
    }

    let current = this.tail;
    const result = [];

    while (current) {
      result.push(current.value);

      current = current.prev;
    }

    console.log(result.join(" ← "));
  }
}
