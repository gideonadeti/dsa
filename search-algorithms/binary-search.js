/**
 * Performs binary search on a sorted (ascending) array to find a target value.
 * @template T
 * @param {T[]} array - The sorted array (ascending) to search.
 * @param {T} target - The value to find in the array.
 * @returns {number} The index of the target if found; otherwise, -1.
 * @description
 * Requires the array to be sorted in non-decreasing order.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
const binarySearch = (array, target) => {
  if (!Array.isArray(array)) {
    throw new Error("First argument must be an array");
  }

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const midValue = array[midIndex];

    if (midValue === target) return midIndex;
    if (midValue < target) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }

  return -1;
};
