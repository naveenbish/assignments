/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
let numbers = [3, 7, 2, 9, 1];
function findLargestElement(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max)
      max = numbers[i]
  }
  return max
}
// console.log(findLargestElement(numbers));
module.exports = findLargestElement;
