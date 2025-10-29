/**
 * Sorts an array in ascending order using the Merge Sort algorithm.
 * @template T
 * @param {T[]} array - The array to sort.
 * @returns {T[]} A new sorted array.
 * @description
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
const mergeSort = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("Argument must be an array");
  }

  if (array.length <= 1) return array;

  const midIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midIndex);
  const rightArray = array.slice(midIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

/**
 * Merges two sorted arrays into a single sorted array.
 * @template T
 * @param {T[]} leftArray - The left sorted array.
 * @param {T[]} rightArray - The right sorted array.
 * @returns {T[]} The merged sorted array.
 */
const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      sortedArray.push(leftArray[leftIndex]);

      leftIndex++;
    } else {
      sortedArray.push(rightArray[rightIndex]);

      rightIndex++;
    }
  }

  return [
    ...sortedArray,
    ...leftArray.slice(leftIndex),
    ...rightArray.slice(rightIndex),
  ];
};
