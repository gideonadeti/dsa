/**
 * Computes the nth Fibonacci number.
 * @param {number} n - The index (0-based) of the Fibonacci number to compute. Must be a non-negative integer.
 * @returns {number} The nth Fibonacci number.
 * @throws {Error} If input is a negative number.
 * @description
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const nthFibonacci = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a positive integer");
  }

  if (n === 0 || n === 1) return n;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }

  return b;
};

/**
 * Computes the nth Fibonacci number using recursion.
 * @param {number} n - The index (0-based) of the Fibonacci number to compute. Must be a non-negative integer.
 * @returns {number} The nth Fibonacci number.
 * @throws {Error} If input is a negative number.
 * @description
 * Time Complexity: O(2^n)
 * Space Complexity: O(n) due to recursion stack
 */
const recursiveNthFibonacci = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a positive integer");
  }

  if (n === 0 || n === 1) return n;

  return recursiveNthFibonacci(n - 1) + recursiveNthFibonacci(n - 2);
};
