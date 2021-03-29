let arrTrybe = [2, 3, 2, 5, 8, 2, 3];
let par1 = 0;
let bgst = 0;
let counter1 = 0;

function checkRepeat(arrTest) {
  
  arrTest = arrTrybe.sort();
  
  for (let index1 = 0; index1 < arrTest.length; index1 += 1) {
    
    par1 = 0;
    
    for (let index2 = 0; index2 < arrTest.length; index2 += 1) {
      if (arrTest[index1] == arrTest[index2]) {
        par1 += 1;     
      }
      if (counter1 < par1) {
        bgst = arrTest[index1];
        counter1 = par1;
      }
    }
  }
  return bgst;
}

console.log(checkRepeat(arrTrybe));