/**
 * Calculates the factorial of a number n (n!).
 * @param {number} n - The number to compute the factorial for. Must be a non-negative integer.
 * @returns {number} The factorial of n.
 * @throws {Error} If input is a negative number.
 * @description
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const factorial = (n) => {
  if (n < 0) {
    throw new Error("Input must be a positive integer");
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
};

/**
 * Calculates the factorial of a number n (n!) using recursion.
 * @param {number} n - The number to compute the factorial for. Must be a non-negative integer.
 * @returns {number} The factorial of n.
 * @throws {Error} If input is a negative number.
 * @description
 * Time Complexity: O(n)
 * Space Complexity: O(n) due to recursion stack
 */
const recursiveFactorial = (n) => {
  if (n < 0) {
    throw new Error("Input must be a positive integer");
  }

  if (n === 0 || n === 1) return 1;

  return n * recursiveFactorial(n - 1);
};
