let num = 1777;
let isPrime = false;
let divCounter = 0;

for(let index = 1; index <= num; index += 1) {

  if (num % index == 0) {
    divCounter += 1;
  }
}
  if (divCounter == 2) {
    isPrime = true;
}

console.log(isPrime);

