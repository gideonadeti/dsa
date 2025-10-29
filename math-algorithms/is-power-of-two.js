/**
 * Determines whether a given integer n is a power of two (standard version).
 * @param {number} n - The number to test.
 * @returns {boolean} True if n is a power of two, otherwise false.
 * @description
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
const isPowerOfTwo = (n) => {
  if (!Number.isInteger(n) || n <= 0) return false;

  while (n % 2 === 0) {
    n /= 2;
  }

  return n === 1;
};

/**
 * Determines whether a given integer n is a power of two (bitwise version).
 * @param {number} n - The number to test.
 * @returns {boolean} True if n is a power of two, otherwise false.
 * @description
 * Uses the property that powers of two have exactly one bit set.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
const isPowerOfTwoBitwise = (n) => {
  if (!Number.isInteger(n) || n <= 0) return false;

  return (n & (n - 1)) === 0;
};
