function modifyArray(nums) {
  let count = 0;
  while (count < nums.length) {
    nums[count] % 2 === 0
      ? (nums[count] = nums[count] * 2)
      : (nums[count] = nums[count] * 3);
    count++;
  }
  return nums;
}
console.log(modifyArray([1, 2, 3, 4, 5]));