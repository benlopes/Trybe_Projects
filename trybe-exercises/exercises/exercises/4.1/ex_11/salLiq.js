let salario = 6000;

// calculo do salario-base (INSS)
if (salario <= 1556.94) {
    salarioB = salario * 0.92;
}
else if (salario > 1556.94 && salario <= 2594.92) {
    salarioB = salario * 0.91;
}
else if (salario > 2594.92 && salario <= 5189.82) {
    salarioB = salario * 0.89;
}
else {
    salarioB = salario - 570.88;
}

// desconto do imposto de renda (IR)
if (salarioB <= 1903.98) {
    console.log('Isento(a) de imposto de renda.');
}
else if (salarioB > 1903.98 && salarioB <= 2826.65) {
    salarioB = salarioB - ((salarioB * 0.075) - 142.80);
}
else if (salarioB > 2826.65 && salarioB <= 3751.05) {
    salarioB = salarioB - ((salarioB * 0.15) - 354.80);
}
else if (salarioB > 3751.05 && salarioB <= 4664.68) {
    salarioB = salarioB - ((salarioB * 0.225) - 636.13);
}
else {
    salarioB = salarioB - ((salarioB * 0.275) - 636.13);
}

console.log('Seu salário líquido é: R$', salarioB,'.');