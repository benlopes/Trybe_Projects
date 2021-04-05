let num1 = 5;
let sum = 0;

function sumToN(number) {

	for (let index = 1; index <= number; index += 1) {
		
		sum += index;
	}

	return sum;
}

console.log(sumToN(num1));