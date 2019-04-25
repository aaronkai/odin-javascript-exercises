const reverseString = function(stringToReverse) {
  
  stringLength = stringToReverse.length - 1;
  let i;
  let newString = "";
  
  for (i = stringLength; i >= 0; i--) {
     newString = newString+stringToReverse[i];
  }
  return newString;
}

module.exports = reverseString
