// Verify is provided value is a palindrome 

function poliNumber(num) {
  const numToString = String(num);
  let newValue = [];
  for (let i = 0; i < numToString.length; i++) {
    newValue.push(numToString[i]);
  }
  const formatValue = Number(newValue.reverse().join(''))
  if (formatValue === num) return true
  return false 
}

poliNumber(132);
