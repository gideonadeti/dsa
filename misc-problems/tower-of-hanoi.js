/**
 * Solves the Tower of Hanoi puzzle and prints the sequence of moves to the console.
 * @param {number} n - Number of disks (non-negative integer).
 * @param {string} fromPeg - The source peg label.
 * @param {string} toPeg - The destination peg label.
 * @param {string} auxPeg - The auxiliary peg label.
 * @description
 * Time Complexity: O(2^n)
 * Space Complexity: O(n) due to recursion stack
 */
const towerOfHanoi = (n, fromPeg, toPeg, auxPeg) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Number of disks must be a non-negative integer");
  }

  //   Base case: No disks to move
  if (n === 0) return;

  //   Step 1: Move n-1 disks from fromPeg to auxPeg
  towerOfHanoi(n - 1, fromPeg, auxPeg, toPeg);

  //   Step 2: Move nth disk from fromPeg to toPeg
  console.log(`Move disk ${n} from ${fromPeg} to ${toPeg}`);

  //   Step 3: Move n-1 disks from auxPeg to toPeg
  towerOfHanoi(n - 1, auxPeg, toPeg, fromPeg);
};
