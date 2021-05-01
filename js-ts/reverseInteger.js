function reverse(n) {
  let numberReverse = 0;
  const sign = n < 0;
  const haxNumber = 0x7fffffff;

  n = Math.abs(n);
  while (n) {
    numberReverse = numberReverse * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return reverse > haxNumber ? 0 : sign ? -numberReverse : numberReverse;
}

// console.log(reverse(901000));
console.log(reverse(-123));
