const removeFromArray = function(providedArray, valueToRemove) {
    if (arguments.length == 2) {
      let index = providedArray.indexOf(valueToRemove)
      return newProvidedArray.splice(index, 1)
    }
    else {
      let newProvidedArray = arguments.shift();
      for (let i = 0; i < arguments.length; i++) {}
        index = providedArray.indexOf(valueToRemove);
        newProvidedArray.splice(index, 1)
    }
        
      
    }
}

console.log(removeFromArray([4,3,2,1], 3))
module.exports = removeFromArray