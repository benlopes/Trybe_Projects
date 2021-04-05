//let arrTrybe = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function checkBiggestName(arrTest) {
  
  let bgst = '';
  for (let index = 0; index < arrTest.length; index += 1) {

    if (arrTest[index].length > bgst.length) {
      bgst = arrTest[index];
    }
  }
  return bgst;
}

//console.log(checkBiggestName(arrTrybe));