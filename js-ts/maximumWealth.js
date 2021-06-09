var maximumWealth = function (accounts) {
  const accountsTotal = accounts.map((account) => account.reduce((a, b) => a + b, 0))
  return Math.max.apply(null, accountsTotal)
};

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])) // 17