/**
 * Generates the Fibonacci sequence up to the nth number.
 * @param {number} n - The number of terms to generate in the sequence. Must be a positive integer.
 * @returns {number[]} An array containing the Fibonacci sequence up to n terms.
 * @throws {Error} If input is a negative number.
 * @description
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const fibonacciSequence = (n) => {
  if (n < 0) {
    throw new Error("Input must be a positive integer");
  }

  const sequence = [];
  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);

    [a, b] = [b, a + b];
  }

  return sequence;
};
