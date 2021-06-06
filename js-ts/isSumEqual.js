var isSumEqual = function (firstWord, secondWord, targetWord) {

  const quantityFromAlpahbet = Array.from(Array(10)).map((e, i) => i + 65);
  const alphabet = quantityFromAlpahbet.map((position) => String.fromCharCode(position).toLowerCase());
  
  const getValueWord = (word) => {
    const total = Array.from(word).map(letter => {
      return alphabet.indexOf(letter)
    })
    return Number(total.join(''));
  }

  let firstWordValue = getValueWord(firstWord);
  let secondWordValue = getValueWord(secondWord);
  let targetWordValue = getValueWord(targetWord);

  return ((firstWordValue + secondWordValue) === targetWordValue);
};

isSumEqual('abc', 'cba', 'aaa')
// return false
