/**
 * Performs a linear search on an array to find the first occurrence of a target value.
 * @template T
 * @param {T[]} array - The array to search through.
 * @param {T} target - The value to find in the array.
 * @returns {number} The index of the target if found; otherwise, -1.
 * @description
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const linearSearch = (array, target) => {
  if (!Array.isArray(array)) {
    throw new Error("First argument must be an array");
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }

  return -1;
};
