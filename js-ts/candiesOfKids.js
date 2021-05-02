var kidsWithCandies = function (candies, extraCandies) {
  const maxNumber = Math.max(...candies)

  const result = candies.map(candieOfKid => {
    const quantityCandiesToCompare = candieOfKid + extraCandies;
    if (quantityCandiesToCompare >= maxNumber) {
      return true
    } else {
      return false
    }
  })

  return result


};

kidsWithCandies([2, 3, 5, 1, 3], 3)