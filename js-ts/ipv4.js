var defangIPaddr = function(address) {
  const re = /\./gi;
  return address.replace(re, '[.]')
};

defangIPaddr("1.1.1.1")
defangIPaddr("255.100.50.0")

/* 
Runtime: 72 ms, faster than 90.13% of JavaScript online submissions for Defanging an IP Address.
Memory Usage: 38.1 MB, less than 95.15% of JavaScript online submissions for Defanging an IP Address.
*/

