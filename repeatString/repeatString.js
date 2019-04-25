let i;

const repeatString = function(stringToRepeat, repititions) {
  if (repititions >= 0) {
    let finalString = ""
    for (i = 0; i < repititions; i++) {
      finalString = finalString+stringToRepeat;
    } 
    return finalString;
  }
  else {
    return "ERROR"
  }
}

module.exports = repeatString
