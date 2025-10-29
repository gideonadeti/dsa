/**
 * Computes the number of distinct ways to climb a staircase of n steps
 * when you can take either 1 or 2 steps at a time (classic Climbing Stairs).
 * @param {number} n - The total number of steps (non-negative integer).
 * @returns {number} The number of distinct ways to reach the top.
 * @description
 * Iterative DP (Fibonacci-like):
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const climbingStaircase = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }

  if (n === 0 || n === 1) return 1; // 1 way (do nothing or take 1 step)

  let waysMinusTwo = 1; // ways(0)
  let waysMinusOne = 1; // ways(1)

  for (let i = 2; i <= n; i++) {
    const current = waysMinusOne + waysMinusTwo; // ways(i-1) + ways(i-2)
    waysMinusTwo = waysMinusOne;
    waysMinusOne = current;
  }

  return waysMinusOne;
};
