/**
 * Determines whether a given integer n is a prime number.
 * @param {number} n - The number to test for primality.
 * @returns {boolean} True if n is prime, otherwise false.
 * @description
 * Time Complexity: O(√n)
 * Space Complexity: O(1)
 */
const isPrime = (n) => {
  if (!Number.isInteger(n) || n <= 1) return false; // Non-integer or less than 1 are not prime
  if (n === 2) return true; // 2 is the only even prime number
  if (n % 2 === 0) return false; // All other even numbers are not prime

  const sqrt = Math.sqrt(n);

  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};
