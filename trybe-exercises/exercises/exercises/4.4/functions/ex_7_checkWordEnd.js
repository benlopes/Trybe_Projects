function checkWEnd(stringWord, stringEnding) {
  
  let result = false;
  let counter1 = 0;
  let revWord = (stringWord.split('')).reverse();
  let revEnding = (stringEnding.split('')).reverse();

  for (let index = 0; index < stringEnding.length; index += 1) {
    
    if (revWord[index] == revEnding[index]) {   
      counter1 += 1;
    };
    if (counter1 == revEnding.length) {
      result = true;
    }
  }
  return result;
}

console.log(checkWEnd('trybe', 'be'));