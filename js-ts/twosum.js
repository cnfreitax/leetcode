// type Required = {
//   nums: number[]
//   target: number;
// }

function twoSum(nums, target) {
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const calcDiference = target - nums[i];
    console.log(target, nums[i])
    if (myMap.has(calcDiference)) {
      return [myMap.get(calcDiference), i];
    }
    myMap.set(nums[i], i);
  }
}

console.log(twoSum([2, 5, 6], 8));
