var runningSum = function (nums) {
  const results = []
  for (let num = 0; num < nums.length; num++) {
    const selectedNum = nums[num]
    let counter = 0
    let result = nums[num]

    while (counter < nums.indexOf(selectedNum, num)) {
      result += nums[counter]
      counter++
    };

    results.push(result)
  }
  console.log(results)
  return results
};
''

runningSum([1, 2, 3, 4]) // [ 1, 3, 6, 10 ]
runningSum([1, 1, 1, 1, 1]) // [ 1, 2, 3, 4, 5 ]
runningSum([3, 1, 2, 10, 1]) // [ 3, 4, 6, 16, 17 ]

/*
  Dadi array de número nums[]
  para cada número retorne a some dele com os anteriores
  de forma acumulativa
*/