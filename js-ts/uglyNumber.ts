function isUgly(num: number): boolean {
  if (num === 1) return true
  if (num <= 0) return false
  
  const list = [2, 3 , 5]
  if(list.includes(num)) return true
  for (let i of list) {
      if (num % i === 0) return isUgly(num / i)

  }
  return false
};