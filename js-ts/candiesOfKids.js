var kidsWithCandies = function (candies, extraCandies) {
  console.time('Opa')
  const maxNumber = Math.max(...candies)

  const result = candies.map(candieOfKid => {
    const quantityCandiesToCompare = candieOfKid + extraCandies;
    if (quantityCandiesToCompare >= maxNumber) {
      return true
    } else {
      return false
    }
  })

  console.timeEnd('Opa')
  return result


};

kidsWithCandies([2, 3, 5, 1, 3], 3)