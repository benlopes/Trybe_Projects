let numbers = [2, 4, 6, 8, 10];

let count = 0;

for (let i = 0; i < numbers.length; i += 1) {

    if (numbers[i] % 2 == 1) {
        count += 1;
    }
}

if (count > 0) {
    console.log(count);
}
else {

    console.log('nenhum valor ímpar encontrado');
}

