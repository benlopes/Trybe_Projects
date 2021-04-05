// Ex_1. Basic arithmetic op
// add 2 numbers
function sum(num1, num2) {
  sum = num1 + num2;
  return sum;
}

// subtract numbers
function sub(num1, num2) {
  sub = num1 - num2;
  return sub;
}

// multiply 2 numbers
function times(num1, num2) {
  times = num1 * num2;
  return times;
}

// divide numbers
function div(num1, num2) {
  div = num1 / num2;
  return div;
}

// Ex_2. Bigger number
function bigger(num1, num2) {

  let bigger;
  if (num1 > num2) {
    bigger = num1;
  }
  else {
    bigger = num2;
  }
  return bigger;
}

// Ex_3. Bigger number
function biggest(num1, num2, num3) {

  let biggest;
  if (num1 > num2 && num1 > num3) {
    biggest = num1;
  }
  else if (num2 > num1 && num2 > num3) {
    biggest = num2;
  }
  else {
    biggest = num3;
  }
  return biggest;
}

// Ex_4. Check +/-
function checkPN(num) {

  let result;
  if (num > 0) {
    result = 'positive';
  }
  else if (num < 0) {
    result = 'negative';
  }
  else {
    result = 'zero';
  }
  return result;
}

// Ex_5. triAngles
function tri(ang1, ang2, ang3) {

  let result;
  if ((ang1 < 0 || ang1 == 0) || (ang2 < 0 || ang2 == 0) || (ang3 < 0 || ang3 == 0)) {
    result = 'Valor(es) inválido(s).';
  }
  if ((ang1 + ang2 + ang3) == 180) {
    result = 'True';
  }
  else {
    result = 'False';
  }
  return result;
}

// Ex_6. chessPiecesMov
function piecesMov(piece) {

  let result;
  let piece = piece.toLowerCase()

if (piece !== 'king' && piece !== 'queen' && piece !== 'bishop' && piece !== 'rook' && piece !== 'knight' && piece !== 'pawn') {
    result = 'Você não digitou o nome de uma peça ou digitou com algum erro ortográfico.';
}

switch(piece) {
    case 'king':
      result = 'King -> Any direction, one cell';
        break;
    case 'queen':
        result = 'Queen -> Any direction';
        break;
    case 'bishop':
        result = 'Bishop -> Diagonals';
        break;
    case 'rook':
        result = 'Rook -> Straight, left or right';
        break;
    case 'knight':
        result = 'Knight -> L shaped and jump over other pieces if needed';
        break;
    case 'pawn':
        result = 'Pawn -> Straight, one cell';
        break;
}
  return result;
}

// Ex_7. gradesAF
function grade(nota) {

  let result;
  if (nota >= 90 && nota <= 100) {
    result = 'A';
  }
  else if (nota >= 80 && nota < 90) {
    result = 'B';
  }
  else if (nota >= 70 && nota < 80) {
    result = 'C';
  }
  else if (nota >= 60 && nota < 70) {
    result = 'D';
  }
  else if (nota >= 50 && nota < 60) {
    result = 'E';
  }
  else if (nota <= 50 && nota >=0) {
    result = 'F';
      }
  else {
    result = 'Nota inválida.';
  }
  return result;
}

// Ex_8. Check if 1 number is even
function isEven(num1, num2, num3) {

  let isEven;
  if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    isEven = true;
  }
  else {
    isEven = false;
  }
  return isEven;
}

// Ex_9. Check if 1 number is odd
function isOdd(num1, num2, num3) {

  let isOdd;
  if (num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1) {
    isOdd = true;
  }
  else {
    isOdd = false;
  }
  return isOdd;
}

// Ex_10. Profit 1000 sales
function profit(productCost, salesValue) {
  
  if (productCost <= 0 || salesValue <= 0) {
    return 'Invalid values.';
  }

  let numSales = 1000;
  let productCost2 = productCost * numSales;
  let totalCost = productCost2 + (0.2 * productCost2);
  let salesValue2 = salesValue * numSales;
  let profit = salesValue2 - totalCost;

  return profit;
}

// Ex_9. Check if 1 number is odd
function netSal(salary) {

  // base-salary calculation
  if (salary <= 1556.94) {
    bSalary = salary * 0.92;
  }
  else if (salary > 1556.94 && salary <= 2594.92) {
    bSalary = salary * 0.91;
  }
  else if (salary > 2594.92 && salary <= 5189.82) {
    bSalary = salary * 0.89;
  }
  else {
    bSalary = salary - 570.88;
  }

  // IR discount
  if (bSalary <= 1903.98) {
    console.log('Free from Income Tax.');
  }
  else if (bSalary > 1903.98 && bSalary <= 2826.65) {
    bSalary = bSalary - ((bSalary * 0.075) - 142.80);
  }
  else if (bSalary > 2826.65 && bSalary <= 3751.05) {
    bSalary = bSalary - ((bSalary * 0.15) - 354.80);
  }
  else if (bSalary > 3751.05 && bSalary <= 4664.68) {
    bSalary = bSalary - ((bSalary * 0.225) - 636.13);
  }
  else {
    bSalary = bSalary - ((bSalary * 0.275) - 636.13);
  }

  result = 'Your net salary is: R$ ' + bSalary + '.';
  return result
}