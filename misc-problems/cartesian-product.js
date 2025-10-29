/**
 * Computes the Cartesian product of two arrays.
 * @template A, B
 * @param {A[]} arrayA - The first array.
 * @param {B[]} arrayB - The second array.
 * @returns {Array<[A, B]>} An array of ordered pairs [a, b] for each a in arrayA and b in arrayB.
 * @description
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */
const cartesianProduct = (arrayA, arrayB) => {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    throw new Error("Both arguments must be arrays");
  }

  const result = [];

  for (const a of arrayA) {
    for (const b of arrayB) {
      result.push([a, b]);
    }
  }

  return result;
};
