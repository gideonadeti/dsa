/**
 * Sorts an array in ascending order using the Insertion Sort algorithm (in-place).
 * @template T
 * @param {T[]} array - The array to sort (will be mutated).
 * @returns {T[]} The sorted array (same reference as input).
 * @description
 * Time Complexity: O(n^2) average/worst, O(n) best (nearly sorted)
 * Space Complexity: O(1)
 */
const insertionSort = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("Argument must be an array");
  }

  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
};
