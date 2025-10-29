/**
 * Sorts an array in ascending order using the Bubble Sort algorithm (in-place).
 * @template T
 * @param {T[]} array - The array to sort (will be mutated).
 * @returns {T[]} The sorted array (same reference as input).
 * @description
 * Time Complexity: O(n^2) average/worst, O(n) best (already sorted)
 * Space Complexity: O(1)
 */
const bubbleSort = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("Argument must be an array");
  }

  const n = array.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];

        swapped = true;
      }
    }
  } while (swapped);

  return array;
};
