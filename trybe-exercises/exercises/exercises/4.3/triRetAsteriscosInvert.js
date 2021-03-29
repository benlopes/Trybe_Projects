let triBase = 5;
let baseArray = [];

for(let index2 = 0; index2 < triBase; index2 += 1) {
  
  baseArray.push(' ');
}

for(let index = baseArray.length-1; index >= 0; index -= 1) {

  baseArray[index] = '*';

  console.log(baseArray.join(""));

}



