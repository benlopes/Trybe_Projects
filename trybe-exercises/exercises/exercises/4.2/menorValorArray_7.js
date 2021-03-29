let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let aux;

let numbers2 = numbers;

let lowestAux = numbers[0];


for (let i = 0; i < numbers.length; i += 1) {

    for (let j = 0; j < numbers2.length; j += 1) {

        if (numbers[i] < numbers2[j]) {

            aux = numbers[i];
            
        }
        else {
            
            aux = numbers2[j];
        }
        
        if (aux < lowestAux) {
            
            lowestAux = aux;
                
        }
    }

}

console.log(lowestAux);

