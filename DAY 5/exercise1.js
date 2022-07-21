//EXERCISE 1

function modifyArray(nums) {
  for (n in nums) {
    nums[n] % 2 === 0 ? (nums[n] *= 2) : (nums[n] *= 3);
  }
  return nums;
}
console.log(modifyArray([1, 2, 3, 4, 5])); //[ 3, 4, 9, 8, 15 ]

// OTHER WAY TO SOLVE
// function modifyArray(nums) {
//   let count = 0;
//   while (count < nums.length) {
//     nums[count] % 2 === 0 ? (nums[count] *= 2) : (nums[count] *= 3);
//     count++;
//   }
//   return nums;
// }
// console.log(modifyArray([1, 2, 3, 4, 5])); //[ 3, 4, 9, 8, 15 ]
