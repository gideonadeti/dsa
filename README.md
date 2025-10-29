# DSA

Learning DSA with JavaScript implementations of core data structures and algorithms.

## Overview

This repository contains clear, readable implementations for learning and practicing:

- Custom data structures (linked lists, stacks, queues, hash tables, trees, graphs)
- Classic algorithms (sorting, searching, math utilities)
- Small practice problems (e.g., Tower of Hanoi)

## Directory structure

- `custom-data-structures/` — Standalone implementations of common data structures
- `built-in-data-structures/` — Examples using JavaScript's built-ins as data structures
- `sorting-algorithms/` — Sorting implementations (merge sort, quick sort, etc.)
- `search-algorithms/` — Searching implementations (linear/binary search)
- `math-algorithms/` — Math helpers (prime check, Fibonacci, powers of two)
- `misc-problems/` — Miscellaneous practice problems

## Implementations

### Custom data structures

- `custom-data-structures/linked-list.js`
- `custom-data-structures/linked-list-with-tail.js`
- `custom-data-structures/doubly-linked-list.js`
- `custom-data-structures/stack.js`
- `custom-data-structures/stack-using-linked-list-with-tail.js`
- `custom-data-structures/queue.js`
- `custom-data-structures/optimized-queue.js`
- `custom-data-structures/circular-queue.js`
- `custom-data-structures/queue-using-linked-list-with-tail.js`
- `custom-data-structures/hash-table.js`
- `custom-data-structures/binary-search-tree.js`
- `custom-data-structures/graph.js`

### Built-in data structure demos

- `built-in-data-structures/array.js`
- `built-in-data-structures/object.js`
- `built-in-data-structures/map.js`
- `built-in-data-structures/set.js`

### Sorting algorithms

- `sorting-algorithms/bubble-sort.js`
- `sorting-algorithms/insertion-sort.js`
- `sorting-algorithms/merge-sort.js`
- `sorting-algorithms/quick-sort.js`

### Search algorithms

- `search-algorithms/linear-search.js`
- `search-algorithms/binary-search.js`

### Math algorithms

- `math-algorithms/fibonacci-sequence.js`
- `math-algorithms/nth-fibonacci.js`
- `math-algorithms/factorial.js`
- `math-algorithms/is-prime.js`
- `math-algorithms/is-power-of-two.js`

### Misc problems

- `misc-problems/cartesian-product.js`
- `misc-problems/climbing-staircase.js`
- `misc-problems/tower-of-hanoi.js`

## How to run

These files are plain JavaScript modules. You can run any file directly with Node.js:

```bash
node path/to/file.js
```

Examples:

- Run merge sort: `node sorting-algorithms/merge-sort.js`
- Try the hash table: `node custom-data-structures/hash-table.js`

If a file exports functions or classes, you can also import them into your own scripts using `require` or `import` depending on your Node.js setup.

## Goals

- Prioritize clarity and pedagogy over micro-optimizations
- Keep APIs small and focused
- Use descriptive names and guard clauses for readability

## License

See `LICENSE` for details.
