var countMatches = function (items, ruleKey, ruleValue) {
  const typesIndex = {
    type: 0,
    color: 1,
    name: 2,
  }

  const has = []

  items.forEach((item) => {
    if (item[typesIndex[ruleKey]] === ruleValue) has.push(item)
  })
 
  return has.length
};

countMatches([["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], ruleKey = "type", ruleValue = "phone")