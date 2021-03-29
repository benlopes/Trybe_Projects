//let arrTrybe = [2, 4, 6, 7, 10, 0, -3];

function checkLowestVal(arrTest) {
  let indexP;
  let lwst = arrTest[0];
  for (let index = 0; index < arrTest.length; index += 1) {

    if (arrTest[index] < lwst) {
      lwst = arrTest[index];
      indexP = arrTest.indexOf(arrTest[index]);
    }
  }

  return indexP;
}

//console.log(checkLowestVal(arrTrybe));