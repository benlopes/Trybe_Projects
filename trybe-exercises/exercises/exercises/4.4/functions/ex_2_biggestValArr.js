//let arrTrybe = [100, 3, 6, 7, 10, 1];

function checkBiggestVal(arrTest) {
  let indexP;
  let bgst = 0;
  for (let index = 0; index < arrTest.length; index += 1) {

    if (arrTest[index] > bgst) {
      bgst = arrTest[index];
      indexP = arrTest.indexOf(arrTest[index]);
    }
  }

  return indexP;
}

//console.log(checkBiggestVal(arrTrybe));