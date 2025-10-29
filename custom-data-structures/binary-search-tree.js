/**
 * Demonstrates a Binary Search Tree (BST) data structure.
 * Each node has at most two children: left and right.
 * The left child contains values less than the parent.
 * The right child contains values greater than the parent.
 * Common operations: insert, search, remove, findMin, findMax, traverseInOrder, traversePreOrder, traversePostOrder, traverseLevelOrder, height, isEmpty, clear, print.
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Node structure
  _createNode(value) {
    return { value, left: null, right: null };
  }

  // Insert a new value - O(log n) average
  insert(value) {
    const newNode = this._createNode(value);

    if (!this.root) {
      this.root = newNode;

      return;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        console.log("Duplicate value ignored:", value);

        return; // ignore duplicates
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;

          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;

          return;
        }

        current = current.right;
      }
    }
  }

  // Search for a value - O(log n) average
  search(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }

    return false;
  }

  // Find minimum value - O(log n)
  findMin(node = this.root) {
    if (!node) return null;

    while (node.left) node = node.left;

    return node.value;
  }

  // Find maximum value - O(log n)
  findMax(node = this.root) {
    if (!node) return null;

    while (node.right) node = node.right;

    return node.value;
  }

  // Remove a node by value - O(log n) average
  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (!node) return null;
    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
    } else {
      // Found node to remove
      if (!node.left && !node.right) {
        return null; // No children
      } else if (!node.left) {
        return node.right; // One child (right)
      } else if (!node.right) {
        return node.left; // One child (left)
      } else {
        // Two children: replace with inorder successor (smallest in right subtree)
        const minRightValue = this.findMin(node.right);
        node.value = minRightValue;
        node.right = this._removeNode(node.right, minRightValue);
      }
    }

    return node;
  }

  // In-order traversal (Left → Root → Right) - O(n)
  traverseInOrder(node = this.root, result = []) {
    if (!node) return result;

    this.traverseInOrder(node.left, result);
    result.push(node.value);
    this.traverseInOrder(node.right, result);

    return result;
  }

  // Pre-order traversal (Root → Left → Right) - O(n)
  traversePreOrder(node = this.root, result = []) {
    if (!node) return result;

    result.push(node.value);
    this.traversePreOrder(node.left, result);
    this.traversePreOrder(node.right, result);

    return result;
  }

  // Post-order traversal (Left → Right → Root) - O(n)
  traversePostOrder(node = this.root, result = []) {
    if (!node) return result;

    this.traversePostOrder(node.left, result);
    this.traversePostOrder(node.right, result);
    result.push(node.value);

    return result;
  }

  // Level-order (Breadth-first) traversal - O(n)
  traverseLevelOrder() {
    const result = [];
    const queue = [];

    if (this.root) queue.push(this.root);

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return result;
  }

  // Calculate height of tree - O(n)
  height(node = this.root) {
    if (!node) return 0;

    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  // Check if tree is empty - O(1)
  isEmpty() {
    return this.root === null;
  }

  // Remove all nodes - O(1)
  clear() {
    this.root = null;
  }

  // Print tree in-order - O(n)
  print() {
    const result = this.traverseInOrder();

    console.log(result.join(" → "));
  }
}
