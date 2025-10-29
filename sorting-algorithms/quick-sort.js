/**
 * Sorts an array in ascending order using the Quick Sort algorithm
 * @template T
 * @param {T[]} array - The array to sort.
 * @returns {T[]} The sorted array.
 * @description
 * Average Time Complexity: O(n log n)
 * Worst-case Time Complexity: O(n^2) (e.g., already sorted with poor pivot choice)
 * Space Complexity: O(log n) due to recursion stack
 */
const quickSort = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("Argument must be an array");
  }

  if (array.length <= 1) return array;

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};
